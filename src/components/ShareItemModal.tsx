import React, { useState } from 'react';
import {
  X,
  Share2,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Twitter,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { MenuItem } from '../types';
import { BRAND_INFO } from '../data/menuData';
import { useCart } from '../context/CartContext';

interface ShareItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ShareItemModal: React.FC<ShareItemModalProps> = ({ item, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { addToCart, openCart } = useCart();

  if (!item) return null;

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://sakuracoffee.pk';
  const shareUrl = `${typeof window !== 'undefined' ? window.location.href.split('?')[0].split('#')[0] : 'https://sakuracoffee.pk/'}?item=${encodeURIComponent(
    item.id
  )}`;

  const shareText = `Check out ${item.name} (${item.japaneseName}) for Rs. ${item.price} at Sakura Coffee in Lahore! 🌸`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${item.name} — Sakura Coffee Lahore`,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or not supported
      }
    } else {
      handleCopyLink();
    }
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${shareText} \nOrder here: ${shareUrl}`
  )}`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}&url=${encodeURIComponent(shareUrl)}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#FFF7EE] w-full max-w-lg rounded-3xl shadow-2xl border-2 border-[#F7C8D8] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-[#FCE8ED] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FCE8ED] flex items-center justify-center text-[#5B3A29]">
              <Share2 className="w-4 h-4 text-[#F7C8D8]" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#2B1B17]">
                Share Menu Item
              </h3>
              <p className="font-jp text-[11px] text-[#5B3A29]/70">
                ソーシャルシェア • メタデータプレビュー
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close share dialog"
            className="p-1.5 text-[#5B3A29] hover:text-[#2B1B17] hover:bg-[#FCE8ED] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Social Card Preview (What appears on Twitter, WhatsApp, Facebook, iMessage) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#5B3A29] uppercase tracking-wider">
                Social Media Card Preview
              </span>
              <span className="text-[10px] text-[#5B3A29]/60 font-mono">
                og:image &amp; twitter:card
              </span>
            </div>

            <div className="rounded-2xl border border-[#F7C8D8] overflow-hidden bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#2B1B17]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold text-[#2B1B17] border border-[#F7C8D8] shadow-xs">
                  Rs. {item.price}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[10px] text-[#F7C8D8] font-jp">
                    {item.japaneseName}
                  </div>
                  <h4 className="font-serif text-lg font-bold leading-tight drop-shadow-sm">
                    {item.name}
                  </h4>
                </div>
              </div>

              <div className="p-3.5 space-y-1 bg-white">
                <div className="text-[11px] text-[#5B3A29]/60 uppercase tracking-wider font-semibold">
                  sakuracoffee.pk • Lahore, Pakistan
                </div>
                <p className="text-xs font-medium text-[#2B1B17] line-clamp-2">
                  {item.description} Handcrafted with care in Lahore.
                </p>
                <div className="pt-1 flex items-center gap-3 text-[10px] text-[#5B3A29]/70">
                  <span>Price: <strong className="text-[#2B1B17]">Rs. {item.price}</strong></span>
                  <span>•</span>
                  <span>Currency: <strong className="text-[#2B1B17]">PKR</strong></span>
                  <span>•</span>
                  <span>Availability: <strong className="text-[#25D366]">In Stock</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Share Link Input & Copy */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#5B3A29]">
              Item Share Link
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-white border border-[#F7C8D8] text-[#2B1B17] font-mono select-all focus:outline-none focus:ring-2 focus:ring-[#F7C8D8]"
              />
              <button
                onClick={handleCopyLink}
                className="px-4 py-2 bg-[#5B3A29] hover:bg-[#2B1B17] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-xs transition-colors flex-shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Media Sharing Buttons */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-semibold text-[#5B3A29] block">
              Share to Platforms
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {/* WhatsApp */}
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>WhatsApp</span>
              </a>

              {/* Twitter / X */}
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-black hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
              >
                <Twitter className="w-4 h-4 fill-white text-transparent" />
                <span>Twitter / X</span>
              </a>

              {/* Facebook */}
              <a
                href={facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
              >
                <span className="font-bold text-sm">f</span>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Add To Cart from Share dialog */}
          <div className="pt-3 border-t border-[#FCE8ED] flex items-center justify-between">
            <div className="text-xs">
              <span className="text-[#5B3A29]/70">Want to taste this?</span>
              <div className="font-serif font-bold text-sm text-[#2B1B17]">
                Rs. {item.price}
              </div>
            </div>

            <button
              onClick={() => {
                addToCart(item, 1);
                onClose();
                openCart();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5B3A29] hover:bg-[#2B1B17] text-[#FFF7EE] text-xs font-semibold rounded-full shadow-xs transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#F7C8D8]" />
              <span>Add to Order Bag</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
