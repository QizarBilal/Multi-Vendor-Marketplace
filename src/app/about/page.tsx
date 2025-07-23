'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Users, Target, Award, Heart, Shield, Zap } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function AboutPage() {
  const stats = [
    { label: 'Active Vendors', value: '500+', icon: Users },
    { label: 'Products Listed', value: '10K+', icon: Target },
    { label: 'Happy Customers', value: '50K+', icon: Heart },
    { label: 'Development Time', value: '6 Months', icon: Award },
  ]

  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'I ensure all vendors are verified and products meet quality standards.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision I make puts customers and their satisfaction first.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'I continuously improve the platform with the latest technology.',
    },
  ]

  const developer = {
    name: 'Mohammed Qizar Bilal',
    role: 'Full Stack Developer & Creator',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
    description: 'Passionate full-stack developer dedicated to creating innovative e-commerce solutions.',
    location: 'Tirupattur, Tamil Nadu, India',
    email: 'bilalqizar@gmail.com',
    phone: '+91 8925426680'
  }

  return (
    <div className="min-h-screen bg-accent-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About This Marketplace
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              I&apos;m building the future of online commerce by connecting amazing vendors 
              with customers who love unique, quality products.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-900" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                My Story
              </h2>
              <div className="space-y-6 text-lg text-secondary-600 leading-relaxed">
                <p>
                  I started this project in 2024 with a simple idea: 
                  small businesses and artisans deserved a platform that truly 
                  supported their growth and success.
                </p>
                <p>
                  As a passionate full-stack developer from Tirupattur, Tamil Nadu, 
                  I began with just a vision and a dream to create something 
                  different. This marketplace represents months of dedicated development, 
                  learning, and innovation.
                </p>
                <p>
                  This platform isn&apos;t just about selling products – it&apos;s about 
                  building relationships, supporting dreams, and creating a 
                  community where everyone can thrive.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-accent-200">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format"
                  alt="Our team working together"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              My Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              These core principles guide everything I do and help me build 
              a marketplace that everyone can trust and enjoy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-accent-50 rounded-2xl p-8 text-center border border-accent-200 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Developer Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Meet the Developer
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              The passionate developer behind this marketplace, working every day 
              to make your experience better.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-accent-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-square lg:aspect-auto relative">
                  <Image
                    src={developer.image}
                    alt={developer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                    {developer.name}
                  </h3>
                  <p className="text-primary-900 font-semibold mb-4 text-lg">
                    {developer.role}
                  </p>
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {developer.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-secondary-600">
                      <span className="font-semibold mr-2">📍 Location:</span>
                      {developer.location}
                    </div>
                    <div className="flex items-center text-secondary-600">
                      <span className="font-semibold mr-2">📧 Email:</span>
                      <a href={`mailto:${developer.email}`} className="text-primary-900 hover:text-primary-800 transition-colors">
                        {developer.email}
                      </a>
                    </div>
                    <div className="flex items-center text-secondary-600">
                      <span className="font-semibold mr-2">📞 Phone:</span>
                      <a href={`tel:${developer.phone}`} className="text-primary-900 hover:text-primary-800 transition-colors">
                        {developer.phone}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-accent-200">
                    <p className="text-sm text-secondary-500 italic">
                      &quot;Building innovative solutions one line of code at a time.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join This Community?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking to discover unique products or start selling 
            your own, I&apos;d love to have you as part of this growing family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 bg-white text-primary-900 rounded-xl font-semibold hover:bg-accent-50 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Start Shopping
            </Link>
            <Link
              href="/vendor/register"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-primary-900 transition-all duration-200 hover:scale-105"
            >
              Become a Vendor
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
