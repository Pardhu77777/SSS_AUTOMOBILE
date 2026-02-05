import Icon from "../components/Icon.jsx";

const services = [
  {
    title: "Mechanical Services",
    description:
      "We carry out a wide range of mechanical repairs and diagnostics to identify and fix issues quickly and efficiently.",
    includes: [
      "Engine diagnostics and repairs",
      "Brake repairs and replacements",
      "Suspension and steering work",
      "Battery replacement",
      "Clutch and gearbox checks",
      "General mechanical fault repairs",
    ],
    icon: "bolt",
    highlight:
      "Our goal is to get your vehicle back on the road safely with long-lasting results.",
  },
  {
    title: "Full Car Service",
    description:
      "Regular servicing helps prevent costly repairs and ensures your vehicle performs at its best.",
    includes: [
      "Engine oil and filter replacement",
      "Fluid level checks and top-ups",
      "Brake and tyre inspection",
      "Battery and charging system check",
      "General safety inspection",
    ],
    icon: "shield_check",
    highlight:
      "Suitable for most makes and models. Service intervals can be tailored to your vehicle’s needs.",
  },
  {
    title: "Dashcam Installation",
    description:
      "Protect yourself on the road with a professionally installed dashcam.",
    includes: [
      "Front dashcam installation",
      "Front and rear dashcam installation",
      "Hardwired installations for clean finish",
      "Secure cable management",
    ],
    icon: "camera",
    highlight:
      "Professional installation ensures your dashcam works correctly without damaging your vehicle.",
  },
];

export default function Services() {
  return (
    <div className="bg-background-dark text-white">
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-10 sm:pb-12" data-reveal="slow">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Services</p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">We offer a range of professional vehicle services.</h1>
        <p className="text-white/70 text-lg max-w-3xl">
          We offer a range of professional vehicle services designed to keep your car running smoothly and safely.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-16 sm:pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-reveal>
        {services.map((service) => (
          <article key={service.title} className="bg-card-dark/80 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl lift-on-hover">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon name={service.icon} className="text-primary" size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
            <p className="text-white/70 mb-6">{service.description}</p>
            <div className="space-y-3 mb-6">
              {service.includes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1">
                    <Icon name="verified" className="text-primary" size={16} />
                  </span>
                  <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-white/80 text-sm">
              {service.highlight}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
