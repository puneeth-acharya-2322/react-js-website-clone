import React from 'react';
import { RotateCcw, Truck, ShieldCheck } from 'lucide-react';

/**
 * TrustMarkers Component
 * 
 * A section featuring 'Free Returns', 'Free Shipping', and 'Lifetime Warranty'
 * with minimal icons and descriptions, styled to pixel-perfect accuracy
 * based on the luxury boutique aesthetic of MVST Select.
 */
const TrustMarkers = () => {
  const trustData = [
    {
      id: 'free-returns',
      icon: <RotateCcw size={20} strokeWidth={1} />,
      title: 'Free Returns',
      description: "If you don't love it, send it back for a full refund and we'll cover the return shipping.",
    },
    {
      id: 'free-shipping',
      icon: <Truck size={20} strokeWidth={1} />,
      title: 'Free Shipping',
      description: 'Enjoy free shipping on all orders to the contiguous US, Canada and most European countries.',
    },
    {
      id: 'lifetime-warranty',
      icon: <ShieldCheck size={20} strokeWidth={1} />,
      title: 'Lifetime warranty',
      description: 'Every suitcase comes with a limited lifetime warranty.',
    },
  ];

  return (
    <section className="bg-[#F4F4F4] py-[60px] md:py-[80px] border-t border-[#E5E5E5]">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 text-center max-w-[1240px] mx-auto">
          {trustData.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              {/* Icon Container */}
              <div className="mb-5 flex justify-center items-center text-black">
                {item.icon}
              </div>

              {/* Title - GT Standard Medium (approximated via Nunito Sans 500) */}
              <h3 className="text-[13px] font-medium uppercase tracking-[0.15em] text-black mb-3">
                {item.title}
              </h3>

              {/* Description - Nunito Sans Regular */}
              <p className="text-[14px] leading-[1.6] text-black opacity-80 max-w-[340px] mx-auto font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMarkers;