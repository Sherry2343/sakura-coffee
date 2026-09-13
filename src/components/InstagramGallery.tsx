import React, { useState } from 'react';
import { Instagram, Heart, ExternalLink, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { BRAND_INFO } from '../data/menuData';

export const InstagramGallery: React.FC = () => {
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [userLiked, setUserLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUserLiked(prev => {
      const isAlready = !!prev[id];
      setLikes(l => ({ ...l, [id]: (l[id] || 48) + (isAlready ? -1 : 1) }));
      return { ...prev, [id]: !isAlready };
    });
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF7EE] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE8ED] text-[#5B3A29] text-xs font-semibold uppercase tracking-widest">
              <Instagram className="w-3.5 h-3.5 text-[#F7C8D8]" />
              <span>@sakura_coffee67</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2B1B17]">
              Instagram Visual Moments
            </h2>

            <p className="font-jp text-xs sm:text-sm text-[#5B3A29]/70 tracking-widest">
              桜の咲く頃、心地よい珈琲の余韻をインスタグラムでお届け。
            </p>

            <p className="text-sm text-[#5B3A29]/80 font-light">
              Explore our handcrafted drinks, Japanese sandos, café aesthetics, and delicate sakura details.
              Tag us in Lahore to be featured.
            </p>
          </div>

          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-gallery-follow-btn"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs uppercase tracking-wider font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-200 self-start md:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @sakura_coffee67</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            const count = likes[item.id] ?? (50 + (index * 13) % 87);
            const isLiked = !!userLiked[item.id];

            return (
              <div
                key={item.id}
                className="group relative aspect-square rounded-3xl overflow-hidden bg-white shadow-xs hover:shadow-xl transition-all duration-300 border border-[#FCE8ED]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4" />

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#5B3A29] shadow-xs opacity-90 group-hover:opacity-100 transition-opacity">
                  {item.category}
                </div>

                {/* Hover Content Details */}
                <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white flex flex-col justify-end space-y-1">
                  <span className="font-jp text-[10px] text-[#F7C8D8]">
                    {item.japaneseSubtitle}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-white/80 line-clamp-1 font-light">
                    {item.caption}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] text-[#F7C8D8] font-mono">
                      {item.tag}
                    </span>
                    <button
                      onClick={e => toggleLike(item.id, e)}
                      aria-label="Like post"
                      className="flex items-center gap-1 text-xs text-white/90 hover:text-white"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-colors ${
                          isLiked ? 'text-red-500 fill-red-500' : 'text-white'
                        }`}
                      />
                      <span>{count}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
