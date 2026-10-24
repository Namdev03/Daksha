export default function StatusLabel({ text }) {
  const toneMap = {
    Demo: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
    'In Development': 'border-sky-400/30 bg-sky-500/10 text-sky-300',
    Planned: 'border-violet-400/30 bg-violet-500/10 text-violet-300',
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${toneMap[text] || 'border-white/10 bg-white/5 text-slate-300'}`}>
      {text}
    </span>
  );
}
