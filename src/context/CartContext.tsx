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
  getWhatsAppWebUrl: () => string;
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
    const customerName = customerDetails.name.trim() || 'Valued Guest';
    const customerPhone = customerDetails.phone.trim() || 'Not provided';
    const orderType = customerDetails.orderType === 'delivery' ? 'Delivery' : 'Store Pickup';
    const address =
      customerDetails.orderType === 'delivery'
        ? customerDetails.address.trim() || 'Address to be confirmed'
        : 'Store Pickup (Lahore)';
    const notes = customerDetails.notes.trim();

    const orderMessage = `
Hello Sakura Coffee! 🌸

I would like to place an order.

Customer Name: ${customerName}
Phone Number: ${customerPhone}
Order Type: ${orderType}
Delivery Address: ${address}

Order Details:
${cartItems
  .map(
    item =>
      `${item.item.name} x ${item.quantity} — Rs. ${
        item.item.price * item.quantity
      }`
  )
  .join('\n')}

Subtotal: Rs. ${subtotal}

Order Notes:
${notes || 'None'}

Please confirm my order and let me know the estimated preparation or delivery time.

Thank you! 🌸
`;

    return orderMessage.trim();
  };

  const getWhatsAppUrl = (): string => {
    const whatsappNumber = '923375377778';
    const orderMessage = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
    return whatsappUrl;
  };

  const getWhatsAppWebUrl = (): string => {
    const whatsappNumber = '923375377778';
    const orderMessage = generateWhatsAppMessage();
    return `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(orderMessage)}`;
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
        getWhatsAppWebUrl,
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
