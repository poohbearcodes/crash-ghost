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
    title: "Ornaments",
    blurb: "Collectible add-ons, charms, and detail pieces with signature attitude.",
  },
];

export const stickerAssets = [
  "/stickers/8-ball.png",
  "/stickers/ghost-new.png",
  "/stickers/group-21.png",
  "/stickers/group-29.png",
  "/stickers/group-37.png",
  "/stickers/group-43.png",
  "/stickers/group-49.png",
  "/stickers/group-51.png",
  "/stickers/group-57.png",
  "/stickers/group-62.png",
  "/stickers/group-63.png",
  "/stickers/group-65.png",
  "/stickers/group-66.png",
  "/stickers/group-71.png",
  "/stickers/group-74.png",
  "/stickers/group-76.png",
  "/stickers/group-78.png",
  "/stickers/group-81.png",
  "/stickers/group-82.png",
  "/stickers/group-83.png",
  "/stickers/group-85.png",
  "/stickers/group-86.png",
  "/stickers/group-88.png",
  "/stickers/group-89.png",
  "/stickers/group-90.png",
  "/stickers/group-91.png",
  "/stickers/group-96.png",
  "/stickers/Union.png",
  "/stickers/Vector-1.png",
  "/stickers/Vector.png",
];

export const heroStickerAssets = stickerAssets.slice(0, 8);
