"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { withBasePath } from "@/lib/asset-path";

export function StickerWall() {
  const cards = [
    "/carousel/carousel-1.png",
    "/carousel/carousel-2.png",
    "/carousel/carousel-3.png",
    "/carousel/carousel-4.png",
  ];

  return (
    <section id="sticker-wall" className="border-b-2 border-black bg-white">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-5 py-16 md:px-8">
        <SectionTitle
          eyebrow="Sticker Wall"
          title="Collect. Peel. Repeat."
          subtitle="Interactive horizontal carousel: drag, swipe, or mouse-wheel sideways to browse each sticker scene."
        />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl border-2 border-black bg-zinc-50 p-4 shadow-[6px_6px_0_0_#000] md:p-6"
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="rounded-full border border-black bg-white px-3 py-1 text-xs uppercase tracking-[0.16em]">
              Scroll Horizontally
            </div>
            <div className="rounded-full border border-black bg-white px-3 py-1 text-xs uppercase tracking-[0.16em]">
              4 Looks
            </div>
          </div>
          <div className="overflow-x-auto rounded-2xl border-2 border-black bg-black p-2 [scrollbar-width:thin]">
            <div className="flex w-max snap-x snap-mandatory gap-3">
              {cards.map((slide, idx) => (
                <article
                  key={slide}
                  className="group relative w-[86vw] max-w-[860px] shrink-0 snap-start overflow-hidden rounded-xl border border-white/40 bg-black"
                >
                  <img
                    src={withBasePath(slide)}
                    alt={`Carousel sticker ${idx + 1}`}
                    width={1200}
                    height={900}
                    className="h-[300px] w-full object-cover md:h-[470px]"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  <div className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-black/45 px-3 py-1 text-xs uppercase tracking-[0.14em] text-white">
                    Slide {idx + 1}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
