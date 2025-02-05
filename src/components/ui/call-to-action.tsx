import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-8 lg:p-12 gap-6 items-center">
          <div>
            <Badge>AI-Powered Screening</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Transform Your Hiring Process Today
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl mx-auto">
              Screen resumes in just 30 seconds with our advanced AI technology. Save countless hours 
              in your recruitment process and find the perfect candidates faster than ever before.
            </p>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <Button className="gap-4" variant="outline">
              Schedule Demo <PhoneCall className="w-4 h-4" />
            </Button>
            <Button className="gap-4">
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };