"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { stickerAssets } from "@/lib/constants";

export function StickerWall() {
  return (
    <section id="sticker-wall" className="border-b-2 border-black bg-white">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-5 py-16 md:px-8">
        <SectionTitle
          eyebrow="Sticker Wall"
          title="Collect. Peel. Repeat."
          subtitle="Placeholder sticker assets are prewired in a collage layout. Replace files in public/stickers with your own PNG/SVG pack."
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {stickerAssets.map((asset, idx) => (
            <motion.div
              key={asset}
              initial={{ rotate: idx % 2 ? 4 : -4, y: 12, opacity: 0 }}
              whileInView={{ rotate: idx % 2 ? 2 : -2, y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              className="rounded-2xl border-2 border-black bg-zinc-100 p-4 shadow-[5px_5px_0_0_#000]"
            >
              <div className="rounded-xl border border-black bg-white p-6">
                <Image
                  src={asset}
                  alt="Sticker placeholder"
                  width={220}
                  height={220}
                  className="mx-auto h-auto w-full max-w-[160px]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
