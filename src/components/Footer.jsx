import { NavLink } from "react-router-dom";
import Icon from "./Icon.jsx";
import diagnosticLogo from "./diagnostic.png";

export default function Footer() {
  return (
    <footer className="bg-black py-6 sm:py-8 border-t border-white/5">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 mb-4">
          <div className="lift-on-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                <img src={diagnosticLogo} alt="SSS Automobile Limited logo" className="w-7 h-7 object-contain" />
              </div>
              <h2 className="text-white text-base sm:text-lg font-black tracking-tighter uppercase">SSS AUTOMOBILE LIMITED</h2>
            </div>
            <p className="text-white/40 max-w-sm mb-4 text-sm sm:text-base">
              Professional maintenance and repair of motor vehicles.
              Reliable service you can trust.
            </p>
            <div className="flex gap-3">
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <Icon name="public" className="text-white" size={18} />
              </a>
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <Icon name="mail" className="text-white" size={18} />
              </a>
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <Icon name="call" className="text-white" size={18} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-2 lg:gap-10">
            <div className="lift-on-hover">
              <h6 className="text-white font-bold mb-3">Quick Links</h6>
              <ul className="space-y-2">
                <li>
                  <NavLink className="text-white/40 hover:text-white transition-colors text-sm" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white/40 hover:text-white transition-colors text-sm" to="/services">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white/40 hover:text-white transition-colors text-sm" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white/40 hover:text-white transition-colors text-sm" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="lift-on-hover">
              <h6 className="text-white font-bold mb-3">Our Services</h6>
              <ul className="space-y-2">
                <li>
                  <span className="text-white/40 text-sm">Mechanical Repairs</span>
                </li>
                <li>
                  <span className="text-white/40 text-sm">Full Car Service</span>
                </li>
                <li>
                  <span className="text-white/40 text-sm">Dashcam Installation</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lift-on-hover">
            <h6 className="text-white font-bold mb-3">Find Us</h6>
            <p className="text-white/40 text-sm sm:text-base">14 Westminster Gardens, Barking, England, IG11 0BJ</p>
          </div>
        </div>
        <div className="pt-2 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/20 text-xs">© 2026 SSS AUTOMOBILE LIMITED. All rights reserved.</p>
          <div className="flex gap-6">
            <NavLink className="text-white/20 hover:text-white transition-colors text-xs" to="/privacy">
              Privacy Policy
            </NavLink>
            <NavLink className="text-white/20 hover:text-white transition-colors text-xs" to="/terms">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
