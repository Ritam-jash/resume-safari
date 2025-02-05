import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

function Feature() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full py-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <Badge>AI-Powered Screening</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-bold text-primary">
              Transform Your Hiring Process
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Experience the future of recruitment with our advanced AI screening technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };