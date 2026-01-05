import React from 'react';
import Image from 'next/image';

const ShopByCategory = () => {
  const categories = [
    {
      title: 'SUITCASES',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/0923S-S_21849-27.png',
      link: '/collections/all-collections-1',
      buttonText: 'View products',
    },
    {
      title: 'Bags',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/0923S-S_21904-26.png',
      link: '/collections/bags',
      buttonText: 'View products',
    },
    {
      title: 'Accessories',
      // Since specific asset for Accessories wasn't in section pool, we use a suitable placeholder or fallback from context
      image: 'https://mvstselect.com/cdn/shop/files/Y-vadymbattenko-Img-7-Unlimited_fc9d5d19-0424-41fc-870c-ae39250e8f64.jpg?v=1762134581&width=3000',
      link: '/collections/accesssories',
      buttonText: 'View products',
    },
  ];

  return (
    <section className="bg-[#F4F4F4] py-[100px] px-6 sm:px-10">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[24px] font-semibold text-[#121212] tracking-[0.2em] text-center mb-16 uppercase">
          SHOP BY CATEGORY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <div key={index} className="relative group overflow-hidden h-[600px] flex flex-col justify-end">
              {/* Background Image Container */}
              <div className="absolute inset-0 transition-transform duration-600 ease-out group-hover:scale-105">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Overlay Content */}
              <div className="relative z-10 p-10 flex flex-col items-start gap-4">
                <h3 className="text-white text-[24px] font-semibold tracking-[0.1em] uppercase">
                  {category.title}
                </h3>
                
                <a
                  href={category.link}
                  className="bg-white text-[#121212] text-[11px] font-bold tracking-[0.15em] px-6 py-3.5 uppercase border border-white hover:bg-transparent hover:text-white transition-all duration-300"
                >
                  {category.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;