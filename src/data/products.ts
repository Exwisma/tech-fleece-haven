
import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Nike Tech Fleece Windrunner Худи',
    price: 1200000,
    originalPrice: 1440000,
    category: 'hoodie',
    gender: 'men',
    colors: ['Черный', 'Темно-серый', 'Синий', 'Светло-серый'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop'
    ],
    description: 'Nike Tech Fleece Windrunner Худи обновляет наш оригинальный беговой ветровик легкой, теплой тканью Tech Fleece.',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Nike Tech Fleece Джоггеры',
    price: 1080000,
    category: 'pants',
    gender: 'men',
    colors: ['Черный', 'Темно-серый', 'Синий', 'Оливковый'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop'
    ],
    description: 'Nike Tech Fleece Джоггеры обеспечивают легкое тепло и приталенную посадку для элегантного образа.',
    isNew: true,
  },
  {
    id: '3',
    name: 'Nike Tech Fleece Женская Худи на молнии',
    price: 1320000,
    category: 'hoodie',
    gender: 'women',
    colors: ['Черный', 'Розовый', 'Белый', 'Фиолетовый'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop'
    ],
    description: 'Легкое тепло сочетается с премиальным стилем в этой худи на молнии из Nike Tech Fleece.',
    isBestSeller: true,
  },
  {
    id: '4',
    name: 'Nike Tech Fleece Спортивный Костюм',
    price: 2160000,
    originalPrice: 2520000,
    category: 'set',
    gender: 'men',
    colors: ['Черный', 'Синий', 'Серый', 'Бордовый'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop'
    ],
    description: 'Завершите свой образ этим комплектом из худи и джоггеров Tech Fleece для максимального комфорта и стиля.',
    isBestSeller: true,
  },
  {
    id: '5',
    name: 'Nike Женские Tech Fleece Джоггеры',
    price: 1020000,
    category: 'pants',
    gender: 'women',
    colors: ['Черный', 'Розовый', 'Белый', 'Серый'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1506629905607-43fdb8b63064?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519554318711-aaf1b6c8f15b?w=500&h=600&fit=crop'
    ],
    description: 'Созданы для комфорта и стиля, эти джоггеры имеют фирменную конструкцию Tech Fleece.',
    isNew: true,
  },
  {
    id: '6',
    name: 'Nike Tech Fleece Свитшот',
    price: 1140000,
    category: 'hoodie',
    gender: 'unisex',
    colors: ['Черный', 'Белый', 'Серый', 'Синий'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1503341338985-95b4d1d55bb9?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop'
    ],
    description: 'Классический дизайн с круглым вырезом и премиальной тканью Tech Fleece для повседневного комфорта.',
  },
];
