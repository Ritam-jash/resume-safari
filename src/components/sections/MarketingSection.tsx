import { CTA } from "@/components/ui/call-to-action";
import { Button } from "@/components/ui/button";
import { FeaturesSectionWithCardGradient } from "@/components/ui/feature-section-with-card-gradient";

const MarketingSection = () => {
  return (
    <section className="bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto py-20 px-4">
        {/* Marketing Articles */}
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Save Time, Improve Efficiency
          </h2>
          <FeaturesSectionWithCardGradient />
          <div className="inline-flex items-center space-x-2 bg-accent px-6 py-3 rounded-full">
            <span className="text-primary font-semibold">Ready to transform your hiring process?</span>
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