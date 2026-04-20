import { SectionTitle } from "@/components/section-title";

export function AboutSection() {
  return (
    <section id="about" className="border-b-2 border-black bg-zinc-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:px-8">
        <SectionTitle
          eyebrow="About"
          title="Rebellious By Design"
          subtitle="Crash Ghost is a creative streetwear label built around hand-drawn mascots, lucky symbols, and chaotic sticker culture."
        />
        <div className="space-y-5 rounded-3xl border-2 border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
          <p className="text-zinc-800">
            Every piece starts as raw notebook doodles and gets remixed into wearable graphics, collectible drops, and
            visual stories.
          </p>
          <p className="text-zinc-700">
            It is edgy and playful, premium but imperfect, and made for people who treat clothing like a creative
            language.
          </p>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">
            Built for skaters, artists, internet misfits, and icon collectors.
          </p>
        </div>
      </div>
    </section>
  );
}
