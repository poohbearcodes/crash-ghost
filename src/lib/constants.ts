export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Shop", href: "#featured" },
  { label: "Collections", href: "#sticker-wall" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const categories = [
  {
    title: "Tees",
    blurb: "Oversized cuts, loud linework, and mascot-heavy chest prints.",
  },
  {
    title: "Hoodies",
    blurb: "Heavyweight comfort with stitched chaos and lucky marks.",
  },
  {
    title: "Stickers",
    blurb: "Collectible drops designed for decks, laptops, and sketchbooks.",
  },
  {
    title: "Accessories",
    blurb: "Caps, bags, patches, and small weapons of expression.",
  },
];

export const stickerAssets = [
  "/stickers/ghost-main.png",
  "/stickers/eight-ball.png",
  "/stickers/group-21.png",
  "/stickers/union.png",
  "/stickers/vector.png",
  "/stickers/vector-1.png",
  "/stickers/group-63.png",
  "/stickers/group-78.png",
];
