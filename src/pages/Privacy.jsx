import PageMeta from '../components/ui/PageMeta';
import SectionHeading from '../components/ui/SectionHeading';

export default function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy | Hack Halt Security"
        description="Read the privacy policy for Hack Halt Security and the privacy-conscious approach behind the company’s school-safety technology."
      />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy policy"
          description="This policy outlines our approach to handling personal information responsibly and transparently."
        />

        <div className="mt-10 space-y-7 text-lg leading-8 text-slate-300">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Information we collect</h3>
            <p className="mt-4">We collect the information you provide when you contact us, including your name, organisation details, role, and enquiry information. We do not ask for student records, medical details, or sensitive incident information through our public website.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">How we use this information</h3>
            <p className="mt-4">We use contact details to respond to enquiries, understand institutional needs, and conduct appropriate follow-up. We do not use personal information for unrelated purposes and we avoid collecting unnecessary data.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Storage and access</h3>
            <p className="mt-4">Any information we receive is handled responsibly and with appropriate safeguards. Access is limited to authorized personnel for the purpose of responding to enquiries and managing communications.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Website and form practices</h3>
            <p className="mt-4">This website is intended to be a public-facing information source and may include contact forms or prototype flows. We do not publish or expose student information, school records, or sensitive incident details. We do not claim guaranteed child safety or complete immunity from misuse of any digital system.</p>
          </div>
        </div>
      </main>
    </>
  );
}
