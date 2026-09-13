import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, AlertCircle, ShoppingBag, MapPin, Phone, User, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/menuData';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    customerDetails,
    updateCustomerDetails,
    openReviewModal,
  } = useCart();

  const [formErrors, setFormErrors] = useState<{
    name?: string;
    phone?: string;
    address?: string;
  }>({});

  if (!isCartOpen) return null;

  const validateAndProceed = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; phone?: string; address?: string } = {};

    if (!customerDetails.name.trim()) {
      errors.name = 'Please provide your name';
    }

    if (!customerDetails.phone.trim()) {
      errors.phone = 'Please provide your contact phone number (numbers only)';
    } else if (customerDetails.phone.length < 10) {
      errors.phone = 'Please enter a valid phone number (at least 10 digits, e.g. 03001234567)';
    }

    if (
      customerDetails.orderType === 'delivery' &&
      !customerDetails.address.trim()
    ) {
      errors.address = 'Please enter your Lahore delivery address';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    openReviewModal();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF7EE] shadow-2xl flex flex-col justify-between border-l border-[#F7C8D8]">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#FCE8ED] bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full p-0.5 border border-[#F7C8D8] overflow-hidden bg-[#FFF7EE]">
                <img
                  src={BRAND_INFO.logoUrl}
                  alt="Sakura Coffee Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-[#2B1B17]">
                  Your Order Bag
                </h2>
                <p className="font-jp text-[11px] text-[#5B3A29]/70">
                  ご注文内容の確認
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              aria-label="Close cart drawer"
              className="p-2 text-[#5B3A29] hover:text-[#2B1B17] hover:bg-[#FCE8ED] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FCE8ED] text-[#5B3A29] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 text-[#F7C8D8]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2B1B17]">
                  Your order bag is empty
                </h3>
                <p className="text-xs text-[#5B3A29]/70 max-w-xs mx-auto">
                  Discover our floral Sakura Latte, refreshing iced drinks, and Japanese sandos to begin.
                </p>
                <button
                  onClick={closeCart}
                  className="px-6 py-2.5 bg-[#5B3A29] text-[#FFF7EE] text-xs uppercase tracking-wider font-semibold rounded-full shadow-xs"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* List of items */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#5B3A29] uppercase tracking-wider">
                    <span>Selected Items</span>
                    <span>{cartItems.length} items</span>
                  </div>

                  <div className="divide-y divide-[#FCE8ED]">
                    {cartItems.map(ci => (
                      <div key={ci.item.id} className="py-3 flex items-center gap-3">
                        <img
                          src={ci.item.image}
                          alt={ci.item.name}
                          className="w-14 h-14 rounded-2xl object-cover border border-[#F7C8D8]/50 flex-shrink-0"
                          referrerPolicy="no-referrer"
                        />

                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-bold text-[#2B1B17] truncate">
                            {ci.item.name}
                          </h4>
                          <p className="text-xs text-[#5B3A29]/70">
                            Rs. {ci.item.price} each
                          </p>

                          {/* Quantity control */}
                          <div className="flex items-center gap-2 mt-1.5">
                            <button
                              onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                              aria-label={`Decrease ${ci.item.name}`}
                              className="w-5 h-5 rounded-md bg-white border border-[#F7C8D8] text-[#5B3A29] flex items-center justify-center hover:bg-[#FCE8ED]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold text-[#2B1B17] w-4 text-center">
                              {ci.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                              aria-label={`Increase ${ci.item.name}`}
                              className="w-5 h-5 rounded-md bg-white border border-[#F7C8D8] text-[#5B3A29] flex items-center justify-center hover:bg-[#FCE8ED]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right flex flex-col items-end justify-between self-stretch">
                          <button
                            onClick={() => removeFromCart(ci.item.id)}
                            aria-label={`Remove ${ci.item.name} from cart`}
                            className="text-[#5B3A29]/40 hover:text-red-500 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <span className="font-serif text-sm font-bold text-[#2B1B17]">
                            Rs. {ci.item.price * ci.quantity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtotal preview */}
                <div className="bg-white p-4 rounded-2xl border border-[#F7C8D8] flex items-center justify-between shadow-2xs">
                  <span className="text-sm font-medium text-[#5B3A29]">
                    Order Subtotal
                  </span>
                  <span className="font-serif text-lg font-bold text-[#2B1B17]">
                    Rs. {subtotal}
                  </span>
                </div>

                {/* Checkout & Delivery Form */}
                <form id="checkout-details-form" onSubmit={validateAndProceed} className="space-y-4 pt-2">
                  <div className="border-t border-[#FCE8ED] pt-4">
                    <h3 className="font-serif text-base font-bold text-[#2B1B17] mb-3">
                      Guest & Delivery Details
                    </h3>

                    {/* Order Type Toggle: Delivery vs Pickup */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <button
                        type="button"
                        onClick={() => updateCustomerDetails({ orderType: 'delivery' })}
                        className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                          customerDetails.orderType === 'delivery'
                            ? 'bg-[#5B3A29] text-[#FFF7EE] border-[#5B3A29] shadow-xs'
                            : 'bg-white text-[#5B3A29] border-[#F7C8D8] hover:bg-[#FCE8ED]'
                        }`}
                      >
                        🛵 Delivery (Lahore)
                      </button>
                      <button
                        type="button"
                        onClick={() => updateCustomerDetails({ orderType: 'pickup' })}
                        className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                          customerDetails.orderType === 'pickup'
                            ? 'bg-[#5B3A29] text-[#FFF7EE] border-[#5B3A29] shadow-xs'
                            : 'bg-white text-[#5B3A29] border-[#F7C8D8] hover:bg-[#FCE8ED]'
                        }`}
                      >
                        ☕ Store Pickup
                      </button>
                    </div>

                    {/* Customer Name */}
                    <div className="space-y-1 mb-3">
                      <label
                        htmlFor="customer-name-input"
                        className="block text-xs font-medium text-[#5B3A29] flex items-center gap-1.5"
                      >
                        <User className="w-3.5 h-3.5 text-[#5B3A29]" />
                        <span>Your Full Name *</span>
                      </label>
                      <input
                        id="customer-name-input"
                        type="text"
                        required
                        value={customerDetails.name}
                        onChange={e => updateCustomerDetails({ name: e.target.value })}
                        placeholder="e.g. Ayesha Khan"
                        className={`w-full px-3.5 py-2 text-xs rounded-xl bg-white border ${
                          formErrors.name ? 'border-red-400' : 'border-[#F7C8D8]'
                        } focus:outline-none focus:ring-2 focus:ring-[#F7C8D8] text-[#2B1B17]`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-red-500">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="customer-phone-input"
                          className="block text-xs font-medium text-[#5B3A29] flex items-center gap-1.5"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#5B3A29]" />
                          <span>Phone / WhatsApp Number *</span>
                        </label>
                        <span className="text-[10px] text-[#5B3A29]/60 font-medium">Numbers only</span>
                      </div>
                      <input
                        id="customer-phone-input"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={15}
                        required
                        value={customerDetails.phone}
                        onKeyDown={e => {
                          // Allow standard navigation, backspace, delete, tab, and copy/paste shortcuts
                          if (
                            [
                              'Backspace',
                              'Delete',
                              'Tab',
                              'Escape',
                              'Enter',
                              'ArrowLeft',
                              'ArrowRight',
                              'ArrowUp',
                              'ArrowDown',
                              'Home',
                              'End',
                            ].includes(e.key) ||
                            ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase()))
                          ) {
                            return;
                          }
                          // Block any non-digit key
                          if (!/^\d$/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        onChange={e => {
                          // Strip any non-numeric character
                          const numericOnly = e.target.value.replace(/\D/g, '');
                          updateCustomerDetails({ phone: numericOnly });
                        }}
                        placeholder="e.g. 03001234567"
                        className={`w-full px-3.5 py-2 text-xs rounded-xl bg-white border ${
                          formErrors.phone ? 'border-red-400' : 'border-[#F7C8D8]'
                        } focus:outline-none focus:ring-2 focus:ring-[#F7C8D8] text-[#2B1B17] tracking-wider`}
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-red-500">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Delivery Address (only if delivery) */}
                    {customerDetails.orderType === 'delivery' && (
                      <div className="space-y-1 mb-3">
                        <label
                          htmlFor="customer-address-input"
                          className="block text-xs font-medium text-[#5B3A29] flex items-center gap-1.5"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[#5B3A29]" />
                          <span>Delivery Address (Lahore) *</span>
                        </label>
                        <textarea
                          id="customer-address-input"
                          rows={2}
                          required
                          value={customerDetails.address}
                          onChange={e => updateCustomerDetails({ address: e.target.value })}
                          placeholder="House/Plot #, Street, Phase / Block, Area in Lahore"
                          className={`w-full px-3.5 py-2 text-xs rounded-xl bg-white border ${
                            formErrors.address ? 'border-red-400' : 'border-[#F7C8D8]'
                          } focus:outline-none focus:ring-2 focus:ring-[#F7C8D8] text-[#2B1B17]`}
                        />
                        {formErrors.address && (
                          <p className="text-[11px] text-red-500">{formErrors.address}</p>
                        )}
                      </div>
                    )}

                    {/* Order Notes */}
                    <div className="space-y-1 mb-3">
                      <label
                        htmlFor="customer-notes-input"
                        className="block text-xs font-medium text-[#5B3A29] flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#5B3A29]" />
                        <span>Special Instructions / Notes (Optional)</span>
                      </label>
                      <input
                        id="customer-notes-input"
                        type="text"
                        value={customerDetails.notes}
                        onChange={e => updateCustomerDetails({ notes: e.target.value })}
                        placeholder="e.g. Less sugar, extra hot, oat milk preference"
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-[#F7C8D8] focus:outline-none focus:ring-2 focus:ring-[#F7C8D8] text-[#2B1B17]"
                      />
                    </div>
                  </div>

                  {/* Mandatory Notice Required by Prompt */}
                  <div className="p-3.5 rounded-2xl bg-[#FCE8ED] border border-[#F7C8D8] flex items-start gap-2.5 text-left">
                    <AlertCircle className="w-4 h-4 text-[#5B3A29] flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed text-[#5B3A29] font-medium">
                      “Your order will be sent to our WhatsApp Business for confirmation.
                      Your order is not confirmed until our team replies.”
                    </p>
                  </div>

                  {/* Checkout Submit Button */}
                  <button
                    type="submit"
                    id="submit-order-review-btn"
                    className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-widest rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Order to WhatsApp 🌸</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-white/70 border-t border-[#FCE8ED] text-center text-[10px] text-[#5B3A29]/70">
            🌸 Handcrafted in Lahore with care • No pre-payment required
          </div>
        </div>
      </div>
    </div>
  );
};
