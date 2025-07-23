'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { ProductModal } from '@/components/ProductModal'

interface Product {
  id: string
  name: string
  price: number
  images: string[]
  vendor: {
    shopName: string
  }
  _avg: {
    rating: number
  } | null
}

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  useEffect(() => {
    // Featured products matching our products database
    const featuredProducts = [
      {
        id: '2',
        name: 'Smart Watch Series 7',
        price: 299.99,
        images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&auto=format'],
        vendor: { shopName: 'TechGear Pro' },
        _avg: { rating: 4.7 }
      },
      {
        id: '13',
        name: 'Leather Boots Premium',
        price: 159.99,
        images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&auto=format'],
        vendor: { shopName: 'FootCraft' },
        _avg: { rating: 4.8 }
      },
      {
        id: '22',
        name: 'Stainless Steel Cookware Set',
        price: 199.99,
        images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&auto=format'],
        vendor: { shopName: 'Kitchen Pro' },
        _avg: { rating: 4.8 }
      },
      {
        id: '16',
        name: 'Artisan Scented Candles',
        price: 19.99,
        images: ['https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&auto=format'],
        vendor: { shopName: 'Cozy Home' },
        _avg: { rating: 4.8 }
      },
      {
        id: '39',
        name: 'Organic Skincare Set',
        price: 79.99,
        images: ['https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop&auto=format'],
        vendor: { shopName: 'Pure Beauty' },
        _avg: { rating: 4.7 }
      },
      {
        id: '37',
        name: 'Stainless Steel Watch',
        price: 149.99,
        images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop&auto=format'],
        vendor: { shopName: 'TimeKeepers' },
        _avg: { rating: 4.8 }
      },
      {
        id: '28',
        name: 'Adjustable Dumbbell Set',
        price: 299.99,
        images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&auto=format'],
        vendor: { shopName: 'Strength Pro' },
        _avg: { rating: 4.7 }
      },
      {
        id: '6',
        name: 'Gaming Mechanical Keyboard',
        price: 129.99,
        images: ['https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop&auto=format'],
        vendor: { shopName: 'GameZone' },
        _avg: { rating: 4.8 }
      }
    ]
    
    setTimeout(() => {
      setProducts(featuredProducts)
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-accent-50 rounded-xl shadow-lg overflow-hidden animate-pulse border border-accent-200">
                <div className="h-48 bg-accent-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-accent-200 rounded mb-2"></div>
                  <div className="h-4 bg-accent-200 rounded w-2/3 mb-2"></div>
                  <div className="h-4 bg-accent-200 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Featured Products</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">Discover our handpicked selection of top-rated products from trusted vendors</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-accent-200 hover:border-primary-200">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button 
                  onClick={() => openModal(product)}
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:scale-110"
                >
                  <ShoppingCart className="h-4 w-4 text-primary-700 hover:text-primary-900 transition-colors" />
                </button>
              </div>
              
              <div className="p-5">
                <div className="mb-2">
                  <Link href={`/vendors/${product.vendor.shopName.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs text-primary-900 hover:text-primary-800 font-semibold bg-primary-50 px-2 py-1 rounded-md transition-colors">
                    {product.vendor.shopName}
                  </Link>
                </div>
                
                <h3 className="font-bold text-lg text-primary-900 mb-3 line-clamp-2 group-hover:text-primary-800 transition-colors">
                  <button 
                    onClick={() => openModal(product)}
                    className="text-left hover:underline"
                  >
                    {product.name}
                  </button>
                </h3>
                
                <div className="flex items-center mb-3">
                  {product._avg?.rating && (
                    <>
                      <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product._avg!.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-primary-600 ml-2 font-medium">
                        {product._avg.rating.toFixed(1)}
                      </span>
                    </>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary-900">
                    {formatPrice(product.price)}
                  </span>
                  <button
                    onClick={() => openModal(product)}
                    className="text-sm text-primary-900 hover:text-primary-800 font-semibold transition-colors underline hover:bg-primary-50 px-3 py-1 rounded-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/products" 
            className="inline-flex items-center px-8 py-4 bg-primary-900 text-white font-semibold rounded-xl hover:bg-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}
