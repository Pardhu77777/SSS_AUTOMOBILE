import { useState } from "react";
import Icon from "./Icon.jsx";

const emailRecipient = "sssautomobilelimited@gmail.com";

const initialState = {
  name: "",
  phone: "",
  message: "",
};

export default function BookingForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.phone.trim()) nextErrors.phone = "Please provide a phone number.";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent("Service Appointment Request");
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\nPhone Number: ${formData.phone}\n\nMessage:\n${formData.message || "(none)"}`
    );

    window.location.href = `mailto:${emailRecipient}?subject=${subject}&body=${body}`;
    setFormData(initialState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">Full Name</span>
          <input
            className="bg-white/5 border border-white/10 rounded-lg h-14 px-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-0 transition-all"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            type="text"
          />
          {errors.name && <span className="text-red-300 text-xs">{errors.name}</span>}
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">Phone Number</span>
          <input
            className="bg-white/5 border border-white/10 rounded-lg h-14 px-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-0 transition-all"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44 "
            type="tel"
          />
          {errors.phone && <span className="text-red-300 text-xs">{errors.phone}</span>}
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">Message</span>
        <textarea
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-0 transition-all"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about the service you need."
        />
      </label>
      <button className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest h-16 rounded-lg transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-[0.98]" type="submit">
        <Icon name="verified" className="text-white" size={22} />
        Confirm Booking
      </button>
    </form>
  );
}
