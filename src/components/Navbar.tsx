import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./ui/navbar-menu";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/web-dev">Web Development</HoveredLink>
            <HoveredLink to="/interface-design">Interface Design</HoveredLink>
            <HoveredLink to="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink to="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Resume Builder"
              href="/resume-builder"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Create professional resumes with AI assistance."
            />
            <ProductItem
              title="CV Templates"
              href="/cv-templates"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Choose from our collection of modern CV templates."
            />
            <ProductItem
              title="Career Tools"
              href="/career-tools"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Essential tools for your career development."
            />
            <ProductItem
              title="AI Assistant"
              href="/ai-assistant"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Get personalized career advice with our AI assistant."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/hobby">Basic Plan</HoveredLink>
            <HoveredLink to="/individual">Pro Plan</HoveredLink>
            <HoveredLink to="/team">Team Plan</HoveredLink>
            <HoveredLink to="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;