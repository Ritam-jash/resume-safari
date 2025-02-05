import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { GradientButton } from "@/components/ui/gradient-button";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-16 px-0 sm:px-0 lg:px-0">
      <div className="h-[calc(100vh-4rem)]">
        <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden rounded-none">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="purple"
          />
          
          <div className="flex h-full flex-col md:flex-row">
            <div className="flex-1 p-12 relative z-10 flex flex-col justify-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-fade-up">
                Hire Your AI Agent
              </h1>
              <p className="mt-6 text-xl text-neutral-300 max-w-lg animate-fade-up opacity-90">
                Complete your resume screening task in under 30 seconds and save hours of effort!
              </p>
              <GradientButton 
                className="mt-12 animate-fade-up min-w-[120px] !px-6 !py-5"
                variant="variant"
              >
                Get Started Now
              </GradientButton>
            </div>

            <div className="flex-1 relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;