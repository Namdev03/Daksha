import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import SectionHeading from '../components/ui/SectionHeading';

export default function About() {
  return (
    <>
      <PageMeta
        title="About | Hack Halt Security"
        description="Learn about Hack Halt Security, the company mission, its responsible technology philosophy, and its focus on safer school operations."
      />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="About"
          title="Building safer school experiences with intention."
          description="Hack Halt Security is focused on helping schools and institutions strengthen safety, communication, and coordination through thoughtful technology."
        />

        <div className="mt-10 space-y-8 text-lg leading-8 text-slate-300">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Mission</h3>
            <p className="mt-4">Our mission is to support safer school environments by improving how schools coordinate routine operations, communicate with authorized stakeholders, and respond to relevant events with clarity and accountability.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Vision</h3>
            <p className="mt-4">We believe thoughtful technology can create more consistent, context-aware, and responsible school operations. By designing straightforward workflows and clear communication paths, schools can make better-informed decisions while keeping people engaged and informed.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">School-safety focus</h3>
            <p className="mt-4">Our work is rooted in the realities of school environments, where daily coordination, authorized access, and communication require precision. We are developing tools to support school teams in ways that respect privacy, encourage responsible human oversight, and reduce confusion during important moments.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Technology philosophy</h3>
            <p className="mt-4">We believe technology should be practical, understandable, and useful. It should support decision-making without creating unnecessary complexity or replacing responsible human judgment. Thoughtful systems are clear, accountable, and intentionally designed around the needs of real school communities.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Responsible product development</h3>
            <p className="mt-4">Our development process emphasizes privacy, caution, and transparency. We are building products with clear operational boundaries, permission-aware workflows, and realistic product maturity. We avoid unsupported claims and remain focused on safe, responsible, and useful development.</p>
          </div>
        </div>

        <div className="mt-10 flex">
          <Link to="/daksha" className="inline-flex items-center gap-2 text-emerald-300 transition hover:text-white">
            Explore Daksha <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    </>
  );
}
