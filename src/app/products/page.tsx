'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Filter, Star, ShoppingCart, Heart } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const PRODUCTS = [
  // Electronics
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format',
    vendor: 'TechGear Pro',
    category: 'Electronics',
    inStock: true,
    discount: 23
  },
  {
    id: 2,
    name: 'Smart Watch Series 7',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.7,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format',
    vendor: 'TechGear Pro',
    category: 'Electronics',
    inStock: true,
    discount: 25,
    isBestSeller: true
  },
  {
    id: 3,
    name: 'Wireless Phone Charger',
    price: 39.99,
    rating: 4.2,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&auto=format',
    vendor: 'TechGear Pro',
    category: 'Electronics',
    inStock: true
  },
  {
    id: 4,
    name: 'Bluetooth Portable Speaker',
    price: 79.99,
    rating: 4.6,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&auto=format',
    vendor: 'SoundWave',
    category: 'Electronics',
    inStock: true
  },
  {
    id: 5,
    name: 'USB-C Hub Adapter',
    price: 49.99,
    rating: 4.4,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop&auto=format',
    vendor: 'TechGear Pro',
    category: 'Electronics',
    inStock: true
  },
  {
    id: 6,
    name: 'Gaming Mechanical Keyboard',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop&auto=format',
    vendor: 'GameZone',
    category: 'Electronics',
    inStock: true,
    discount: 19
  },
  {
    id: 7,
    name: 'Wireless Gaming Mouse',
    price: 69.99,
    rating: 4.5,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&auto=format',
    vendor: 'GameZone',
    category: 'Electronics',
    inStock: true
  },
  {
    id: 8,
    name: '4K Webcam with Microphone',
    price: 89.99,
    rating: 4.3,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop&auto=format',
    vendor: 'TechGear Pro',
    category: 'Electronics',
    inStock: true,
    isNew: true
  },

  // Clothing
  {
    id: 9,
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    rating: 4.3,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format',
    vendor: 'EcoWear',
    category: 'Clothing',
    inStock: true,
    isNew: true
  },
  {
    id: 10,
    name: 'Denim Jacket Classic',
    price: 89.99,
    rating: 4.6,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&auto=format',
    vendor: 'Urban Style',
    category: 'Clothing',
    inStock: true
  },
  {
    id: 11,
    name: 'Wool Blend Sweater',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&auto=format',
    vendor: 'Cozy Threads',
    category: 'Clothing',
    inStock: true,
    discount: 20
  },
  {
    id: 12,
    name: 'Athletic Running Shorts',
    price: 34.99,
    rating: 4.4,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&auto=format',
    vendor: 'SportActive',
    category: 'Clothing',
    inStock: true
  },
  {
    id: 13,
    name: 'Leather Boots Premium',
    price: 159.99,
    rating: 4.8,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&auto=format',
    vendor: 'FootCraft',
    category: 'Clothing',
    inStock: true,
    isBestSeller: true
  },
  {
    id: 14,
    name: 'Summer Floral Dress',
    price: 69.99,
    rating: 4.5,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&auto=format',
    vendor: 'Fashion Forward',
    category: 'Clothing',
    inStock: true
  },

  // Home & Garden
  {
    id: 15,
    name: 'Stainless Steel Water Bottle',
    price: 24.99,
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&auto=format',
    vendor: 'HydroLife',
    category: 'Home & Garden',
    inStock: true
  },
  {
    id: 16,
    name: 'Artisan Scented Candles',
    price: 19.99,
    rating: 4.8,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&auto=format',
    vendor: 'Cozy Home',
    category: 'Home & Garden',
    inStock: true,
    isBestSeller: true
  },
  {
    id: 17,
    name: 'Indoor Plant Collection',
    price: 49.99,
    rating: 4.6,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&auto=format',
    vendor: 'Green Thumb',
    category: 'Home & Garden',
    inStock: true
  },
  {
    id: 18,
    name: 'Garden Tool Set',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.5,
    reviews: 123,
    image: 'https://images.unsplash.com/photo-1558618666-fccd8c0b5c09?w=400&h=400&fit=crop&auto=format',
    vendor: 'Garden Master',
    category: 'Home & Garden',
    inStock: true,
    discount: 25
  },
  {
    id: 19,
    name: 'Outdoor String Lights',
    price: 34.99,
    rating: 4.7,
    reviews: 298,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format',
    vendor: 'Bright Lights',
    category: 'Home & Garden',
    inStock: true
  },
  {
    id: 20,
    name: 'Bamboo Storage Baskets',
    price: 39.99,
    rating: 4.4,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&auto=format',
    vendor: 'Eco Living',
    category: 'Home & Garden',
    inStock: true
  },

  // Home & Kitchen
  {
    id: 21,
    name: 'Ceramic Coffee Mug Set',
    price: 34.99,
    rating: 4.6,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1565060299244-dd7aeb2fd135?w=400&h=400&fit=crop&auto=format',
    vendor: 'Kitchen Essentials',
    category: 'Home & Kitchen',
    inStock: true
  },
  {
    id: 22,
    name: 'Stainless Steel Cookware Set',
    price: 199.99,
    originalPrice: 259.99,
    rating: 4.8,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&auto=format',
    vendor: 'Kitchen Pro',
    category: 'Home & Kitchen',
    inStock: true,
    discount: 23,
    isBestSeller: true
  },
  {
    id: 23,
    name: 'Electric Coffee Grinder',
    price: 79.99,
    rating: 4.5,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&auto=format',
    vendor: 'Coffee Masters',
    category: 'Home & Kitchen',
    inStock: true
  },
  {
    id: 24,
    name: 'Silicone Baking Mats',
    price: 24.99,
    rating: 4.7,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop&auto=format',
    vendor: 'Bake Easy',
    category: 'Home & Kitchen',
    inStock: true
  },
  {
    id: 25,
    name: 'Glass Food Storage Containers',
    price: 59.99,
    rating: 4.6,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&auto=format',
    vendor: 'Storage Solutions',
    category: 'Home & Kitchen',
    inStock: true
  },
  {
    id: 26,
    name: 'Wooden Cutting Board Set',
    price: 49.99,
    rating: 4.5,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=400&h=400&fit=crop&auto=format',
    vendor: 'Wood Craft',
    category: 'Home & Kitchen',
    inStock: true
  },

  // Sports & Fitness
  {
    id: 27,
    name: 'Fitness Yoga Mat',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&auto=format',
    vendor: 'FitLife',
    category: 'Sports & Fitness',
    inStock: true,
    discount: 29
  },
  {
    id: 28,
    name: 'Adjustable Dumbbell Set',
    price: 299.99,
    rating: 4.7,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&auto=format',
    vendor: 'Strength Pro',
    category: 'Sports & Fitness',
    inStock: true,
    isBestSeller: true
  },
  {
    id: 29,
    name: 'Resistance Bands Set',
    price: 29.99,
    rating: 4.4,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&auto=format',
    vendor: 'FitLife',
    category: 'Sports & Fitness',
    inStock: true
  },
  {
    id: 30,
    name: 'Running Shoes Performance',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.6,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format',
    vendor: 'RunFast',
    category: 'Sports & Fitness',
    inStock: true,
    discount: 19
  },
  {
    id: 31,
    name: 'Fitness Tracker Band',
    price: 89.99,
    rating: 4.3,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&auto=format',
    vendor: 'Health Tech',
    category: 'Sports & Fitness',
    inStock: true,
    isNew: true
  },
  {
    id: 32,
    name: 'Protein Shaker Bottle',
    price: 19.99,
    rating: 4.5,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&auto=format',
    vendor: 'NutriGear',
    category: 'Sports & Fitness',
    inStock: true
  },

  // Accessories
  {
    id: 33,
    name: 'Leather Laptop Bag',
    price: 89.99,
    rating: 4.4,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format',
    vendor: 'Craftsman Co.',
    category: 'Accessories',
    inStock: false
  },
  {
    id: 34,
    name: 'Polarized Sunglasses',
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&auto=format',
    vendor: 'SunStyle',
    category: 'Accessories',
    inStock: true,
    discount: 25
  },
  {
    id: 35,
    name: 'Minimalist Wallet',
    price: 39.99,
    rating: 4.5,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&auto=format',
    vendor: 'Minimal Design',
    category: 'Accessories',
    inStock: true
  },
  {
    id: 36,
    name: 'Crossbody Shoulder Bag',
    price: 69.99,
    rating: 4.7,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&auto=format',
    vendor: 'Fashion Forward',
    category: 'Accessories',
    inStock: true
  },
  {
    id: 37,
    name: 'Stainless Steel Watch',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&auto=format',
    vendor: 'TimeKeepers',
    category: 'Accessories',
    inStock: true,
    discount: 25,
    isBestSeller: true
  },
  {
    id: 38,
    name: 'Silk Scarf Collection',
    price: 44.99,
    rating: 4.4,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=400&h=400&fit=crop&auto=format',
    vendor: 'Elegant Accessories',
    category: 'Accessories',
    inStock: true
  },

  // Beauty & Personal Care
  {
    id: 39,
    name: 'Organic Skincare Set',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&auto=format',
    vendor: 'Pure Beauty',
    category: 'Beauty',
    inStock: true,
    discount: 20,
    isNew: true
  },
  {
    id: 40,
    name: 'Essential Oil Diffuser',
    price: 54.99,
    rating: 4.6,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&auto=format',
    vendor: 'Aromatherapy Plus',
    category: 'Beauty',
    inStock: true
  }
]

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Home & Garden', 'Accessories', 'Home & Kitchen', 'Sports & Fitness', 'Beauty']

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  // Handle URL search parameters
  useEffect(() => {
    const urlSearch = searchParams.get('search')
    if (urlSearch) {
      setSearchTerm(urlSearch)
    }
  }, [searchParams])

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'newest':
        return b.id - a.id
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-accent-50">
      <Navbar />
      
      {/* Hero Header Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Discover Amazing Products
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Browse through thousands of quality products from trusted vendors
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Enhanced Card Design */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-accent-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between lg:justify-start mb-4">
                <h3 className="text-lg font-semibold text-primary-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 text-secondary-600 hover:text-primary-900"
                >
                  <Filter className="h-5 w-5" />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Search Products
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search products, vendors..."
                      className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-accent-50"
                    />
                    <Search className="absolute left-3 top-3.5 h-5 w-5 text-secondary-400" />
                  </div>
                  {searchTerm && (
                    <div className="mt-2 text-sm text-secondary-600">
                      Searching for: <span className="font-semibold text-primary-900">"{searchTerm}"</span>
                    </div>
                  )}
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Categories
                  </label>
                  <div className="space-y-2">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                          selectedCategory === category
                            ? 'bg-primary-900 text-white font-medium shadow-md'
                            : 'text-secondary-600 hover:bg-primary-50 hover:text-primary-900'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-accent-50 transition-colors"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Stats Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-accent-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-secondary-900">Product Catalog</h2>
                  <p className="text-secondary-600">
                    Showing {sortedProducts.length} of {PRODUCTS.length} products
                    {searchTerm && (
                      <span className="ml-2">
                        for "<span className="font-semibold text-primary-900">{searchTerm}</span>"
                      </span>
                    )}
                    {selectedCategory !== 'All' && (
                      <span className="ml-2">
                        in <span className="font-semibold text-primary-900">{selectedCategory}</span>
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  {(searchTerm || selectedCategory !== 'All') && (
                    <button
                      onClick={() => {
                        setSearchTerm('')
                        setSelectedCategory('All')
                      }}
                      className="text-sm text-secondary-600 hover:text-primary-900 font-medium underline"
                    >
                      Clear filters
                    </button>
                  )}
                  <div className="bg-primary-50 px-4 py-2 rounded-lg">
                    <span className="text-primary-900 font-semibold">{PRODUCTS.length} Total</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-accent-200 hover:border-primary-200">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.discount && (
                        <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          -{product.discount}%
                        </span>
                      )}
                      {product.isNew && (
                        <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          New
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="bg-gradient-to-r from-primary-900 to-primary-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          Best Seller
                        </span>
                      )}
                    </div>
                    <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
                      <Heart className="h-5 w-5 text-secondary-400 hover:text-red-500 transition-colors" />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <Link href={`/vendors/${product.vendor.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-primary-900 hover:text-primary-800 font-semibold bg-primary-50 px-2 py-1 rounded-md transition-colors">
                        {product.vendor}
                      </Link>
                      <span className="text-sm text-secondary-400 ml-2">• {product.category}</span>
                    </div>

                    <h3 className="font-bold text-lg text-secondary-900 mb-3 line-clamp-2">
                      <Link href={`/products/${product.id}`} className="hover:text-primary-900 transition-colors">
                        {product.name}
                      </Link>
                    </h3>

                    <div className="flex items-center mb-4">
                      <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-secondary-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-secondary-600 ml-2 font-medium">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary-900">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-secondary-400 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      disabled={!product.inStock}
                      className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        product.inStock
                          ? 'bg-primary-900 text-white hover:bg-primary-800 hover:scale-105 shadow-md hover:shadow-lg'
                          : 'bg-secondary-200 text-secondary-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="col-span-full">
                <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-accent-200">
                  <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-secondary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">No products found</h3>
                  <p className="text-secondary-600 mb-4">
                    {searchTerm ? (
                      <>No products match your search for "<strong>{searchTerm}</strong>"</>
                    ) : (
                      <>No products found in the selected category</>
                    )}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <button
                      onClick={() => {
                        setSearchTerm('')
                        setSelectedCategory('All')
                      }}
                      className="px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors"
                    >
                      Clear all filters
                    </button>
                    <Link href="/vendors" className="px-4 py-2 border border-primary-900 text-primary-900 rounded-lg hover:bg-primary-50 transition-colors">
                      Browse vendors
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
