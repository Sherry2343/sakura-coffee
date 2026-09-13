import React from 'react';
import { Package, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/menuData';

export const PackagingShowcase: React.FC = () => {
  const packagingConcepts = [
    {
      title: 'Branded Double-Wall Cups',
      japanese: '特製二重断熱カップ',
      description: 'Soft cream matte texture paired with our delicate embossed official logo and pastel pink floral accents.',
      tag: 'Heat Insulated',
    },
    {
      title: 'Artisanal Kraft Paper Bags',
      japanese: 'クラフトペーパーバッグ',
      description: 'Eco-friendly natural kraft paper bags sealed with stamped sakura wax and custom cotton ribbon handles.',
      tag: '100% Recyclable',
    },
    {
      title: 'Embossed Cup Sleeves',
      japanese: '型押しカップスリーブ',
      description: 'Tactile kraft sleeves featuring our signature motto: “Bloom Into Your Day.” with Japanese calligraphy.',
      tag: 'Comfort Grip',
    },
    {
      title: 'Thank-You Gift Cards & Notes',
      japanese: '感謝のメッセージカード',
      description: 'Handwritten thank-you notes tucked into every takeaway bag: “Made with love, one cup at a time.”',
      tag: 'Omotenashi',
    },
    {
      title: 'Sakura Floral Seal Stickers',
      japanese: '桜の花びら封緘シール',
      description: 'Die-cut blush pink petal stickers that seal drink lids and pastry wraps securely for fresh transit.',
      tag: 'Tamper-Evident',
    },
    {
      title: 'Matcha & Blush Gift Boxes',
      japanese: '抹茶と桜のギフトボックス',
      description: 'Limited edition sage-green matcha boxes paired with warm blush ribbon for coffee gift pairings.',
      tag: 'Gift Ready',
    },
  ];

  return (
    <section id="packaging" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF7EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Packaging Concept Imagery */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#FCE8ED]">
              <img
                src="/assets/sakura-packaging.jpg"
                alt="Sakura Coffee Packaging Showcase"
                className="w-full h-auto object-cover transform duration-500 hover:scale-102"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Official Brand Badge overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#F7C8D8] shadow-sm flex items-center gap-2">
                <img
                  src={BRAND_INFO.logoUrl}
                  alt="Official Logo Mini"
                  className="w-5 h-5 rounded-full object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs font-bold text-[#2B1B17]">
                  Official Packaging
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-[#F7C8D8]/70 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2B1B17]">
                      {BRAND_INFO.name}
                    </h3>
                    <p className="text-xs italic text-[#5B3A29]">
                      “Made with love, one cup at a time.”
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#5B3A29] bg-[#FCE8ED] px-2.5 py-1 rounded-full">
                    Lahore Edition
                  </span>
                </div>
              </div>
            </div>

            {/* Aesthetic quote strip */}
            <div className="p-4 rounded-2xl bg-white border border-[#F7C8D8]/60 flex items-center justify-between text-xs text-[#5B3A29]">
              <span className="font-serif font-semibold text-sm text-[#2B1B17]">
                Sakura Coffee
              </span>
              <span className="text-[#F7C8D8]">•</span>
              <span className="italic">“Bloom Into Your Day.”</span>
              <span className="text-[#F7C8D8]">•</span>
              <span className="font-jp text-[11px]">さくらコーヒー</span>
            </div>
          </div>

          {/* Right Column: Packaging Details & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE8ED] text-[#5B3A29] text-xs font-semibold uppercase tracking-widest">
              <Package className="w-3.5 h-3.5 text-[#F7C8D8]" />
              <span>Thoughtful Presentation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2B1B17] tracking-tight">
              Aesthetic Packaging Designed for Every Moment
            </h2>

            <p className="text-sm sm:text-base text-[#5B3A29]/85 font-light leading-relaxed">
              Every takeaway order from Sakura Coffee is an unboxing experience.
              Drawing from traditional Japanese gift wrapping (Tsutsumi) and modern
              café minimalism, our packaging combines soft blush tones, warm cream textures,
              and tactile kraft paper.
            </p>

            {/* Grid of packaging concepts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {packagingConcepts.map(item => (
                <div
                  key={item.title}
                  className="bg-white p-4 rounded-2xl border border-[#FCE8ED] shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-serif text-sm font-bold text-[#2B1B17]">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-semibold bg-[#FFF7EE] text-[#5B3A29] border border-[#F7C8D8]/50 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <span className="font-jp text-[10px] text-[#5B3A29]/60 block mb-1">
                    {item.japanese}
                  </span>
                  <p className="text-xs text-[#5B3A29]/80 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
