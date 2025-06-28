
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'hoodie' | 'pants' | 'set';
  gender: 'men' | 'women' | 'unisex';
  colors: string[];
  sizes: string[];
  images: string[];
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}
