
import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Nike Tech Fleece Windrunner Hoodie',
    price: 100,
    originalPrice: 120,
    category: 'hoodie',
    gender: 'men',
    colors: ['Black', 'Dark Grey', 'Navy', 'Light Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop'
    ],
    description: 'The Nike Tech Fleece Windrunner Hoodie updates our original running windbreaker with lightweight, warm Tech Fleece fabric.',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Nike Tech Fleece Joggers',
    price: 90,
    category: 'pants',
    gender: 'men',
    colors: ['Black', 'Dark Grey', 'Navy', 'Olive'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop'
    ],
    description: 'Nike Tech Fleece Joggers feature lightweight warmth and a tailored fit for an elevated look.',
    isNew: true,
  },
  {
    id: '3',
    name: 'Nike Tech Fleece Full-Zip Hoodie',
    price: 110,
    category: 'hoodie',
    gender: 'women',
    colors: ['Black', 'Pink', 'White', 'Purple'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop'
    ],
    description: 'Lightweight warmth meets premium style in this full-zip hoodie crafted from Nike Tech Fleece.',
    isBestSeller: true,
  },
  {
    id: '4',
    name: 'Nike Tech Fleece Tracksuit Set',
    price: 180,
    originalPrice: 210,
    category: 'set',
    gender: 'men',
    colors: ['Black', 'Navy', 'Grey', 'Burgundy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop'
    ],
    description: 'Complete your look with this matching Tech Fleece hoodie and jogger set for ultimate comfort and style.',
    isBestSeller: true,
  },
  {
    id: '5',
    name: "Nike Women's Tech Fleece Joggers",
    price: 85,
    category: 'pants',
    gender: 'women',
    colors: ['Black', 'Pink', 'White', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1506629905607-43fdb8b63064?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519554318711-aaf1b6c8f15b?w=500&h=600&fit=crop'
    ],
    description: 'Designed for comfort and style, these joggers feature the signature Tech Fleece construction.',
    isNew: true,
  },
  {
    id: '6',
    name: 'Nike Tech Fleece Crew Sweatshirt',
    price: 95,
    category: 'hoodie',
    gender: 'unisex',
    colors: ['Black', 'White', 'Grey', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1503341338985-95b4d1d55bb9?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop'
    ],
    description: 'Classic crew neck design with premium Tech Fleece fabric for everyday comfort.',
  },
];
