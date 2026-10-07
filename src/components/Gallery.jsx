import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { siteData } from '../data/siteData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const sectionRef = useRef(null);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-white relative">
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1 px-4 mb-4 rounded-full bg-surface text-accent font-semibold text-sm tracking-[0.2em] uppercase border border-gray-100">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">A Curated Collection</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Explore a selection of the exquisite premium furniture we have evaluated, curated, and transitioned over the years.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {siteData.gallery.slice(0, visibleCount).map((image, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: (index % 4) * 0.1 }}
              className="gallery-item cursor-pointer overflow-hidden rounded-2xl group relative aspect-square shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-500"
              onClick={() => setSelectedImage({ src: image, index })}
            >
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/90 text-white flex items-center justify-center mb-4 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-75 shadow-lg">
                  <ZoomIn size={20} />
                </div>
                <span className="text-white text-xs tracking-[0.2em] uppercase font-semibold transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  View Detail
                </span>
              </div>
              
              <img 
                src={image} 
                alt={`Gallery piece ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Load More / Show Less Controls */}
        <div className="mt-20 flex justify-center w-full relative z-20">
          {visibleCount < siteData.gallery.length ? (
            <button 
              onClick={() => setVisibleCount(siteData.gallery.length)}
              className="px-10 py-4 bg-primary text-white rounded-xl font-bold text-sm tracking-wider uppercase hover:bg-accent hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Load Full Gallery
            </button>
          ) : (
            <button 
              onClick={() => setVisibleCount(8)}
              className="px-10 py-4 bg-white border border-gray-200 text-primary rounded-xl font-bold text-sm tracking-wider uppercase hover:bg-surface hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white p-3 hover:bg-white/10 rounded-full transition-all z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} strokeWidth={1.5} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
                <img 
                  src={selectedImage.src} 
                  alt={`Gallery zoomed ${selectedImage.index + 1}`} 
                  className="w-full h-full object-contain max-h-[80vh]"
                />
              </div>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-[0.2em] uppercase font-light">
                Tanbir Old Furniture &mdash; Collection
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
