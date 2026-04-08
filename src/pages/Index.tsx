import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ModulesSection from "@/components/sections/ModulesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => (
  <main className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <PainSection />
    <SolutionSection />
    <ModulesSection />
    <BenefitsSection />
    <TestimonialsSection />
    <PricingSection />
    <GuaranteeSection />
    <FAQSection />
    <FinalCTASection />
  </main>
);

export default Index;
