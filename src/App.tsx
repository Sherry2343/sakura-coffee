/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MenuItem } from './types';
import { CartProvider } from './context/CartContext';
import { MenuSeo } from './components/MenuSeo';
import { FallingPetals } from './components/FallingPetals';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { InteractiveMenu } from './components/InteractiveMenu';
import { HowToOrder } from './components/HowToOrder';
import { PackagingShowcase } from './components/PackagingShowcase';
import { FutureCafe } from './components/FutureCafe';
import { InstagramGallery } from './components/InstagramGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';

export default function App() {
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem | null>(null);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FFF7EE] text-[#5B3A29] relative selection:bg-[#F7C8D8] selection:text-[#2B1B17]">
        {/* Dynamic SEO & Open Graph / Twitter Card Meta Manager */}
        <MenuSeo activeItem={activeMenuItem} />

        {/* Gentle Ambient Falling Sakura Petals */}
        <FallingPetals />

        {/* Sticky Luxury Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Our Story Section */}
          <OurStory />

          {/* 3. Interactive Menu with Category Filters, Sharing & Cart Addition */}
          <InteractiveMenu onItemActiveChange={setActiveMenuItem} />

          {/* 4. How to Order Section */}
          <HowToOrder />

          {/* 5. Instagram Gallery */}
          <InstagramGallery />

          {/* 6. Packaging Showcase */}
          <PackagingShowcase />

          {/* 7. Future Café Concept ("A Little Café Dream, Coming Soon") */}
          <FutureCafe />

          {/* 8. Contact Section with Email & WhatsApp */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Shopping Cart Slide-over */}
        <CartDrawer />

        {/* WhatsApp Order Review & Redirection Modal */}
        <OrderConfirmationModal />
      </div>
    </CartProvider>
  );
}
