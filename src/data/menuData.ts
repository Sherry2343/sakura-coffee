import { MenuItem } from '../types';

export const BRAND_INFO = {
  name: 'Sakura Coffee',
  tagline: 'Bloom Into Your Day.',
  japaneseTagline: '心ほどける、桜色のひととき。',
  location: 'Lahore, Pakistan',
  email: 'sakuracoffeeshop61@gmail.com',
  whatsappUrl: 'https://wa.me/message/ZL5DMNO5IYP4C1',
  instagramUrl: 'https://www.instagram.com/sakura_coffee67?stkn=MW4zMWM5ZGxzYnFidA%3D%3D&utm_source=qr',
  facebookUrl: 'https://www.facebook.com/share/1F1h3Tqwc4/?mibextid=wwXIfr',
  logoUrl: '/assets/sakura-coffee-logo.png',
};

export const MENU_ITEMS: MenuItem[] = [
  // Signature Drinks
  {
    id: 'sakura-latte',
    name: 'Sakura Latte',
    japaneseName: '桜ラテ',
    category: 'signature',
    description: 'A delicate floral-inspired latte with a smooth, creamy finish.',
    price: 399,
    image: '/assets/sakura-hero-cup.jpg',
    badge: 'House Signature',
    isSignature: true,
  },
  {
    id: 'matcha-cloud',
    name: 'Matcha Cloud',
    japaneseName: '抹茶クラウド',
    category: 'signature',
    description: 'Creamy matcha with a soft cloud-like topping and refreshing Japanese flavor.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    badge: 'Guest Favorite',
    isSignature: true,
  },
  {
    id: 'kawaii-spanish-latte',
    name: 'Kawaii Spanish Latte',
    japaneseName: 'カワイイスパニッシュラテ',
    category: 'signature',
    description: 'Sweet, creamy, and smooth with a rich espresso finish.',
    price: 329,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    badge: 'Sweet & Velvety',
    isSignature: true,
  },

  // Food
  {
    id: 'eggs-sandwich',
    name: 'Eggs Sandwich',
    japaneseName: 'たまごサンド (Tamago Sando)',
    category: 'food',
    description: 'Fresh, creamy egg sandwich prepared with soft bread and flavorful seasoning.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    badge: 'Café Classic',
  },
  {
    id: 'fruit-sandwich',
    name: 'Fruit Sandwich',
    japaneseName: 'フルーツサンド (Fruit Sando)',
    category: 'food',
    description: 'Japanese-inspired fruit sandwich with fresh seasonal fruit and light cream.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    badge: 'Japanese Recipe',
  },

  // Iced Coffee
  {
    id: 'iced-caramel-latte',
    name: 'Iced Caramel Latte',
    japaneseName: 'アイスキャラメルラテ',
    category: 'iced',
    description: 'Chilled espresso, creamy milk, and caramel sweetness.',
    price: 349,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    badge: 'Chilled Delight',
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    japaneseName: 'アイスモカ',
    category: 'iced',
    description: 'Cold espresso blended with chocolate and creamy milk.',
    price: 369,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'iced-americano',
    name: 'Iced Americano',
    japaneseName: 'アイスアメリカーノ',
    category: 'iced',
    description: 'Bold espresso served over ice for a clean and refreshing coffee experience.',
    price: 279,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    badge: 'Pure & Crisp',
  },

  // Hot Coffee
  {
    id: 'hot-latte',
    name: 'Hot Latte',
    japaneseName: 'ホットラテ',
    category: 'hot',
    description: 'Smooth espresso with steamed milk and a soft creamy texture.',
    price: 329,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hot-cappuccino',
    name: 'Hot Cappuccino',
    japaneseName: 'ホットカプチーノ',
    category: 'hot',
    description: 'Rich espresso with steamed milk and a thick layer of foam.',
    price: 329,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80',
    badge: 'Silky Foam',
  },
];
