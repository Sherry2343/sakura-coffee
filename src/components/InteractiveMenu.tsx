import React, { useState, useEffect } from 'react';
import { Plus, Minus, Check, Sparkles, ShoppingBag, Share2 } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem, MenuCategoryId } from '../types';
import { useCart } from '../context/CartContext';
import { ShareItemModal } from './ShareItemModal';

interface InteractiveMenuProps {
  onItemActiveChange?: (item: MenuItem | null) => void;
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ onItemActiveChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId>('all');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);
  const [sharingItem, setSharingItem] = useState<MenuItem | null>(null);
  const [highlightedItemId, setHighlightedItemId] = useState<string | null>(null);

  const { addToCart, openCart } = useCart();

  const categories: { id: MenuCategoryId; label: string; jpLabel: string }[] = [
    { id: 'all', label: 'All Items', jpLabel: 'すべて' },
    { id: 'signature', label: 'Signature Drinks', jpLabel: '看板ドリンク' },
    { id: 'food', label: 'Food', jpLabel: '軽食・サンド' },
    { id: 'iced', label: 'Iced Coffee', jpLabel: 'アイス珈琲' },
    { id: 'hot', label: 'Hot Coffee', jpLabel: 'ホット珈琲' },
  ];

  // Detect ?item=<id> query parameter for deep linking & social sharing
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const itemIdParam = urlParams.get('item');

    if (itemIdParam) {
      const matched = MENU_ITEMS.find(i => i.id === itemIdParam.toLowerCase());
      if (matched) {
        setHighlightedItemId(matched.id);
        onItemActiveChange?.(matched);

        // If the item belongs to a specific category, auto-switch to that category or keep 'all'
        // 'all' shows everything, but if category is filtered we can reset to 'all'
        setSelectedCategory('all');

        // Smooth scroll to the menu item after DOM renders
        setTimeout(() => {
          const el = document.getElementById(`menu-item-${matched.id}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      }
    }
  }, [onItemActiveChange]);

  const filteredItems = MENU_ITEMS.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const getQuantity = (id: string) => quantities[id] || 1;

  const handleIncrement = (id: string) => {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleDecrement = (id: string) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const handleAddToCart = (item: MenuItem) => {
    const qty = getQuantity(item.id);
    addToCart(item, qty);
    setAddedItemNotice(item.name);
    setTimeout(() => {
      setAddedItemNotice(null);
    }, 2500);
  };

  const handleOpenShare = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setSharingItem(item);
    onItemActiveChange?.(item);

    // Update browser URL without reload for clean sharing experience
    if (typeof window !== 'undefined' && window.history) {
      const url = new URL(window.location.href);
      url.searchParams.set('item', item.id);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const handleCloseShare = () => {
    setSharingItem(null);
  };

  return (
    <section id="menu" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF7EE] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE8ED] text-[#5B3A29] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F7C8D8]" />
            <span>Handcrafted Japanese Selection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2B1B17]">
            The Sakura Menu
          </h2>

          <p className="font-jp text-xs sm:text-sm text-[#5B3A29]/70 tracking-widest">
            厳選された素材と、心安らぐ一杯のおもてなし。
          </p>

          <p className="text-sm sm:text-base text-[#5B3A29]/80 font-light max-w-xl mx-auto">
            Each recipe is prepared with meticulous balance. Select your favorites,
            customize quantities, share with friends, and finalize your order directly with our Lahore baristas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 ${
                  isActive
                    ? 'bg-[#5B3A29] text-[#FFF7EE] shadow-md scale-105'
                    : 'bg-white text-[#5B3A29] hover:bg-[#FCE8ED] border border-[#F7C8D8]/50'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] ${
                    isActive ? 'text-[#F7C8D8]' : 'text-[#5B3A29]/50'
                  }`}
                >
                  {cat.jpLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Temporary toast notification when item is added */}
        {addedItemNotice && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#2B1B17] text-[#FFF7EE] px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-[#F7C8D8]/40 animate-in slide-in-from-bottom-5">
            <Check className="w-5 h-5 text-[#25D366]" />
            <div className="text-xs">
              <span className="font-semibold">{addedItemNotice}</span> added to order!
            </div>
            <button
              onClick={openCart}
              className="ml-2 px-2.5 py-1 bg-[#F7C8D8] text-[#2B1B17] text-[11px] font-bold rounded-lg hover:bg-white transition-colors"
            >
              View Cart
            </button>
          </div>
        )}

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => {
            const currentQty = getQuantity(item.id);
            const isHighlighted = highlightedItemId === item.id;

            return (
              <div
                key={item.id}
                id={`menu-item-${item.id}`}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isHighlighted
                    ? 'border-2 border-[#F7C8D8] shadow-xl ring-4 ring-[#FCE8ED]'
                    : 'border-[#FCE8ED] shadow-xs hover:shadow-xl'
                }`}
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FFF7EE]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 bg-[#FFF7EE]/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#5B3A29] border border-[#F7C8D8] shadow-xs">
                      {item.badge}
                    </div>
                  )}

                  {/* Social Share Button on Image */}
                  <button
                    onClick={e => handleOpenShare(item, e)}
                    aria-label={`Share ${item.name}`}
                    title="Share item & view social preview"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#5B3A29] hover:text-[#2B1B17] backdrop-blur-xs flex items-center justify-center border border-[#F7C8D8] shadow-sm transition-transform hover:scale-110"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Price Tag in Pakistani Rupees */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-[#F7C8D8]">
                    <span className="text-xs text-[#5B3A29]/70 mr-1">Price:</span>
                    <span className="font-serif text-base font-bold text-[#2B1B17]">
                      Rs. {item.price}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-xl font-bold text-[#2B1B17] group-hover:text-[#5B3A29] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="font-jp text-xs text-[#5B3A29]/60">
                      {item.japaneseName}
                    </p>
                    <p className="text-xs sm:text-sm text-[#5B3A29]/80 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Controls */}
                  <div className="pt-6 mt-4 border-t border-[#FFF7EE] flex items-center justify-between gap-3">
                    {/* Quantity Selector */}
                    <div className="inline-flex items-center border border-[#F7C8D8] rounded-full bg-[#FFF7EE] p-1">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        aria-label={`Decrease quantity for ${item.name}`}
                        className="w-7 h-7 rounded-full bg-white hover:bg-[#FCE8ED] text-[#5B3A29] flex items-center justify-center transition-colors focus:outline-none"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-semibold text-[#2B1B17]">
                        {currentQty}
                      </span>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        aria-label={`Increase quantity for ${item.name}`}
                        className="w-7 h-7 rounded-full bg-white hover:bg-[#FCE8ED] text-[#5B3A29] flex items-center justify-center transition-colors focus:outline-none"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Add to Order Button */}
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#5B3A29] hover:bg-[#2B1B17] text-[#FFF7EE] text-xs font-semibold rounded-full shadow-xs hover:shadow transition-all duration-200"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#F7C8D8]" />
                      <span>Add to Order</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Share Item Modal with Live Open Graph / Twitter Card Preview */}
      <ShareItemModal item={sharingItem} onClose={handleCloseShare} />
    </section>
  );
};
