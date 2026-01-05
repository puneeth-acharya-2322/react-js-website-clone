import React from 'react';
import { RotateCcw, Truck, ShieldCheck } from 'lucide-react';

const ServiceFeatures = () => {
  const features = [
    {
      icon: <RotateCcw size={20} strokeWidth={1.5} />,
      title: "Free Returns",
      description: "If you don't love it, send it back for a full refund and we'll cover the return shipping."
    },
    {
      icon: <Truck size={20} strokeWidth={1.5} />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders to the contiguous US, Canada and most European countries."
    },
    {
      icon: <ShieldCheck size={20} strokeWidth={1.5} />,
      title: "Lifetime warranty",
      description: "Every suitcase comes with a limited lifetime warranty."
    }
  ];

  return (
    <section className="bg-background border-t border-border-light">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-[60px] md:py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center max-w-[380px] mx-auto"
            >
              {/* Icon Container */}
              <div className="mb-5 text-primary flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-[14px] md:text-[16px] font-semibold uppercase tracking-[0.1em] mb-3 text-primary">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[14px] leading-[1.6] text-text-secondary max-w-[320px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;