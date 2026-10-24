import HeroSection from '../components/home/HeroSection';
import MissionSection from '../components/home/MissionSection';
import DakshaSection from '../components/home/DakshaSection';
import SafetyFramework from '../components/home/SafetyFramework';
import CapabilitiesSection from '../components/home/CapabilitiesSection';
import TrustSection from '../components/home/TrustSection';
import FinalCTA from '../components/home/FinalCTA';
import PageMeta from '../components/ui/PageMeta';

export default function Home() {
  return (
    <>
      <PageMeta
        title="Hack Halt Security | Safer School Experiences"
        description="Hack Halt Security develops thoughtful school-safety technology, including Daksha, to support safer school coordination and communication."
      />
      <HeroSection />
      <MissionSection />
      <DakshaSection />
      <SafetyFramework />
      <CapabilitiesSection />
      <TrustSection />
      <FinalCTA />
    </>
  );
}
