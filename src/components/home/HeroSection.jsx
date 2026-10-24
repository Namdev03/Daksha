import { ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
            <ShieldCheck size={14} />
            School safety technology
          </div>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Building safer school experiences through thoughtful technology.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Hack Halt Security is developing technology to help schools strengthen safety, communication and everyday coordination.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button to="/daksha" className="min-w-[180px]">
              Explore Daksha
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button to="/contact" variant="secondary" className="min-w-[180px]">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 via-transparent to-sky-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_25px_80px_rgba(12,17,16,0.7)]">
            <div className="grid gap-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Safety posture</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Operational clarity</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                  <ShieldCheck size={22} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Prevent</p>
                  <p className="mt-3 text-xl font-semibold text-white">Structured checks</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Detect</p>
                  <p className="mt-3 text-xl font-semibold text-white">Event tracking</p>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Response</p>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-200">
                    Human-led
                  </span>
                </div>
                <div className="mt-4 h-2.5 rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300" />
                </div>
                <p className="mt-3 text-sm text-slate-300">Responsible notifications and oversight remain central to every workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
