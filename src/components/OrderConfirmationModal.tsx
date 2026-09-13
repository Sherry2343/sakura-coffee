import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  Copy,
  Check,
  AlertCircle,
  ShoppingBag,
  Send,
  ExternalLink,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/menuData';

export const OrderConfirmationModal: React.FC = () => {
  const {
    isReviewModalOpen,
    closeReviewModal,
    cartItems,
    customerDetails,
    subtotal,
    generateWhatsAppMessage,
    getWhatsAppUrl,
  } = useCart();

  const [copied, setCopied] = useState(false);
  const [hasClickedWhatsApp, setHasClickedWhatsApp] = useState(false);

  if (!isReviewModalOpen) return null;

  const rawMessage = generateWhatsAppMessage();
  const whatsappUrl = getWhatsAppUrl();

  const handleCopyDetails = async () => {
    try {
      await navigator.clipboard.writeText(rawMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = rawMessage;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleContinueToWhatsApp = () => {
    setHasClickedWhatsApp(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#FFF7EE] w-full max-w-xl rounded-3xl shadow-2xl border-2 border-[#F7C8D8] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-white px-6 py-5 border-b border-[#FCE8ED] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full p-0.5 border border-[#F7C8D8] overflow-hidden bg-[#FFF7EE]">
              <img
                src={BRAND_INFO.logoUrl}
                alt="Sakura Coffee Official Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2B1B17]">
                Order Review & WhatsApp Send
              </h3>
              <p className="font-jp text-xs text-[#5B3A29]/70">
                ご注文内容の最終確認 • 送信
              </p>
            </div>
          </div>

          <button
            onClick={closeReviewModal}
            aria-label="Close order review"
            className="p-1.5 text-[#5B3A29] hover:text-[#2B1B17] hover:bg-[#FCE8ED] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Important Notice Banner */}
          <div className="bg-[#FCE8ED] border border-[#F7C8D8] rounded-2xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#5B3A29] flex-shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-[#5B3A29]">
              <p className="font-bold text-sm">WhatsApp Confirmation Required</p>
              <p className="leading-relaxed">
                “Your order will be sent to our WhatsApp Business for confirmation.
                Your order is not confirmed until our team replies.”
              </p>
              <p className="text-[11px] text-[#5B3A29]/80 italic">
                * Note: No payment has been taken. You will verify preparation time directly with our Lahore baristas.
              </p>
            </div>
          </div>

          {/* Customer & Delivery Summary */}
          <div className="bg-white rounded-2xl p-4 border border-[#F7C8D8]/60 space-y-2 text-xs">
            <div className="flex justify-between border-b border-[#FFF7EE] pb-2 font-medium text-[#5B3A29]">
              <span>Customer Name:</span>
              <span className="font-bold text-[#2B1B17]">{customerDetails.name}</span>
            </div>
            <div className="flex justify-between border-b border-[#FFF7EE] pb-2 font-medium text-[#5B3A29]">
              <span>Phone / WhatsApp:</span>
              <span className="font-bold text-[#2B1B17]">{customerDetails.phone}</span>
            </div>
            <div className="flex justify-between border-b border-[#FFF7EE] pb-2 font-medium text-[#5B3A29]">
              <span>Order Type:</span>
              <span className="font-bold text-[#2B1B17] uppercase tracking-wide">
                {customerDetails.orderType === 'delivery' ? '🛵 Delivery (Lahore)' : '☕ Store Pickup'}
              </span>
            </div>
            {customerDetails.orderType === 'delivery' && (
              <div className="flex justify-between border-b border-[#FFF7EE] pb-2 font-medium text-[#5B3A29]">
                <span>Delivery Address:</span>
                <span className="font-bold text-[#2B1B17] text-right max-w-xs">
                  {customerDetails.address}
                </span>
              </div>
            )}
            {customerDetails.notes && (
              <div className="flex justify-between font-medium text-[#5B3A29]">
                <span>Order Notes:</span>
                <span className="text-[#2B1B17] text-right max-w-xs italic">
                  {customerDetails.notes}
                </span>
              </div>
            )}
          </div>

          {/* Order Items Table */}
          <div className="bg-white rounded-2xl p-4 border border-[#F7C8D8]/60 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold uppercase text-[#5B3A29] tracking-wider border-b border-[#FCE8ED] pb-2">
              <span>Item & Quantity</span>
              <span>Subtotal</span>
            </div>

            <div className="divide-y divide-[#FFF7EE] text-xs">
              {cartItems.map(ci => (
                <div key={ci.item.id} className="py-2 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#2B1B17]">{ci.item.name}</span>
                    <span className="text-[#5B3A29]/70 ml-2">x {ci.quantity}</span>
                  </div>
                  <span className="font-serif font-bold text-[#2B1B17]">
                    Rs. {ci.item.price * ci.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#F7C8D8] flex items-center justify-between font-bold text-sm">
              <span className="text-[#5B3A29]">Subtotal:</span>
              <span className="font-serif text-lg text-[#2B1B17]">
                Rs. {subtotal}
              </span>
            </div>
          </div>

          {/* Pre-filled WhatsApp message preview */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#5B3A29]">
              <span>WhatsApp Message Preview</span>
              <button
                onClick={handleCopyDetails}
                className="inline-flex items-center gap-1 text-[#5B3A29] hover:text-[#2B1B17] font-medium"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#25D366]" />
                    <span className="text-[#25D366] font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy message</span>
                  </>
                )}
              </button>
            </div>
            <pre className="bg-white/80 p-3.5 rounded-xl border border-[#F7C8D8]/60 text-[11px] text-[#5B3A29] whitespace-pre-wrap font-sans max-h-36 overflow-y-auto leading-relaxed">
              {rawMessage}
            </pre>
          </div>

          {/* Action buttons */}
          <div className="space-y-2.5 pt-2">
            {/* Primary Action Button: Send Order to WhatsApp */}
            <button
              onClick={handleContinueToWhatsApp}
              id="send-order-whatsapp-btn"
              className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white text-transparent" />
              <span>Send Order to WhatsApp</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </button>

            {/* Backup Action Button: Copy Order Details */}
            <button
              onClick={handleCopyDetails}
              id="copy-order-backup-btn"
              className="w-full py-3 px-6 bg-white hover:bg-[#FCE8ED] text-[#5B3A29] border border-[#F7C8D8] font-semibold text-xs rounded-full transition-colors flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#25D366]" />
                  <span className="text-[#25D366]">Order Details Copied to Clipboard ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Order Details (Backup)</span>
                </>
              )}
            </button>
          </div>

          {/* Post-click reassuring note */}
          {hasClickedWhatsApp && (
            <div className="p-3 bg-[#E8E1E1]/40 rounded-xl text-center text-xs text-[#5B3A29]">
              ✨ Opened WhatsApp in a new tab! Simply press <strong>Send</strong> in WhatsApp chat to confirm with our barista team.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
