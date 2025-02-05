import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export function CTA() {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-12 lg:p-16 gap-8 items-center">
          <div>
            <Badge className="px-6 py-2 text-lg">AI-Powered Screening</Badge>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-2xl font-regular">
              Transform Your Hiring Process Today
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto">
              Screen resumes in just 30 seconds with our advanced AI technology. Save countless hours 
              in your recruitment process and find the perfect candidates faster than ever before.
            </p>
          </div>
          <div className="flex flex-row gap-6 mt-8">
            <Button className="gap-4 text-lg px-6 py-6" variant="outline">
              Schedule Demo <PhoneCall className="w-5 h-5" />
            </Button>
            <Button className="gap-4 text-lg px-8 py-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}