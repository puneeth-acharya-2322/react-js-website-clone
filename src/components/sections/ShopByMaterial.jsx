import React from 'react';
import Image from 'next/image';

const materials = [
  {
    subtitle: "Sleek and Strong",
    title: "Aluminum",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/033A2808-0-28.png",
    link: "/collections/aluminum-collections",
    alt: "Two silver aluminum suitcases by a classic car"
  },
  {
    subtitle: "Luxurious and Unbreakable",
    title: "Carbon Fiber",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/02_2198f17c-ceb4-4f1b-9e39-ef3bc6a83c92-29.png",
    link: "/collections/carbon-fiber-collection",
    alt: "Black carbon fiber suitcase in a modern setting"
  },
  {
    subtitle: "Lightweight and Durable",
    title: "Polycarbonate",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/1_5_7465-30.png",
    link: "/collections/polycarbonate-collections",
    alt: "Olive and black polycarbonate suitcases stacked on stairs"
  }
];

const ShopByMaterial = () => {
  return (
    <section className="bg-[#F4F4F4] py-[40px] md:py-[100px]">
      <div className="container mx-auto px-5 lg:px-10">
        <h2 className="text-[20px] md:text-[24px] font-medium tracking-[0.2em] text-center mb-[40px] md:mb-[60px] text-[#121212] uppercase">
          Shop By Material
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {materials.map((item, index) => (
            <a 
              key={index} 
              href={item.link}
              className="group relative aspect-[3/4] overflow-hidden block w-full bg-[#E5E5E5]"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-10">
                <div className="mb-4">
                  <p className="text-[#FFFFFF] text-[10px] md:text-[11px] font-semibold tracking-[0.1em] uppercase mb-2 opacity-90">
                    {item.subtitle}
                  </p>
                  <h3 className="text-[#FFFFFF] text-[20px] md:text-[24px] font-semibold tracking-[0.05em] uppercase mb-6">
                    {item.title}
                  </h3>
                  
                  <div className="inline-block bg-[#FFFFFF] text-[#121212] px-6 py-3 text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 group-hover:bg-[#121212] group-hover:text-[#FFFFFF]">
                    View products
                  </div>
                </div>
              </div>

              {/* Subtle Gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByMaterial;