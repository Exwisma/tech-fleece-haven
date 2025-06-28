
import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-UZ', {
      style: 'currency',
      currency: 'UZS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price).replace('UZS', 'сум');
  };

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
  };

  return (
    <div className="product-card group">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => {
            if (product.images.length > 1) {
              setCurrentImageIndex(1);
            }
          }}
          onMouseLeave={() => setCurrentImageIndex(0)}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-green-500 hover:bg-green-600">Новинка</Badge>
          )}
          {product.isBestSeller && (
            <Badge className="bg-orange-500 hover:bg-orange-600">Хит продаж</Badge>
          )}
          {product.originalPrice && (
            <Badge variant="destructive">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button onClick={handleAddToCart} className="w-full btn-gradient">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Быстро в корзину
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-lg line-clamp-2 mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Colors */}
        <div className="space-y-2">
          <div className="text-sm font-medium">Цвета:</div>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === color ? 'border-blue-500 scale-110' : 'border-gray-300'
                }`}
                style={{
                  backgroundColor: color.toLowerCase() === 'белый' ? '#ffffff' : 
                                 color.toLowerCase() === 'черный' ? '#000000' :
                                 color.toLowerCase() === 'серый' || color.toLowerCase() === 'светло-серый' || color.toLowerCase() === 'темно-серый' ? '#6b7280' :
                                 color.toLowerCase() === 'синий' ? '#1e3a8a' :
                                 color.toLowerCase() === 'розовый' ? '#ec4899' :
                                 color.toLowerCase() === 'фиолетовый' ? '#8b5cf6' :
                                 color.toLowerCase() === 'оливковый' ? '#84cc16' :
                                 color.toLowerCase() === 'бордовый' ? '#991b1b' : '#6b7280'
                }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-2">
          <div className="text-sm font-medium">Размеры:</div>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-sm border rounded-md transition-colors ${
                  selectedSize === size
                    ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <div className="text-sm text-gray-500 capitalize">
            {product.gender === 'men' ? 'мужское' : product.gender === 'women' ? 'женское' : 'унисекс'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
