
import Navbar from "../components/Navbar";
import { TestimonialsSection } from "../components/blocks/testimonials-with-marquee";
import { AnimatedGradientDemo } from "@/components/ui/animated-gradient-demo";
import { Footerdemo } from "@/components/ui/footer-section";
import HeroSection from "@/components/sections/HeroSection";
import { FeaturesSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid";
import PricingSection from "@/components/sections/PricingSection";
import MarketingSection from "@/components/sections/MarketingSection";

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#060606] overflow-x-hidden">
      <Navbar />
      <div className="pt-16 md:pt-24 px-4 md:px-0">
        <HeroSection />
        <div className="max-w-[100vw] overflow-hidden">
          <FeaturesSectionWithBentoGrid />
          <AnimatedGradientDemo />
          <TestimonialsSection
            title="Trusted by developers worldwide"
            description="Join thousands of developers who are already building the future with our AI platform"
            testimonials={testimonials}
          />
          <PricingSection />
          <MarketingSection />
          <Footerdemo />
        </div>
      </div>
    </div>
  );
};

export default Index;
