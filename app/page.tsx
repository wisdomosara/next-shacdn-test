import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-4";
import FeaturesSection from "@/components/features-5";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team";
import WallOfLoveSection from "@/components/testimonials";

export  default async function Home() {

  return (
  <main>
    <HeroSection />
    <FeaturesSection />
    <ContentSection />
    <StatsSection />
    <TeamSection />
    <WallOfLoveSection />
    <CallToAction />
    <FooterSection />
  </main>
  );
}
