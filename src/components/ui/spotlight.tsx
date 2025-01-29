import { useRef } from "react";
import { useSpring, SpringOptions } from "@react-spring/web";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  size?: number;
  fill?: string;
  springOptions?: SpringOptions;
};

export function Spotlight({
  className,
  size = 200,
  fill = "zinc",
  springOptions = { bounce: 0 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: springOptions,
  }));

  const isHovered = useRef(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    api.start({
      x: mouseX - size / 2,
      y: mouseY - size / 2,
    });
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
    if (containerRef.current) {
      containerRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    if (containerRef.current) {
      containerRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200",
        `from-${fill}-50 via-${fill}-100 to-${fill}-200`,
        isHovered.current ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        width: size,
        height: size,
        transform: `translate3d(${x.get()}px, ${y.get()}px, 0)`,
      }}
    />
  );
}