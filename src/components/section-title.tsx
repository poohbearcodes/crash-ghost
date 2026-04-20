type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-3">
      <p className="inline-flex rounded-full border border-black bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.2em]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">{title}</h2>
      <p className="max-w-xl text-sm text-zinc-700 md:text-base">{subtitle}</p>
    </div>
  );
}
