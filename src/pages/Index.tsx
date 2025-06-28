
import React from 'react';
import { CartProvider } from '../contexts/CartContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { products } from '../data/products';

const Index = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-gradient-main">
          <Header />
          <Hero />
          <ProductGrid products={products} />
          <Footer />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
};

export default Index;
