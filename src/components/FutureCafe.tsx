import React from 'react';
import { Sparkles, MapPin, Coffee, Compass } from 'lucide-react';
import { BRAND_INFO } from '../data/menuData';

export const FutureCafe: React.FC = () => {
  const conceptHighlights = [
    {
      title: 'Warm Wooden Hinoki Counter',
      jp: 'ヒノキの一枚板カウンター',
      detail: 'Natural, tactile blonde timber providing warm sensory harmony with every pour.',
    },
    {
      title: 'Cream Textured Wabi-Sabi Walls',
      jp: '和紙と土壁の温もり',
      detail: 'Soft earth-toned plaster surfaces inspired by Kyoto tea houses.',
    },
    {
      title: 'Seasonal Sakura Floral Vases',
      jp: '生け花と四季の桜',
      detail: 'Artisanal Ikebana arrangements changing with every blooming season.',
    },
    {
      title: 'Soft Amber Lantern Lighting',
      jp: '温かみのある間接照明',
      detail: 'Low, diffused ambient illumination creating a calm, meditative sanctuary.',
    },
    {
      title: 'Precision Espresso Bar',
      jp: '本格エスプレッソマシン',
      detail: 'State-of-the-art dual-boiler machines calibrated for origin-specific beans.',
    },
    {
      title: 'Cozy Japanese Nook Seating',
      jp: '心地よい隠れ家スペース',
      detail: 'Intimate reading and conversation corners crafted for peaceful solitude.',
    },
  ];

  return (
    <section
      id="future-cafe"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF7EE] via-[#FFF1F4]/70 to-[#FFF7EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE8ED] border border-[#F7C8D8] text-[#5B3A29] text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-[#F7C8D8]" />
            <span>Vision & Architectural Concept</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2B1B17]">
            A Little Café Dream, Coming Soon.
          </h2>

          <p className="font-jp text-xs sm:text-sm text-[#5B3A29]/70 tracking-widest">
            ラホールの街に、静けさと桜の香りを届ける夢の空間。
          </p>

          <blockquote className="text-base sm:text-lg text-[#5B3A29] max-w-2xl mx-auto font-light leading-relaxed italic bg-white/60 p-6 rounded-2xl border border-[#F7C8D8]/50">
            “Sakura Coffee is beginning as a small coffee brand and hopes to grow into a
            beautiful Japanese-inspired café in the future.”
          </blockquote>
        </div>

        {/* Feature Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Visual Image with Official Signage */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#FFF7EE] group">
              <img
                src="/assets/sakura-cafe-dream.jpg"
                alt="Future Sakura Coffee Japanese Café Concept in Lahore"
                className="w-full h-auto object-cover transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* In-scene Official Sakura Coffee Logo Signage overlay */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#F7C8D8] shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full p-0.5 border border-[#F7C8D8] bg-[#FFF7EE] overflow-hidden">
                  <img
                    src={BRAND_INFO.logoUrl}
                    alt="Official Logo Signage"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-serif text-xs font-bold text-[#2B1B17]">
                    Sakura Coffee Café
                  </div>
                  <div className="text-[10px] text-[#5B3A29]/70 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#F7C8D8]" />
                    <span>Future Flagship • Lahore</span>
                  </div>
                </div>
              </div>

              {/* Bottom detail pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#2B1B17]/85 backdrop-blur-md text-[#FFF7EE] p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-[#F7C8D8]">
                    Concept Preview
                  </div>
                  <div className="font-serif text-sm font-bold">
                    Japanese Minimalism Meets Lahore Hospitality
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#FFF7EE]/70 block">Opening Phase</span>
                  <span className="text-xs font-bold text-[#25D366]">In Planning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights & Design Principles */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#2B1B17]">
              Café Design Elements
            </h3>
            <p className="text-xs sm:text-sm text-[#5B3A29]/80 font-light leading-relaxed">
              When our physical doors open in Lahore, every square foot will celebrate
              quiet serenity, natural wood textures, and the delicate beauty of cherry blossoms.
            </p>

            <div className="space-y-3 pt-2">
              {conceptHighlights.map(item => (
                <div
                  key={item.title}
                  className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-[#FCE8ED] shadow-2xs flex items-start gap-3 hover:bg-white transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F7C8D8] mt-2 flex-shrink-0" />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-serif text-sm font-bold text-[#2B1B17]">
                        {item.title}
                      </h4>
                      <span className="font-jp text-[10px] text-[#5B3A29]/60">
                        {item.jp}
                      </span>
                    </div>
                    <p className="text-xs text-[#5B3A29]/75 font-light mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
