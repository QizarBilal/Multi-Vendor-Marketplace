'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { ShoppingCart, Menu, X, User, Store, Settings } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-accent-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-primary-900 p-3 rounded-xl group-hover:bg-primary-800 transition-all duration-300 group-hover:scale-110">
                <Store className="h-6 w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-primary-900 group-hover:text-primary-800 transition-colors">
                  MarketPlace
                </h1>
                <p className="text-xs text-secondary-600 -mt-1">Multi-Vendor Platform</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-1 bg-accent-50 rounded-full p-2 border border-accent-200">
              <Link href="/" className="px-4 py-2 rounded-full text-sm font-medium text-secondary-700 hover:text-primary-900 hover:bg-white hover:shadow-md transition-all duration-200">
                Home
              </Link>
              <Link href="/products" className="px-4 py-2 rounded-full text-sm font-medium text-secondary-700 hover:text-primary-900 hover:bg-white hover:shadow-md transition-all duration-200">
                Products
              </Link>
              <Link href="/vendors" className="px-4 py-2 rounded-full text-sm font-medium text-secondary-700 hover:text-primary-900 hover:bg-white hover:shadow-md transition-all duration-200">
                Vendors
              </Link>
              <Link href="/about" className="px-4 py-2 rounded-full text-sm font-medium text-secondary-700 hover:text-primary-900 hover:bg-white hover:shadow-md transition-all duration-200">
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 rounded-full text-sm font-medium text-secondary-700 hover:text-primary-900 hover:bg-white hover:shadow-md transition-all duration-200">
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <Link href="/cart" className="relative p-3 text-secondary-700 hover:text-primary-900 hover:bg-accent-50 rounded-full transition-all duration-200 group">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-primary-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    0
                  </span>
                </Link>
                
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-secondary-700 hover:text-primary-900 transition-colors p-2 hover:bg-accent-50 rounded-full">
                    <div className="bg-primary-100 p-2 rounded-full">
                      <User className="h-5 w-5 text-primary-900" />
                    </div>
                    <span className="hidden lg:block font-medium">{session.user?.name || 'Account'}</span>
                  </button>
                  
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-lg py-2 hidden group-hover:block border border-accent-200 z-50">
                    <Link href="/profile" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:bg-accent-50 transition-colors">
                      <User className="h-4 w-4 mr-3 text-secondary-400" />
                      Profile
                    </Link>
                    <Link href="/orders" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:bg-accent-50 transition-colors">
                      <ShoppingCart className="h-4 w-4 mr-3 text-secondary-400" />
                      My Orders
                    </Link>
                    {session.user?.role === 'VENDOR' && (
                      <Link href="/vendor/dashboard" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:bg-accent-50 transition-colors">
                        <Store className="h-4 w-4 mr-3 text-secondary-400" />
                        Vendor Dashboard
                      </Link>
                    )}
                    {session.user?.role === 'ADMIN' && (
                      <Link href="/admin" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:bg-accent-50 transition-colors">
                        <Settings className="h-4 w-4 mr-3 text-secondary-400" />
                        Admin Panel
                      </Link>
                    )}
                    <hr className="my-2 border-accent-200" />
                    <button
                      onClick={() => signOut()}
                      className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <X className="h-4 w-4 mr-3" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link 
                  href="/auth/signin" 
                  className="px-4 py-2 text-sm font-medium text-secondary-700 hover:text-primary-900 transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  href="/auth/signup" 
                  className="px-6 py-3 bg-primary-900 text-white text-sm font-semibold rounded-full hover:bg-primary-800 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-secondary-600 hover:text-primary-900 hover:bg-accent-50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-accent-200">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-accent-50">
              <Link href="/" className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg transition-all duration-200 font-medium">
                🏠 Home
              </Link>
              <Link href="/products" className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg transition-all duration-200 font-medium">
                📦 Products
              </Link>
              <Link href="/vendors" className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg transition-all duration-200 font-medium">
                🏪 Vendors
              </Link>
              <Link href="/about" className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg transition-all duration-200 font-medium">
                ℹ️ About
              </Link>
              <Link href="/contact" className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg transition-all duration-200 font-medium">
                📞 Contact
              </Link>
              
              {session ? (
                <div className="border-t border-accent-200 pt-4 mt-4">
                  <Link href="/cart" className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg transition-all duration-200 font-medium">
                    🛒 Shopping Cart
                  </Link>
                  <Link href="/profile" className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg transition-all duration-200 font-medium">
                    👤 Profile
                  </Link>
                  <Link href="/orders" className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg transition-all duration-200 font-medium">
                    📋 My Orders
                  </Link>
                  {session.user?.role === 'VENDOR' && (
                    <Link href="/vendor/dashboard" className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg transition-all duration-200 font-medium">
                      🏪 Vendor Dashboard
                    </Link>
                  )}
                  {session.user?.role === 'ADMIN' && (
                    <Link href="/admin" className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg transition-all duration-200 font-medium">
                      ⚙️ Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium"
                  >
                    🚪 Sign Out
                  </button>
                </div>
              ) : (
                <div className="border-t border-accent-200 pt-4 mt-4 space-y-2">
                  <Link href="/auth/signin" className="block px-4 py-3 text-center text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg transition-all duration-200 font-medium border border-accent-200">
                    Sign In
                  </Link>
                  <Link href="/auth/signup" className="block px-4 py-3 text-center bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-all duration-200 font-semibold">
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
