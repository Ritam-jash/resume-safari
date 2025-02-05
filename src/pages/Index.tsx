import Navbar from "../components/Navbar";
import { TestimonialsSection } from "../components/blocks/testimonials-with-marquee";
import { AnimatedGradientDemo } from "@/components/ui/animated-gradient-demo";
import { Footerdemo } from "@/components/ui/footer-section";
import { FeaturesSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid";
import PricingSection from "@/components/sections/PricingSection";
import MarketingSection from "@/components/sections/MarketingSection";
import { HeroSection } from "@/components/blocks/hero-section-dark";

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
    <div className="min-h-screen bg-[#060606]">
      <Navbar />
      <div className="pt-24">
        <HeroSection 
          title="AI-Powered Resume Screening"
          subtitle={{
            regular: "Complete your resume screening in ",
            gradient: "under 30 seconds",
          }}
          description="Our AI-powered platform revolutionizes the hiring process by analyzing resumes with unprecedented speed and accuracy, helping you find the perfect candidates faster than ever."
          ctaText="Get Started Now"
          ctaHref="#"
          bottomImage={{
            light: "https://www.launchuicomponents.com/app-light.png",
            dark: "https://www.launchuicomponents.com/app-dark.png",
          }}
          gridOptions={{
            angle: 65,
            opacity: 0.4,
            cellSize: 50,
            lightLineColor: "#4a4a4a",
            darkLineColor: "#2a2a2a",
          }}
        />
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
  );
};

export default Index;