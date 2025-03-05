
import { Button } from "@/components/ui/button";
import { FeaturesSectionWithCardGradient } from "@/components/ui/feature-section-with-card-gradient";
import { Squares } from "@/components/ui/squares-background";
import { Link } from "react-router-dom";

const MarketingSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 h-full w-full">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      
      <div className="relative z-10 container mx-auto py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Save Time, Improve Efficiency
          </h2>
          <div className="mb-16">
            <FeaturesSectionWithCardGradient />
          </div>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-accent/10 backdrop-blur-sm px-8 py-4 rounded-full mb-16">
            <span className="text-white font-semibold text-lg">Ready to transform your hiring process?</span>
            <Link to="/dashboard">
              <Button className="bg-primary text-white hover:bg-primary/90 px-6">
                Try Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
