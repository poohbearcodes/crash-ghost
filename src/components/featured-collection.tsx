"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/constants";
import { SectionTitle } from "@/components/section-title";

export function FeaturedCollection() {
  return (
    <section id="featured" className="border-b-2 border-black bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-5 py-16 md:px-8">
        <SectionTitle
          eyebrow="Featured Collection"
          title="Drop Zero Categories"
          subtitle="Built like collectible tiles: clean base, loud attitude, and enough space for your art direction to evolve."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="group rounded-3xl border-2 border-black bg-white p-5 shadow-[4px_4px_0_0_#000] transition hover:-translate-y-1"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Category</p>
              <h3 className="mt-2 text-2xl font-black uppercase">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-700">{item.blurb}</p>
              <button className="mt-6 rounded-full border-2 border-black px-4 py-2 text-xs font-bold uppercase transition group-hover:bg-black group-hover:text-white">
                Explore
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
