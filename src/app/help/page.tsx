import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HelpCircle, Search, MessageCircle, Phone, Mail, Book, ShoppingBag, Truck, RotateCcw, Shield } from 'lucide-react'

export default function HelpPage() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click on the 'Sign In' button in the top navigation, then select 'Create Account'. Fill in your details and verify your email address to get started."
    },
    {
      question: "How do I place an order?",
      answer: "Browse products, add items to your cart, proceed to checkout, fill in your shipping details, and complete payment. You'll receive an order confirmation email."
    },
    {
      question: "Can I cancel my order?",
      answer: "Yes, you can cancel orders within 1 hour of placing them. Go to 'My Orders' in your account dashboard and click 'Cancel Order'."
    },
    {
      question: "How do I track my order?",
      answer: "You'll receive a tracking number via email once your order ships. You can also check order status in your account dashboard under 'My Orders'."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, PayPal, and digital wallets through our secure Stripe payment system."
    },
    {
      question: "How do I become a vendor?",
      answer: "Click 'Become a Vendor' in the top navigation, fill out the vendor registration form, provide required business documents, and wait for approval."
    }
  ]

  const supportTopics = [
    {
      icon: ShoppingBag,
      title: "Orders & Checkout",
      description: "Get help with placing orders, payment issues, and checkout problems",
      topics: ["Order placement", "Payment methods", "Checkout errors", "Order confirmation"]
    },
    {
      icon: Truck,
      title: "Shipping & Delivery",
      description: "Track your orders and understand our shipping policies",
      topics: ["Shipping times", "Delivery tracking", "Shipping costs", "International delivery"]
    },
    {
      icon: RotateCcw,
      title: "Returns & Refunds",
      description: "Learn about our return policy and how to process returns",
      topics: ["Return process", "Refund timeline", "Return shipping", "Product exchanges"]
    },
    {
      icon: Shield,
      title: "Account & Security",
      description: "Manage your account settings and security preferences",
      topics: ["Password reset", "Account verification", "Privacy settings", "Two-factor authentication"]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-accent-100" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Help Center</h1>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Find answers to your questions and get the support you need
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search for help topics..."
                className="w-full px-6 py-4 pr-12 rounded-xl text-primary-900 text-lg focus:outline-none focus:ring-2 focus:ring-accent-200"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-primary-400" />
            </div>
          </div>
        </section>

        {/* Quick Support Options */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">How can we help you?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {supportTopics.map((topic, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-accent-200 hover:border-primary-200 transition-all duration-300 hover:shadow-xl group">
                  <div className="p-6">
                    <topic.icon className="h-12 w-12 text-primary-900 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-primary-900 mb-3">{topic.title}</h3>
                    <p className="text-primary-600 mb-4">{topic.description}</p>
                    <ul className="space-y-1">
                      {topic.topics.map((item, idx) => (
                        <li key={idx} className="text-sm text-primary-500 hover:text-primary-700 cursor-pointer transition-colors">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary-50 rounded-xl p-6 text-center hover:bg-primary-100 transition-colors">
                <MessageCircle className="h-12 w-12 text-primary-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-900 mb-2">Live Chat</h3>
                <p className="text-primary-600 mb-4">Chat with our support team</p>
                <button className="bg-primary-900 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition-colors">
                  Start Chat
                </button>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6 text-center hover:bg-primary-100 transition-colors">
                <Phone className="h-12 w-12 text-primary-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-900 mb-2">Phone Support</h3>
                <p className="text-primary-600 mb-4">Call us: +91 8925426680</p>
                <button className="bg-primary-900 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition-colors">
                  Call Now
                </button>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6 text-center hover:bg-primary-100 transition-colors">
                <Mail className="h-12 w-12 text-primary-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-900 mb-2">Email Support</h3>
                <p className="text-primary-600 mb-4">bilalqizar@gmail.com</p>
                <button className="bg-primary-900 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition-colors">
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-accent-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Book className="h-12 w-12 text-primary-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-primary-600">Quick answers to common questions</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-accent-200 hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">{faq.question}</h3>
                    <p className="text-primary-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-8">Still need help?</h2>
            <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
              Cannott find what you are looking for? Our support team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl">
                Contact Support
              </button>
              <button className="border-2 border-primary-900 text-primary-900 px-8 py-4 rounded-xl font-semibold hover:bg-primary-900 hover:text-white transition-colors">
                Browse All Articles
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
