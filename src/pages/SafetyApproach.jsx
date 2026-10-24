import PageMeta from '../components/ui/PageMeta';
import SectionHeading from '../components/ui/SectionHeading';

export default function SafetyApproach() {
  const steps = [
    {
      title: 'Prevent',
      copy: 'Preventive workflows help schools coordinate access, approvals, and operational routines before issues intensify. Clear procedures and structured check-ins can reduce confusion and create better consistency across campuses and teams.',
    },
    {
      title: 'Detect',
      copy: 'Event recording and detection support the identification of relevant conditions, statuses, and operational signals. Accurate context matters: a missing arrival record is not the same as a confirmed absence, and attendance may remain pending until verified by a teacher.',
    },
    {
      title: 'Respond',
      copy: 'Responsible notifications and escalation pathways allow authorized teams to act with context, not panic. Human review remains essential when time-sensitive actions are required, particularly when schools are handling sensitive information or operational decisions.',
    },
  ];

  return (
    <>
      <PageMeta
        title="Safety Approach | Hack Halt Security"
        description="Learn about Hack Halt Security’s PREVENT → DETECT → RESPOND safety framework and the role of privacy-conscious design and human oversight."
      />
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Safety approach"
          title="PREVENT → DETECT → RESPOND"
          description="Our framework is designed to guide thoughtful school coordination, timely awareness, and responsible response without replacing human judgment."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                0{index + 1}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{step.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Preventive workflows</h3>
            <p className="mt-4 text-slate-300">Schools benefit from clear, repeatable routines: approvals, notifications, and task checks that support consistent operations. These workflows help ensure the right actions happen at the right time, with the right people involved.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Event recording and detection</h3>
            <p className="mt-4 text-slate-300">Relevant events should be recorded with context so that schools can understand what happened, who acted, and what follow-up is necessary. The goal is clarity and accuracy, not assumptions.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Responsible notifications and escalation</h3>
            <p className="mt-4 text-slate-300">Notifications should be permission-aware, purpose-limited, and relevant. Escalation should support responsible action while respecting the need for human judgment and oversight.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Human review and oversight</h3>
            <p className="mt-4 text-slate-300">Technology can improve visibility and coordination, but it does not replace accountable people. Human review is essential for decisions involving school operations, family communication, and sensitive information.</p>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-emerald-500/25 bg-emerald-500/5 p-7">
          <h3 className="text-2xl font-semibold text-white">Privacy and limitations</h3>
          <p className="mt-4 text-slate-300">Privacy-conscious practices, access controls, and realistic system boundaries are essential for responsible school technology. Automated workflows have limitations: they can improve consistency and visibility, but they cannot guarantee outcomes, replace professional judgment, or eliminate the need for careful human oversight.</p>
        </div>
      </main>
    </>
  );
}
