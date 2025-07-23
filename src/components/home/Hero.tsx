'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShoppingBag, Star, Users, Store, ChevronLeft, ChevronRight } from 'lucide-react'

// Sample products for animation
const ANIMATED_PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&auto=format',
    vendor: 'TechGear Pro',
    discount: 23
  },
  {
    id: 2,
    name: 'Smart Watch Series 7',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.7,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&auto=format',
    vendor: 'TechGear Pro',
    discount: 25
  },
  {
    id: 3,
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    rating: 4.3,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&auto=format',
    vendor: 'EcoWear'
  },
  {
    id: 4,
    name: 'Stainless Steel Cookware',
    price: 199.99,
    originalPrice: 259.99,
    rating: 4.8,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&auto=format',
    vendor: 'Kitchen Pro',
    discount: 23
  },
  {
    id: 5,
    name: 'Fitness Yoga Mat',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop&auto=format',
    vendor: 'FitLife',
    discount: 29
  },
  {
    id: 6,
    name: 'Premium Sunglasses',
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop&auto=format',
    vendor: 'SunStyle',
    discount: 25
  }
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Get visible products for current index
  const getVisibleProducts = (index: number) => {
    const total = ANIMATED_PRODUCTS.length
    return [
      ANIMATED_PRODUCTS[(index - 1 + total) % total], // Left
      ANIMATED_PRODUCTS[index],                       // Center  
      ANIMATED_PRODUCTS[(index + 1) % total]         // Right
    ]
  }

  const visibleProducts = getVisibleProducts(currentIndex)

  // Auto-advance animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev + 1) % ANIMATED_PRODUCTS.length)
        
        setTimeout(() => {
          setIsAnimating(false)
        }, 600) // Animation duration
      }
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [isAnimating])

  // Manual navigation
  const goToProduct = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true)
      setCurrentIndex(index)
      
      setTimeout(() => {
        setIsAnimating(false)
      }, 600)
    }
  }

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + ANIMATED_PRODUCTS.length) % ANIMATED_PRODUCTS.length
    goToProduct(prevIndex)
  }

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % ANIMATED_PRODUCTS.length
    goToProduct(nextIndex)
  }

  return (
    <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover Amazing Products from Trusted Vendors
              </h1>
              <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed">
                Shop from a curated selection of quality products with the best prices and ratings
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">1000+</div>
                <div className="text-primary-200 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">34</div>
                <div className="text-primary-200 text-sm">Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">4.8★</div>
                <div className="text-primary-200 text-sm">Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-xl hover:bg-accent-50 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <ShoppingBag className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/vendors" 
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-900 transition-all duration-200 hover:scale-105"
              >
                <Store className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Browse Vendors
              </Link>
            </div>
          </div>

          {/* Animated Product Cards */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label="Previous product"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label="Next product"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Main Product Card - Center */}
              <div 
                key={`main-${currentIndex}`}
                className={`relative z-20 transform scale-110 transition-all duration-600 ${
                  isAnimating ? 'animate-fadeInScale' : ''
                }`}
              >
                <ProductCard 
                  product={visibleProducts[1]} 
                  isMain={true}
                />
              </div>

              {/* Side Product Cards */}
              <div 
                key={`left-${currentIndex}`}
                className={`absolute left-8 top-8 transform -rotate-12 scale-75 opacity-70 z-10 transition-all duration-600 ${
                  isAnimating ? 'animate-slideInLeft' : ''
                }`}
              >
                <ProductCard 
                  product={visibleProducts[0]} 
                  isMain={false}
                />
              </div>

              <div 
                key={`right-${currentIndex}`}
                className={`absolute right-8 top-8 transform rotate-12 scale-75 opacity-70 z-10 transition-all duration-600 ${
                  isAnimating ? 'animate-slideInRight' : ''
                }`}
              >
                <ProductCard 
                  product={visibleProducts[2]} 
                  isMain={false}
                />
              </div>

              {/* Background Cards for Depth */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute transform rotate-6 scale-50 opacity-20 z-0">
                  <ProductCard 
                    product={ANIMATED_PRODUCTS[(currentIndex + 3) % ANIMATED_PRODUCTS.length]} 
                    isMain={false}
                  />
                </div>
                <div className="absolute transform -rotate-6 scale-50 opacity-20 z-0">
                  <ProductCard 
                    product={ANIMATED_PRODUCTS[(currentIndex + 4) % ANIMATED_PRODUCTS.length]} 
                    isMain={false}
                  />
                </div>
              </div>
            </div>
            
            
            {/* Product Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {ANIMATED_PRODUCTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProduct(index)}
                  disabled={isAnimating}
                  className={`rounded-full transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed ${
                    index === currentIndex
                      ? 'bg-white w-8 h-3' 
                      : 'bg-white/50 hover:bg-white/75 w-3 h-3'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-bounce">
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Star className="w-6 h-6 text-yellow-300" />
        </div>
      </div>
      <div className="absolute bottom-20 left-10 animate-pulse">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Users className="w-8 h-8 text-primary-200" />
        </div>
      </div>
    </div>
  )
}

// Product Card Component for Animation
function ProductCard({ product, isMain }: { product: any, isMain: boolean }) {
  return (
    <div className={`bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
      isMain ? 'w-64 h-80' : 'w-48 h-60'
    }`}>
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={isMain ? 200 : 150}
          className={`w-full object-cover transition-transform duration-500 hover:scale-110 ${
            isMain ? 'h-40' : 'h-28'
          }`}
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
            -{product.discount}%
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      <div className={`p-4 ${isMain ? 'space-y-3' : 'space-y-2'}`}>
        <div className="text-xs text-primary-900 font-semibold bg-primary-50 px-2 py-1 rounded-md inline-block">
          {product.vendor}
        </div>

        <h3 className={`font-bold text-gray-900 line-clamp-2 ${
          isMain ? 'text-sm' : 'text-xs'
        }`}>
          {product.name}
        </h3>

        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className={`font-bold text-primary-900 ${
              isMain ? 'text-lg' : 'text-sm'
            }`}>
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {isMain && (
          <button className="w-full bg-primary-900 text-white py-2 rounded-lg text-sm font-semibold hover:bg-primary-800 transition-colors transform hover:scale-105">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}
