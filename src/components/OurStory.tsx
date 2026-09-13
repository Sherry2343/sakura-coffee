import React from 'react';
import { Sparkles, Leaf, Heart, Coffee } from 'lucide-react';
import { BRAND_INFO } from '../data/menuData';

// Sakura Flower minimal SVG icon
const SakuraFlowerIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2C13.2 4.5 14.5 6.5 16 7C17.5 7.5 19.8 7 21 8.5C22.2 10 21.5 12.2 21.2 13.8C20.9 15.4 21.8 17.5 20.8 19C19.8 20.5 17.5 20.2 16 20.8C14.5 21.4 13.2 23.5 12 23.5C10.8 23.5 9.5 21.4 8 20.8C6.5 20.2 4.2 20.5 3.2 19C2.2 17.5 3.1 15.4 2.8 13.8C2.5 12.2 1.8 10 3 8.5C4.2 7 6.5 7.5 8 7C9.5 6.5 10.8 4.5 12 2Z" />
  </svg>
);

export const OurStory: React.FC = () => {
  const featureCards = [
    {
      title: 'Premium Quality',
      subtitle: 'こだわり品質',
      description:
        'Sourced from specialty-grade Arabica beans roasted with meticulous care, guaranteeing smooth crema and clean aromatic notes in every pour.',
      icon: Coffee,
      iconBg: 'bg-[#5B3A29]/10 text-[#5B3A29]',
      borderAccent: 'hover:border-[#5B3A29]/40',
    },
    {
      title: 'Fresh Ingredients',
      subtitle: '新鮮な素材',
      description:
        'From freshly cracked grade-A eggs to seasonal fruits and pure Japanese matcha, our kitchen embraces authentic freshness every morning.',
      icon: Leaf,
      iconBg: 'bg-[#A7B89F]/20 text-[#4E6346]',
      borderAccent: 'hover:border-[#A7B89F]',
    },
    {
      title: 'Made With Love',
      subtitle: '真心の一杯',
      description:
        'Every drink is handcrafted with thoughtful attentiveness (Omotenashi), ensuring warm smiles, gentle presentation, and pure comfort.',
      icon: Heart,
      iconBg: 'bg-[#FCE8ED] text-[#F7C8D8]',
      borderAccent: 'hover:border-[#F7C8D8]',
    },
  ];

  return (
    <section id="story" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF7EE] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE8ED] text-[#5B3A29] text-xs uppercase tracking-widest font-semibold">
            <SakuraFlowerIcon className="w-3.5 h-3.5 text-[#F7C8D8]" />
            <span>Our Philosophy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2B1B17] tracking-tight">
            Crafting Peaceful Moments in Lahore
          </h2>

          <p className="font-jp text-sm text-[#5B3A29]/70 tracking-widest">
            一杯の珈琲から広がる、あたたかな幸せの輪。
          </p>

          <div className="w-16 h-0.5 bg-[#F7C8D8] mx-auto my-4" />

          {/* Official Brand Story Prompt Copy */}
          <blockquote className="text-base sm:text-lg lg:text-xl text-[#5B3A29] font-light leading-relaxed italic bg-white/70 backdrop-blur-xs p-6 sm:p-8 rounded-3xl border border-[#F7C8D8]/50 shadow-xs text-left sm:text-center">
            “Sakura Coffee is a Japanese-inspired coffee brand created around a simple
            belief: a good cup of coffee can make your day brighter. We combine premium
            coffee, refreshing flavors, elegant presentation, and the peaceful beauty
            of Japanese café culture to create a little moment of happiness in every cup.”
          </blockquote>
        </div>

        {/* 3 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map(feature => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`bg-white p-8 rounded-3xl border border-[#FCE8ED] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${feature.borderAccent} group flex flex-col justify-between`}
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.iconBg}`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="font-jp text-xs text-[#5B3A29]/60 mb-1">
                    {feature.subtitle}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B1B17] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#5B3A29]/80 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#FFF7EE] flex items-center gap-2 text-xs font-medium text-[#5B3A29]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F7C8D8]" />
                  <span>The Sakura Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
