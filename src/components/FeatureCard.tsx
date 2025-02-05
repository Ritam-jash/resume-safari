import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up h-full hover:transform hover:-translate-y-1">
      <div className="h-12 w-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
        <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-primary transition-colors duration-200">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;