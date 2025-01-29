import { Upload, Search, FileText, Briefcase } from "lucide-react";
import FeatureCard from "../FeatureCard";

const features = [
  {
    icon: Upload,
    title: "Bulk Resume Upload",
    description: "Upload multiple resumes at once and let AI handle the screening process efficiently. Save hours of manual work.",
  },
  {
    icon: Search,
    title: "Job Matching",
    description: "Our advanced AI matches job requirements with candidate profiles using deep learning algorithms for precise results.",
  },
  {
    icon: FileText,
    title: "ATS-Compatible Resume",
    description: "Create professional resumes that pass through Applicant Tracking Systems with our AI-powered formatting.",
  },
  {
    icon: Briefcase,
    title: "Job Suggestions",
    description: "Receive tailored job recommendations based on your skills, experience, and career preferences.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
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
  );
};

export default FeaturesSection;