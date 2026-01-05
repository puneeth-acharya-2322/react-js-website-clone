"use client";
import React from 'react';

const VideoFeature = () => {
  const videoUrl = "https://mvstselect.com/cdn/shop/videos/c/vp/85d0cd5c2ca0417592a22831aafc048d/85d0cd5c2ca0417592a22831aafc048d.HD-1080p-4.8Mbps-35342740.mp4?v=0";

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F4F4]">
      {/* Container to maintain aspect ratio and full width impact */}
      <div className="relative w-full h-0 pb-[56.25%] sm:pb-[56.25%] lg:pb-[56.25%] overflow-hidden bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Cinematic overlay for text legibility if needed - though original is clean */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

        {/* Text content usually associated with these high-impact sections in the brand direction */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 pointer-events-none">
          <div className="mt-auto mb-12 sm:mb-20">
            <h2 className="text-white text-sm sm:text-base tracking-[0.3em] font-semibold uppercase mb-4 opacity-0 animate-fade-in">
              First Class Luggage for Road Warriors
            </h2>
            <p className="text-white text-xs sm:text-sm tracking-[0.2em] font-medium uppercase opacity-0 animate-fade-in-delayed">
              Travel in style
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fadeIn 1.2s ease-out 0.4s forwards;
        }
      `}</style>
    </section>
  );
};

export default VideoFeature;