import StatusLabel from './StatusLabel';

export default function FeatureCard({ title, description, status }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-slate-950/50 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-slate-900/80">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <StatusLabel text={status} />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}
