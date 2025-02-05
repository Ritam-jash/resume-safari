import { CTA } from "@/components/ui/call-to-action";
import { Button } from "@/components/ui/button";
import { Feature } from "@/components/ui/feature-with-image-comparison";
import { Rocket, Brain, Target } from "lucide-react";

const MarketingSection = () => {
  return (
    <section className="bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto py-20 px-4">
        <Feature />
        
        {/* Marketing Articles */}
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Revolutionize Your Recruitment
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Instant Analysis
              </h3>
              <p className="text-gray-600">
                Process hundreds of resumes in seconds with our AI-powered screening technology, delivering precise matches instantly
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Intelligent Matching
              </h3>
              <p className="text-gray-600">
                Our advanced AI algorithms understand context and nuance, ensuring you find candidates who truly match your requirements
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Strategic Insights
              </h3>
              <p className="text-gray-600">
                Get detailed analytics and insights to make data-driven hiring decisions and improve your recruitment strategy
              </p>
            </div>
          </div>
          <div className="inline-flex items-center space-x-4 bg-accent px-8 py-4 rounded-full">
            <span className="text-primary font-semibold">Ready to transform your hiring process?</span>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Get Started Now
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