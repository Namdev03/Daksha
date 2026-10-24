import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

export default function DakshaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/10 via-slate-950/80 to-slate-950 p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-xl font-semibold text-emerald-300">
            D
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-emerald-300">Daksha</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">School-focused safety and school-life coordination.</h3>
        </div>

        <div>
          <SectionHeading
            eyebrow="Daksha"
            title="Built with school workflows in mind."
            description="Daksha is a school-focused safety and school-life platform under development, designed to help administrators, teachers, and families coordinate important moments with greater clarity."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Administrators</p>
              <p className="mt-3 text-base text-white">Coordinate operational workflows and permission-aware communications.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Teachers</p>
              <p className="mt-3 text-base text-white">Record attendance and other classroom events with clear context.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Parents</p>
              <p className="mt-3 text-base text-white">Receive relevant updates from authorized school stakeholders.</p>
            </div>
          </div>
          <div className="mt-8">
            <Button to="/daksha">
              Learn more about Daksha
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
