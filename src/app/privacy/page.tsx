import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Shield, Eye, Lock, UserCheck, Database, Settings, Globe, Mail } from 'lucide-react'

export default function PrivacyPage() {
  const dataTypes = [
    {
      category: "Personal Information",
      items: ["Name, email address, phone number", "Billing and shipping addresses", "Date of birth and gender", "Profile photo and preferences"],
      icon: UserCheck
    },
    {
      category: "Payment Information",
      items: ["Credit/debit card details", "Bank account information", "Transaction history", "Billing preferences"],
      icon: Lock
    },
    {
      category: "Usage Data",
      items: ["Website interactions and navigation", "Search queries and preferences", "Device and browser information", "IP address and location data"],
      icon: Eye
    },
    {
      category: "Communication Data",
      items: ["Customer service interactions", "Email communications", "Reviews and feedback", "Marketing preferences"],
      icon: Mail
    }
  ]

  const dataUse = [
    {
      purpose: "Service Provision",
      description: "To process orders, payments, and provide customer support",
      examples: ["Order fulfillment", "Payment processing", "Customer service", "Account management"]
    },
    {
      purpose: "Platform Improvement",
      description: "To analyze usage patterns and improve our platform functionality",
      examples: ["Website optimization", "Feature development", "Bug fixes", "Performance monitoring"]
    },
    {
      purpose: "Communication",
      description: "To send important updates, marketing communications, and promotional offers",
      examples: ["Order confirmations", "Shipping updates", "Product recommendations", "Promotional emails"]
    },
    {
      purpose: "Security & Compliance",
      description: "To ensure platform security and comply with legal requirements",
      examples: ["Fraud prevention", "Identity verification", "Legal compliance", "Security monitoring"]
    }
  ]

  const rights = [
    {
      right: "Access",
      description: "Request a copy of your personal data we hold",
      icon: Eye
    },
    {
      right: "Correction",
      description: "Update or correct inaccurate personal information",
      icon: Settings
    },
    {
      right: "Deletion",
      description: "Request deletion of your personal data",
      icon: UserCheck
    },
    {
      right: "Portability",
      description: "Receive your data in a portable format",
      icon: Database
    },
    {
      right: "Objection",
      description: "Object to processing of your personal data",
      icon: Shield
    },
    {
      right: "Restriction",
      description: "Request restriction of data processing",
      icon: Lock
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-accent-100" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="text-primary-200">
              <p>Last updated: January 1, 2025</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-primary-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-primary-900 mb-4">Introduction</h2>
                <p className="text-primary-700 leading-relaxed">
                  At MarketPlace, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, share, and protect your information when you use our platform. 
                  By using our services, you agree to the practices described in this policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="py-16 bg-accent-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Information We Collect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-accent-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <type.icon className="h-8 w-8 text-primary-900 mr-3" />
                      <h3 className="text-xl font-bold text-primary-900">{type.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {type.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span className="text-primary-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">How We Use Your Information</h2>
            
            <div className="space-y-8">
              {dataUse.map((use, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-accent-200 p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">{use.purpose}</h3>
                      <p className="text-primary-600">{use.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-primary-800 mb-3">Examples include:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {use.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                            <span className="text-primary-600">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Your Privacy Rights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rights.map((right, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-accent-200 hover:border-primary-200 transition-all duration-300 hover:shadow-xl group">
                  <div className="p-6 text-center">
                    <right.icon className="h-12 w-12 text-primary-900 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-primary-900 mb-3">{right.right}</h3>
                    <p className="text-primary-600">{right.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Lock className="h-12 w-12 text-primary-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Data Security</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Technical Safeguards</h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• SSL/TLS encryption for data transmission</li>
                  <li>• Secure database storage with encryption</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Access controls and authentication measures</li>
                </ul>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Organizational Measures</h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Staff training on data protection</li>
                  <li>• Limited access on a need-to-know basis</li>
                  <li>• Regular security policy updates</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="py-16 bg-accent-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Third-Party Services</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-accent-200 p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-4">We work with trusted partners including:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Payment Processing</h4>
                    <p className="text-primary-600">Stripe for secure payment processing and fraud protection</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Analytics</h4>
                    <p className="text-primary-600">Google Analytics for website usage insights (anonymized)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Email Services</h4>
                    <p className="text-primary-600">Email service providers for transactional communications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Cloud Storage</h4>
                    <p className="text-primary-600">Secure cloud services for data backup and storage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Updates */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Contact Us About Privacy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-50 rounded-xl p-6">
                <Globe className="h-8 w-8 text-primary-900 mb-4" />
                <h3 className="text-xl font-bold text-primary-900 mb-4">Privacy Questions</h3>
                <p className="text-primary-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-primary-700">
                  <p>Email: privacy@marketplace.com</p>
                  <p>Phone: +91 8925426680</p>
                  <p>Address: Tirupattur, Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6">
                <Settings className="h-8 w-8 text-primary-900 mb-4" />
                <h3 className="text-xl font-bold text-primary-900 mb-4">Policy Updates</h3>
                <p className="text-primary-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes:
                </p>
                <div className="space-y-2 text-primary-700">
                  <p>• Email notification to registered users</p>
                  <p>• Prominent notice on our website</p>
                  <p>• Updated "Last Modified" date</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-primary-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl">
                Download Privacy Policy PDF
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
