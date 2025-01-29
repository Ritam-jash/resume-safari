import { Upload, Search, FileText, Briefcase, CheckCircle, Clock, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import { SplineScene } from "../components/ui/splite";
import { Card } from "../components/ui/card";
import { Spotlight } from "../components/ui/spotlight";
import { TestimonialsSection } from "../components/blocks/testimonials-with-marquee";
import { Button } from "@/components/ui/button";
import { AnimatedGradientDemo } from "@/components/ui/animated-gradient-demo";
import { Footerdemo } from "@/components/ui/footer-section";

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

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Reduce resume screening time by 90%"
  },
  {
    icon: CheckCircle,
    title: "Increase Accuracy",
    description: "99.9% accuracy in candidate matching"
  },
  {
    icon: Zap,
    title: "Boost Efficiency",
    description: "Process 1000+ resumes in minutes"
  }
];

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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#403E43]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="purple"
            />
            
            <div className="flex h-full flex-col md:flex-row">
              {/* Left content */}
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-fade-up">
                  Hire Your AI Agent
                </h1>
                <p className="mt-4 text-neutral-300 max-w-lg animate-fade-up opacity-90">
                  Complete your resume screening task in under 30 seconds and save hours of effort!
                </p>
                <Button 
                  className="mt-8 bg-gradient-to-r from-primary via-purple-600 to-primary hover:opacity-90 text-white px-8 py-6 rounded-lg text-lg font-semibold transition-all duration-300 animate-fade-up w-fit"
                  size="lg"
                >
                  Get Started Now
                </Button>
              </div>

              {/* Right content */}
              <div className="flex-1 relative">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Animated Gradient Stats Section */}
      <AnimatedGradientDemo />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="Trusted by developers worldwide"
        description="Join thousands of developers who are already building the future with our AI platform"
        testimonials={testimonials}
      />

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Why Choose ResumeAI?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Team working"
                className="rounded-3xl object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-6 flex flex-col space-y-4 ${
                  plan.isPopular ? "border-2 border-primary" : ""
                }`}
              >
                {plan.isPopular && (
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium w-fit">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-4xl font-bold text-primary">{plan.price}</p>
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.isPopular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-accent hover:bg-accent/90"
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Section */}
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

      <Footerdemo />
    </div>
  );
};

export default Index;
