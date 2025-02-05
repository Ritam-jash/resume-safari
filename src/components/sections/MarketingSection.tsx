import { CTA } from "@/components/ui/call-to-action";
import { Button } from "@/components/ui/button";

const MarketingSection = () => {
  return (
    <section className="bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto py-20 px-4">
        {/* Marketing Articles */}
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Save Time, Improve Efficiency
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Lightning-Fast Results
              </h3>
              <p className="text-gray-600">
                Deliver High-Quality Results in Just 30 Seconds with our AI-powered screening
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Smart Automation
              </h3>
              <p className="text-gray-600">
                Automate your hiring process and reduce manual screening time by 90%
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Better Candidates
              </h3>
              <p className="text-gray-600">
                Find the perfect match with our advanced AI matching algorithms
              </p>
            </div>
          </div>
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