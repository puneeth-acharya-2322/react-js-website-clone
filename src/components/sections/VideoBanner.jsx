import React from 'react';

/**
 * VideoBanner Section
 * 
 * A full-width auto-playing video banner section that acts as a visual divider
 * and mood piece for the travel lifestyle brand.
 * 
 * Features:
 * - Full-width layout
 * - Autoplay, Muted, Loop video
 * - Minimalist navigation overlay (Chevron)
 * - Purely visual/background-focused
 */

const VideoBanner = () => {
  const videoUrl = "https://mvstselect.com/cdn/shop/videos/c/vp/85d0cd5c2ca0417592a22831aafc048d/85d0cd5c2ca0417592a22831aafc048d.HD-1080p-4.8Mbps-35342740.mp4?v=0";

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full aspect-video md:aspect-[21/9] lg:h-[70vh] xl:h-[80vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Bottom indicator/scroll arrow as seen in screenshots */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path 
                d="M4 6L8 10L12 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative text overlay if any (content suggests "First Class Luggage for Road Warriors" might go here, 
          but based on screenshots, this section is a clean video divider) */}
      <div className="hidden">
        <h2>First Class Luggage for Road Warriors</h2>
        <p>Travel in style</p>
      </div>

      {/* Spacing for the next section as the circle button overlaps */}
      <div className="h-5 bg-background"></div>
    </section>
  );
};

export default VideoBanner;