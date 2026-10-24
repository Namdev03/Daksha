import PageMeta from '../components/ui/PageMeta';
import SectionHeading from '../components/ui/SectionHeading';

export default function Terms() {
  return (
    <>
      <PageMeta
        title="Terms of Service | Hack Halt Security"
        description="Review the general terms of service for Hack Halt Security’s public website and enquiry channels."
      />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Terms"
          title="Terms of service"
          description="These terms govern use of the Hack Halt Security website and public contact channels."
        />

        <div className="mt-10 space-y-7 text-lg leading-8 text-slate-300">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Website information</h3>
            <p className="mt-4">The information on this website is provided for general informational and engagement purposes only. It should not be treated as legal, operational, or safety advice specific to any institution or individual.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">No guarantee</h3>
            <p className="mt-4">We do not guarantee that any proposed product, workflow, or service will be deployed, adopted, or suitable for a particular school or organisation. We do not claim verified certifications, outcomes, or product results that have not been formally approved.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Contact and enquiry content</h3>
            <p className="mt-4">Any contact or enquiry you send through this website should not include student records, medical information, incident details, or confidential operational data. Please do not submit sensitive information through public contact channels.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
            <h3 className="text-2xl font-semibold text-white">Changes</h3>
            <p className="mt-4">We may update this website and these terms at any time to reflect changes in our product direction, operational practices, or legal requirements. Continued use of the site constitutes acceptance of the updated terms.</p>
          </div>
        </div>
      </main>
    </>
  );
}
