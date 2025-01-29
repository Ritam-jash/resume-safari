import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureDescriptionProps {
  children: ReactNode;
}

const FeatureDescription = ({ children }: FeatureDescriptionProps) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export default FeatureDescription;