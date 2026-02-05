import { NavLink } from "react-router-dom";
import Icon from "../components/Icon.jsx";

export default function Home() {
  return (
    <div>
      <section className="relative h-auto sm:h-[100svh] flex items-center pt-24 sm:pt-8 md:pt-20 pb-0 overflow-hidden hero-sheen" data-reveal="slow" data-hero>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
          <div
            className="w-full h-full bg-cover bg-bottom sm:bg-right bg-fixed mobile-bg-scroll scale-110 sm:scale-110 bg-zoom bg-pan hero-image-depth hero-bg-mobile hero-bg-mobile-image hero-mobile-static"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyHXgdXm6UHbW4aAvfsHt3QhsVuQJIClTk6Hv9HBGXzKbpRHphjH2XAwY_vivBRtABoGNCHyRo2wdU6nU98hUcsqdgYA85IYssmvgJw8RtcPickEuMdkRdUPU-zlgPkETUQObhGO7E3E29vcblAnP6jQznj3K8Q9fdwqQsvois1qwMISwXRZCSbZvl_R0o4ba9OyxtGy_FV6a1Dc13tlYPCxGGaeqZ5gPQUQ7ZS5Ed9E8cEUCAm2ie9Zp3H39t7ptEFbCE5QuQ5i8')",
            }}
          />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full hero-glow-orb"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full hero-glow-orb"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-20 pb-4 sm:pb-6">
          <div className="max-w-3xl pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 mb-4 sm:mb-6">
              <Icon name="verified" className="text-white" size={16} />
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Trusted Local Automotive Services
              </span>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-5 sm:mb-6 hero-title">
              Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Vehicle Maintenance</span> & Repair You Can Trust
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg font-semibold mb-5 max-w-2xl hero-sub drop-shadow">
              Low Competitive Rates for UBER/ TAXI Drivers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 hero-actions">
              <NavLink className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hero-glow hero-glow-pulse transition-all flex items-center justify-center gap-3" to="/contact">
                Book Appointment
                <Icon name="calendar_month" className="text-white" size={22} />
              </NavLink>
              <NavLink className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-3" to="/services">
                View Services
                <Icon name="arrow_forward" className="text-white" size={22} />
              </NavLink>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:hidden">
              <div className="p-4 rounded-2xl bg-card-dark/80 border border-white/10 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="people" className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-1">Tech</p>
                  <p className="text-white text-sm font-bold">Experienced Technician</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-card-dark/80 border border-white/10 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="shield_check" className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-1">Standards</p>
                  <p className="text-white text-sm font-bold">Quality Parts</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-card-dark/80 border border-white/10 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="chat_bubble" className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-1">Service</p>
                  <p className="text-white text-sm font-bold">Customer Focused</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-card-dark/80 border border-white/10 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="verified" className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-1">Pricing</p>
                  <p className="text-white text-sm font-bold">Transparent Rates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden lg:block py-10 bg-background-dark" data-reveal>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-card-dark/80 border border-white/10 shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="people" className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">Tech</p>
                <p className="text-white text-base font-bold">Experienced Technician</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-card-dark/80 border border-white/10 shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="shield_check" className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">Standards</p>
                <p className="text-white text-base font-bold">Quality Parts</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-card-dark/80 border border-white/10 shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="chat_bubble" className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">Service</p>
                <p className="text-white text-base font-bold">Customer Focused</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-card-dark/80 border border-white/10 shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="verified" className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">Pricing</p>
                <p className="text-white text-base font-bold">Transparent Rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background-dark" data-reveal>
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">Professional Vehicle Care</h3>
            </div>
            <p className="text-white/50 max-w-sm mb-2">
              We offer a range of professional vehicle services designed to keep your car running smoothly and safely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group p-6 sm:p-8 rounded-2xl bg-card-dark border border-white/5 hover:border-primary/50 transition-all hover:translate-y-[-8px] lift-on-hover">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Icon name="bolt" className="text-primary group-hover:text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Mechanical Services</h4>
              <p className="text-white/50 leading-relaxed mb-6">
                Mechanical repairs and diagnostics to identify and fix issues quickly and efficiently.
              </p>
              <div className="w-full h-48 rounded-lg overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Mechanic working with tools in a workshop"
                  src="https://pikwizard.com/pw/medium/103336327fcc24d1e92bab540c7c33a4.jpg"
                />
              </div>
            </div>
            <div className="group p-6 sm:p-8 rounded-2xl bg-card-dark border border-white/5 hover:border-primary/50 transition-all hover:translate-y-[-8px] lift-on-hover">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Icon name="shield_check" className="text-primary group-hover:text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Full Car Service</h4>
              <p className="text-white/50 leading-relaxed mb-6">
                Regular servicing to prevent costly repairs and keep your vehicle performing at its best.
              </p>
              <div className="w-full h-48 rounded-lg overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Mechanic servicing a vehicle"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7H2gqddvANq7ziDb1qYjOzCNZsNDDiIpZ9-WpgWdBrKGlelhRFCYzdx4LC8pQqZviVNkGFzjYLDAvm8Tq9naO7RJsLv1bHUO9Q4nEISI60KsH1JFjAsOOaqJ_f0s2z6fh1eGFq5rbKWNqDVLW9ob2y5xjqCLqNrzIx00PPRJRmuc9SgyzZOqna9lk1zN8crW1SomHWJJKZ4MzbjblZZMeyvpEIFDJkK6eASocoj58wl8Sjn7st0AJv_4ALyn2ahrOsBx4nXOMGi8"
                />
              </div>
            </div>
            <div className="group p-6 sm:p-8 rounded-2xl bg-card-dark border border-white/5 hover:border-primary/50 transition-all hover:translate-y-[-8px] lift-on-hover">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Icon name="camera" className="text-primary group-hover:text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Dashcam Installation</h4>
              <p className="text-white/50 leading-relaxed mb-6">
                Professional dashcam installation with clean routing, hardwiring, and secure cable management.
              </p>
              <div className="w-full h-48 rounded-lg overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Vehicle in a service bay"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkNbzqoM290ze-nw0hhxK0y8-aYrsdi51QErKLlZRNSgWa35Lyse4HTSgUgOPh0bvE3iPs-82-LS6wmbnNWKnaBQGyjdeSvv4mLD9fpFcd7tjq3LLdlUhibd-uF-66KPWUscERqmPk6Jo8Boutx-36AuPJ4FXBmEjKI8KjZARyOnCUad_b_68aTi0y6S6vk0QSYhl0ejZ33LaXlPntPOerYlNgNDju4mHOuhyO78fxic-oES72j767-RojwL06N-Qezmoji_UvNNc"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative h-[320px] sm:h-[380px] md:h-[400px] overflow-hidden bg-fixed bg-cover bg-center"
        data-reveal="slow"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaBfaPNpockZVm9Km7GTcDnzTc_kpZI08vYrZmECryYn9BZ5SESdxTu2giNal8J6kgfNrp3B83LrPZRL3sWS7c2R0EbV5IE4sLHPyCqv4ualK5WEfZysUB5E6kQVytamcOK-AnAMCdvt5cu2wB0mgef9ca1yaLTBZZ8iYKAOWzB9QcbVjnR494KIMLa5x7iDjTFZFJPKEEo7_OO3AFr62YjtD4JbwqxFLZI-_UMYP3K3CGgwwYXZ69lH2-hpHtpyVoBkKY5m0a_5I')",
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-background-dark/60 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-white text-4xl md:text-5xl font-black mb-6 hero-title">Focused on Safety, Reliability, and Value</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 font-medium italic">
              "Our priority is to keep your vehicle running smoothly while offering fair prices and dependable service."
            </p>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background-dark" data-reveal>
        <div className="container mx-auto px-5 sm:px-6">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 flex items-center gap-4">
            <Icon name="chat_bubble" className="text-primary" size={28} />
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-10 rounded-2xl bg-card-dark/50 border border-white/5 backdrop-blur-xl relative">
              <Icon name="format_quote" className="text-primary/20 absolute top-4 right-8" size={64} />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="star" className="text-primary" size={20} />
                  ))}
                </div>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  "Great service and very professional. My car was serviced on time and everything was explained clearly."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon name="chat_bubble" className="text-primary" size={22} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Customer Review</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-10 rounded-2xl bg-card-dark/50 border border-white/5 backdrop-blur-xl relative">
              <Icon name="format_quote" className="text-primary/20 absolute top-4 right-8" size={64} />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="star" className="text-primary" size={20} />
                  ))}
                </div>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  "Dashcam installation was neat and done properly. Would definitely recommend."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon name="chat_bubble" className="text-primary" size={22} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Customer Review</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="find-us" className="py-16 sm:py-24 bg-background-dark" data-reveal="slow">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left gap-4 mb-10">
            <div>
              <p className="text-primary font-bold tracking-widest uppercase text-sm">Find Us</p>
              <h2 className="text-white text-4xl md:text-5xl font-black">Our Location</h2>
            </div>
            <a
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all"
              href="https://www.google.com/maps/search/?api=1&query=14%20Westminster%20Gardens%2C%20Barking%2C%20England%2C%20IG11%200BJ"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-card-dark/70">
            <a
              href="https://www.google.com/maps/search/?api=1&query=14%20Westminster%20Gardens%2C%20Barking%2C%20England%2C%20IG11%200BJ"
              target="_blank"
              rel="noreferrer"
              className="block h-[260px] sm:h-[340px] md:h-[420px] w-full"
            >
              <iframe
                title="SSS Automobile Limited Location"
                className="w-full h-full border-0 pointer-events-none"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=14%20Westminster%20Gardens%2C%20Barking%2C%20England%2C%20IG11%200BJ&output=embed"
              ></iframe>
            </a>
            <div className="p-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-white font-semibold text-lg">Main Service Hub</p>
                <p className="text-white/50">14 Westminster Gardens, Barking, IG11 0BJ</p>
              </div>
              <a
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                href="https://www.google.com/maps/search/?api=1&query=14%20Westminster%20Gardens%2C%20Barking%2C%20England%2C%20IG11%200BJ"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="arrow_forward" className="text-white" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
