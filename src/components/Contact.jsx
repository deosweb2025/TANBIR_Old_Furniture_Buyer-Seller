import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react';
import { siteData } from '../data/siteData';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-surface to-white text-primary relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-4 mb-4 rounded-full bg-accent/10 text-accent font-semibold text-sm tracking-wider uppercase border border-accent/20">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Ready to Sell Your Old Furniture?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Contact us today for the best value. Fill out the form below or reach us directly via phone or WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Contact Details Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-10"
          >
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                content: <span className="text-gray-600 leading-relaxed">{siteData.location.address}</span>
              },
              {
                icon: Phone,
                title: "Call or WhatsApp",
                content: (
                  <div className="flex flex-col space-y-1">
                    <a href={`tel:${siteData.contact.phone}`} className="text-gray-600 hover:text-accent font-medium transition-colors">+91 {siteData.contact.phone}</a>
                    <a href={`https://wa.me/91${siteData.contact.whatsapp}`} className="text-gray-600 hover:text-accent font-medium transition-colors">+91 {siteData.contact.whatsapp}</a>
                  </div>
                )
              },
              {
                icon: Mail,
                title: "Email Us",
                content: <a href={`mailto:${siteData.contact.email}`} className="text-gray-600 hover:text-accent font-medium transition-colors">{siteData.contact.email}</a>
              },
              {
                icon: Clock,
                title: "Business Hours",
                content: (
                  <div className="flex flex-col space-y-1">
                    <span className="text-gray-600">Monday - Sunday</span>
                    <span className="text-gray-800 font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                )
              }
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start space-x-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 premium-border">
                  <item.icon className="text-accent w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-2 font-serif text-primary">{item.title}</h3>
                  {item.content}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-12 rounded-[2rem] border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden premium-border"
          >
            {/* Subtle top border accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/40 via-accent to-accent/40"></div>
            
            <form className="relative z-10 flex flex-col space-y-7" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold tracking-wide text-gray-700 uppercase mb-3">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 text-primary placeholder-gray-400 transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold tracking-wide text-gray-700 uppercase mb-3">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="+91 00000 00000"
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 text-primary placeholder-gray-400 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold tracking-wide text-gray-700 uppercase mb-3">Details about your furniture</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="I have a vintage teakwood dining table to sell..."
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 text-primary placeholder-gray-400 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 mt-2 bg-primary text-white rounded-xl font-bold text-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
