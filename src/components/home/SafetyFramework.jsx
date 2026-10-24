import { frameworkSteps } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';

export default function SafetyFramework() {
  return (
    <section className="bg-[#0d1414]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Framework"
          title="PREVENT → DETECT → RESPOND"
          description="A practical safety framework for school operations, supported by clear workflows, relevant event tracking, and responsible oversight."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {frameworkSteps.map((step) => (
            <article key={step.title} className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${step.accent} p-[1px]`}>
              <div className="h-full rounded-[1.7rem] bg-[#0b1111] p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-sm font-semibold text-emerald-300">
                  {step.title.slice(0, 1)}
                </div>
                <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
