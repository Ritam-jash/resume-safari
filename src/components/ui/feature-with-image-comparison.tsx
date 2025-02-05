import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical, Clock, Zap, UserCheck } from "lucide-react";

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
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <Badge>Save Time, Improve Efficiency</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent/50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Lightning-Fast Results</h3>
              <p className="text-muted-foreground">
                Deliver High-Quality Results in Just 30 Seconds with our AI-powered screening
              </p>
            </div>
            <div className="bg-accent/50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Smart Automation</h3>
              <p className="text-muted-foreground">
                Automate your hiring process and reduce manual screening time by 90%
              </p>
            </div>
            <div className="bg-accent/50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Better Candidates</h3>
              <p className="text-muted-foreground">
                Find the perfect match with our advanced AI matching algorithms
              </p>
            </div>
          </div>
          <div className="pt-12 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none bg-accent/50"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-primary h-full w-1 absolute z-20 top-0 -ml-1 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-primary rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-4 w-4 text-white select-none" />
                </button>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold">
                Ready to transform your hiring process?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };