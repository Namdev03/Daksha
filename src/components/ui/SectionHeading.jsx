export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignMap = {
    left: 'items-start text-left',
    center: 'items-center text-center',
  };

  return (
    <div className={`flex flex-col gap-3 ${alignMap[align]}`}>
      {eyebrow ? (
        <span className="inline-flex w-fit items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  );
}
