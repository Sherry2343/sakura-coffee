import React, { useEffect } from 'react';
import { MenuItem } from '../types';
import { BRAND_INFO, MENU_ITEMS } from '../data/menuData';

interface MenuSeoProps {
  activeItem: MenuItem | null;
}

/**
 * Updates document head with specific Open Graph and Twitter card meta tags
 * for individual menu items to improve social media sharing and crawler indexability.
 */
export const MenuSeo: React.FC<MenuSeoProps> = ({ activeItem }) => {
  useEffect(() => {
    // Helper to update or create a meta tag
    const setMetaTag = (attributeName: 'name' | 'property', attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update or create link tag (canonical)
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://sakuracoffee.pk';
    const baseUrl = typeof window !== 'undefined' ? window.location.href.split('?')[0].split('#')[0] : 'https://sakuracoffee.pk/';

    if (activeItem) {
      // Individual Menu Item Metadata
      const itemUrl = `${baseUrl}?item=${encodeURIComponent(activeItem.id)}`;
      const pageTitle = `${activeItem.name} (${activeItem.japaneseName}) — Rs. ${activeItem.price} | Sakura Coffee Lahore`;
      const description = `${activeItem.description} Handcrafted in Lahore for Rs. ${activeItem.price}. Order via Sakura Coffee WhatsApp Business.`;
      const imageUrl = activeItem.image.startsWith('http') ? activeItem.image : `${origin}${activeItem.image}`;

      // 1. Browser Title
      document.title = pageTitle;

      // 2. Standard Meta Tags
      setMetaTag('name', 'description', description);
      setLinkTag('canonical', itemUrl);

      // 3. Open Graph Tags (Facebook, WhatsApp, LinkedIn, Discord, Telegram)
      setMetaTag('property', 'og:type', 'product');
      setMetaTag('property', 'og:site_name', BRAND_INFO.name);
      setMetaTag('property', 'og:title', `${activeItem.name} — Rs. ${activeItem.price} | Sakura Coffee`);
      setMetaTag('property', 'og:description', description);
      setMetaTag('property', 'og:image', imageUrl);
      setMetaTag('property', 'og:image:secure_url', imageUrl);
      setMetaTag('property', 'og:image:alt', `${activeItem.name} specialty coffee beverage at Sakura Coffee Lahore`);
      setMetaTag('property', 'og:image:width', '1200');
      setMetaTag('property', 'og:image:height', '630');
      setMetaTag('property', 'og:url', itemUrl);

      // Product Specific Open Graph extensions
      setMetaTag('property', 'product:price:amount', activeItem.price.toString());
      setMetaTag('property', 'product:price:currency', 'PKR');
      setMetaTag('property', 'product:availability', 'in stock');
      setMetaTag('property', 'product:condition', 'new');
      setMetaTag('property', 'product:retailer_item_id', activeItem.id);

      // 4. Twitter Card Meta Tags
      setMetaTag('name', 'twitter:card', 'summary_large_image');
      setMetaTag('name', 'twitter:site', '@sakura_coffee67');
      setMetaTag('name', 'twitter:creator', '@sakura_coffee67');
      setMetaTag('name', 'twitter:title', `${activeItem.name} (Rs. ${activeItem.price}) — Sakura Coffee Lahore`);
      setMetaTag('name', 'twitter:description', description);
      setMetaTag('name', 'twitter:image', imageUrl);
      setMetaTag('name', 'twitter:image:alt', activeItem.name);
      setMetaTag('name', 'twitter:label1', 'Price');
      setMetaTag('name', 'twitter:data1', `Rs. ${activeItem.price}`);
      setMetaTag('name', 'twitter:label2', 'Origin');
      setMetaTag('name', 'twitter:data2', 'Lahore, Pakistan');

      // 5. Dynamic JSON-LD for Search Engine Indexability
      let scriptTag = document.getElementById('item-schema-jsonld') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'item-schema-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }

      const itemSchema = {
        '@context': 'https://schema.org',
        '@type': 'MenuItem',
        name: activeItem.name,
        alternateName: activeItem.japaneseName,
        description: activeItem.description,
        image: imageUrl,
        menuAddOn: activeItem.badge,
        offers: {
          '@type': 'Offer',
          price: activeItem.price,
          priceCurrency: 'PKR',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'CafeOrCoffeeShop',
            name: BRAND_INFO.name,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Lahore',
              addressCountry: 'PK',
            },
          },
        },
      };

      scriptTag.textContent = JSON.stringify(itemSchema);
    } else {
      // Revert to General Website Metadata
      const defaultTitle = 'Sakura Coffee — Japanese-Inspired Specialty Coffee in Lahore';
      const defaultDesc =
        'Discover Sakura Coffee, a Japanese-inspired specialty coffee brand in Lahore serving handcrafted coffee, matcha, sandwiches, and refreshing drinks. Order through our website and confirm through WhatsApp.';
      const defaultImage = `${origin}/assets/sakura-coffee-logo.png`;

      document.title = defaultTitle;
      setMetaTag('name', 'description', defaultDesc);
      setLinkTag('canonical', baseUrl);

      setMetaTag('property', 'og:type', 'website');
      setMetaTag('property', 'og:site_name', BRAND_INFO.name);
      setMetaTag('property', 'og:title', defaultTitle);
      setMetaTag('property', 'og:description', defaultDesc);
      setMetaTag('property', 'og:image', defaultImage);
      setMetaTag('property', 'og:url', baseUrl);

      setMetaTag('name', 'twitter:card', 'summary_large_image');
      setMetaTag('name', 'twitter:title', defaultTitle);
      setMetaTag('name', 'twitter:description', defaultDesc);
      setMetaTag('name', 'twitter:image', defaultImage);

      // Remove item-specific schema if any
      const existingScript = document.getElementById('item-schema-jsonld');
      if (existingScript) {
        existingScript.remove();
      }
    }
  }, [activeItem]);

  return null;
};
