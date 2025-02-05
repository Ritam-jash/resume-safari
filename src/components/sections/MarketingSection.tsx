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
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Save Time, Improve Efficiency
          </h2>
          <div className="mb-16">
            <FeaturesSectionWithCardGradient />
          </div>
          <div className="inline-flex items-center space-x-4 bg-accent/10 backdrop-blur-sm px-8 py-4 rounded-full mb-16">
            <span className="text-white font-semibold text-lg">Ready to transform your hiring process?</span>
            <Button className="bg-primary text-white hover:bg-primary/90 px-6">
              Try Now
            </Button>
          </div>
        </div>

        {/* CTA Section with adjusted spacing */}
        <div className="mt-8">
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;