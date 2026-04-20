"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { stickerAssets } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-black">
      <div className="mx-auto grid min-h-[72vh] w-full max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div className="flex flex-col justify-center space-y-7">
          <p className="inline-flex w-fit rounded-full border border-black px-4 py-1 text-xs font-bold uppercase tracking-[0.2em]">
            Sticker Chaos Society
          </p>
          <h1 className="text-5xl font-black uppercase leading-[0.95] md:text-7xl">
            Wear The
            <span className="inline-block -rotate-2 border-2 border-black bg-black px-3 text-white">Ghost</span>
            <br />
            Start The Crash
          </h1>
          <p className="max-w-md text-zinc-700">
            Crash Ghost fuses skate energy, mischievous mascots, and collectible symbols into wearable art for the
            internet underground.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#featured"
              className="cursor-pointer rounded-full border-2 border-black bg-white px-6 py-3 text-sm font-bold uppercase text-black transition duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white"
            >
              Shop Drops
            </a>
            <a
              href="#about"
              className="cursor-pointer rounded-full border-2 border-black bg-white px-6 py-3 text-sm font-bold uppercase text-black transition duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white"
            >
              Meet Crash Ghost
            </a>
          </div>
        </div>
        <div className="relative min-h-[360px]">
          {stickerAssets.map((asset, idx) => (
            <motion.div
              key={asset}
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: idx % 2 === 0 ? 8 : -8,
                y: [0, idx % 2 === 0 ? -12 : 12, 0],
              }}
              transition={{
                delay: idx * 0.08,
                duration: 0.9,
                y: { repeat: Number.POSITIVE_INFINITY, duration: 4 + idx, ease: "easeInOut" },
              }}
              className="absolute rounded-2xl border-2 border-black bg-white p-2 shadow-[6px_6px_0_0_#000]"
              style={{
                left: `${(idx % 3) * 28 + (idx === 5 ? 12 : 4)}%`,
                top: `${Math.floor(idx / 2) * 28 + 8}%`,
              }}
            >
              <Image src={asset} alt="Crash Ghost sticker placeholder" width={120} height={120} priority={idx < 2} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
