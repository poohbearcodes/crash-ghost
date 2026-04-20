# Crash Ghost Website

Streetwear and creative brand website built with Next.js, Tailwind CSS, and Framer Motion.

## Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- TypeScript

## Run

```bash
npm install
npm run dev
```

## Asset Flow

- Source artwork is kept in `assets`.
- Runtime website assets live in `public/stickers`.
- The active sticker list is controlled in `src/lib/constants.ts` (`stickerAssets`).

If you add new PNG/SVG files, copy them into `public/stickers` and add the path to `stickerAssets`.
