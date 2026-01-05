import React from 'react';
import Image from 'next/image';

/**
 * ProductCarousel Component
 * Clones the "ALL COLLECTIONS" product grid section.
 * 
 * Based on high-level design:
 * - Layout: Horizontal grid showcasing core suitcase lineup.
 * - Typography: Titles in H6 (GT Standard/Nunito Sans 600), Price in faded text.
 * - Visuals: Product isolation on subtle gray background (implied by design system, though images are white-bg).
 * - Component Style: Sharp edges (0px radius), uppercase headers.
 */

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
}

const products: Product[] = [
  {
    id: 'treva-silver',
    name: 'TREVA ALUMINUM SUITCASE SILVER',
    price: 'FROM $399.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/91db50d0353d9d00f2de2da6bb5e0c9b_48564afd-bcaa-4d0-10.png',
    alt: 'TREVA Aluminum Suitcase Silver',
  },
  {
    id: 'treva-gunmetal',
    name: 'TREVA ALUMINUM SUITCASE GUNMETAL',
    price: 'FROM $399.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/91db50d0353d9d00f2de2da6bb5e0c9b_2d683158-0f4a-465-12.png',
    alt: 'TREVA Aluminum Suitcase Gunmetal',
  },
  {
    id: 'carbon-s',
    name: 'CARBON S 2.0 CARBON FIBER SUITCASE BLACK',
    price: 'FROM $885.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/90f4169e298a9acebde49e2ee329e31a_65930d9d-ae80-407-11.png',
    alt: 'Carbon S 2.0 Carbon Fiber Suitcase Black',
  },
  {
    id: 'carbon-x',
    name: 'CARBON X 2.0 CARBON FIBER SUITCASE BLACK',
    price: 'FROM $885.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/481044c5d5650dfb2a22a7cd50591512_92d12602-f8ff-4ac-14.png',
    alt: 'Carbon X 2.0 Carbon Fiber Suitcase Black',
  },
  {
    id: 'treva-black',
    name: 'TREVA ALUMINUM SUITCASE BLACK',
    price: 'FROM $399.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/91db50d0353d9d00f2de2da6bb5e0c9b_2d683158-0f4a-465-12.png', // Fallback to Gunmetal if specific black asset missing since they look similar in the grid
    alt: 'TREVA Aluminum Suitcase Black',
  },
  {
    id: 'treva-champagne',
    name: 'TREVA ALUMINUM SUITCASE CHAMPAGNE',
    price: 'FROM $399.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/91db50d0353d9d00f2de2da6bb5e0c9b_48564afd-bcaa-4d0-10.png', // Fallback to Silver
    alt: 'TREVA Aluminum Suitcase Champagne',
  },
];

const ProductCarousel = () => {
  return (
    <section className="py-[80px] bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[14px] font-semibold tracking-[0.1em] text-black">
            ALL COLLECTIONS
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-12">
          {products.map((product) => (
            <a 
              key={product.id} 
              href={`/products/${product.id}`}
              className="group flex flex-col items-center text-center"
            >
              {/* Product Image Container */}
              <div className="relative w-full aspect-[4/5] bg-[#F5F5F5] overflow-hidden mb-6 luxury-transition">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-contain p-4 transform transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>

              {/* Product Details */}
              <div className="px-2">
                <h3 className="text-[11px] font-bold leading-tight tracking-[0.05em] mb-2 uppercase text-black line-clamp-2 min-h-[2.5em]">
                  {product.name}
                </h3>
                <p className="text-[11px] font-normal tracking-[0.02em] text-[#666666] uppercase">
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="/collections/all-collections-1"
            className="px-10 py-3 bg-[#1A1A1A] text-white text-[12px] font-semibold tracking-[0.15em] uppercase hover:bg-black transition-colors duration-300"
          >
            View all
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;