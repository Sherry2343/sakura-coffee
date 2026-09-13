export type MenuCategoryId = 'all' | 'food' | 'signature' | 'iced' | 'hot';

export interface MenuItem {
  id: string;
  name: string;
  japaneseName: string;
  category: 'food' | 'signature' | 'iced' | 'hot';
  description: string;
  price: number; // in Pakistani Rupees
  image: string;
  badge?: string;
  isSignature?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export type OrderType = 'delivery' | 'pickup';

export interface CustomerDetails {
  name: string;
  phone: string;
  orderType: OrderType;
  address: string;
  notes: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  japaneseSubtitle: string;
  category: string;
  image: string;
  caption: string;
  tag: string;
}
