export type Product = {
  id: string;
  productName: string;
  image: string;
  shortDescription: string;
  whyPeopleLoveIt: string;
  benefits: string[];
  affiliateLink: string;
  editorPick: boolean;
  budgetPick: boolean;
  category: string;
  priceHint?: string;
};

const placeholderLink = "https://www.amazon.com/dp/PLACEHOLDER";

export const products: Product[] = [
  // ---------------------- HOME DECOR ----------------------
  {
    id: "hoobro-blanket-ladder",
    productName: "HOOBRO 5-Tier Blanket Ladder",
    image: "/images/articles/home-decor-2/hoobro-blanket-ladder.jpg",
    shortDescription:
      "5-tier wall-leaning towel rack with 4 removable hooks for blankets, towels, scarves, and clothes. Rustic brown and black finish.",
    whyPeopleLoveIt:
      "A space-saving wall-leaning design that adds rustic charm while providing ample storage for blankets, towels, and decorative items.",
    benefits: [
      "5-tier design with 4 removable hooks",
      "Sturdy engineered wood and metal construction",
      "Rustic brown and black finish",
      "Anti-tip kit included for safety",
      "Fits living rooms, bedrooms, and bathrooms",
    ],
    affiliateLink: "https://amzn.to/4cYjrUn",
    editorPick: true,
    budgetPick: false,
    category: "home-decor",
    priceHint: "Premium Pick, Under ₹12,000",
  },
  {
    id: "outnili-wall-mount-organizer",
    productName: "OUTNILI Wall Mount Tool Organizer",
    image: "/images/articles/home-decor-2/outnili-wall-mount-organizer.jpg",
    shortDescription:
      "Wall-mounted organizer with 4 rubber roller clips and 4 hooks for mops, brooms, and cleaning tools. Rustic wood and metal design.",
    whyPeopleLoveIt:
      "Keeps cleaning tools organized and off the floor while adding a touch of rustic charm to your garage, laundry room, or kitchen.",
    benefits: [
      "4 adjustable rubber roller clips",
      "4 utility hooks included",
      "Rustic wood and metal design",
      "Easy wall-mount installation",
      "Fits garage, laundry room, closet, kitchen",
    ],
    affiliateLink: "https://amzn.to/3QC03VV",
    editorPick: false,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Best Pick, Under ₹5,500",
  },
  {
    id: "olanly-chenille-bath-rug",
    productName: "OLANLY Soft Chenille Bath Rug",
    image: "/images/articles/home-decor-2/olanly-chenille-bath-rug.jpg",
    shortDescription:
      "Extra soft and absorbent chenille bath rug with quick-dry rubber backing. Machine washable and OEKO-TEX certified.",
    whyPeopleLoveIt:
      "Ultra-soft chenille material wraps your feet in cozy comfort while keeping your bathroom floor dry and protected.",
    benefits: [
      "Ultra-soft chenille material",
      "Quick-dry rubber backing",
      "Machine washable and fade-resistant",
      "OEKO-TEX STANDARD 100 certified",
      "Perfect for bathroom floor, tub, or shower",
    ],
    affiliateLink: "https://amzn.to/3OZjHKL",
    editorPick: true,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Best Value, Under ₹5,600",
  },
  {
    id: "yikbik-rgb-floor-lamp",
    productName: "YIKBIK RGB Floor Lamp with Bluetooth App & Remote",
    image: "/images/articles/home-decor-2/yikbik-rgb-floor-lamp.jpg",
    shortDescription:
      "Smart RGB floor lamp with 16 million colors, Bluetooth app & 65 inch remote control. Music sync and timer function for living room and bedroom.",
    whyPeopleLoveIt:
      "Create stunning ambient lighting with 300+ modes and music sync that dances with your favorite tunes. Perfect for gaming rooms, movie nights, and parties.",
    benefits: [
      "16 million colors with RGB+IC technology",
      "96 LED beads with low power consumption",
      "Bluetooth app & remote control (5-30m range)",
      "Music sync mode - lights dance with rhythm",
      "Timer function for automatic on/off",
      "Height adjustable - 65 inches with 4 detachable segments",
      "Aluminum alloy shell for durability",
      "90-day return policy",
    ],
    affiliateLink: "https://amzn.to/3QBNj1w",
    editorPick: true,
    budgetPick: true,
    category: "home-decor",
    priceHint: "under ₹2,000",
  },
  {
    id: "floating-shelves-set",
    productName: "Set of 3 Wall Mounted Floating Shelves",
    image: "/images/articles/home-decor/Set-of-3-Wall-Mounted-Floating-Shelves.jpg",
    shortDescription:
      "White wooden display shelves with brown vertical back panel. Modern minimalist wall décor for living room, bedroom & office.",
    whyPeopleLoveIt:
      "These floating shelves instantly add storage and style to any wall. The warm wood tone pairs beautifully with neutral palettes.",
    benefits: [
      "Modern minimalist design",
      "Easy wall-mounted installation",
      "Perfect for living room, bedroom or office",
      "Engineered wood construction",
    ],
    affiliateLink: "https://amzn.to/4t5XusC",
    editorPick: true,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Under ₹400",
  },
  {
    id: "hanging-rope-shelf",
    productName: "UHUD CRAFTS Hanging Shelves",
    image: "/images/articles/home-decor/UHUD-CRAFTS-Hanging-Shelves.jpg",
    shortDescription:
      "Adjustable rope hanging shelf with premium wooden construction. Perfect wall hanging decor for bedroom and living room.",
    whyPeopleLoveIt:
      "The rope hanging design adds a bohemian touch while being lightweight and easy to install. Perfect for plants or books.",
    benefits: [
      "Adjustable rope design",
      "Premium wooden shelf",
      "Lightweight construction",
      "Great for bedroom or living room",
    ],
    affiliateLink: "https://amzn.to/4t3PMyY",
    editorPick: false,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Under ₹300",
  },
  {
    id: "hexagon-wall-stickers",
    productName: "Bikri Kendra Hexagon Golden Stickers",
    image: "/images/articles/home-decor/Bikri-Kendra-Hexagon-Golden-Stickers.jpg",
    shortDescription:
      "Hexagon 20 golden stickers for wall. Acrylic mirror stickers in hexagonal pattern for instant wall transformation.",
    whyPeopleLoveIt:
      "These golden hexagon stickers add an instant glam touch to any room. Easy to apply and create a stunning wall feature.",
    benefits: [
      "20 pieces per pack",
      "Golden acrylic mirror finish",
      "Easy self-adhesive application",
      "Creates stunning wall patterns",
    ],
    affiliateLink: "https://amzn.to/4eeELHB",
    editorPick: false,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Below ₹300",
  },
  {
    id: "golden-wall-clock",
    productName: "Wall Clock with Golden Easy Visible Hands",
    image: "/images/articles/home-decor/Wall-Clock-with-Golden-Easy-Visible-Hands.jpg",
    shortDescription:
      "DIY 3D Acrylic frameless analog wall clock with adjustable sizes (30cm - 60cm). Modern design for living room, bedroom.",
    whyPeopleLoveIt:
      "This frameless wall clock adds a modern touch to any room. The golden hands are easy to read and the acrylic finish looks premium.",
    benefits: [
      "DIY 3D acrylic construction",
      "Frameless modern design",
      "Adjustable sizes 30-60cm",
      "Perfect for living room or bedroom",
    ],
    affiliateLink: "https://amzn.to/3QWlrFj",
    editorPick: true,
    budgetPick: false,
    category: "home-decor",
    priceHint: "Under ₹400",
  },
  {
    id: "macrame-wall-hanging",
    productName: "Kaahira Polycotton Macrame Boho Wall Hanging",
    image: "/images/articles/home-decor/Kaahira-Polycotton-Macrame-Boho-Wall-Hanging.jpg",
    shortDescription:
      "Handmade bohemian decor art for bedroom, living room, office. Unique gifting item in off-white, 70 centimeters.",
    whyPeopleLoveIt:
      "This handmade macrame wall hanging adds texture and warmth to any space. The bohemian design works with various decor styles.",
    benefits: [
      "Handmade polycotton construction",
      "Bohemian design",
      "70cm size - perfect for bedrooms",
      "Unique gifting option",
    ],
    affiliateLink: "https://amzn.to/42DB2w5",
    editorPick: true,
    budgetPick: false,
    category: "home-decor",
    priceHint: "Under ₹700",
  },
  {
    id: "sehaz-artworks-stylish-wall-decor",
    productName: "Sehaz Artworks Home Decoration Items Stylish",
    image: "/images/articles/kitchen-decor-1/sehaz-artworks-stylish-wall-decor.jpg",
    shortDescription:
      "Stylish wall hanging decoration for living room and kitchen. Premium finish with modern design.",
    whyPeopleLoveIt:
      "This stylish wall decor piece transforms any blank wall into a stunning focal point. The modern design works beautifully in both living rooms and kitchens.",
    benefits: [
      "Modern stylish design",
      "Perfect for living room and kitchen",
      "Easy wall mounting",
      "Premium quality finish",
      "Adds character to any space",
    ],
    affiliateLink: "https://amzn.to/4dlYAM4",
    editorPick: true,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Under ₹300",
  },
  {
    id: "sehaz-wall-hanging-decoration",
    productName: "Sehaz Artworks Wall Hanging Decoration",
    image: "/images/articles/kitchen-decor-1/sehaz-wall-hanging-decoration.jpg",
    shortDescription:
      "Elegant wall hanging for home decoration. Rustic finish perfect for living room and kitchen.",
    whyPeopleLoveIt:
      "This wall hanging brings a touch of elegance to any room. The rustic finish adds warmth and character to your living space.",
    benefits: [
      "Elegant rustic design",
      "Versatile for multiple rooms",
      "Lightweight and easy to hang",
      "Quality construction",
      "Great value for money",
    ],
    affiliateLink: "https://amzn.to/4dloVKg",
    editorPick: false,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Under ₹200",
  },
  {
    id: "funny-kitchen-hindi-quote",
    productName: "Funny Kitchen Wall Hanging Hindi Quote",
    image: "/images/articles/kitchen-decor-1/funny-kitchen-hindi-quote.jpg",
    shortDescription:
      "Wooden wall décor with quirky Hindi quote. Perfect for Indian homes and desi kitchen decoration.",
    whyPeopleLoveIt:
      "Add some desi charm to your kitchen with this witty Hindi quote wall art. It's the perfect blend of humor and tradition that makes any Indian home feel more personal.",
    benefits: [
      "Quirky Hindi quote",
      "Wooden construction",
      "Perfect for Indian kitchens",
      "Unique gifting option",
      "Adds personality to walls",
    ],
    affiliateLink: "https://amzn.to/48BxNJ0",
    editorPick: true,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Under ₹200",
  },
  {
    id: "oxmic-wood-display-riser",
    productName: "OXMIC Wood Display Riser Stand",
    image: "/images/articles/kitchen-decor-1/oxmic-wood-display-riser.jpg",
    shortDescription:
      "Wooden display riser shelf for kitchen counter. 2-tier countertop shelf for spices, makeup, and decor.",
    whyPeopleLoveIt:
      "This wooden display riser is more than just wall decor — it's a versatile counter organizer that doubles your display space while adding warmth to your kitchen.",
    benefits: [
      "2-tier design maximizes space",
      "Versatile for kitchen or vanity",
      "Beautiful brown wood finish",
      "Sturdy construction",
      "Great for displaying items",
    ],
    affiliateLink: "https://amzn.to/4u6vVAV",
    editorPick: false,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Under ₹200",
  },
  {
    id: "artvibes-mummy-ka-dhaba-wall-art",
    productName: "Artvibes Mummy Ka Dhaba Printed Wooden Wall Art",
    image: "/images/articles/kitchen-decor-1/artvibes-mummy-ka-dhaba-wall-art.jpg",
    shortDescription:
      "Printed wooden wall art for cafe, kitchen, restaurants. Modern artwork with kitchen quotes.",
    whyPeopleLoveIt:
      "This quirky Mummy Ka Dhaba wall art brings instant character to any kitchen or dining space. It's the kind of conversation piece that makes visitors smile.",
    benefits: [
      "Fun kitchen-themed design",
      "Perfect for cafes and restaurants",
      "High-quality wooden print",
      "Modern artwork aesthetic",
      "Unique gift item",
    ],
    affiliateLink: "https://amzn.to/4cNn7cU",
    editorPick: false,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Under ₹200",
  },
  // ---------------------- MAKEUP ORGANIZERS ----------------------
  {
    id: "jialto-rotating-makeup-organizer",
    productName: "360° Rotating Makeup Organizer for Dressing Table",
    image: "/images/articles/organizers-1/jialto-rotating-makeup-organizer.jpg",
    shortDescription:
      "2-layer rotating makeup organizer with drawers for dressing table, cosmetic and skincare storage. Mint green finish.",
    whyPeopleLoveIt:
      "The 360° rotating design lets you access every product with a spin. Perfect for keeping makeup and skincare organized and within reach on your dressing table.",
    benefits: [
      "360° rotating base for easy access",
      "2-layer design with drawers",
      "Perfect for eyeshadow palettes, lipsticks, mascaras",
      "Sturdy construction with mint green finish",
      "Ideal for dressing table or vanity",
    ],
    affiliateLink: "https://amzn.to/48Dau1y",
    editorPick: true,
    budgetPick: false,
    category: "home-decor",
    priceHint: "Premium Pick, Under ₹600",
  },
  {
    id: "jialto-bathroom-organizer-no-drill",
    productName: "JIALTO Bathroom Organizer Without Drill",
    image: "/images/articles/organizers-1/jialto-bathroom-organizer-no-drill.jpg",
    shortDescription:
      "Wall-mounted bathroom organizer with corner and soap holder. No drilling required - adhesive mounting. Black finish.",
    whyPeopleLoveIt:
      "Keep your bathroom organized without damaging walls. The adhesive mounting system holds securely while keeping essentials within reach.",
    benefits: [
      "No drilling required - adhesive mounting",
      "Includes corner and soap holder",
      "Suitable for various smooth surfaces",
      "Black finish adds sleek look",
      "Perfect for bathrooms and kitchens",
    ],
    affiliateLink: "https://amzn.to/4tNBeoz",
    editorPick: false,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Best Value, Under ₹550",
  },
  {
    id: "zuku-storage-box-basket-4pcs",
    productName: "Zuku Storage Box Basket 4Pcs",
    image: "/images/articles/organizers-1/zuku-storage-box-basket-4pcs.jpg",
    shortDescription:
      "Plastic storage box basket for bathroom, toys, cosmetics, and accessories. White finish. Set of 4 pieces.",
    whyPeopleLoveIt:
      "Versatile storage baskets that work anywhere - bathroom, bedroom, or kitchen. The set of 4 lets you organize multiple areas efficiently.",
    benefits: [
      "Set of 4 pieces",
      "Versatile for various rooms",
      "Stackable design",
      "Lightweight yet sturdy",
      "Great for toys, cosmetics, accessories",
    ],
    affiliateLink: "https://amzn.to/3OIyGJc",
    editorPick: false,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Budget Pick, Under ₹250",
  },
  {
    id: "misamo-aluminium-bathroom-shelf",
    productName: "Misamo Enterprise 2 Pcs Aluminium Bathroom Wall Shelf",
    image: "/images/articles/organizers-1/misamo-aluminium-bathroom-shelf.jpg",
    shortDescription:
      "30cm adhesive wall-mounted storage rack with installation kit. Black finish. Waterproof design.",
    whyPeopleLoveIt:
      "A sleek, waterproof wall shelf that mounts easily without tools. The adhesive backing holds securely on smooth surfaces.",
    benefits: [
      "30cm width - perfect for small spaces",
      "Adhesive mounting - no tools needed",
      "Waterproof construction",
      "Includes installation kit",
      "Suitable for bathroom or kitchen",
    ],
    affiliateLink: "https://amzn.to/4tQASO3",
    editorPick: false,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Under ₹550",
  },
  // ---------------------- BEDROOM DECOR ACCESSORIES ----------------------
  {
    id: "homesake-signature-rustic-table-lamp",
    productName: "Homesake Signature Rustic Table Lamp with Jute Drum Shade",
    image: "/images/articles/bathroom-decor-organizer-1/homesake-signature-rustic-table-lamp.jpg",
    shortDescription:
      "Rustic table lamp with rope distress blue finish and jute drum shade. Perfect for farmhouse bedrooms and home offices.",
    whyPeopleLoveIt:
      "This rustic lamp brings warmth and coziness to any bedroom. The jute drum shade diffuses light beautifully, creating a soft glow perfect for winding down.",
    benefits: [
      "Rope distress blue finish adds rustic charm",
      "Jute drum shade provides warm, diffused light",
      "Perfect for bedside tables or nightstands",
      "Suitable for living rooms and home offices",
      "Creates a cozy, relaxing atmosphere",
    ],
    affiliateLink: "https://amzn.to/42fvuI2",
    editorPick: true,
    budgetPick: false,
    category: "home-decor",
    priceHint: "Premium Pick, Under ₹1,400",
  },
  {
    id: "artvibes-cute-couple-wall-hanging",
    productName: "Artvibes Cute Couple Wooden Wall Hanging",
    image: "/images/articles/bathroom-decor-organizer-1/artvibes-cute-couple-wall-hanging.jpg",
    shortDescription:
      "Adorable wooden wall hanging with cute couple design and heart-shaped frames. Perfect Valentine's gift or decorative piece.",
    whyPeopleLoveIt:
      "This whimsical wall hanging adds a playful, romantic touch to any bedroom. The wooden construction gives it a handcrafted feel that stands out.",
    benefits: [
      "Cute couple design with heart frames",
      "Wooden construction with geometric patterns",
      "Perfect for bedrooms, living rooms, or nurseries",
      "Great as a Valentine's gift for partners",
      "Adds personality and charm to walls",
    ],
    affiliateLink: "https://amzn.to/4dkVbx5",
    editorPick: false,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Under ₹200",
  },
  {
    id: "zig-zag-floating-corner-shelf",
    productName: "Zig Zag Engineered Wood Floating Corner Rack Shelves",
    image: "/images/articles/bathroom-decor-organizer-1/zig-zag-floating-corner-shelf.jpg",
    shortDescription:
      "Set of floating corner shelves in engineered wood. Available in multiple colors. Perfect for living rooms and bedrooms.",
    whyPeopleLoveIt:
      "These corner shelves make brilliant use of often-wasted corner space. The zig-zag design adds visual interest while providing practical storage.",
    benefits: [
      "Engineered wood construction",
      "Set of multiple shelves",
      "Fits nicely in corners",
      "Available in multiple colors",
      "Great for small spaces",
    ],
    affiliateLink: "https://amzn.to/4w3kzig",
    editorPick: false,
    budgetPick: true,
    category: "home-decor",
    priceHint: "Under ₹900",
  },
  {
    id: "aakriti-handcrafted-geometric-lamp",
    productName: "AAKRITI ART CREATIONS Handcrafted Wooden Table Lamp",
    image: "/images/articles/bathroom-decor-organizer-1/aakriti-handcrafted-geometric-lamp.jpg",
    shortDescription:
      "Handcrafted wooden table lamp with geometric tribal design and rattan shade. Perfect for living rooms and bedside tables.",
    whyPeopleLoveIt:
      "This handcrafted lamp is a statement piece that brings bohemian charm to any room. The geometric tribal design is unique and eye-catching.",
    benefits: [
      "Handcrafted wooden construction",
      "Geometric tribal design",
      "Rattan shade adds texture",
      "Perfect for bohemian or eclectic decor",
      "Works well as bedside or accent lamp",
    ],
    affiliateLink: "https://amzn.to/4dkoAHE",
    editorPick: true,
    budgetPick: false,
    category: "home-decor",
    priceHint: "Premium Pick, Under ₹2,800",
  },
  // {
  //   id: "ribbed-glass-vase",
  //   productName: "Ribbed Amber Glass Bud Vase Set (3-Pack)",
  //   image: "/images/articles/home-decor/ribbed-glass-vase.png",
  //   shortDescription:
  //     "A trio of softly ribbed amber bud vases that catch the light from any angle.",
  //   whyPeopleLoveIt:
  //     "These look like something pulled out of a Brooklyn apothecary, but the price feels almost like a typo. Buyers say they finally make a coffee table feel finished.",
  //   benefits: [
  //     "Glows beautifully in afternoon light",
  //     "Warm amber tone pairs with neutral palettes",
  //     "Perfect height for single stems or dried grasses",
  //     "Sells out in spring — grab early",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: true,
  //   category: "home-decor",
  //   priceHint: "Under $20",
  // },
  // {
  //   id: "linen-throw-blanket",
  //   productName: "Stonewashed Linen Throw Blanket",
  //   image: "/images/products/linen-throw-blanket.png",
  //   shortDescription:
  //     "A heavyweight, pre-washed linen throw with a soft drape and tasseled edge.",
  //   whyPeopleLoveIt:
  //     "It's the throw that lives on the back of your sofa year-round — not too warm, never scratchy, and only gets softer with washing.",
  //   benefits: [
  //     "100% pre-washed European linen",
  //     "Generous size — actually covers two people",
  //     "Comes in muted, livable colors",
  //     "Machine washable, gets softer over time",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "home-decor",
  //   priceHint: "$45",
  // },
  // {
  //   id: "ceramic-table-lamp",
  //   productName: "Sculptural Ceramic Table Lamp with Linen Shade",
  //   image: "/images/products/ceramic-table-lamp.png",
  //   shortDescription:
  //     "A hand-finished ceramic base in a soft, organic shape with a warm linen shade.",
  //   whyPeopleLoveIt:
  //     "Looks like it came from a curated boutique. The warm bulb glow is what makes any side table feel like a styled magazine corner.",
  //   benefits: [
  //     "Hand-finished matte ceramic base",
  //     "Linen shade casts a soft, warm glow",
  //     "Three-way switch for mood lighting",
  //     "Bedside or living room friendly",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: false,
  //   category: "home-decor",
  //   priceHint: "$78",
  // },
  // {
  //   id: "wooden-coaster-set",
  //   productName: "Travertine Stone Coaster Set",
  //   image: "/images/products/wooden-coaster-set.png",
  //   shortDescription:
  //     "Heavy travertine coasters with raw, natural edges that read like tiny sculptures.",
  //   whyPeopleLoveIt:
  //     "These coasters are the small detail that makes guests notice your coffee table. Cool to the touch, stay put, and only get more beautiful over time.",
  //   benefits: [
  //     "Real travertine stone",
  //     "Naturally porous to absorb condensation",
  //     "Heavy enough to stay in place",
  //     "Set of four with cork base",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "home-decor",
  //   priceHint: "$24",
  // },
  // {
  //   id: "abstract-art-print",
  //   productName: "Framed Abstract Line Art Print",
  //   image: "/images/products/abstract-art-print.png",
  //   shortDescription:
  //     "A muted, gallery-style abstract print in a clean wood frame, ready to hang.",
  //   whyPeopleLoveIt:
  //     "Filling a blank wall is hard and expensive. This is the rare Amazon art print that doesn't read 'Amazon art print.'",
  //   benefits: [
  //     "Comes pre-framed — no extra trip to a frame shop",
  //     "Soft, neutral palette goes with everything",
  //     "Multiple size options",
  //     "Glass front, sturdy hanging hardware included",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "home-decor",
  //   priceHint: "$58",
  // },
  // {
  //   id: "woven-floor-basket",
  //   productName: "Woven Seagrass Floor Basket with Handles",
  //   image: "/images/products/woven-floor-basket.png",
  //   shortDescription:
  //     "A tall, hand-woven floor basket that doubles as storage and a styling piece.",
  //   whyPeopleLoveIt:
  //     "Hides throws, magazines, and the chaos of daily life while looking like an intentional design choice next to a sofa.",
  //   benefits: [
  //     "Hand-woven natural seagrass",
  //     "Sturdy enough for blankets, magazines, or a tall plant",
  //     "Generous size — about 18 inches tall",
  //     "Folds flat for storage when empty",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "home-decor",
  //   priceHint: "$39",
  // },
  // {
  //   id: "pleated-curtains",
  //   productName: "Pinch-Pleat Linen Blend Curtains",
  //   image: "/images/products/pleated-curtains.png",
  //   shortDescription:
  //     "Heavy linen-blend curtains with proper pinch pleats — the kind that hang correctly.",
  //   whyPeopleLoveIt:
  //     "Most affordable curtains hang like a sad bedsheet. These are heavy enough to drape, with real pleats sewn in. They genuinely change a room.",
  //   benefits: [
  //     "Real pinch-pleat construction",
  //     "Linen-blend weight drapes properly",
  //     "Sold per panel, multiple lengths",
  //     "Hardware-ready, no extra clips",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "home-decor",
  //   priceHint: "$48 / panel",
  // },
  // ---------------------- KITCHEN ----------------------
  // {
  //   id: "wood-cutting-board",
  //   productName: "Acacia End-Grain Cutting Board",
  //   image: "/images/products/wood-cutting-board.png",
  //   shortDescription:
  //     "A heavy, end-grain acacia board with a built-in juice groove and side handles.",
  //   whyPeopleLoveIt:
  //     "This is the board that lives on the counter, not in a drawer. Heavy, beautiful, and gentle on knife edges — it doubles as a serving piece.",
  //   benefits: [
  //     "End-grain construction is gentle on knives",
  //     "Heavy enough not to slide",
  //     "Juice groove on one side, flat on the other",
  //     "Doubles as a charcuterie board for guests",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "kitchen",
  //   priceHint: "$48",
  // },
  // {
  //   id: "fish-spatula",
  //   productName: "Slotted Stainless Fish Spatula",
  //   image: "/images/products/fish-spatula.png",
  //   shortDescription:
  //     "A thin, flexible slotted spatula chefs reach for more than any other tool.",
  //   whyPeopleLoveIt:
  //     "Once you cook with one, every other spatula feels clumsy. Slides cleanly under eggs, fish, cookies — anything delicate.",
  //   benefits: [
  //     "Thin, flexible blade",
  //     "Slotted to drain oil",
  //     "Wood-handle versions feel premium",
  //     "Dishwasher safe",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: true,
  //   category: "kitchen",
  //   priceHint: "$18",
  // },
  // {
  //   id: "olive-oil-bottle",
  //   productName: "Glass Pour-Spout Olive Oil Bottle",
  //   image: "/images/products/olive-oil-bottle.png",
  //   shortDescription:
  //     "A weighty glass cruet with a no-drip pour spout and a wood-collar accent.",
  //   whyPeopleLoveIt:
  //     "Replaces the ugly grocery-store bottle. Pours a clean stream every time, and looks beautiful next to the stove.",
  //   benefits: [
  //     "Drip-free pour spout",
  //     "Holds a full standard 500ml bottle",
  //     "Glass keeps oil tasting fresh",
  //     "Easy-grip silhouette",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "kitchen",
  //   priceHint: "$16",
  // },
  // {
  //   id: "magnetic-knife-strip",
  //   productName: "Walnut Magnetic Knife Strip",
  //   image: "/images/products/magnetic-knife-strip.png",
  //   shortDescription:
  //     "A solid walnut magnetic strip that frees up an entire counter and looks gorgeous doing it.",
  //   whyPeopleLoveIt:
  //     "If your knife block is taking up half a counter, this is the upgrade. Strong magnets, real wood, instant kitchen calm.",
  //   benefits: [
  //     "Genuinely strong magnets",
  //     "Real walnut, not laminate",
  //     "Frees a huge amount of counter space",
  //     "Looks better than a knife block",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "kitchen",
  //   priceHint: "$45",
  // },
  // {
  //   id: "ceramic-mixing-bowls",
  //   productName: "Nesting Stoneware Mixing Bowl Set",
  //   image: "/images/products/ceramic-mixing-bowls.png",
  //   shortDescription:
  //     "A nesting set of weighty stoneware bowls in muted, livable colors.",
  //   whyPeopleLoveIt:
  //     "Heavy enough to stay put while whisking, pretty enough to bring straight to the table.",
  //   benefits: [
  //     "Three sizes nest for storage",
  //     "Weighted base resists sliding",
  //     "Microwave and dishwasher safe",
  //     "Doubles as serving bowls",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: false,
  //   category: "kitchen",
  //   priceHint: "$42",
  // },
  // {
  //   id: "kitchen-tongs",
  //   productName: "Silicone-Tip Kitchen Tongs",
  //   image: "/images/products/kitchen-tongs.png",
  //   shortDescription:
  //     "Locking 9-inch tongs with heat-safe silicone tips — the under-$15 kitchen workhorse.",
  //   whyPeopleLoveIt:
  //     "The tool you didn't know you used until you have a good pair. Locks closed for storage, soft on nonstick.",
  //   benefits: [
  //     "Pull-ring lock for compact storage",
  //     "Silicone tips up to 600°F",
  //     "Won't scratch nonstick",
  //     "Dishwasher safe",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "kitchen",
  //   priceHint: "$13",
  // },
  // {
  //   id: "nesting-glass-storage",
  //   productName: "Glass Storage Containers with Bamboo Lids",
  //   image: "/images/products/nesting-glass-storage.png",
  //   shortDescription:
  //     "A nesting set of glass storage containers with airtight bamboo lids.",
  //   whyPeopleLoveIt:
  //     "Way prettier than plastic, and the bamboo lids look intentional on open shelves. Microwaving leftovers stops feeling sad.",
  //   benefits: [
  //     "Real glass — no plastic taste or staining",
  //     "Airtight silicone gasket lids",
  //     "Nesting design saves cabinet space",
  //     "Bamboo lids look beautiful on shelves",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "kitchen",
  //   priceHint: "$38",
  // },
  // // ---------------------- DESK SETUP ----------------------
  // {
  //   id: "warm-desk-lamp",
  //   productName: "Adjustable Warm-Light Desk Lamp",
  //   image: "/images/products/warm-desk-lamp.png",
  //   shortDescription:
  //     "A slim, fully articulated lamp with three warmth settings and dimming.",
  //   whyPeopleLoveIt:
  //     "Your overhead light is killing you at 7pm. This lamp covers the whole desk in soft, warm light — and tucks away when not in use.",
  //   benefits: [
  //     "Three color temperatures including warm 2700K",
  //     "Stepless dimming",
  //     "Memory function — remembers your last setting",
  //     "USB-C charging port built in",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "desk-setup",
  //   priceHint: "$54",
  // },
  // {
  //   id: "monitor-stand-shelf",
  //   productName: "Walnut Monitor Stand with Drawer",
  //   image: "/images/products/monitor-stand-shelf.png",
  //   shortDescription:
  //     "A solid wood monitor riser with a hidden drawer and side ventilation slots.",
  //   whyPeopleLoveIt:
  //     "Lifts the screen to eye level, hides the keyboard at end of day, and adds quiet warmth to a black-and-aluminum desk.",
  //   benefits: [
  //     "Solid wood, not veneer",
  //     "Hidden drawer for cables and keys",
  //     "Side slots for cable pass-through",
  //     "Holds up to 50 lbs",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "desk-setup",
  //   priceHint: "$72",
  // },
  // {
  //   id: "felt-desk-mat",
  //   productName: "Wool-Felt and Cork Desk Mat",
  //   image: "/images/products/felt-desk-mat.png",
  //   shortDescription:
  //     "A reversible desk mat — soft wool felt one side, sealed cork the other.",
  //   whyPeopleLoveIt:
  //     "Feels like working on a cozy notebook. Quiets the keyboard, protects the desk, and looks far better than a black gaming mat.",
  //   benefits: [
  //     "Wool-felt one side, cork the other",
  //     "Quiets typing and mouse clicks",
  //     "Anti-slip backing",
  //     "Wipes clean easily",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "desk-setup",
  //   priceHint: "$28",
  // },
  // {
  //   id: "cable-organizer-tray",
  //   productName: "Under-Desk Cable Management Tray",
  //   image: "/images/products/cable-organizer-tray.png",
  //   shortDescription:
  //     "A no-drill steel tray that hides a power strip and all cables under the desk.",
  //   whyPeopleLoveIt:
  //     "The single biggest visual upgrade for any desk. Cables disappear, the floor opens up, and the desk finally looks designed.",
  //   benefits: [
  //     "No drilling — clamps to most desks",
  //     "Holds a full power strip and brick",
  //     "Powder-coated steel",
  //     "Dramatic before/after",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: true,
  //   category: "desk-setup",
  //   priceHint: "$32",
  // },
  // {
  //   id: "leather-mousepad",
  //   productName: "Vegan Leather Mousepad",
  //   image: "/images/products/leather-mousepad.png",
  //   shortDescription:
  //     "A double-sided vegan leather mousepad with a soft microfiber backing.",
  //   whyPeopleLoveIt:
  //     "Tiny upgrade that makes the desk feel like a hotel writing surface. Patinas slightly with use.",
  //   benefits: [
  //     "Two finishes — choose smooth or pebbled",
  //     "Soft, non-slip backing",
  //     "Wipes clean instantly",
  //     "Looks more expensive than it is",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "desk-setup",
  //   priceHint: "$22",
  // },
  // {
  //   id: "mechanical-keyboard",
  //   productName: "Low-Profile Mechanical Wireless Keyboard",
  //   image: "/images/products/mechanical-keyboard.png",
  //   shortDescription:
  //     "A 75% mechanical keyboard in a low-profile body, with hot-swappable switches.",
  //   whyPeopleLoveIt:
  //     "Feels incredible to type on without the obnoxious clack of a gaming board. The kind of upgrade you can't undo.",
  //   benefits: [
  //     "75% layout — compact but full function",
  //     "Bluetooth + 2.4GHz + USB-C",
  //     "Hot-swappable switches",
  //     "Backlit but tasteful",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "desk-setup",
  //   priceHint: "$120",
  // },
  // // ---------------------- SMART GADGETS ----------------------
  // {
  //   id: "sunrise-alarm-clock",
  //   productName: "Sunrise Wake-Up Light Alarm Clock",
  //   image: "/images/products/sunrise-alarm-clock.png",
  //   shortDescription:
  //     "A bedside lamp that gradually brightens to wake you with simulated sunrise.",
  //   whyPeopleLoveIt:
  //     "Waking up in winter stops feeling violent. The light fades up over 30 minutes, so you're already half-awake when the soft chime starts.",
  //   benefits: [
  //     "Gradual sunrise simulation up to 30 minutes",
  //     "Sunset wind-down at night",
  //     "Doubles as a bedside reading lamp",
  //     "FM radio and ambient sounds",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "smart-gadgets",
  //   priceHint: "$84",
  // },
  // {
  //   id: "smart-plug-pack",
  //   productName: "Mini Smart Plug 4-Pack",
  //   image: "/images/products/smart-plug-pack.png",
  //   shortDescription:
  //     "Compact smart plugs that turn lamps and fans into voice-controlled, scheduled devices.",
  //   whyPeopleLoveIt:
  //     "The smartest cheap upgrade in any apartment. Turn on a lamp from bed, schedule a fan to shut off at 2am, all without rewiring anything.",
  //   benefits: [
  //     "Voice control with Alexa and Google",
  //     "Daily schedules and away mode",
  //     "Low-profile — doesn't block second outlet",
  //     "No hub required",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: true,
  //   category: "smart-gadgets",
  //   priceHint: "$32 / 4-pack",
  // },
  // {
  //   id: "smart-bulbs",
  //   productName: "Warm-White Dimmable Smart Bulbs (4-Pack)",
  //   image: "/images/products/smart-bulbs.png",
  //   shortDescription:
  //     "Warm, dimmable smart bulbs that fit any standard lamp — no wiring needed.",
  //   whyPeopleLoveIt:
  //     "Turns every lamp in a rental into a dimmable, schedulable light. Sets a slow fade for evenings without lifting a finger.",
  //   benefits: [
  //     "Warm-white tone (2700K)",
  //     "Smooth dimming via app or voice",
  //     "Schedules and scenes",
  //     "No hub required",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "smart-gadgets",
  //   priceHint: "$36",
  // },
  // {
  //   id: "ambient-light-bar",
  //   productName: "Behind-Screen Ambient Light Bar",
  //   image: "/images/products/ambient-light-bar.png",
  //   shortDescription:
  //     "A USB-powered light bar that mounts behind a monitor or TV for soft bias lighting.",
  //   whyPeopleLoveIt:
  //     "Reduces eye strain at night and turns a dark living room into a moodier, calmer space when watching anything.",
  //   benefits: [
  //     "Adjustable color temperature",
  //     "USB powered — no wall outlet needed",
  //     "Magnetic mount",
  //     "Reduces eye fatigue",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "smart-gadgets",
  //   priceHint: "$24",
  // },
  // {
  //   id: "white-noise-machine",
  //   productName: "Adaptive White Noise Sound Machine",
  //   image: "/images/products/white-noise-machine.png",
  //   shortDescription:
  //     "A small bedside sound machine with real fan-driven white noise — not a speaker loop.",
  //   whyPeopleLoveIt:
  //     "If you've tried free phone apps, this is the actual upgrade. Real airflow noise is far more soothing, and the timer is genuinely thoughtful.",
  //   benefits: [
  //     "Real fan-driven sound, not looped audio",
  //     "Tunable pitch and tone",
  //     "Compact, travel-friendly",
  //     "Optional sleep timer",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "smart-gadgets",
  //   priceHint: "$54",
  // },
  // {
  //   id: "smart-doorbell",
  //   productName: "Wireless Battery Video Doorbell",
  //   image: "/images/products/smart-doorbell.png",
  //   shortDescription:
  //     "A no-wires battery doorbell with sharp video, motion zones, and a quiet chime.",
  //   whyPeopleLoveIt:
  //     "Renter-friendly, takes ten minutes to install, and finally lets you see the package thief in 4K.",
  //   benefits: [
  //     "Battery powered — no wiring",
  //     "1080p HD with night vision",
  //     "Two-way talk",
  //     "Motion zones to skip false alerts",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: false,
  //   category: "smart-gadgets",
  //   priceHint: "$99",
  // },
  // // ---------------------- ORGANIZATION ----------------------
  // {
  //   id: "stackable-pantry-bins",
  //   productName: "Clear Stackable Pantry Bins (Set of 6)",
  //   image: "/images/products/stackable-pantry-bins.png",
  //   shortDescription:
  //     "Acrylic stackable bins with handles that turn a chaotic pantry into a system.",
  //   whyPeopleLoveIt:
  //     "Pull out the bin instead of digging through a shelf. Stack them tall in narrow pantries. The single best pantry upgrade for the money.",
  //   benefits: [
  //     "Stack tall in narrow pantries",
  //     "Handles for easy pull-out",
  //     "BPA-free and dishwasher safe",
  //     "Multiple shapes for different cabinets",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: true,
  //   category: "organization",
  //   priceHint: "$36",
  // },
  // {
  //   id: "drawer-divider-system",
  //   productName: "Bamboo Expandable Drawer Dividers",
  //   image: "/images/products/drawer-divider-system.png",
  //   shortDescription:
  //     "Spring-loaded bamboo dividers that adjust to any drawer width.",
  //   whyPeopleLoveIt:
  //     "Turns one giant junk drawer into four small, sane drawers. Real bamboo, no installation, holds firm.",
  //   benefits: [
  //     "Real bamboo construction",
  //     "Spring-loaded — no drilling",
  //     "Adjustable from 17 to 22 inches",
  //     "Set of four",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: true,
  //   category: "organization",
  //   priceHint: "$24",
  // },
  // {
  //   id: "over-door-rack",
  //   productName: "Over-the-Door Storage Rack",
  //   image: "/images/products/over-door-rack.png",
  //   shortDescription:
  //     "An over-door rack with 9 hooks for bags, coats, and the daily chaos.",
  //   whyPeopleLoveIt:
  //     "Solves the entire 'where do I put my work tote' problem in five minutes, no drilling, no tools.",
  //   benefits: [
  //     "Holds up to 100 lbs",
  //     "Foam pads protect the door",
  //     "9 hooks of varied sizes",
  //     "Matte finish — not shiny chrome",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "organization",
  //   priceHint: "$22",
  // },
  // {
  //   id: "shelf-risers",
  //   productName: "Expandable Shelf Risers (Pair)",
  //   image: "/images/products/shelf-risers.png",
  //   shortDescription:
  //     "Adjustable risers that double the vertical space in any cabinet shelf.",
  //   whyPeopleLoveIt:
  //     "The reason your dish cabinet finally fits everything. Cheap, instant, life-changing.",
  //   benefits: [
  //     "Adjustable width and height",
  //     "Sturdy bamboo or coated metal options",
  //     "Doubles cabinet capacity",
  //     "No installation",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "organization",
  //   priceHint: "$18",
  // },
  // {
  //   id: "underbed-storage-bag",
  //   productName: "Underbed Storage Bags with Window (2-Pack)",
  //   image: "/images/products/underbed-storage-bag.png",
  //   shortDescription:
  //     "Soft, breathable storage bags that slide under any bed and seal with zippers.",
  //   whyPeopleLoveIt:
  //     "The under-bed is the most wasted real estate in any apartment. These reclaim it without looking like plastic bins.",
  //   benefits: [
  //     "Breathable fabric — won't trap moisture",
  //     "Clear window to see contents",
  //     "Reinforced handles",
  //     "Folds flat when empty",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "organization",
  //   priceHint: "$26",
  // },
  // {
  //   id: "rotating-spice-rack",
  //   productName: "Rotating Spice Tower (24 Jars Included)",
  //   image: "/images/products/rotating-spice-rack.png",
  //   shortDescription:
  //     "A two-tier rotating tower with 24 matching glass jars and printed labels.",
  //   whyPeopleLoveIt:
  //     "The 'oh wow' kitchen upgrade. Actually fits in a cabinet, spins smoothly, and the matching jars are the visual reset every spice shelf needs.",
  //   benefits: [
  //     "Includes 24 glass jars and labels",
  //     "Spins smoothly on weighted base",
  //     "Sized for standard cabinets",
  //     "Two tiers, accessible from any angle",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "organization",
  //   priceHint: "$45",
  // },
  // // ---------------------- BEAUTY ----------------------
  // {
  //   id: "rotating-makeup-organizer",
  //   productName: "Rotating 360° Makeup Organizer",
  //   image: "/images/products/rotating-makeup-organizer.png",
  //   shortDescription:
  //     "A clear acrylic spinner with adjustable shelves for skincare, brushes, and tubes.",
  //   whyPeopleLoveIt:
  //     "Turns vanity chaos into a small daily ritual. Shelves move, the base spins, and you can finally see everything.",
  //   benefits: [
  //     "Adjustable shelf heights",
  //     "Smooth 360° spin",
  //     "Holds tall bottles and short jars",
  //     "Easy to wipe clean",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: true,
  //   category: "beauty",
  //   priceHint: "$34",
  // },
  // {
  //   id: "lighted-vanity-mirror",
  //   productName: "Lighted Tabletop Vanity Mirror",
  //   image: "/images/products/lighted-vanity-mirror.png",
  //   shortDescription:
  //     "A double-sided mirror with three light tones and a 10x magnification side.",
  //   whyPeopleLoveIt:
  //     "Makes 'getting ready' feel like a hotel moment. The three light settings genuinely help match makeup to real lighting.",
  //   benefits: [
  //     "Three color-temperature settings",
  //     "10x magnification on reverse side",
  //     "USB rechargeable — no wall plug",
  //     "360° rotation",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "beauty",
  //   priceHint: "$48",
  // },
  // {
  //   id: "brush-holder",
  //   productName: "Glass Brush Holder with Beads",
  //   image: "/images/products/brush-holder.png",
  //   shortDescription:
  //     "A weighty glass holder with decorative beads that keep brushes upright and separated.",
  //   whyPeopleLoveIt:
  //     "Holds brushes upright without crushing the bristles. Looks far prettier than a cup, lasts forever.",
  //   benefits: [
  //     "Weighty glass base",
  //     "Beads keep bristles in shape",
  //     "Easy to wash and refill",
  //     "Looks like decor, not storage",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "beauty",
  //   priceHint: "$22",
  // },
  // {
  //   id: "skincare-fridge",
  //   productName: "Mini Skincare Fridge",
  //   image: "/images/products/skincare-fridge.png",
  //   shortDescription:
  //     "A compact, quiet 4-liter fridge for serums, masks, and roller tools.",
  //   whyPeopleLoveIt:
  //     "Cold serums feel incredible, masks last longer, and there's a real ritual to opening a tiny fridge of skincare every morning.",
  //   benefits: [
  //     "Quiet thermoelectric cooling",
  //     "Removable shelf for tall bottles",
  //     "Compact — fits on any counter",
  //     "Available in soft pastel finishes",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: false,
  //   category: "beauty",
  //   priceHint: "$58",
  // },
  // {
  //   id: "vanity-tray",
  //   productName: "Marble and Brass Vanity Tray",
  //   image: "/images/products/vanity-tray.png",
  //   shortDescription:
  //     "A real marble tray with brass handles to corral perfumes and jewelry.",
  //   whyPeopleLoveIt:
  //     "Suddenly the dresser looks styled, not cluttered. Heavy enough to feel real — not the painted plastic version.",
  //   benefits: [
  //     "Real marble — natural veining",
  //     "Polished brass handles",
  //     "Felt-padded underside",
  //     "Holds perfumes, jewelry, and trinkets",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "beauty",
  //   priceHint: "$42",
  // },
  // // ---------------------- TRAVEL ----------------------
  // {
  //   id: "compression-packing-cubes",
  //   productName: "Compression Packing Cubes (Set of 6)",
  //   image: "/images/products/compression-packing-cubes.png",
  //   shortDescription:
  //     "Lightweight packing cubes with double-zipper compression for nearly half the bulk.",
  //   whyPeopleLoveIt:
  //     "Makes a carry-on hold a week of clothes. The compression zipper is the small detail that changes how you pack forever.",
  //   benefits: [
  //     "Double-zipper compression",
  //     "Six sizes for clothes, shoes, laundry",
  //     "Mesh tops for visibility",
  //     "Lightweight ripstop fabric",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: true,
  //   category: "travel",
  //   priceHint: "$32",
  // },
  // {
  //   id: "hanging-toiletry-bag",
  //   productName: "Hanging Toiletry Bag with Hook",
  //   image: "/images/products/hanging-toiletry-bag.png",
  //   shortDescription:
  //     "A folded toiletry bag that opens flat and hangs on any hook, door, or rod.",
  //   whyPeopleLoveIt:
  //     "Hotel bathrooms have zero counter space. This solves it instantly — unfold, hang, done.",
  //   benefits: [
  //     "Hangs from a sturdy swivel hook",
  //     "Multiple zip and mesh compartments",
  //     "Water-resistant lining",
  //     "Folds compact when not in use",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: true,
  //   category: "travel",
  //   priceHint: "$28",
  // },
  // {
  //   id: "tech-organizer-pouch",
  //   productName: "Tech Organizer Travel Pouch",
  //   image: "/images/products/tech-organizer-pouch.png",
  //   shortDescription:
  //     "A semi-rigid pouch with elastic loops for cables, chargers, and small electronics.",
  //   whyPeopleLoveIt:
  //     "The single thing that ends the tangled cable nightmare in a backpack. Open it and everything is exactly where you left it.",
  //   benefits: [
  //     "Elastic loops for every cable size",
  //     "Mesh pockets for SD cards and dongles",
  //     "Padded shell protects screens",
  //     "Two layers to keep things separate",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "travel",
  //   priceHint: "$24",
  // },
  // {
  //   id: "travel-laundry-bag",
  //   productName: "Lightweight Travel Laundry Bag",
  //   image: "/images/products/travel-laundry-bag.png",
  //   shortDescription:
  //     "A breathable mesh-bottom laundry bag that compresses dirty clothes away from clean ones.",
  //   whyPeopleLoveIt:
  //     "Stops the dirty-on-clean disaster mid-trip. Folds to nothing, weighs less than a t-shirt.",
  //   benefits: [
  //     "Breathable mesh bottom",
  //     "Drawstring closure",
  //     "Folds into its own pocket",
  //     "Reinforced corners",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "travel",
  //   priceHint: "$14",
  // },
  // {
  //   id: "passport-organizer",
  //   productName: "Leather Passport and Document Organizer",
  //   image: "/images/products/passport-organizer.png",
  //   shortDescription:
  //     "A slim full-grain leather organizer with slots for passports, cards, boarding passes, and a pen.",
  //   whyPeopleLoveIt:
  //     "All your travel documents in one place, in a wallet that gets more beautiful with use.",
  //   benefits: [
  //     "Full-grain leather, develops a patina",
  //     "Holds two passports, multiple cards",
  //     "Pen loop included",
  //     "RFID-blocking lining",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: false,
  //   category: "travel",
  //   priceHint: "$48",
  // },
  // {
  //   id: "neck-pillow-memory",
  //   productName: "Memory Foam Travel Neck Pillow with Hood",
  //   image: "/images/products/neck-pillow-memory.png",
  //   shortDescription:
  //     "A real memory-foam neck pillow with a removable cover and a built-in hood.",
  //   whyPeopleLoveIt:
  //     "The first neck pillow that actually supports the chin so you don't snap awake every twenty minutes. The hood is unexpectedly perfect for window seats.",
  //   benefits: [
  //     "Memory foam, not flimsy beads",
  //     "Hood for light blocking",
  //     "Removable, washable cover",
  //     "Snap-clip to luggage handle",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "travel",
  //   priceHint: "$36",
  // },
  // // ---------------------- CAR ----------------------
  // {
  //   id: "magsafe-car-mount",
  //   productName: "MagSafe Vent Car Phone Mount",
  //   image: "/images/products/magsafe-car-mount.png",
  //   shortDescription:
  //     "A strong-magnet vent mount that snaps and releases the phone instantly.",
  //   whyPeopleLoveIt:
  //     "No more clunky clamping. Snap on, snap off, and the magnet holds through the bumpiest backroad.",
  //   benefits: [
  //     "Genuinely strong magnet",
  //     "Vent clip with metal back",
  //     "360° rotation",
  //     "Compatible with MagSafe cases or sticker plate",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: true,
  //   category: "car",
  //   priceHint: "$22",
  // },
  // {
  //   id: "trunk-organizer",
  //   productName: "Collapsible Trunk Organizer",
  //   image: "/images/products/trunk-organizer.png",
  //   shortDescription:
  //     "A reinforced fabric trunk organizer with non-slip base and adjustable dividers.",
  //   whyPeopleLoveIt:
  //     "Groceries finally stop sliding around. Folds flat when not needed, expands when you need it.",
  //   benefits: [
  //     "Non-slip rubber base",
  //     "Adjustable interior dividers",
  //     "Reinforced sidewalls",
  //     "Folds flat when not needed",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: true,
  //   category: "car",
  //   priceHint: "$28",
  // },
  // {
  //   id: "car-vacuum-handheld",
  //   productName: "Cordless Handheld Car Vacuum",
  //   image: "/images/products/car-vacuum-handheld.png",
  //   shortDescription:
  //     "A pocket-sized cordless vacuum strong enough to handle real crumbs and pet hair.",
  //   whyPeopleLoveIt:
  //     "Lives in the door pocket. Cleans the floor mats in three minutes — no extension cords, no gas-station vacuums.",
  //   benefits: [
  //     "Strong suction for the size",
  //     "Crevice and brush attachments",
  //     "USB-C rechargeable",
  //     "Light enough for one-handed use",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: false,
  //   category: "car",
  //   priceHint: "$58",
  // },
  // {
  //   id: "car-trash-can",
  //   productName: "Leak-Proof Hanging Car Trash Can",
  //   image: "/images/products/car-trash-can.png",
  //   shortDescription:
  //     "A small, leak-proof bin that hangs neatly from the back of the front seat.",
  //   whyPeopleLoveIt:
  //     "Tiny upgrade, huge quality of life. The car finally stops being a rolling recycling bin.",
  //   benefits: [
  //     "Leak-proof inner liner",
  //     "Adjustable strap fits any seat",
  //     "Magnetic flap closes between uses",
  //     "Easy to wipe clean",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "car",
  //   priceHint: "$18",
  // },
  // {
  //   id: "tire-pressure-gauge",
  //   productName: "Digital Tire Pressure Gauge with Light",
  //   image: "/images/products/tire-pressure-gauge.png",
  //   shortDescription:
  //     "A backlit digital pressure gauge that's accurate, ergonomic, and lives in the glove box.",
  //   whyPeopleLoveIt:
  //     "The pencil-style gauges are useless. This one reads in two seconds, lights up at night, and saves you from a flat.",
  //   benefits: [
  //     "Accurate to 0.5 PSI",
  //     "Backlit screen for night use",
  //     "Built-in flashlight",
  //     "Multiple unit options",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "car",
  //   priceHint: "$16",
  // },
  // // ---------------------- EXTRAS / BATHROOM / BEDROOM / READING / PETS ----------------------
  // {
  //   id: "rainfall-shower-head",
  //   productName: "Rainfall Shower Head with Filter",
  //   image: "/images/products/rainfall-shower-head.png",
  //   shortDescription:
  //     "An oversized rainfall shower head with a built-in mineral filter for softer water.",
  //   whyPeopleLoveIt:
  //     "Five-minute install, no plumber. The water pressure feels luxurious and the filter visibly improves skin and hair after a few weeks.",
  //   benefits: [
  //     "Built-in mineral filter",
  //     "8-inch rainfall face",
  //     "High-pressure flow even with filter",
  //     "Tools-free install",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "home-decor",
  //   priceHint: "$48",
  // },
  // {
  //   id: "matte-soap-dispenser",
  //   productName: "Matte Stoneware Soap Dispenser Set",
  //   image: "/images/products/matte-soap-dispenser.png",
  //   shortDescription:
  //     "A weighty matte stoneware pump and tray set for sinks and showers.",
  //   whyPeopleLoveIt:
  //     "Removes the plastic bottle parade from any sink. The matte finish doesn't show water spots.",
  //   benefits: [
  //     "Weighty matte stoneware",
  //     "Brushed metal pump",
  //     "Includes tray and matching dispenser",
  //     "Refillable from any soap brand",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "home-decor",
  //   priceHint: "$26",
  // },
  // {
  //   id: "reading-pillow",
  //   productName: "Wedge Reading Pillow with Pockets",
  //   image: "/images/products/reading-pillow.png",
  //   shortDescription:
  //     "A back-supporting wedge pillow with arm rests and a side pocket for the remote.",
  //   whyPeopleLoveIt:
  //     "Turns any bed into a couch. The kind of thing you don't think you need until you spend a Sunday with one.",
  //   benefits: [
  //     "Memory foam wedge",
  //     "Side pockets for books or remote",
  //     "Removable cover",
  //     "Soft, neutral upholstery options",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "home-decor",
  //   priceHint: "$56",
  // },
  // {
  //   id: "bookend-pair",
  //   productName: "Solid Brass Geometric Bookends",
  //   image: "/images/products/bookend-pair.png",
  //   shortDescription:
  //     "A pair of weighty brass bookends in a clean geometric form.",
  //   whyPeopleLoveIt:
  //     "Heavy enough to actually hold a row of hardcovers. Looks more like a sculpture than a utility object.",
  //   benefits: [
  //     "Solid brass — not plated",
  //     "Substantial weight",
  //     "Felt-padded base",
  //     "Pairs nicely with any shelf",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "home-decor",
  //   priceHint: "$34",
  // },
  // {
  //   id: "diffuser-ceramic",
  //   productName: "Matte Ceramic Essential Oil Diffuser",
  //   image: "/images/products/diffuser-ceramic.png",
  //   shortDescription:
  //     "A quiet, matte-ceramic diffuser that hides the plastic and runs all night.",
  //   whyPeopleLoveIt:
  //     "Real ceramic instead of the usual plastic dome. Whisper-quiet, with a soft amber glow option.",
  //   benefits: [
  //     "Matte ceramic exterior",
  //     "Whisper-quiet mist",
  //     "Optional ambient amber light",
  //     "Auto-shutoff",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "home-decor",
  //   priceHint: "$42",
  // },
  // {
  //   id: "pet-feeding-mat",
  //   productName: "Silicone Pet Feeding Mat with Raised Edge",
  //   image: "/images/products/pet-feeding-mat.png",
  //   shortDescription:
  //     "A wipeable silicone mat with a raised lip that catches every drop and crumb.",
  //   whyPeopleLoveIt:
  //     "Saves the floor and looks halfway intentional. The raised edge actually catches water — no more wet socks.",
  //   benefits: [
  //     "Food-grade silicone",
  //     "Raised lip catches spills",
  //     "Non-slip backing",
  //     "Dishwasher safe",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "home-decor",
  //   priceHint: "$18",
  // },
  // {
  //   id: "pet-water-fountain",
  //   productName: "Quiet Pet Water Fountain",
  //   image: "/images/products/pet-water-fountain.png",
  //   shortDescription:
  //     "A near-silent ceramic-look fountain that keeps water moving and filtered.",
  //   whyPeopleLoveIt:
  //     "Cats actually drink from it. The fountain is quiet enough to live in any room, and the filters are easy to swap.",
  //   benefits: [
  //     "Triple-stage filtration",
  //     "Whisper-quiet pump",
  //     "Holds 2.4 liters",
  //     "Replaceable carbon filters",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: true,
  //   budgetPick: false,
  //   category: "home-decor",
  //   priceHint: "$48",
  // },
  // {
  //   id: "compact-blender",
  //   productName: "Personal Travel Blender",
  //   image: "/images/products/compact-blender.png",
  //   shortDescription:
  //     "A USB-C rechargeable personal blender that doubles as the cup you drink from.",
  //   whyPeopleLoveIt:
  //     "Small enough to live on the counter, strong enough to actually crush ice. The lid swaps for a drinking lid in one motion.",
  //   benefits: [
  //     "USB-C rechargeable",
  //     "Strong enough for frozen fruit",
  //     "Drink straight from the cup",
  //     "Easy to rinse, no blade housing to scrub",
  //   ],
  //   affiliateLink: placeholderLink,
  //   editorPick: false,
  //   budgetPick: true,
  //   category: "kitchen",
  //   priceHint: "$38",
  // },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getProductsByIds = (ids: string[]) =>
  ids.map((id) => getProductById(id)).filter((p): p is Product => Boolean(p));
export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);
