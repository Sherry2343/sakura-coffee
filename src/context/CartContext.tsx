import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem, CustomerDetails, OrderType } from '../types';
import { BRAND_INFO } from '../data/menuData';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem, quantity?: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  customerDetails: CustomerDetails;
  updateCustomerDetails: (details: Partial<CustomerDetails>) => void;
  isReviewModalOpen: boolean;
  openReviewModal: () => void;
  closeReviewModal: () => void;
  generateWhatsAppMessage: () => string;
  getWhatsAppUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const INITIAL_CUSTOMER_DETAILS: CustomerDetails = {
  name: '',
  phone: '',
  orderType: 'delivery',
  address: '',
  notes: '',
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('sakura_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>(() => {
    try {
      const saved = localStorage.getItem('sakura_customer');
      return saved ? JSON.parse(saved) : INITIAL_CUSTOMER_DETAILS;
    } catch {
      return INITIAL_CUSTOMER_DETAILS;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('sakura_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('sakura_customer', JSON.stringify(customerDetails));
    } catch {
      // ignore
    }
  }, [customerDetails]);

  const addToCart = (item: MenuItem, quantity: number = 1) => {
    if (quantity <= 0) return;
    setCartItems(prev => {
      const existing = prev.find(ci => ci.item.id === item.id);
      if (existing) {
        return prev.map(ci =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + quantity } : ci
        );
      }
      return [...prev, { item, quantity }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prev =>
      prev.map(ci => (ci.item.id === itemId ? { ...ci, quantity } : ci))
    );
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(ci => ci.item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce(
    (sum, ci) => sum + ci.item.price * ci.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);

  const updateCustomerDetails = (details: Partial<CustomerDetails>) => {
    if (details.phone !== undefined) {
      details.phone = details.phone.replace(/\D/g, '');
    }
    setCustomerDetails(prev => ({ ...prev, ...details }));
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  const openReviewModal = () => {
    setIsCartOpen(false);
    setIsReviewModalOpen(true);
  };
  const closeReviewModal = () => setIsReviewModalOpen(false);

  const generateWhatsAppMessage = (): string => {
    const orderLines = cartItems
      .map(
        ci =>
          `• ${ci.item.name} x ${ci.quantity} — Rs. ${ci.item.price * ci.quantity}`
      )
      .join('\n');

    const typeLabel = customerDetails.orderType === 'delivery' ? 'Delivery' : 'Pickup';
    const addressLine =
      customerDetails.orderType === 'delivery'
        ? customerDetails.address || 'Address pending confirmation'
        : 'Store Pickup (Lahore)';

    const notesText = customerDetails.notes.trim()
      ? customerDetails.notes.trim()
      : 'None';

    return `Hello Sakura Coffee! 🌸

I would like to place an order.

Customer Name: ${customerDetails.name || 'Valued Guest'}
Phone Number: ${customerDetails.phone || 'Not provided'}
Order Type: ${typeLabel}
Delivery Address: ${addressLine}

Order Details:
${orderLines}

Subtotal: Rs. ${subtotal}

Order Notes:
${notesText}

Please confirm my order and let me know the estimated preparation or delivery time.

Thank you! 🌸`;
  };

  const getWhatsAppUrl = (): string => {
    const rawMessage = generateWhatsAppMessage();
    // The target WhatsApp link is https://wa.me/message/ZL5DMNO5IYP4C1
    // We can append ?text=URL_ENCODED_MESSAGE
    return `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(rawMessage)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        subtotal,
        totalItems,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        customerDetails,
        updateCustomerDetails,
        isReviewModalOpen,
        openReviewModal,
        closeReviewModal,
        generateWhatsAppMessage,
        getWhatsAppUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
