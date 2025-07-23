import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-accent-100">MarketPlace</h3>
            <p className="text-primary-200 mb-4 max-w-md">
              A comprehensive multi-vendor marketplace connecting buyers with trusted sellers worldwide. Built with passion by Mohammed Qizar Bilal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-accent-100 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-300 hover:text-accent-100 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-300 hover:text-accent-100 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-primary-200 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/vendors" className="text-primary-200 hover:text-white transition-colors">
                  Vendors
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-100">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-primary-200 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-primary-200 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-primary-200 hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-accent-200" />
              <span className="text-primary-200">bilalqizar@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-accent-200" />
              <span className="text-primary-200">+91 8925426680</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-accent-200" />
              <span className="text-primary-200">Tirupattur, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-200">
            © 2025 MarketPlace. All rights reserved. Built with ❤️ by Mohammed Qizar Bilal using Next.js and Stripe.
          </p>
        </div>
      </div>
    </footer>
  )
}
