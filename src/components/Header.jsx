import { NavLink } from "react-router-dom";
import { useState } from "react";
import Icon from "./Icon.jsx";
import diagnosticLogo from "./diagnostic.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
            <img src={diagnosticLogo} alt="SSS Automobile Limited logo" className="w-8 h-8 object-contain" />
          </div>
          <h2 className="text-white text-xl font-black tracking-tighter">SSS AUTOMOBILE LIMITED</h2>
        </NavLink>
        <div className="hidden md:flex items-center gap-10">
          <NavLink
            className="text-white/80 hover:text-primary text-sm font-medium transition-colors"
            to="/"
            onClick={() => window.history.replaceState(null, "", "/")}
          >
            Home
          </NavLink>
          <NavLink className="text-white/80 hover:text-primary text-sm font-medium transition-colors" to="/services">
            Services
          </NavLink>
          <NavLink className="text-white/80 hover:text-primary text-sm font-medium transition-colors" to="/about">
            About
          </NavLink>
          <NavLink className="text-white/80 hover:text-primary text-sm font-medium transition-colors" to="/#find-us">
            Find Us
          </NavLink>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all"
            to="/contact"
          >
            Book Now
          </NavLink>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle navigation">
          <Icon name="menu" className="text-white" />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-3 text-white/80">
            <NavLink
              to="/"
              onClick={() => {
                setOpen(false);
                window.history.replaceState(null, "", "/");
              }}
            >
              Home
            </NavLink>
            <NavLink to="/services" onClick={() => setOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink to="/#find-us" onClick={() => setOpen(false)}>
              Find Us
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Book Now
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
