import React from 'react';
import Image from 'next/image';

/**
 * AllCollections Section
 * 
 * A horizontal product grid section featuring suitcases with product titles,
 * pricing in USD, and clean white background product shots.
 */

const products = [
  {
    id: 'treva-silver',
    name: 'TREVA ALUMINUM SUITCASE',
    variant: 'SILVER',
    price: 'FROM $399.00 USD',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/91db50d0353d9d00f2de2da6bb5e0c9b_48564afd-bcaa-4d0-10.png',
  },
  {
    id: 'treva-gunmetal',
    name: 'TREVA ALUMINUM SUITCASE',
    variant: 'GUNMETAL',
    price: 'FROM $399.00 USD',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/90f4169e298a9acebde49e2ee329e31a_65930d9d-ae80-407-11.png',
  },
  {
    id: 'carbon-s',
    name: 'CARBON S 2.0 CARBON FIBER',
    variant: 'SUITCASE BLACK',
    price: 'FROM $885.00 USD',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/91db50d0353d9d00f2de2da6bb5e0c9b_2d683158-0f4a-465-12.png',
  },
  {
    id: 'carbon-x',
    name: 'CARBON X 2.0 CARBON FIBER',
    variant: 'SUITCASE BLACK',
    price: 'FROM $885.00 USD',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/90f4169e298a9acebde49e2ee329e31a_a1189c2c-2644-490-13.png',
  },
  {
    id: 'treva-black',
    name: 'TREVA ALUMINUM SUITCASE',
    variant: 'BLACK',
    price: 'FROM $399.00 USD',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/481044c5d5650dfb2a22a7cd50591512_92d12602-f8ff-4ac-14.png',
  },
  {
    id: 'treva-champagne',
    name: 'TREVA ALUMINUM SUITCASE',
    variant: 'CHAMPAGNE',
    price: 'FROM $399.00 USD',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/3f77ef84b4f0e5261ed0f7bd06f56042-15.png',
  },
];

const AllCollections = () => {
  return (
    <section className="bg-[#F4F4F4] pt-[64px] pb-[80px]">
      <div className="container mx-auto px-4 lg:px-10">
        <h2 className="text-[24px] font-medium tracking-[0.2em] text-[#121212] text-center mb-[40px] uppercase">
          All Collections
        </h2>

        {/* Product Scroller / Grid */}
        <div className="flex overflow-x-auto gap-5 no-scrollbar pb-10 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-x-[20px] md:gap-y-[40px]">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col flex-none w-[200px] md:w-full group cursor-pointer"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden mb-5">
                <Image
                  src={product.imageUrl}
                  alt={`${product.name} ${product.variant}`}
                  fill
                  sizes="(max-width: 768px) 200px, 20vw"
                  className="object-contain transition-transform duration-600 ease-out group-hover:scale-105"
                  priority={product.id === 'treva-silver'}
                />
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-[12px] md:text-[13px] font-semibold tracking-[0.05em] text-[#121212] uppercase leading-tight mb-1">
                  {product.name}
                </h3>
                <p className="text-[12px] md:text-[13px] font-semibold tracking-[0.05em] text-[#121212] uppercase mb-2">
                  {product.variant}
                </p>
                <span className="text-[11px] md:text-[12px] text-[#767676] tracking-[0.02em]">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-4">
          <a
            href="/collections/all-collections-1"
            className="inline-block px-10 py-3 bg-[#121212] text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-opacity hover:opacity-90"
          >
            View all
          </a>
        </div>
      </div>
    </section>
  );
};

export default AllCollections;