"use client";
import React from 'react';

/**
 * AnnouncementBar Component
 * 
 * Clones the black announcement bar at the very top of the page.
 * Features:
 * - Accessibility trigger on the left
 * - Centered scrolling carousel for free shipping message
 * - Black background (#121212) with white text
 * - Minimalist industrial aesthetic
 */

const AnnouncementBar = () => {
  return (
    <aside className="relative z-[100] bg-[#121212] w-full border-b border-[#2a2a2a]">
      <div className="container mx-auto px-5 lg:px-10 h-[40px] flex items-center justify-between text-[#FFFFFF] font-sans selection:bg-white selection:text-black">
        
        {/* Left Section: Accessibility Trigger */}
        <div className="flex-none hidden md:block">
          <button 
            type="button"
            className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] hover:opacity-70 transition-opacity duration-300 group"
            aria-label="Open accessibility options"
          >
            <span className="relative">
              ACCESSIBILITY
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
            <div className="w-[14px] h-[14px] flex items-center justify-center border border-white rounded-full overflow-hidden">
               <svg 
                viewBox="0 0 100 100" 
                className="w-[8px] h-[8px] fill-current"
                aria-hidden="true"
               >
                <path d="M50 12.5c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5-12.5-5.6-12.5-12.5 5.6-12.5 12.5-12.5zM81.3 37.5h-18.8v25l6.3 25h-12.5l-6.3-18.8-6.3 18.8h-12.5l6.3-25v-25h-18.8v-12.5h62.5v12.5z" />
              </svg>
            </div>
          </button>
        </div>

        {/* Center Section: Scrolling Carousel */}
        <div className="flex-1 flex justify-center overflow-hidden">
          <div className="relative w-full max-w-[800px] overflow-hidden whitespace-nowrap">
            <div className="animate-marquee inline-block py-1">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] mx-8 lg:mx-16">
                FREE SHIPPING & RETURNS for all Contiguous us and select Canada & Europe orders
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] mx-8 lg:mx-16">
                FREE SHIPPING & RETURNS for all Contiguous us and select Canada & Europe orders
              </span>
            </div>
            {/* Overlay gradients for smooth fade in/out if needed, though clean cut is common in this style */}
          </div>
        </div>

        {/* Right Spacer to preserve centering (matches Accessibility width on desktop) */}
        <div className="flex-none hidden md:block w-[110px]"></div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </aside>
  );
};

export default AnnouncementBar;