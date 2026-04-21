import { SectionTitle } from "@/components/section-title";
import { withBasePath } from "@/lib/asset-path";

export function BrandStory() {
  return (
    <section id="brand-story" className="relative min-h-screen border-b-2 border-black text-white">
      <img
        src={withBasePath("/story/background_arun_website.png")}
        alt="Crash Ghost brand world"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto grid min-h-screen w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <div className="space-y-6 self-center">
          <SectionTitle
            eyebrow="Crash Ghost Story"
            title="From Sketchbook Chaos To A Living Creative World"
            subtitle="Crash Ghost began as hand-drawn ghost tags and sticker experiments, then evolved into a rebellious visual language spanning clothes, characters, and digital culture."
          />
          <blockquote className="rounded-2xl border-2 border-white/80 bg-black/35 p-5 text-lg italic leading-relaxed">
            "Crash Ghost is a signal for people who build from scratch - messy, bold, and impossible to ignore."
          </blockquote>
        </div>
        <div className="grid gap-4 self-center">
          <div className="rounded-2xl border border-white/60 bg-black/35 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-300">Vision</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-100">
              Build a cross-medium brand universe where style, art, and story connect: drops, games, short films,
              and creator-led experiences.
            </p>
          </div>
          <div className="rounded-2xl border border-white/60 bg-black/35 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-300">Lore</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-100">
              Crash Ghost characters carry lucky symbols, urban myths, and coded messages - each design adding a new
              chapter to the world.
            </p>
          </div>
          <div className="rounded-2xl border border-white/60 bg-black/35 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-300">Mission</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-100">
              Empower underdog creators through collaboration, education, and products that feel collectible, wearable,
              and deeply personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
