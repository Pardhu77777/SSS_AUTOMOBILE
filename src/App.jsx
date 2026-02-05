import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";

const pageTitles = {
  "/": "SSS AUTOMOBILE LIMITED",
  "/services": "SSS AUTOMOBILE LIMITED",
  "/about": "SSS AUTOMOBILE LIMITED",
  "/contact": "SSS AUTOMOBILE LIMITED",
  "/privacy": "SSS AUTOMOBILE LIMITED",
  "/terms": "SSS AUTOMOBILE LIMITED",
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || pageTitles["/"];
    document.title = title;
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <ScrollToTop />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
