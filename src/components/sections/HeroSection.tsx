import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

const HeroSection = () => {
  return (
    <section className="h-screen w-screen absolute top-0 left-0">
      <div className="h-full w-full">
        <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden rounded-none border-0">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="purple"
          />
          
          <div className="flex h-full flex-col md:flex-row pt-16">
            <div className="flex-1 p-12 relative z-10 flex flex-col justify-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-fade-up">
                Hire Your AI Agent
              </h1>
              <p className="mt-6 text-xl text-neutral-300 max-w-lg animate-fade-up opacity-90">
                Complete your resume screening task in under 30 seconds and save hours of effort!
              </p>
              <Button 
                className="mt-12 bg-gradient-to-r from-primary via-purple-600 to-primary hover:opacity-90 text-white px-10 py-8 rounded-lg text-xl font-semibold transition-all duration-300 animate-fade-up w-fit"
                size="lg"
              >
                Get Started Now
              </Button>
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