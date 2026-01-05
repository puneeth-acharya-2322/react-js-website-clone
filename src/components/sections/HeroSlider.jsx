"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/DSCF1221_7ffd5d4b-f466-43c9-af61-5ee51cd58582-7.jpg",
    subtitle: "FULLY CUSTOMIZABLE",
    title: "CARBON S",
    buttonText: "SHOP NOW",
    link: "/collections/carbon-s-1"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/DSC07176-Bearbeitet-8.jpg",
    subtitle: "UPGRADED BEST SELLER",
    title: "TREVA ALUMINUM COLLECTION",
    buttonText: "SHOP NOW",
    link: "/collections/treva"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/MVST_Essential_Shooting_Final-8-16_9-9.jpg",
    subtitle: "100% GERMAN MAKROLON® VIRGIN POLYCARBONATE",
    title: "ESSENTIAL POLYCARBONATE COLLECTION",
    buttonText: "SHOP NOW",
    link: "/collections/polycarbonate-collections"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[calc(100vh-120px)] min-h-[600px] overflow-hidden bg-[#121212]">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Visual Overlay for readability - subtle on original but usually present */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Text Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end px-[40px] pb-[80px] max-w-[1440px] mx-auto w-full">
            <div className="max-w-[800px] transform transition-transform duration-700 delay-300 translate-y-0 opacity-100">
              <span 
                className="block text-white text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: '"Nunito Sans", sans-serif' }}
              >
                {slide.subtitle}
              </span>
              <h1 
                className="text-white text-[48px] md:text-[64px] font-semibold tracking-[0.1em] uppercase leading-[1.1] mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {slide.title}
              </h1>
              <a
                href={slide.link}
                className="inline-block px-10 py-4 border border-white text-white text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-[40px] right-[40px] z-30 flex items-center space-x-6">
        <div className="flex space-x-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-white w-6' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="flex items-center space-x-4 text-white">
          <button 
            onClick={prevSlide}
            className="opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}