import { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      <Link to="/" className="text-xl font-bold text-primary">
        ResumeAI
      </Link>
      <MenuItem setActive={setActive} active={active} item="For HR">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink to="/hr/screening">Resume Screening</HoveredLink>
          <HoveredLink to="/hr/analytics">Analytics</HoveredLink>
          <HoveredLink to="/hr/team">Team Management</HoveredLink>
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="For Students">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink to="/students/builder">Resume Builder</HoveredLink>
          <HoveredLink to="/students/templates">Templates</HoveredLink>
          <HoveredLink to="/students/tips">Career Tips</HoveredLink>
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="How It Works">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink to="/features">Features</HoveredLink>
          <HoveredLink to="/process">Process</HoveredLink>
          <HoveredLink to="/testimonials">Testimonials</HoveredLink>
        </div>
      </MenuItem>
      <HoveredLink to="/contact">Contact Us</HoveredLink>
      <Button className="bg-primary text-white px-6 py-2 rounded-full hover:opacity-90">
        Get Started
      </Button>
    </Menu>
  );
};

export default Navbar;