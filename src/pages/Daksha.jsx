import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import SectionHeading from '../components/ui/SectionHeading';
import { capabilityItems } from '../data/siteContent';

export default function Daksha() {
  return (
    <>
      <PageMeta
        title="Daksha | Hack Halt Security"
        description="Explore Daksha, the school-focused safety and school-life platform under development by Hack Halt Security."
      />
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Daksha"
          title="A school-focused platform for safer coordination."
          description="Daksha is a product under development, designed to bring together school workflows, permission-aware communication, and structured records in a way that supports safer operations while keeping human oversight central."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">What Daksha is</h3>
            <p className="mt-4 text-slate-300">Daksha is being developed as a school-focused safety and school-life platform that supports operational clarity across a range of school routines and coordination needs.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Why it is being developed</h3>
            <p className="mt-4 text-slate-300">Many school teams need better ways to coordinate movement, communications, and event records while preserving clarity, privacy, and accountability. Daksha is being designed to address that need with structured workflows and thoughtful product decisions.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Administrators</p>
            <p className="mt-4 text-slate-300">Support operational routines, approvals, and school-wide communication with clear workflow management.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Teachers</p>
            <p className="mt-4 text-slate-300">Record attendance and other relevant events using workflow logic that encourages accuracy and context.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Parents & guardians</p>
            <p className="mt-4 text-slate-300">Receive authorized updates and notifications related to school coordination and status changes.</p>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-semibold text-white">Planned capabilities</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilityItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                    {item.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-emerald-500/25 bg-emerald-500/5 p-7">
          <h3 className="text-2xl font-semibold text-white">Product status</h3>
          <p className="mt-4 text-slate-300">Daksha is currently in active development. Product direction is shaped by responsible design principles, stakeholder needs, and a focus on privacy-conscious school workflows. Future roadmap ideas may include educational video content and deeper workflow support as the product evolves.</p>
        </div>

        <div className="mt-10 flex justify-start">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
            Speak with our team <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    </>
  );
}
