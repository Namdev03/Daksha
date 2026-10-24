import { capabilityItems } from '../../data/siteContent';
import FeatureCard from '../ui/FeatureCard';
import SectionHeading from '../ui/SectionHeading';

export default function CapabilitiesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Planned capabilities"
        title="Clear operational tools for school coordination."
        description="Daksha is designed to help schools capture relevant movement and communication events with accountability, context, and responsible human oversight."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {capabilityItems.map((item) => (
          <FeatureCard key={item.title} title={item.title} description={item.description} status={item.status} />
        ))}
      </div>
    </section>
  );
}
