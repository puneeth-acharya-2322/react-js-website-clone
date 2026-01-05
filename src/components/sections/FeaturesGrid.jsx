import React from 'react';
import { RotateCcw, Truck, ShieldCheck } from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      icon: <RotateCcw className="w-6 h-6 stroke-[1.5]" />,
      title: "Free Returns",
      description: "If you don't love it, send it back for a full refund and we'll cover the return shipping."
    },
    {
      icon: <Truck className="w-6 h-6 stroke-[1.5]" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders to the contiguous US, Canada and most European countries."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 stroke-[1.5]" />,
      title: "Lifetime warranty",
      description: "Every suitcase comes with a limited lifetime warranty."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center max-w-[400px] mx-auto"
            >
              <div className="mb-6 flex items-center justify-center text-black">
                {feature.icon}
              </div>
              
              <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-[0.1em] text-black">
                {feature.title}
              </h3>
              
              <p className="text-[14px] leading-[1.6] text-[#666666] font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;