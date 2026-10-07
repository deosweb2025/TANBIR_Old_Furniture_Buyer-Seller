import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Find Us</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Visit Our Store</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row">
            
            <div className="w-full lg:w-1/3 p-10 md:p-14 bg-primary text-white relative overflow-hidden flex flex-col justify-center">
              {/* Decorative accent lines */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[50px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50"></div>
              
              <div className="relative z-10 space-y-12">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <MapPin className="text-accent group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-3 tracking-wide">Address</h4>
                    <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base">
                      30B JUDGES COURT ROAD, KOLKATA <br />
                      (LANDMARK - GOPALNAGAR OLD MARKET) <br />
                      ALIPORE KOLKATA, West Bengal, 700027
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <Phone className="text-accent group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-3 tracking-wide">Call Us</h4>
                    <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base">
                      <a href={`tel:${siteData.contact.phone}`} className="hover:text-white transition-colors">
                        +91 {siteData.contact.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href={siteData.location.mapUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-accent hover:text-white transition-colors group"
                  >
                    <Navigation size={18} className="group-hover:translate-x-1 transition-transform" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 h-[500px] lg:h-auto relative group">
              <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <iframe
                src={siteData.location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
                className="w-full h-full grayscale-[50%] contrast-125 hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
