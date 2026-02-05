export default function About() {
  return (
    <div className="bg-background-dark text-white">
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16" data-reveal="slow">
        <div className="glass-effect rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl lift-on-hover">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About Us</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">About SSS AUTOMOBILE LIMITED</h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
            SSS AUTOMOBILE LIMITED is a UK-based vehicle maintenance and repair company committed to
            delivering reliable and honest automotive services.
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            We focus on quality workmanship, clear communication, and customer satisfaction. Every
            vehicle we work on is treated with care, whether it&apos;s a simple service or a complex
            repair.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10" data-reveal>
            <div className="rounded-2xl bg-card-dark/70 border border-white/10 p-6">
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-2">Company Name</p>
              <p className="text-white text-lg font-bold">SSS AUTOMOBILE LIMITED</p>
            </div>
            <div className="rounded-2xl bg-card-dark/70 border border-white/10 p-6">
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-2">Company Number</p>
              <p className="text-white text-lg font-bold">15076248</p>
            </div>
            <div className="rounded-2xl bg-card-dark/70 border border-white/10 p-6">
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-2">Director</p>
              <p className="text-white text-lg font-bold">Santokh Singh</p>
            </div>
          </div>

          <div className="rounded-2xl bg-primary/10 border border-primary/30 p-6">
            <p className="text-white/80 text-lg">
              Our aim is to build long-term trust with our customers by providing dependable service
              at fair prices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
