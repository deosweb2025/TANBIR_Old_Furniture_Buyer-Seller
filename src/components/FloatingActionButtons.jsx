import React from 'react';
import { Phone } from 'lucide-react';
import { siteData } from '../data/siteData';

const FloatingActionButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${siteData.contact.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 relative group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
        </svg>
        <span className="absolute right-full mr-4 bg-black text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${siteData.contact.phone}`}
        aria-label="Call us"
        className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 relative group"
      >
        <Phone size={28} />
        <span className="absolute right-full mr-4 bg-black text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingActionButtons;

