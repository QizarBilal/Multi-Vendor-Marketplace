'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, User } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You would typically send this to an API endpoint
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general'
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Me',
      details: 'bilalqizar@gmail.com',
      description: 'Send me an email anytime',
      action: 'mailto:bilalqizar@gmail.com'
    },
    {
      icon: Phone,
      title: 'Call Me',
      details: '+91 8925426680',
      description: 'Available most days',
      action: 'tel:+918925426680'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Tirupattur, Tamil Nadu',
      description: 'India',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 24 hours',
      description: 'I try to respond quickly',
      action: '#'
    }
  ]

  const faqItems = [
    {
      question: 'How do I become a vendor?',
      answer: 'You can apply to become a vendor by visiting our vendor registration page and completing the application process.'
    },
    {
      question: 'What are your shipping policies?',
      answer: 'Shipping policies vary by vendor. Each product page will show the specific shipping information for that item.'
    },
    {
      question: 'How do I return an item?',
      answer: 'Returns are handled through your order history. Simply find the order and click the return button to start the process.'
    },
    {
      question: 'How do I track my order?',
      answer: 'You can track your order through your account dashboard or by using the tracking number sent to your email.'
    }
  ]

  return (
    <div className="min-h-screen bg-accent-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Have questions? I&apos;d love to hear from you. Send me a message 
              and I&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-accent-50 rounded-2xl p-6 text-center border border-accent-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-primary-900 font-semibold mb-1">
                  {info.details}
                </p>
                <p className="text-secondary-600 text-sm">
                  {info.description}
                </p>
                {info.action !== '#' && (
                  <Link
                    href={info.action}
                    className="inline-block mt-3 text-primary-900 hover:text-primary-700 font-medium text-sm"
                  >
                    Contact Now →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and FAQ */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Send Me a Message
              </h2>
              <p className="text-secondary-600 mb-8">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-secondary-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-secondary-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-secondary-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="vendor">Vendor Support</option>
                    <option value="customer">Customer Support</option>
                    <option value="technical">Technical Issue</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-secondary-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-800 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-secondary-600 mb-8">
                Quick answers to common questions. Can't find what you're looking for? 
                Send us a message!
              </p>
              
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-accent-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 p-2 rounded-full flex-shrink-0">
                        <HelpCircle className="h-5 w-5 text-primary-900" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                          {item.question}
                        </h3>
                        <p className="text-secondary-600">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary-50 rounded-2xl p-6 border border-primary-200">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  Still have questions?
                </h3>
                <p className="text-primary-700 mb-4">
                  Can&apos;t find the answer you&apos;re looking for? Please chat with me 
                  directly.
                </p>
                <Link
                  href="#contact-form"
                  className="inline-flex items-center space-x-2 bg-primary-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-800 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Looking for Something Else?
            </h2>
            <p className="text-secondary-600">
              Here are some quick links that might help you find what you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/vendor/register"
              className="bg-accent-50 rounded-2xl p-6 text-center border border-accent-200 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className="bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-800 transition-colors">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Become a Vendor
              </h3>
              <p className="text-secondary-600">
                Start selling on our platform
              </p>
            </Link>

            <Link
              href="/products"
              className="bg-accent-50 rounded-2xl p-6 text-center border border-accent-200 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className="bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-800 transition-colors">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Browse Products
              </h3>
              <p className="text-secondary-600">
                Discover amazing products
              </p>
            </Link>

            <Link
              href="/about"
              className="bg-accent-50 rounded-2xl p-6 text-center border border-accent-200 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className="bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-800 transition-colors">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Learn About Us
              </h3>
              <p className="text-secondary-600">
                Our story and mission
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
