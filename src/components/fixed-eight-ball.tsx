"use client";

import { motion } from "framer-motion";
import { withBasePath } from "@/lib/asset-path";

export function FixedEightBall() {
  return (
    <motion.img
      src={withBasePath("/stickers/8-ball.png")}
      alt="Floating 8 ball sticker"
      width={200}
      height={200}
      animate={{ y: [0, -10, 0, 8, 0], rotate: [-8, -6, -8] }}
      transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className="pointer-events-none fixed bottom-3 right-2 z-40 h-[160px] w-[160px] object-contain opacity-95 md:bottom-5 md:right-5 md:h-[200px] md:w-[200px]"
    />
  );
}
