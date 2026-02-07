import BookingForm from "../components/BookingForm.jsx";
import Icon from "../components/Icon.jsx";

export default function Contact() {
  return (
    <div className="bg-background-dark text-white">
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-[1280px] px-5 sm:px-6 md:px-10 pt-24 md:pt-28 pb-6" data-reveal="slow">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white mb-2">
            Book an Appointment
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl font-light">
            Need servicing, repairs, or a dashcam installed? Get in touch today.
          </p>
        </div>

        <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 px-5 sm:px-6 md:px-10 pb-16 sm:pb-20" data-reveal>
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-effect rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl lift-on-hover">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Icon name="calendar_month" className="text-primary" size={22} />
                Service Appointment
              </h2>
              <BookingForm />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 py-4">
              <div className="flex items-center gap-2">
                <Icon name="verified" className="text-primary" size={18} />
                <span className="font-bold text-xs uppercase tracking-tighter">Certified Mechanic</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="shield_check" className="text-primary" size={18} />
                <span className="font-bold text-xs uppercase tracking-tighter">Premium Parts</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="chat_bubble" className="text-primary" size={18} />
                <span className="font-bold text-xs uppercase tracking-tighter">Fast Turnaround</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="glass-effect rounded-xl overflow-hidden shadow-2xl lift-on-hover">
              <a
                href="https://www.google.com/maps/search/?api=1&query=14%20Westminster%20Gardens%2C%20Barking%2C%20England%2C%20IG11%200BJ"
                target="_blank"
                rel="noreferrer"
                className="block h-[240px] sm:h-[300px] w-full"
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
              <div className="p-4 sm:p-6 border-t border-white/10 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">Main Service Hub</h3>
                  <p className="text-white/50 text-sm">14 Westminster Gardens, Barking, IG11 0BJ</p>
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

            <div className="glass-effect rounded-xl p-6 sm:p-8 shadow-2xl lift-on-hover">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Icon name="call" className="text-primary" size={20} />
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  className="flex items-center gap-4 group p-2 rounded-lg hover:bg-white/5 transition-colors"
                  href="tel:+447399446426"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon name="call" className="text-primary group-hover:text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase">Reception</p>
                    <p className="text-lg font-bold">+44 7399446426</p>
                  </div>
                </a>
                <a
                  className="flex items-center gap-4 group p-2 rounded-lg hover:bg-white/5 transition-colors"
                  href="mailto:sssautomobilelimited@gmail.com"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon name="mail" className="text-primary group-hover:text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase">Email Support</p>
                    <p className="text-lg font-bold">sssautomobilelimited@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
