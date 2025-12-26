export interface Variant {
  id: string;
  label: string; // e.g., "250g", "500g"
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  subtitle?: string; // e.g., "Made with organic jaggery"
  variants: Variant[];
  isNew?: boolean;
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  product: Product; // minimal copy for display
  selectedVariantLabel: string;
}

export enum Category {
  SWEETS = 'Sweets',
  SNACKS = 'Snacks',
  OILS = 'Oils',
  SPICES = 'Spices & Powders',
  PICKLES = 'Pickles',
  FRYUMS = 'Fryums',
  HONEY_GHEE = 'Honey & Ghee'
}