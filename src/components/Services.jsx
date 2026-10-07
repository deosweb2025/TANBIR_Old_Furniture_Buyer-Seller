import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);



  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#fdfbf7] via-[#f9f5eb] to-[#f3e8d5] relative overflow-hidden">
      {/* Decorative luxury gradient blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="services-header text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-4 mb-4 rounded-full bg-accent/10 text-accent font-semibold text-sm tracking-[0.2em] uppercase border border-accent/20">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary tracking-tight">What We Buy & Sell</h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            We deal in a wide variety of old and used furniture, offering premium market valuation, expert curation, and a seamless transaction experience.
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8"
        >
          {siteData.services.slice(0, visibleCount).map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: (index % 3) * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="service-card group flex flex-col relative bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-white premium-border"
            >
              <div className="h-72 overflow-hidden relative">
                {/* Dark Gradient Overlay for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Luxury Number Badge */}
                <div className="absolute top-6 right-6 bg-primary/80 backdrop-blur-md text-white font-serif font-bold w-12 h-12 flex items-center justify-center rounded-full text-lg z-20 shadow-lg border border-white/20 transform group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow relative z-20 bg-white">
                <h3 className="text-2xl font-bold text-primary mb-4 font-serif line-clamp-1 group-hover:text-accent transition-colors tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-600 line-clamp-2 flex-grow font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="mt-auto flex items-center group/btn relative">
                  <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] group-hover/btn:text-accent transition-colors z-10 bg-white pr-4">
                    Explore Detail
                  </span>
                  <div className="h-[1px] flex-grow bg-gray-200 group-hover:bg-accent/50 transition-colors relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-700 ease-out"></div>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 text-accent">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More / Show Less Controls */}
        <div className="mt-20 flex justify-center w-full relative z-10 pb-8">
          {visibleCount < siteData.services.length ? (
            <button 
              onClick={() => setVisibleCount(siteData.services.length)}
              className="px-12 py-5 bg-primary text-white rounded-full font-bold text-sm tracking-[0.2em] uppercase hover:bg-accent transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(217,119,6,0.3)]"
            >
              Load Full Catalog
            </button>
          ) : (
            <button 
              onClick={() => setVisibleCount(6)}
              className="px-12 py-5 bg-white border border-gray-200 text-primary rounded-full font-bold text-sm tracking-[0.2em] uppercase hover:bg-surface transition-all duration-500 shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
            >
              Show Less
            </button>
          )}
        </div>

        {/* Modal for Service Details */}
        {typeof document !== 'undefined' && createPortal(
          <AnimatePresence>
            {selectedService && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 bg-primary/95 backdrop-blur-xl"
                onClick={() => setSelectedService(null)}
              >
                <button
                  className="absolute top-6 right-6 z-20 w-12 h-12 text-white/50 hover:text-white rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                  onClick={() => setSelectedService(null)}
                >
                  <X strokeWidth={1.5} size={32} />
                </button>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] max-w-5xl w-full flex flex-col md:flex-row relative max-h-[90vh] md:max-h-[80vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Image */}
                  <div className="md:w-1/2 h-64 md:h-auto shrink-0 relative">
                    <div className="absolute inset-0 bg-primary/10 z-10"></div>
                    <img 
                      src={selectedService.image} 
                      alt={selectedService.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Modal Content */}
                  <div className="md:w-1/2 flex flex-col bg-surface h-full max-h-[90vh] md:max-h-[80vh]">
                    {/* Scrollable Text Area */}
                    <div className="flex-1 overflow-y-auto p-8 md:p-12 pb-6">
                      <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4 block border border-accent/20 bg-accent/5 px-3 py-1 rounded-full w-fit shadow-sm">
                        Catalog Item
                      </span>
                      <h3 className="text-4xl font-serif font-bold text-primary mb-6 tracking-tight">
                        {selectedService.title}
                      </h3>
                      <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mb-8 shrink-0"></div>
                      
                      <p className="text-gray-600 leading-relaxed font-light text-lg">
                        {selectedService.description}
                        <br /><br />
                        We offer the highest market valuation and handle all logistics for a seamless transaction. Send us photos of your items today for an instant quote.
                      </p>
                    </div>
                    
                    {/* Sticky Action Buttons */}
                    <div className="p-8 md:p-12 pt-6 border-t border-gray-200 bg-surface/80 backdrop-blur-md shrink-0">
                      <div className="flex flex-col xl:flex-row gap-4">
                        <a 
                          href={`tel:${siteData.contact.phone}`} 
                          className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-primary text-white rounded-xl font-bold text-sm tracking-wider uppercase hover:bg-accent transition-all duration-300 hover:shadow-[0_10px_20px_rgba(217,119,6,0.3)] hover:-translate-y-1 group"
                        >
                          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span>Call Now</span>
                        </a>
                        <a 
                          href={`https://wa.me/91${siteData.contact.whatsapp}`} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-xl font-bold text-sm tracking-wider uppercase hover:bg-[#20bd5a] transition-all duration-300 hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 group"
                        >
                          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Services;
