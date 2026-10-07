import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { siteData } from '../data/siteData';

const Hero = () => {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = siteData.hero.images;

  useEffect(() => {
    // Initial GSAP animation for text content
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Image slider interval
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2500); // 2.5s gives enough time to see the image before transition
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <section 
      id="hero" 
      ref={containerRef} 
      className="relative min-h-[100dvh] flex items-center bg-gradient-to-br from-[#fdfbf7] via-[#f9f5eb] to-[#f3e8d5] overflow-hidden pt-28 pb-8"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-20 h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6 lg:gap-12">
        
        {/* Top Text (Heading) */}
        <div className="hero-content flex flex-col items-start text-left pt-2 lg:pt-0 lg:col-start-1 lg:row-start-1 lg:self-end lg:pb-3">
          <span className="inline-block py-2 px-5 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-md shadow-sm">
            {siteData.hero.eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] mb-2 lg:mb-0 text-neutral-900 drop-shadow-sm">
            {siteData.hero.title}
          </h1>
        </div>

        {/* Image Slider */}
        <div className="w-full h-[40vh] lg:h-[60vh] relative rounded-[2rem] overflow-hidden shadow-2xl premium-border lg:col-start-2 lg:row-start-1 lg:row-span-2">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={img} 
                alt={`Hero image ${index + 1}`} 
                className="w-full h-full object-cover transform scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Bottom Text (Description & Buttons) */}
        <div className="hero-content flex flex-col items-start text-left lg:col-start-1 lg:row-start-2 lg:self-start lg:pt-3">
          <p className="text-base md:text-xl text-neutral-600 mb-6 lg:mb-8 max-w-2xl drop-shadow-sm font-light tracking-wide">
            {siteData.hero.description}
          </p>
          <div className="flex flex-wrap justify-start gap-4">
            <a 
              href={`tel:${siteData.contact.phone}`} 
              className="px-8 py-3.5 bg-accent text-white rounded-full font-bold text-base tracking-wide hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-[0_8px_32px_rgba(217,119,6,0.3)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1"
            >
              {siteData.hero.primaryCTA}
            </a>
            <a 
              href="#gallery" 
              className="px-8 py-3.5 bg-white border border-neutral-200 text-neutral-800 rounded-full font-bold text-base tracking-wide hover:bg-neutral-50 hover:text-primary transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1"
            >
              {siteData.hero.secondaryCTA}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

