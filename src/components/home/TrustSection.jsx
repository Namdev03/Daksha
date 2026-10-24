import SectionHeading from '../ui/SectionHeading';

export default function TrustSection() {
  return (
    <section className="bg-[#0d1414]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Trust and privacy"
            title="Designed with responsibility in mind."
            description="Privacy-conscious product design is central to how Daksha is being shaped. Access is expected to be restricted to authorized users, school information is handled carefully, and human review remains essential."
          />

          <div className="grid gap-4">
            {[
              'Authorized access for relevant school and family stakeholders',
              'Careful handling of school information and permission boundaries',
              'Human oversight and review for operational decisions',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300">
                  ✓
                </span>
                <p className="text-base text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
