import { ReactNode } from "react";

interface FeatureTitleProps {
  children: ReactNode;
}

const FeatureTitle = ({ children }: FeatureTitleProps) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

export default FeatureTitle;