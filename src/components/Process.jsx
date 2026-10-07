import React from 'react';
import { motion } from 'framer-motion';
import { Camera, CircleDollarSign, Truck } from 'lucide-react';
import { siteData } from '../data/siteData';

const Process = () => {
  const processSteps = [
    {
      id: 1,
      title: "Send Us Photos",
      description: "Take clear photos of the furniture or items you want to sell and send them to us on WhatsApp.",
      icon: <Camera className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Get Best Valuation",
      description: "Our experts will review your items and offer you the highest possible market price instantly.",
      icon: <CircleDollarSign className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Free Pickup & Cash",
      description: "We handle the heavy lifting! We'll pick up the furniture and hand you cash on the spot.",
      icon: <Truck className="w-8 h-8" />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="process" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative luxury gradient blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="inline-block py-1 px-4 mb-4 rounded-full bg-accent/10 text-accent font-semibold text-sm tracking-[0.2em] uppercase border border-accent/20">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary tracking-tight">How To Sell Your Furniture</h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Selling your old furniture doesn't have to be a hassle. We've streamlined our process into three simple steps so you can get paid quickly and effortlessly.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10"
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.id} 
                variants={itemVariants}
                className="relative group"
              >
                <div className="h-full bg-white rounded-3xl p-10 flex flex-col items-center text-center relative overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] premium-border">
                  
                  {/* Subtle Top Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Background Number Watermark */}
                  <div className="absolute -right-6 -bottom-6 text-[180px] font-serif font-black text-gray-50/80 select-none pointer-events-none group-hover:text-accent/5 transition-colors duration-500 leading-none">
                    {step.id}
                  </div>

                  {/* Icon Wrapper */}
                  <div className="relative w-24 h-24 mb-10 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_10px_30px_-10px_rgba(217,119,6,0.5)] group-hover:scale-110 z-10">
                    <div className="absolute inset-0 rounded-full border border-accent/20 scale-[1.15] group-hover:scale-[1.25] transition-transform duration-500 opacity-50"></div>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4 font-serif relative z-10 tracking-wide">{step.title}</h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light relative z-10 flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center relative z-10"
        >
          <a 
            href={`https://wa.me/91${siteData.contact.whatsapp}?text=Hi,%20I%20have%20some%20old%20furniture%20to%20sell.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-white rounded-full font-bold text-sm tracking-[0.2em] uppercase hover:bg-accent transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(217,119,6,0.3)] group"
          >
            <span>Start on WhatsApp</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
