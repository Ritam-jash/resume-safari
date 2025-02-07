
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "lucide-react";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";
import { GradientButton } from "./ui/gradient-button";
import { StarBorder } from "./ui/star-border";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#060606]/80 backdrop-blur-sm">
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg md:text-xl font-bold text-primary whitespace-nowrap">
            ResumeAI
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <MenuItem setActive={setActive} active={active} item="For HR">
              <StarBorder className="cursor-pointer" speed="4s">
                <div className="flex flex-col space-y-4 text-sm p-4">
                  <HoveredLink to="/hr/screening">Resume Screening</HoveredLink>
                  <HoveredLink to="/hr/analytics">Analytics</HoveredLink>
                  <HoveredLink to="/hr/team">Team Management</HoveredLink>
                </div>
              </StarBorder>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="For Students">
              <StarBorder className="cursor-pointer" speed="5s">
                <div className="flex flex-col space-y-4 text-sm p-4">
                  <HoveredLink to="/students/builder">Resume Builder</HoveredLink>
                  <HoveredLink to="/students/templates">Templates</HoveredLink>
                  <HoveredLink to="/students/tips">Career Tips</HoveredLink>
                </div>
              </StarBorder>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="How It Works">
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
            <GradientButton>Get Started</GradientButton>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/hr/screening" className="text-white hover:text-primary">Resume Screening</Link>
              <Link to="/hr/analytics" className="text-white hover:text-primary">Analytics</Link>
              <Link to="/hr/team" className="text-white hover:text-primary">Team Management</Link>
              <Link to="/students/builder" className="text-white hover:text-primary">Resume Builder</Link>
              <Link to="/students/templates" className="text-white hover:text-primary">Templates</Link>
              <Link to="/students/tips" className="text-white hover:text-primary">Career Tips</Link>
              <Link to="/features" className="text-white hover:text-primary">Features</Link>
              <Link to="/process" className="text-white hover:text-primary">Process</Link>
              <Link to="/testimonials" className="text-white hover:text-primary">Testimonials</Link>
              <Link to="/contact" className="text-white hover:text-primary">Contact Us</Link>
              <GradientButton className="w-full">Get Started</GradientButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
