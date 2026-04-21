"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { withBasePath } from "@/lib/asset-path";

export function DesignLab() {
  const conceptCards = [
    {
      title: "Crash Ghost Indie Game Project",
      image: "/concepts/game_idea.png",
      hoverText: "Hover note: stealth, platforming, and mascot lore with hand-drawn UI.",
      blurb:
        "A side-scrolling indie game where Crash Ghost crews survive neon streets, unlock symbols, and build their own legend through narrative missions.",
    },
    {
      title: "Future Fashion + Manufacturing",
      image: "/concepts/fashion_idea.png",
      hoverText: "Hover note: from sketch to sample to small-batch production workflow.",
      blurb:
        "Learning full-stack fashion production: pattern-making, sourcing, sampling, and ethical small-batch manufacturing for premium streetwear drops.",
    },
    {
      title: "Community Impact Initiatives",
      image: "/concepts/community_idea.png",
      hoverText: "Hover note: workshops, collabs, and city art projects for local creators.",
      blurb:
        "A community lane focused on mentoring, art pop-ups, and local collabs that convert creative energy into real opportunities for younger makers.",
    },
  ];

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
          className="grid gap-4 rounded-3xl bg-zinc-50 p-2 md:grid-cols-3"
        >
          {conceptCards.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-2xl border-2 border-black bg-white p-4 text-center">
              <img
                src={withBasePath(item.image)}
                alt={item.title}
                width={420}
                height={300}
                className="h-[190px] w-full rounded-xl border border-black object-cover"
              />
              <p className="mt-4 text-sm font-black uppercase leading-tight">{item.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-700">{item.blurb}</p>
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/25 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <p className="text-left text-xs uppercase tracking-[0.06em] text-white">{item.hoverText}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
