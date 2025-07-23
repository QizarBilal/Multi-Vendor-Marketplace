'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

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

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [cartSuccess, setCartSuccess] = useState(false)

  if (!isOpen || !product) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Show success state
      setCartSuccess(true)
      
      // Reset after 2 seconds
      setTimeout(() => {
        setCartSuccess(false)
      }, 2000)
      
    } catch (error) {
      console.error('Failed to add to cart:', error)
    } finally {
      setIsAddingToCart(false)
    }
  }

  const handleWishlistToggle = () => {
    setIsInWishlist(!isInWishlist)
  }

  // Generate additional details for demo
  const productDetails = {
    description: `Premium quality ${product.name.toLowerCase()} crafted with attention to detail. This product represents excellent value and superior craftsmanship from ${product.vendor.shopName}.`,
    features: [
      "High-quality materials and construction",
      "Durable and long-lasting design",
      "Excellent customer reviews and ratings",
      "Fast and reliable shipping",
      "30-day return guarantee"
    ],
    specifications: [
      { label: "Brand", value: product.vendor.shopName },
      { label: "Model", value: product.name },
      { label: "Rating", value: `${product._avg?.rating?.toFixed(1) || 'N/A'} stars` },
      { label: "Price", value: formatPrice(product.price) }
    ]
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 sm:p-6 border-b border-accent-200 rounded-t-xl sm:rounded-t-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-primary-900">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent-100 rounded-full transition-colors flex-shrink-0"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Product Images */}
            <div className="space-y-3 sm:space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-accent-50 shadow-lg">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Thumbnail images (for future multi-image support) */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {[...Array(4)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      selectedImage === index 
                        ? 'border-primary-500 shadow-md' 
                        : 'border-accent-200 hover:border-primary-300'
                    }`}
                  >
                    <Image
                      src={product.images[0]}
                      alt={`${product.name} view ${index + 1}`}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Vendor & Title */}
              <div>
                <div className="text-sm text-primary-900 font-semibold bg-primary-50 px-3 py-1 rounded-md inline-block mb-3">
                  {product.vendor.shopName}
                </div>
                <h1 className="text-3xl font-bold text-primary-900 mb-4">{product.name}</h1>
              </div>

              {/* Rating */}
              {product._avg?.rating && (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-lg">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product._avg!.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-primary-900">
                    {product._avg.rating.toFixed(1)}
                  </span>
                  <span className="text-primary-600">(128 reviews)</span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-primary-900">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  {formatPrice(product.price * 1.2)}
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  17% OFF
                </span>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Description</h3>
                <p className="text-primary-600 leading-relaxed">{productDetails.description}</p>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-6">
                {/* Quantity Selector */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
                  <label className="text-primary-900 font-semibold">Quantity:</label>
                  <div className="flex items-center border-2 border-accent-300 rounded-lg hover:border-primary-400 transition-colors">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1 || isAddingToCart}
                      className="px-4 py-3 hover:bg-accent-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-primary-900"
                    >
                      −
                    </button>
                    <span className="px-6 py-3 min-w-[80px] text-center font-semibold text-primary-900 border-x border-accent-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={isAddingToCart}
                      className="px-4 py-3 hover:bg-accent-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-primary-900"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-sm text-primary-600">
                    Total: <span className="font-semibold text-primary-900">{formatPrice(product.price * quantity)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {/* Primary Action */}
                  <button 
                    onClick={handleAddToCart}
                    disabled={isAddingToCart}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 min-h-[56px] text-lg ${
                      cartSuccess 
                        ? 'bg-green-600 text-white' 
                        : isAddingToCart 
                          ? 'bg-primary-700 text-white cursor-not-allowed' 
                          : 'bg-primary-900 text-white hover:bg-primary-800 hover:shadow-lg active:scale-95'
                    }`}
                  >
                    {isAddingToCart ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        <span>Adding to Cart...</span>
                      </>
                    ) : cartSuccess ? (
                      <>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Added Successfully!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-5 w-5" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>

                  {/* Secondary Actions Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <button 
                      className="col-span-1 py-3 px-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
                    >
                      Buy Now
                    </button>
                    
                    <button 
                      onClick={handleWishlistToggle}
                      className={`col-span-1 py-3 px-4 border-2 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
                        isInWishlist 
                          ? 'border-red-500 bg-red-50 text-red-600' 
                          : 'border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white'
                      }`}
                      title={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart className={`h-5 w-5 mx-auto ${isInWishlist ? 'fill-current' : ''}`} />
                    </button>
                    
                    <button 
                      className="col-span-1 py-3 px-4 border-2 border-primary-900 text-primary-900 rounded-xl hover:bg-primary-900 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
                      title="Share Product"
                    >
                      <Share2 className="h-5 w-5 mx-auto" />
                    </button>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-800 font-semibold">In Stock</span>
                  </div>
                  <span className="text-green-600 text-sm">Ready to ship</span>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {productDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-primary-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-accent-200">
                <div className="text-center">
                  <Truck className="h-8 w-8 text-primary-900 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-primary-900">Free Shipping</div>
                  <div className="text-xs text-primary-600">On orders over ₹500</div>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-primary-900 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-primary-900">Secure Payment</div>
                  <div className="text-xs text-primary-600">100% protected</div>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-8 w-8 text-primary-900 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-primary-900">Easy Returns</div>
                  <div className="text-xs text-primary-600">30-day guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-8 pt-8 border-t border-accent-200">
            <h3 className="text-xl font-semibold text-primary-900 mb-4">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {productDetails.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between py-2 border-b border-accent-100">
                  <span className="text-primary-600">{spec.label}:</span>
                  <span className="text-primary-900 font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
