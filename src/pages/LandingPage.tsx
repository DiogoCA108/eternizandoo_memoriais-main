import { LandingHero } from "@/components/landing/LandingHero";
import { LandingVideo } from "@/components/landing/LandingVideo";
import { LandingMarquee } from "@/components/landing/LandingMarquee";
import { LandingCTA } from "@/components/landing/LandingCTA";
import { LandingObjections } from "@/components/landing/LandingObjections";
import { FooterSection } from "@/components/FooterSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-body">
      <LandingHero />
      <LandingVideo />
      <LandingMarquee />
      <LandingCTA />
      <LandingObjections />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
