
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                Nike Tech
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Fleece
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-lg">
                Premium comfort meets cutting-edge style. Discover the ultimate collection of Nike Tech Fleece apparel.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-gradient group">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                View Lookbook
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-gray-300">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold">15K+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-gray-300">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop"
                alt="Nike Tech Fleece Collection"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Price Tag */}
              <div className="absolute top-6 right-6 glass-effect rounded-2xl p-4 text-white">
                <div className="text-sm opacity-80">Starting from</div>
                <div className="text-2xl font-bold">$85</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 glass-effect rounded-2xl p-4 text-white animate-bounce">
              <div className="text-sm">New Arrival</div>
              <div className="font-semibold">Tech Fleece 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
