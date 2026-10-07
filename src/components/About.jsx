import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';
import { CheckCircle2, Award, Clock, Banknote } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative luxury elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface/50 -skew-x-12 transform origin-top pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Image Section - Editorial Luxury Layout */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative h-[500px] lg:h-[650px] flex items-center justify-center"
          >
            {/* Background luxury accent shape */}
            <div className="absolute top-[10%] left-[5%] w-3/4 h-[70%] border border-accent/20 rounded-[2rem] -rotate-3 transition-transform duration-700 hover:rotate-0"></div>

            {/* Main Image */}
            <div className="relative w-[75%] h-[75%] rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden group z-10 premium-border">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img 
                src={siteData.about.images[0]} 
                alt="About" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
            </div>

            {/* Overlapping Secondary Image */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="absolute bottom-0 right-[5%] w-[55%] h-[50%] z-20"
            >
              <div className="w-full h-full rounded-3xl bg-white shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-4 border-white overflow-hidden group premium-border">
                <img 
                  src={siteData.about.images[1]} 
                  alt="Furniture Detail" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
              </div>
            </motion.div>
            
            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-[15%] right-[5%] bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 z-30 flex items-center gap-4"
            >
              <div className="text-4xl font-serif font-bold text-accent">10<span className="text-primary">+</span></div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest leading-tight">Years<br/>Trust</div>
            </motion.div>

          </motion.div>

          {/* Content Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 about-text"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block py-1 px-4 rounded-full bg-accent/5 text-accent font-semibold text-xs tracking-[0.2em] uppercase border border-accent/10">
                Our Story
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary font-serif tracking-tight leading-[1.1]">
              {siteData.about.title}
            </motion.h2>
            
            <motion.div variants={itemVariants} className="w-20 h-[2px] bg-gradient-to-r from-accent to-transparent mb-8"></motion.div>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
              {siteData.about.description}
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
              Our curated selection spans decades of design, offering you everything from timeless vintage classics to modern utility pieces. Whether you are looking to declutter your home or find that perfect statement piece, we ensure a seamless, transparent, and rewarding experience.
            </motion.p>

            {/* Premium Feature Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
              {[
                { icon: CheckCircle2, text: "Best Market Value" },
                { icon: Clock, text: "Instant Pickup" },
                { icon: Award, text: "Trusted Appraisals" },
                { icon: Banknote, text: "Hassle-Free Payment" }
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-primary tracking-wide text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-12 pt-10 border-t border-gray-100 relative">
              <div className="absolute top-0 left-0 w-24 h-[1px] bg-accent"></div>
              <div>
                <h4 className="text-5xl font-serif font-bold text-primary mb-2">10<span className="text-accent">+</span></h4>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Years Experience</p>
              </div>
              <div>
                <h4 className="text-5xl font-serif font-bold text-primary mb-2">1000<span className="text-accent">+</span></h4>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Items Traded</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
