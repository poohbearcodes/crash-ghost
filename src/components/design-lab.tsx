"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";

export function DesignLab() {
  return (
    <section id="design-lab" className="border-b-2 border-black bg-white">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-5 py-16 md:px-8">
        <SectionTitle
          eyebrow="Lookbook / Design Lab"
          title="Future Concepts Zone"
          subtitle="Reserved for your Figma concepts, experimental UI ideas, and next-phase Crash Ghost app experiences."
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 rounded-3xl border-2 border-black bg-zinc-50 p-6 shadow-[6px_6px_0_0_#000] md:grid-cols-3"
        >
          {["Figma Concepts", "Prototype Notes", "App Ideas"].map((item) => (
            <div key={item} className="rounded-2xl border-2 border-dashed border-black bg-white p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Placeholder</p>
              <p className="mt-2 text-xl font-black uppercase">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
