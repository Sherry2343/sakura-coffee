import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/menuData';
import { useCart } from '../context/CartContext';

// Simple SVG for Facebook icon since Lucide has standard social or we can use custom clean path
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, subtotal, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'How to Order', href: '#how-to-order' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Packaging', href: '#packaging' },
    { name: 'Future Café', href: '#future-cafe' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF7EE]/95 backdrop-blur-md shadow-sm shadow-[#5B3A29]/5 py-2.5 border-b border-[#F7C8D8]/40'
          : 'bg-[#FFF7EE]/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            id="nav-brand-logo"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C8D8] rounded-lg p-1"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white/60 p-0.5 border border-[#F7C8D8] shadow-xs flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src={BRAND_INFO.logoUrl}
                alt="Sakura Coffee Official Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#2B1B17] leading-tight">
                Sakura Coffee
              </span>
              <span className="font-jp text-[10px] sm:text-xs text-[#5B3A29]/70 tracking-widest">
                さくらコーヒー • Lahore
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium text-[#5B3A29]">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#2B1B17] relative py-1 transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F7C8D8] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social Icons (Desktop) */}
            <div className="hidden sm:flex items-center space-x-2 text-[#5B3A29]/80 border-r border-[#5B3A29]/15 pr-3">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1.5 rounded-full hover:text-[#2B1B17] hover:bg-[#FCE8ED] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-1.5 rounded-full hover:text-[#2B1B17] hover:bg-[#FCE8ED] transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Business"
                className="p-1.5 rounded-full hover:text-[#2B1B17] hover:bg-[#FCE8ED] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Cart Button */}
            <button
              id="cart-header-button"
              onClick={openCart}
              aria-label={`Open shopping cart, ${totalItems} items`}
              className="relative p-2 text-[#2B1B17] hover:bg-[#FCE8ED] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#F7C8D8] flex items-center gap-1.5"
            >
              <ShoppingBag className="w-5 h-5 text-[#5B3A29]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-[#5B3A29] text-white text-[11px] font-semibold rounded-full flex items-center justify-center px-1 shadow-xs animate-scale">
                  {totalItems}
                </span>
              )}
              {subtotal > 0 && (
                <span className="hidden md:inline text-xs font-semibold text-[#5B3A29] pl-1">
                  Rs. {subtotal}
                </span>
              )}
            </button>

            {/* Highlighted Order Now Button */}
            <a
              href="#menu"
              id="nav-order-now-btn"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#5B3A29] hover:bg-[#2B1B17] text-[#FFF7EE] text-xs uppercase tracking-widest font-semibold rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Order Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-[#5B3A29] hover:text-[#2B1B17] rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF7EE] border-b border-[#F7C8D8] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#FCE8ED]">
            <span className="font-jp text-xs text-[#5B3A29]/70">
              心ほどける、桜色のひととき。
            </span>
            <div className="flex space-x-3 text-[#5B3A29]">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1 hover:text-[#2B1B17]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-1 hover:text-[#2B1B17]"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Business"
                className="p-1 hover:text-[#2B1B17]"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#5B3A29] hover:bg-[#FCE8ED] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#5B3A29] text-[#FFF7EE] font-semibold text-sm rounded-full shadow-sm"
            >
              <span>Explore Handcrafted Menu</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
