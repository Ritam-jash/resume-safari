import { CTA } from "@/components/ui/call-to-action";
import { Button } from "@/components/ui/button";
import { FeaturesSectionWithCardGradient } from "@/components/ui/feature-section-with-card-gradient";
import { Squares } from "@/components/ui/squares-background";

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
        {/* Marketing Articles */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Save Time, Improve Efficiency
          </h2>
          <FeaturesSectionWithCardGradient />
          <div className="inline-flex items-center space-x-2 bg-accent/10 backdrop-blur-sm px-6 py-3 rounded-full mt-8">
            <span className="text-white font-semibold">Ready to transform your hiring process?</span>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Try Now
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <CTA />
      </div>
    </section>
  );
};

export default MarketingSection;