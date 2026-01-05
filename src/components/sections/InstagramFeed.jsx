"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * InstagramFeed Component
 * Clones the "MVST on Instagram" section with pixel-perfect accuracy.
 * Features a horizontal slider for social posts.
 */

const FEED_ITEMS = [
  {
    id: 1,
    type: "image",
    url: "https://mvstselect.com/cdn/shop/files/Y-jaydonguiler-Img-14-Unlimited.jpg?v=1743235036&width=800",
    alt: "Aluminum suitcase close up",
  },
  {
    id: 2,
    type: "video",
    url: "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQOBfirjFb2SrXQHrM5-Lk3fipzYttP3UYDhqxB0AJB2FzuaCPLi5RybP-Hef3VwBQe-lacXaVZN15WA9-TMSdbNBlrQ0dFHkXvqp5I.mp4?_nc_cat=100&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=Jv6GYz9RgUQQ7kNvwE79AxM&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTE3NTQ2MjQ0MDk4MjUyNywiYXNzZXRfYWdlX2RheXMiOjMsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjo0NSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_gid=F3zL6pnWhvr19TWgTCp39Q&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQEdhz8DiBdVB9xhbL62r2ynVs9lUY-uLryf0CAfvEHk86_LTChhQ_kX0DuSttq7t86goF2GPHBN&vs=17f32e82ba9efdbd&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9BMDQ3RDNFMzkzQ0FDMkZDNDA2NkM0RkUxRjA2QTE5QV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQUpkWnlSaG9JMGpiMHNHQUJuWGhYcFN2SmdVYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm_t_u0_XElgQVAigCQzMsF0BGyp--dsi0GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&oh=00_AfqkN8MX0v9AqtNFIZqoepewn3IENxHtGsVr9dR8kwP6WQ&oe=695D261D",
    poster: "https://mvstselect.com/cdn/shop/files/XU_03092_1.png?v=1743388283&width=800",
  },
  {
    id: 3,
    type: "image",
    url: "https://mvstselect.com/cdn/shop/files/Y-vadymbattenko-Img-7-Unlimited_fc9d5d19-0424-41fc-870c-ae39250e8f64.jpg?v=1762134581&width=800",
    alt: "Suitcase in a convertible car",
  },
  {
    id: 4,
    type: "image",
    url: "https://mvstselect.com/cdn/shop/files/Y4A6857-2-4_5.jpg?v=1755853426&width=800",
    alt: "Suitcase lifestyle shot",
  }
];

export default function InstagramFeed() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Average item width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 400);
    }
  };

  return (
    <section className="bg-[#F4F4F4] pt-[80px] pb-[40px] overflow-hidden">
      <div className="container mx-auto px-10">
        <h2 className="text-[1.5rem] font-semibold tracking-[0.2em] text-center mb-10 text-[#121212] uppercase">
          MVST on Instagram
        </h2>

        <div className="relative group">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] rounded-full bg-white shadow-md flex items-center justify-center transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} color="#121212" strokeWidth={2} />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] rounded-full bg-white shadow-md flex items-center justify-center transition-opacity duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={16} color="#121212" strokeWidth={2} />
          </button>

          {/* Slider Content */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-[20px] overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{ paddingBottom: "20px" }}
          >
            {FEED_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[calc(100%-40px)] sm:w-[380px] lg:w-[410px] aspect-square relative bg-white snap-start"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.url}
                    alt={item.alt || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                ) : (
                  <video
                    src={item.url}
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => e.currentTarget.pause()}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                )}
                
                {/* Instagram Icon Overlay (Simulated) */}
                <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === "video" ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5-9 5z" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}