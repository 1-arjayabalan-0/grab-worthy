export type Category = {
  slug: string;
  name: string;
  shortLabel: string;
  tagline: string;
  editorialIntro: string;
  heroImage: string;
  accent: string;
};

export const categories: Category[] = [
  {
    slug: "home-decor",
    name: "Home Decor Finds",
    shortLabel: "Home",
    tagline: "Quiet upgrades that change the way a room feels.",
    editorialIntro:
      "The best home decor finds aren't the loudest. They're the small, quietly considered objects that change how a corner reads — a sculptural lamp on a side table, a textured throw on the back of a sofa, a hand-thrown ceramic catching the afternoon light. We hunt for the pieces that make a room feel intentional, not staged. Affordable, available on Amazon, and the kind of thing visitors notice but can't quite place.",
    heroImage: "/images/categories/home-decor.png",
    accent: "warm-clay",
  },
  // {
  //   slug: "kitchen",
  //   name: "Kitchen Essentials",
  //   shortLabel: "Kitchen",
  //   tagline: "The small tools that make cooking feel less like a chore.",
  //   editorialIntro:
  //     "Most kitchen drawers are a graveyard of single-use gadgets. The good kitchen finds are the opposite — quietly useful, well-made, and earned-back in three weeks of regular use. We curate the small tools, prep boards, and counter helpers that real home cooks reach for again and again, with a soft spot for anything that fits in a tiny apartment.",
  //   heroImage: "/images/categories/kitchen.png",
  //   accent: "olive",
  // },
  // {
  //   slug: "desk-setup",
  //   name: "Desk Setup",
  //   shortLabel: "Desk",
  //   tagline: "A workspace you actually want to sit down at.",
  //   editorialIntro:
  //     "Your desk is the room you spend the most hours in. It deserves more thought than a flatpack frame and a leaning monitor. We collect the desk pieces that calm the surface, hide the cable mess, and make the eight-hour day genuinely better — keyboard trays, lamps, organizers, and the kind of chair you stop noticing because it works.",
  //   heroImage: "/images/categories/desk-setup.png",
  //   accent: "ink",
  // },
  // {
  //   slug: "smart-gadgets",
  //   name: "Smart Gadgets",
  //   shortLabel: "Smart",
  //   tagline: "Useful technology, the kind that earns its place on the shelf.",
  //   editorialIntro:
  //     "Most smart gadgets promise to change your life and end up in a drawer by spring. The ones we recommend are different — they solve a small daily friction so quietly that you forget they're there. From soft sleep wake-ups to dimmable mood lighting, these are the picks that prove technology can be calm.",
  //   heroImage: "/images/categories/smart-gadgets.png",
  //   accent: "graphite",
  // },
  // {
  //   slug: "organization",
  //   name: "Apartment Organization",
  //   shortLabel: "Organization",
  //   tagline: "Storage finds that respect a small footprint.",
  //   editorialIntro:
  //     "When your whole home is six hundred square feet, organization becomes architecture. We dig for the storage pieces that quietly create more space — over-the-door racks that don't look ugly, drawer systems that finally make sense of a deep cabinet, and the kind of risers and bins that turn a chaotic shelf into something Pinterest would actually save.",
  //   heroImage: "/images/categories/organization.png",
  //   accent: "sand",
  // },
  // {
  //   slug: "beauty",
  //   name: "Beauty Useful Picks",
  //   shortLabel: "Beauty",
  //   tagline: "Vanity helpers, organizers, and tools — minus the marketing.",
  //   editorialIntro:
  //     "We're less interested in the latest serum and more interested in the rotating organizer that finally makes a daily skincare routine effortless. The picks here are the unglamorous beauty backbone — vanity trays, brush holders, lighted mirrors, and small storage that turns a cluttered countertop into a calm ritual.",
  //   heroImage: "/images/categories/beauty.png",
  //   accent: "rose-clay",
  // },
  // {
  //   slug: "travel",
  //   name: "Travel Essentials",
  //   shortLabel: "Travel",
  //   tagline: "Pieces that make packing — and arriving — feel easy.",
  //   editorialIntro:
  //     "The best travel gear is the kind you pack once and stop thinking about. We gather the packing cubes, cable rolls, toiletry kits, and quiet helpers that turn a chaotic carry-on into a system. Built for people who travel often and want their luggage to feel like a small, well-run home.",
  //   heroImage: "/images/categories/travel.png",
  //   accent: "deep-teal",
  // },
  // {
  //   slug: "car",
  //   name: "Car Accessories",
  //   shortLabel: "Car",
  //   tagline: "Practical car finds that quietly improve every drive.",
  //   editorialIntro:
  //     "Most car accessories are loud, plastic, and forgettable. The good ones are clean and useful — a phone mount that finally works, a trunk organizer that doesn't slide around, a small vacuum that lives in the door pocket. These are the picks for drivers who treat the car like a small, mobile room.",
  //   heroImage: "/images/categories/car.png",
  //   accent: "navy",
  // },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
