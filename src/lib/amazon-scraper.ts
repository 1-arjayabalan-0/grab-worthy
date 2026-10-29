import * as cheerio from "cheerio";

export interface AmazonProduct {
  asin: string;
  title: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
  reviewCount: number;
  url: string;
  prime: boolean;
  inStock: boolean;
}

function extractAsin(url: string): string {
  const patterns = [
    /\/dp\/([A-Z0-9]{10})/i,
    /\/gp\/product\/([A-Z0-9]{10})/i,
    /\/ASIN\/([A-Z0-9]{10})/i,
    /\/product\/([A-Z0-9]{10})/i,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1].toUpperCase();
  }
  return "";
}

function cleanPrice(text: string): number {
  const cleaned = text.replace(/[^\d.]/g, "");
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}

export async function fetchAmazonProduct(
  url: string
): Promise<AmazonProduct | null> {
  try {
    const asin = extractAsin(url);
    if (!asin) {
      console.error(`Could not extract ASIN from: ${url}`);
      return null;
    }

    const cleanUrl = `https://www.amazon.in/dp/${asin}`;
    const response = await fetch(cleanUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
      },
    });

    if (!response.ok) {
      console.error(`HTTP ${response.status} for ASIN: ${asin}`);
      return null;
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Title
    const title =
      $("#productTitle").text().trim() ||
      $("#title").text().trim() ||
      "";

    // Price
    const priceWhole = $(".a-price-whole").first().text().trim();
    const priceFraction = $(".a-price-fraction").first().text().trim();
    let price = 0;
    if (priceWhole) {
      price = cleanPrice(priceWhole + (priceFraction || ""));
    }
    // Fallback: try other price selectors
    if (price === 0) {
      const altPrice = $("#priceblock_ourprice, #priceblock_dealprice, .a-price .a-offscreen").first().text();
      price = cleanPrice(altPrice);
    }

    // Currency
    const currency =
      $(".a-price .a-price-symbol").first().text().trim() || "₹";

    // Image
    const image =
      $("#landingImage").attr("src") ||
      $("#imgBlkFront").attr("src") ||
      $("#main-image").attr("src") ||
      "";

    // Rating
    const ratingText = $("#acrPopover .a-icon-alt").first().text();
    const ratingMatch = ratingText.match(/([\d.]+)\s*out/);
    const rating = ratingMatch ? parseFloat(ratingMatch[1]) : 0;

    // Review count
    const reviewCountText = $("#acrCustomerReviewCount").text().trim();
    const reviewCount = cleanPrice(reviewCountText);

    // Prime
    const prime = !!$("#primeBadge_feature_div, .a-icon-prime").length;

    // In stock
    const inStock =
      !$("#outOfStock").length ||
      !!$("#add-to-cart-button").length;

    return {
      asin,
      title,
      price,
      currency,
      image,
      rating,
      reviewCount,
      url: `https://www.amazon.in/dp/${asin}`,
      prime,
      inStock,
    };
  } catch (error) {
    console.error(`Error fetching product: ${error}`);
    return null;
  }
}

export async function fetchMultipleProducts(
  urls: string[]
): Promise<Map<string, AmazonProduct>> {
  const results = new Map<string, AmazonProduct>();

  for (const url of urls) {
    const asin = extractAsin(url);
    if (!asin) continue;

    const product = await fetchAmazonProduct(url);
    if (product) {
      results.set(asin, product);
      console.log(`✓ ${product.title.substring(0, 60)}... — ₹${product.price}`);
    } else {
      console.log(`✗ Failed: ${asin}`);
    }

    // Rate limit: 1 request per second
    await new Promise((r) => setTimeout(r, 1500));
  }

  return results;
}

export function buildAffiliateLink(
  asin: string,
  partnerTag: string
): string {
  return `https://www.amazon.in/dp/${asin}?tag=${partnerTag}`;
}
