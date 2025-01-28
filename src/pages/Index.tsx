import { Upload, Search, FileText, Briefcase } from "lucide-react";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

const features = [
  {
    icon: Upload,
    title: "Bulk Resume Upload",
    description: "Upload multiple resumes at once and let AI handle the screening.",
  },
  {
    icon: Search,
    title: "Job Matching",
    description: "Advanced AI matching between job requirements and candidate profiles.",
  },
  {
    icon: FileText,
    title: "ATS-Compatible Resume",
    description: "Create ATS-friendly resumes that pass through screening systems.",
  },
  {
    icon: Briefcase,
    title: "Job Suggestions",
    description: "Get personalized job recommendations based on your profile.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-up">
            Hire Your AI Agent
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Complete your resume screening task in under 30 seconds and save hours of effort!
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors animate-fade-up shadow-lg hover:shadow-xl" style={{ animationDelay: "0.2s" }}>
            Get Started Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Save Time, Improve Efficiency
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Deliver High-Quality Results in Just 30 Seconds
          </p>
          <div className="inline-flex items-center space-x-2 bg-accent px-6 py-3 rounded-full">
            <span className="text-primary font-semibold">Ready to transform your hiring process?</span>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Try Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;