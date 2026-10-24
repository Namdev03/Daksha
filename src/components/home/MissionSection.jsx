import SectionHeading from '../ui/SectionHeading';

export default function MissionSection() {
  return (
    <section className="border-y border-white/10 bg-[#0d1414]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Our mission"
          title="Technology with a purpose."
          description="Thoughtful technology should help schools coordinate operations more effectively, keep authorized stakeholders informed, and support safer daily routines."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Coordinate</p>
            <p className="mt-4 text-lg text-white">Streamline operational routines with clear workflows and reliable communication.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Inform</p>
            <p className="mt-4 text-lg text-white">Keep the right people updated with timely, permission-aware information.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Support</p>
            <p className="mt-4 text-lg text-white">Empower school teams with tools that help them act responsibly and consistently.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
