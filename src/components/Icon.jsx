export default function Icon({ name, className = "", size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (name) {
    case "menu":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "electric_car":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 13h1.5l1.2-4.2A3 3 0 0 1 8.6 7h6.8a3 3 0 0 1 2.9 1.8L19.5 13H21" />
          <path d="M5 13h14v4a2 2 0 0 1-2 2h-1" />
          <path d="M8 19H6a2 2 0 0 1-2-2v-4" />
          <circle cx="7.5" cy="19" r="1.5" />
          <circle cx="16.5" cy="19" r="1.5" />
        </svg>
      );
    case "verified":
      return (
        <svg {...common} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.18" />
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8.5 12.5l2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "calendar_month":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 9h18" />
          <path d="M7 12h3M7 16h3M12 12h3M12 16h3" />
        </svg>
      );
    case "arrow_forward":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case "biotech":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3c4 2 6 6 6 10s-2 8-6 10" />
          <path d="M17 3c-4 2-6 6-6 10s2 8 6 10" />
          <path d="M9 7h6M9 11h6M9 15h6" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      );
    case "auto_fix_high":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20l6-6" />
          <path d="M14 4l6 6-6 6-6-6 6-6z" />
          <path d="M3 7h4M17 7h4M12 3v4M12 17v4" />
        </svg>
      );
    case "chat_bubble":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16v11a3 3 0 0 1-3 3H9l-5 3V4z" />
        </svg>
      );
    case "people":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="9" r="3" />
          <circle cx="16" cy="9" r="3" />
          <path d="M3 20c0-3 3-5 6-5" />
          <path d="M21 20c0-3-3-5-6-5" />
        </svg>
      );
    case "shield_check":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3 6 6.6 1-4.8 4.7 1.1 6.6L12 17.8 6.1 20.3l1.1-6.6L2.4 9l6.6-1L12 2z" />
        </svg>
      );
    case "format_quote":
      return (
        <svg {...common} className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 7h4v6H6V9c0-2.2 1.8-4 4-4h1v2H9c-1.1 0-2 .9-2 2v-2zm10 0h4v6h-5V9c0-2.2 1.8-4 4-4h1v2h-2c-1.1 0-2 .9-2 2v-2z" />
        </svg>
      );
    case "public":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "call":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 4.5l3 1-1.2 3c1.4 2.4 3.3 4.3 5.7 5.7l3-1.2 1 3c.3 1-0.2 2-1.2 2.3-1.2.4-2.6.3-3.9-.2-3.3-1.3-6.7-4.7-8-8-.5-1.3-.6-2.7-.2-3.9.3-1 1.3-1.5 2.3-1.2z" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common} className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h4l2-2h4l2 2h4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    default:
      return null;
  }
}
