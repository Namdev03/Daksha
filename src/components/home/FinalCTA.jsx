import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-slate-950 to-slate-950 p-8 text-center sm:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-emerald-300">Partnerships</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Let&apos;s build safer school experiences together.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          Are you a school or institution interested in learning more about Daksha? Connect with our team.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/contact">Contact Our Team</Button>
        </div>
      </div>
    </section>
  );
}
