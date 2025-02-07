
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export function CTA() {
  return (
    <div className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col text-center bg-gradient-to-b from-muted/80 to-muted rounded-lg p-8 md:p-12 lg:p-16 gap-6 md:gap-8 items-center">
          <div className="animate-fade-up">
            <Badge className="px-4 py-1.5 text-base md:text-lg bg-primary text-white hover:bg-primary/90">
              AI-Powered Screening
            </Badge>
          </div>
          
          <div className="flex flex-col gap-4 md:gap-6 animate-fade-up delay-150">
            <h3 className="text-2xl md:text-4xl lg:text-5xl tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Transform Your Hiring Process Today
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Screen resumes in just 30 seconds with our advanced AI technology. Save countless hours 
              in your recruitment process and find the perfect candidates faster than ever before.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-8 animate-fade-up delay-300">
            <Button 
              variant="outline" 
              className="gap-2 text-base h-12 px-6 hover:bg-primary hover:text-white transition-colors"
            >
              Schedule Demo <PhoneCall className="w-4 h-4" />
            </Button>
            <Button 
              className="gap-2 text-base h-12 px-8 bg-primary text-white hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
