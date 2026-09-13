import React from 'react';
import { Coffee, Sparkles, Heart, ArrowDown, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/menuData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FFF7EE] via-[#FFF1F4] to-[#FFF7EE]"
    >
      {/* Subtle Japanese traditional geometric circle pattern & sakura watercolor splashes in background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-tr from-[#FCE8ED]/80 via-[#F7C8D8]/30 to-transparent blur-3xl -z-10" />
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#F7C8D8]/20 blur-2xl" />
        <div className="absolute bottom-10 -left-10 w-80 h-80 rounded-full bg-[#A7B89F]/15 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography and Brand Story */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Japanese Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE8ED] border border-[#F7C8D8] text-[#5B3A29] text-xs sm:text-sm font-medium shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F7C8D8] animate-pulse" />
              <span className="font-jp tracking-wider text-[11px] sm:text-xs">
                ラホール発 • 本格的な和風スペシャルティコーヒー
              </span>
            </div>

            {/* Official Logo Display (Large, high fidelity emblem) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 py-2">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-white shadow-lg border-2 border-[#F7C8D8] flex-shrink-0 transition-transform hover:scale-105 duration-300">
                <img
                  src={BRAND_INFO.logoUrl}
                  alt="Official Sakura Coffee Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FCE8ED] text-[10px] font-bold text-[#5B3A29] uppercase tracking-wider mb-1">
                  <span>Official Brand Emblem</span>
                </div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#2B1B17] tracking-wider">
                  Sakura Coffee
                </span>
                <span className="block text-xs uppercase tracking-[0.25em] text-[#5B3A29]/80 font-medium">
                  Lahore, Pakistan
                </span>
              </div>
            </div>

            {/* Main Luxury Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#2B1B17] tracking-tight leading-[1.1]">
                Bloom Into <br />
                <span className="italic font-normal text-[#5B3A29] relative inline-block">
                  Your Day.
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-[#F7C8D8]/70"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 9C50 3 150 3 198 9"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="max-w-xl text-base sm:text-lg text-[#5B3A29]/90 leading-relaxed font-light">
              Japanese-inspired specialty coffee, handcrafted with care in Lahore.
              Immerse yourself in gentle floral aromatics, silky microfoam, and mindful moments.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#menu"
                id="hero-order-coffee-btn"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#5B3A29] hover:bg-[#2B1B17] text-[#FFF7EE] font-medium text-sm tracking-wide rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
              >
                <span>Order Your Coffee</span>
                <Coffee className="w-4 h-4 text-[#F7C8D8]" />
              </a>
              <a
                href="#menu"
                id="hero-explore-menu-btn"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FCE8ED] hover:bg-[#F7C8D8] text-[#5B3A29] hover:text-[#2B1B17] font-medium text-sm tracking-wide rounded-full border border-[#F7C8D8] transition-all duration-300 text-center"
              >
                Explore Our Menu
              </a>
            </div>

            {/* Small Feature Text */}
            <div className="pt-4 border-t border-[#F7C8D8]/50 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-[#5B3A29]/80">
              <span className="flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-[#5B3A29]" />
                Specialty Coffee
              </span>
              <span className="text-[#F7C8D8]">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#A7B89F]" />
                Fresh Ingredients
              </span>
              <span className="text-[#F7C8D8]">•</span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#F7C8D8]" />
                Made With Love
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Japanese aesthetic frame lines */}
            <div className="absolute -inset-4 border border-[#F7C8D8]/60 rounded-3xl -z-10 rotate-1 hidden sm:block pointer-events-none" />
            <div className="absolute -inset-8 border border-[#E8E1E1]/40 rounded-3xl -z-20 -rotate-2 hidden sm:block pointer-events-none" />

            {/* Main Image Container */}
            <div className="relative w-full max-w-md aspect-square sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-[#FFF7EE] group">
              <img
                src="/assets/sakura-hero-cup.jpg"
                alt="Sakura Latte Handcrafted Specialty Coffee"
                className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient overlay for softness */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B17]/40 via-transparent to-transparent opacity-60" />

              {/* Floating Feature Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F7C8D8]/80 shadow-lg flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F7C8D8]" />
                    <span className="font-jp text-xs text-[#5B3A29]/70">
                      看板メニュー • Signature
                    </span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-[#2B1B17]">
                    Handcrafted Sakura Latte
                  </h2>
                  <p className="text-xs text-[#5B3A29]/80">
                    Delicate floral notes with silky microfoam
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#5B3A29]/70 block">Only</span>
                  <span className="font-serif text-lg font-bold text-[#2B1B17]">
                    Rs. 399
                  </span>
                </div>
              </div>

              {/* Top Floating Badge with Official Logo */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-1.5 pr-3 rounded-full border border-[#F7C8D8] shadow-md flex items-center gap-2">
                <img
                  src={BRAND_INFO.logoUrl}
                  alt="Sakura Coffee Logo Mini"
                  className="w-6 h-6 rounded-full object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[11px] font-semibold text-[#5B3A29]">
                  Lahore Official
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="pt-12 text-center">
          <a
            href="#story"
            aria-label="Scroll to Our Story"
            className="inline-flex flex-col items-center text-xs text-[#5B3A29]/60 hover:text-[#5B3A29] transition-colors gap-1 group"
          >
            <span className="tracking-widest uppercase text-[10px]">Discover More</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#F7C8D8] group-hover:text-[#5B3A29]" />
          </a>
        </div>
      </div>
    </section>
  );
};
