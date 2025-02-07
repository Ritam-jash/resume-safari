
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";
import { GradientButton } from "./ui/gradient-button";
import { StarBorder } from "./ui/star-border";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#060606]/80 backdrop-blur-sm">
      <Menu setActive={setActive} className="px-4 md:px-6 lg:px-8 py-2">
        <Link to="/" className="text-lg md:text-xl font-bold text-primary mr-4 md:mr-8 whitespace-nowrap">
          ResumeAI
        </Link>
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="For HR"
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
          >
            <StarBorder className="cursor-pointer" speed="6s">
              <div className="flex flex-col space-y-4 text-sm p-4">
                <HoveredLink to="/features">Features</HoveredLink>
                <HoveredLink to="/process">Process</HoveredLink>
                <HoveredLink to="/testimonials">Testimonials</HoveredLink>
              </div>
            </StarBorder>
          </MenuItem>
          <StarBorder as={Link} to="/contact" className="cursor-pointer" speed="4.5s">
            Contact Us
          </StarBorder>
        </div>
        <div className="hidden md:block ml-auto">
          <GradientButton>Get Started</GradientButton>
        </div>
      </Menu>
    </nav>
  );
};

export default Navbar;

