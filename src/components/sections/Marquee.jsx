"use client";
import React from 'react';

const Marquee = () => {
  const marqueeText = "TRAVEL IN STYLE";
  // Create an array to repeat the text enough times to fill the screen and allow smooth looping
  const items = Array(12).fill(marqueeText);

  return (
    <section className="relative w-full overflow-hidden bg-[#121212] py-[25px] flex items-center border-t border-b border-[#E5E5E5]">
      {/* 
        The marquee uses the animate-marquee utility defined in globals.css:
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); } 
      */}
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex shrink-0 items-center">
          {items.map((text, index) => (
            <span
              key={`marquee-1-${index}`}
              className="inline-block text-white font-display text-[24px] font-semibold tracking-[0.2em] leading-none px-[40px] uppercase"
              style={{
                fontFamily: 'var(--font-display)',
              }}
            >
              {text}
            </span>
          ))}
        </div>
        {/* Duplicate set for seamless looping */}
        <div className="flex shrink-0 items-center">
          {items.map((text, index) => (
            <span
              key={`marquee-2-${index}`}
              className="inline-block text-white font-display text-[24px] font-semibold tracking-[0.2em] leading-none px-[40px] uppercase"
              style={{
                fontFamily: 'var(--font-display)',
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Ensuring the marquee animation is available if not picked up from globals */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Marquee;