import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    features: ["10 resumes/month", "Basic AI screening", "Email support"],
    isPopular: false
  },
  {
    name: "Pro",
    price: "$49",
    features: ["Unlimited resumes", "Advanced AI matching", "Priority support", "Custom filters"],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom solutions", "Dedicated support", "API access", "Custom integrations"],
    isPopular: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-6 flex flex-col space-y-4 bg-white shadow-lg hover:shadow-xl transition-shadow ${
                plan.isPopular 
                  ? "border-2 border-primary relative before:content-['Most Popular'] before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:bg-primary before:text-white before:px-4 before:py-1 before:rounded-full before:text-sm before:font-medium" 
                  : "border border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-4xl font-bold text-primary">{plan.price}</p>
              <ul className="space-y-3 flex-grow text-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.isPopular
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-accent hover:bg-accent/90 text-primary"
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;