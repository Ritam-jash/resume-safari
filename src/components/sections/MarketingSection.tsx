import { Button } from "@/components/ui/button";

const MarketingSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Save Time, Improve Efficiency
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Deliver High-Quality Results in Just 30 Seconds
        </p>
        <div className="inline-flex items-center space-x-2 bg-accent px-6 py-3 rounded-full">
          <span className="text-primary font-semibold">Ready to transform your hiring process?</span>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Try Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;