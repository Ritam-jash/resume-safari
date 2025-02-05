import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";
import { GradientButton } from "./ui/gradient-button";
import { StarBorder } from "./ui/star-border";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      <Link to="/" className="text-xl font-bold text-primary mr-8">
        ResumeAI
      </Link>
      <MenuItem 
        setActive={setActive} 
        active={active} 
        item="For HR"
        className="mx-6"
      >
        <StarBorder className="cursor-pointer" speed="4s">
          <div className="flex flex-col space-y-4 text-sm p-4">
            <HoveredLink to="/hr/screening">Resume Screening</HoveredLink>
            <HoveredLink to="/hr/analytics">Analytics</HoveredLink>
            <HoveredLink to="/hr/team">Team Management</HoveredLink>
          </div>
        </StarBorder>
      </MenuItem>
      <MenuItem 
        setActive={setActive} 
        active={active} 
        item="For Students"
        className="mx-6"
      >
        <StarBorder className="cursor-pointer" speed="5s">
          <div className="flex flex-col space-y-4 text-sm p-4">
            <HoveredLink to="/students/builder">Resume Builder</HoveredLink>
            <HoveredLink to="/students/templates">Templates</HoveredLink>
            <HoveredLink to="/students/tips">Career Tips</HoveredLink>
          </div>
        </StarBorder>
      </MenuItem>
      <MenuItem 
        setActive={setActive} 
        active={active} 
        item="How It Works"
        className="mx-6"
      >
        <StarBorder className="cursor-pointer" speed="6s">
          <div className="flex flex-col space-y-4 text-sm p-4">
            <HoveredLink to="/features">Features</HoveredLink>
            <HoveredLink to="/process">Process</HoveredLink>
            <HoveredLink to="/testimonials">Testimonials</HoveredLink>
          </div>
        </StarBorder>
      </MenuItem>
      <StarBorder as={Link} to="/contact" className="cursor-pointer mx-6" speed="4.5s">
        Contact Us
      </StarBorder>
      <div className="ml-8">
        <GradientButton>Get Started</GradientButton>
      </div>
    </Menu>
  );
};

export default Navbar;