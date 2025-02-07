
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { GradientButton } from "@/components/ui/gradient-button";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)]">
      <div className="h-full">
        <Card className="w-full h-full bg-[#060606] relative overflow-hidden rounded-none border-0">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="purple"
          />
          
          <div className="flex h-full flex-col md:flex-row">
            <div className="flex-1 p-6 md:p-12 relative z-10 flex flex-col justify-center">
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-fade-up">
                Hire Your AI Agent
              </h1>
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-neutral-300 max-w-lg animate-fade-up opacity-90">
                Complete your resume screening task in under 30 seconds and save hours of effort!
              </p>
              <GradientButton 
                className="mt-8 md:mt-12 animate-fade-up w-[180px] md:w-[200px] h-[56px] md:h-[64px] !px-4 md:!px-6 !py-3 md:!py-4"
                variant="variant"
              >
                Get Started Now
              </GradientButton>
            </div>

            <div className="flex-1 relative min-h-[300px] md:min-h-0">
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
