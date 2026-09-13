import React from 'react';
import { Mail, MapPin, Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/menuData';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B1B17] text-[#FFF7EE] pt-16 pb-12 border-t border-[#5B3A29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full p-1 bg-white/95 border border-[#F7C8D8] shadow-sm flex-shrink-0">
                <img
                  src={BRAND_INFO.logoUrl}
                  alt="Official Sakura Coffee Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white block">
                  Sakura Coffee
                </span>
                <span className="font-jp text-xs text-[#F7C8D8] tracking-widest block">
                  さくらコーヒー • Lahore
                </span>
              </div>
            </div>

            <p className="font-serif italic text-lg text-[#F7C8D8]">
              “{BRAND_INFO.tagline}”
            </p>

            <p className="text-xs text-[#FFF7EE]/70 font-light leading-relaxed max-w-sm">
              Japanese-inspired specialty coffee brand crafted with care in Lahore, Pakistan.
              Bringing calm mindfulness, beautiful aesthetics, and delicious flavors to every cup.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F7C8D8] hover:text-[#2B1B17] text-white flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F7C8D8] hover:text-[#2B1B17] text-white flex items-center justify-center transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Business"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white text-white flex items-center justify-center transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F7C8D8] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#FFF7EE]/80">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Our Story & Philosophy
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Artisanal Coffee & Sando Menu
                </a>
              </li>
              <li>
                <a href="#how-to-order" className="hover:text-white transition-colors">
                  How to Order via WhatsApp
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Instagram Gallery
                </a>
              </li>
              <li>
                <a href="#packaging" className="hover:text-white transition-colors">
                  Packaging Design
                </a>
              </li>
              <li>
                <a href="#future-cafe" className="hover:text-white transition-colors">
                  Future Café Dream
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Location, Email & Order Button */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#F7C8D8] font-semibold">
              Brand Info & Orders
            </h4>

            <div className="space-y-2 text-xs text-[#FFF7EE]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F7C8D8] flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#F7C8D8] flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="hover:text-white hover:underline truncate"
                >
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#menu"
                id="footer-order-now-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#F7C8D8] hover:bg-white text-[#2B1B17] text-xs font-bold uppercase tracking-wider rounded-full shadow-sm transition-all"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-[#FFF7EE]/60 font-light">
              We process and handcraft orders on demand. Delivery across Lahore and pickup available.
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF7EE]/60">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Sakura Coffee. All rights reserved. Lahore, Pakistan.
          </p>

          <p className="font-serif italic text-sm text-[#F7C8D8] text-center sm:text-right">
            “Made with warmth, coffee, and a little sakura magic. 🌸”
          </p>
        </div>
      </div>
    </footer>
  );
};
