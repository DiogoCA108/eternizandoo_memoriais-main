import { LandingHero } from "@/components/landing/LandingHero";
import { LandingPersonas } from "@/components/landing/LandingPersonas";
import { LandingCTA } from "@/components/landing/LandingCTA";
import { FooterSection } from "@/components/FooterSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-body">
      <LandingHero />
      <LandingPersonas />
      <LandingCTA />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
