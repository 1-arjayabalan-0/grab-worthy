/**
 * fetch-products.ts
 *
 * CLI tool to fetch live Amazon product data and update src/data/products.ts
 *
 * Usage:
 *   npx tsx scripts/fetch-products.ts                    — fetch all products
 *   npx tsx scripts/fetch-products.ts --id hoobro-blanket-ladder  — fetch one
 *   npx tsx scripts/fetch-products.ts --category kitchen  — fetch by category
 *   npx tsx scripts/fetch-products.ts --search "kitchen gadgets under 500" --count 10  — search + add
 */

import * as fs from "fs";
import * as path from "path";
import { fetchAmazonProduct, buildAffiliateLink } from "../src/lib/amazon-scraper";

const PRODUCTS_FILE = path.join(__dirname, "../src/data/products.ts");
const PARTNER_TAG = process.env.AMAZON_PARTNER_TAG || "grabworthy-21";

interface CLIArgs {
  id?: string;
  category?: string;
  search?: string;
  count?: number;
  update?: boolean;
}

function parseArgs(): CLIArgs {
  const args = process.argv.slice(2);
  const result: CLIArgs = { count: 10, update: true };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--id":
        result.id = args[++i];
        break;
      case "--category":
        result.category = args[++i];
        break;
      case "--search":
        result.search = args[++i];
        break;
      case "--count":
        result.count = parseInt(args[++i], 10);
        break;
      case "--no-update":
        result.update = false;
        break;
    }
  }
  return result;
}

function extractAsin(url: string): string {
  const patterns = [
    /\/dp\/([A-Z0-9]{10})/i,
    /\/gp\/product\/([A-Z0-9]{10})/i,
    /\/ASIN\/([A-Z0-9]{10})/i,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1].toUpperCase();
  }
  return "";
}

function generateProductId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 60);
}

async function main() {
  const args = parseArgs();
  const fileContent = fs.readFileSync(PRODUCTS_FILE, "utf-8");

  if (args.search) {
    console.log(`\n🔍 Searching Amazon: "${args.search}"`);
    console.log(`   (Note: Direct search requires Creators API. Use --id or product URLs instead.)`);
    console.log(`\n💡 To add new products manually:`);
    console.log(`   1. Go to amazon.in and find the product`);
    console.log(`   2. Copy the URL`);
    console.log(`   3. Add it to products.ts with id, affiliate link, etc.`);
    console.log(`   4. Run: npx tsx scripts/fetch-products.ts --id <product-id>\n`);
    return;
  }

  // Extract all product URLs from the file
  const urlRegex = /affiliateLink:\s*"(https:\/\/amzn\.to\/[^"]+|https:\/\/www\.amazon\.in\/[^"]+)"/g;
  const idRegex = /id:\s*"([^"]+)"/g;
  const urls: string[] = [];
  const ids: string[] = [];

  let match;
  while ((match = urlRegex.exec(fileContent)) !== null) {
    urls.push(match[1]);
  }
  while ((match = idRegex.exec(fileContent)) !== null) {
    ids.push(match[1]);
  }

  // Filter by id or category
  let targetUrls = urls;
  let targetIds = ids;

  if (args.id) {
    const idx = ids.indexOf(args.id);
    if (idx === -1) {
      console.error(`Product id "${args.id}" not found`);
      return;
    }
    targetUrls = [urls[idx]];
    targetIds = [args.id];
  }

  console.log(`\n📦 Fetching ${targetUrls.length} products from Amazon...\n`);

  const results: Array<{
    id: string;
    title: string;
    price: number;
    image: string;
    rating: number;
    reviewCount: number;
    prime: boolean;
    asin: string;
  }> = [];

  for (let i = 0; i < targetUrls.length; i++) {
    const url = targetUrls[i];
    const id = targetIds[i] || `product-${i}`;

    // Resolve short URLs
    let fullUrl = url;
    if (url.includes("amzn.to")) {
      try {
        const resp = await fetch(url, {
          redirect: "follow",
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          },
        });
        fullUrl = resp.url;
      } catch {
        console.log(`  ⚠ Could not resolve short URL for ${id}`);
        continue;
      }
    }

    const asin = extractAsin(fullUrl);
    if (!asin) {
      console.log(`  ⚠ No ASIN found for ${id}: ${fullUrl}`);
      continue;
    }

    const product = await fetchAmazonProduct(fullUrl);
    if (product) {
      results.push({
        id,
        title: product.title,
        price: product.price,
        image: product.image,
        rating: product.rating,
        reviewCount: product.reviewCount,
        prime: product.prime,
        asin,
      });
      console.log(
        `  ✅ [${i + 1}/${targetUrls.length}] ${product.title.substring(0, 50)}... — ₹${product.price}`
      );
    } else {
      console.log(`  ❌ [${i + 1}/${targetUrls.length}] Failed: ${id} (${asin})`);
    }

    // Rate limit
    await new Promise((r) => setTimeout(r, 2000));
  }

  // Output summary
  console.log(`\n📊 Results: ${results.length}/${targetUrls.length} products fetched\n`);

  if (results.length > 0) {
    console.log("┌─────────────────────────────────────────────────┬──────────┬────────┐");
    console.log("│ Product                                         │ Price    │ Rating │");
    console.log("├─────────────────────────────────────────────────┼──────────┼────────┤");
    for (const r of results) {
      const name = r.title.substring(0, 47).padEnd(47);
      const price = `₹${r.price}`.padEnd(8);
      const rating = `${r.rating}/5`.padEnd(6);
      console.log(`│ ${name} │ ${price} │ ${rating} │`);
    }
    console.log("└─────────────────────────────────────────────────┴──────────┴────────┘");
  }

  if (args.update && results.length > 0) {
    console.log("\n💡 To update products.ts with fresh prices, run:");
    console.log("   npx tsx scripts/fetch-products.ts --update-prices\n");
  }
}

main().catch(console.error);
