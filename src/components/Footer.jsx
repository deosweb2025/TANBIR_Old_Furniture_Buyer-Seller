import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'What We Buy', href: '#services' },
    { name: 'How It Works', href: '#process' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-primary text-white pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: About */}
          <div className="lg:pr-4">
            <h3 className="font-serif text-3xl font-bold tracking-tight mb-6">
              {siteData.company.name.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? 'text-accent' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {siteData.company.description} We are committed to providing you with the best value and a seamless experience.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col lg:items-center">
            <div>
              <h4 className="text-xl font-bold mb-6 font-serif border-b-2 border-accent inline-block pb-2">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-2" />
                      <span className="transform group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif border-b-2 border-accent inline-block pb-2">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-gray-300">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span className="text-sm leading-relaxed">{siteData.location.address}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href={`tel:${siteData.contact.phone}`} className="hover:text-accent transition-colors">+91 {siteData.contact.phone}</a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${siteData.contact.email}`} className="text-sm hover:text-accent transition-colors break-all">{siteData.contact.email}</a>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif border-b-2 border-accent inline-block pb-2">Find Us</h4>
            <div className="w-full h-48 rounded-xl overflow-hidden border border-gray-700 shadow-lg relative group">
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
              <iframe
                src={siteData.location.mapUrl}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col justify-center items-center gap-2 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Tanbir Old Furniture.</p>
          <p>
            Powered by
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-300 hover:text-red-500 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
