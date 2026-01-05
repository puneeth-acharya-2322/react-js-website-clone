import React from 'react';

/**
 * Hero component for MVST Select website.
 * Cloning the hero video section showcasing the Essential Polycarbonate Collection
 * with overlay text and a "Shop Now" call-to-action button.
 */
export default function Hero() {
  const videoUrl = "https://mvstselect.com/cdn/shop/videos/c/vp/85d0cd5c2ca0417592a22831aafc048d/85d0cd5c2ca0417592a22831aafc048d.HD-1080p-4.8Mbps-35342740.mp4?v=0";
  const posterUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/MVST_Essential_Shooting_Final-8-16_9-9.jpg";

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '70vh', minHeight: '500px', maxHeight: '1000px' }}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterUrl}
          className="h-full w-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Dark Overlay for readability */}
        <div 
          className="absolute inset-0 bg-black/30 pointer-events-none" 
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-end pb-12 sm:pb-20 md:pb-24 px-6 sm:px-12 md:px-20 lg:px-24">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="flex flex-col items-start gap-4">
            {/* Subheading */}
            <p className="text-white text-[11px] sm:text-[13px] font-normal uppercase tracking-[0.1em] opacity-90 font-gt-standard">
              100% German Makrolon® Virgin Polycarbonate
            </p>
            
            {/* Main Heading */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold leading-[1.1] uppercase tracking-[0.05em] font-gt-standard">
              Essential Polycarbonate Collection
            </h1>

            {/* CTA Button */}
            <div className="mt-4">
              <a
                href="/collections/polycarbonate-collections"
                className="inline-block border border-white bg-transparent px-8 py-3 text-[12px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-black font-gt-standard"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Indicators (Visual only as per screenshot) */}
      <div className="absolute bottom-10 right-10 z-10 hidden md:flex items-center gap-2">
        <span className="h-[3px] w-6 bg-white opacity-40"></span>
        <span className="h-[3px] w-12 bg-white"></span>
        <span className="h-[3px] w-6 bg-white opacity-40"></span>
      </div>
    </section>
  );
}