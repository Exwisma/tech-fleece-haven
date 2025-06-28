
import React, { useState, useMemo } from 'react';
import { Product } from '../types/product';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

interface FilterOptions {
  category: string;
  gender: string;
  priceRange: string;
  sortBy: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title = "Наша Коллекция" }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    gender: 'all',
    priceRange: 'all',
    sortBy: 'default',
  });

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      // Category filter
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }

      // Gender filter
      if (filters.gender !== 'all' && product.gender !== filters.gender && product.gender !== 'unisex') {
        return false;
      }

      // Price range filter
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(p => p.replace('+', ''));
        const minPrice = parseInt(min) * 12000; // Convert to UZS (assuming 1$ = 12000 UZS)
        const maxPrice = max ? parseInt(max) * 12000 : Infinity;
        
        if (product.price < minPrice || product.price > maxPrice) {
          return false;
        }
      }

      return true;
    });

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Keep original order for default
        break;
    }

    return filtered;
  }, [products, filters]);

  return (
    <section id="shop" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Откройте для себя нашу премиальную коллекцию одежды Nike Tech Fleece, 
            созданную для комфорта, стиля и производительности.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <ProductFilters filters={filters} onFilterChange={setFilters} />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Показано {filteredAndSortedProducts.length} из {products.length} товаров
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-4">Товары не найдены</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Попробуйте изменить фильтры, чтобы увидеть больше товаров.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
