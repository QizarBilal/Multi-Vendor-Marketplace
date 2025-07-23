import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { RotateCcw, Package, Clock, CheckCircle, XCircle, AlertTriangle, RefreshCw, CreditCard } from 'lucide-react'

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Log into your account and select the item you want to return from your order history",
      icon: Package
    },
    {
      step: 2,
      title: "Print Return Label",
      description: "Download and print the prepaid return shipping label provided",
      icon: RotateCcw
    },
    {
      step: 3,
      title: "Package & Ship",
      description: "Securely package the item and attach the return label, then drop off at any authorized location",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Processing & Refund",
      description: "Once we receive your return, we'll process it within 3-5 business days and issue your refund",
      icon: CreditCard
    }
  ]

  const returnPolicies = [
    {
      category: "Electronics",
      timeLimit: "30 days",
      condition: "Must be in original packaging with all accessories",
      restockingFee: "None",
      specialNotes: "Software must be unregistered, no physical damage"
    },
    {
      category: "Clothing & Accessories",
      timeLimit: "45 days",
      condition: "Unworn with original tags attached",
      restockingFee: "None",
      specialNotes: "Items must be clean and odor-free"
    },
    {
      category: "Home & Kitchen",
      timeLimit: "30 days",
      condition: "Unused in original packaging",
      restockingFee: "None",
      specialNotes: "Perishable items and personalized items are non-returnable"
    },
    {
      category: "Books & Media",
      timeLimit: "30 days",
      condition: "Unopened/unread condition",
      restockingFee: "15% for opened items",
      specialNotes: "Digital downloads are non-returnable"
    }
  ]

  const nonReturnableItems = [
    "Perishable goods (food, flowers, newspapers)",
    "Personal care items (makeup, skincare opened)",
    "Digital downloads and gift cards",
    "Customized or personalized items",
    "Intimate apparel and swimwear",
    "Items damaged by misuse or normal wear"
  ]

  const refundOptions = [
    {
      method: "Original Payment Method",
      timeframe: "5-7 business days",
      description: "Refund to the original credit/debit card or payment method used",
      icon: CreditCard
    },
    {
      method: "Store Credit",
      timeframe: "Instant",
      description: "Receive store credit that can be used for future purchases",
      icon: RefreshCw
    },
    {
      method: "Exchange",
      timeframe: "3-5 business days",
      description: "Exchange for a different size, color, or similar item",
      icon: RotateCcw
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <RotateCcw className="h-16 w-16 mx-auto mb-6 text-accent-100" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Returns & Refunds</h1>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Easy returns with hassle-free refunds and exchanges
            </p>
          </div>
        </section>

        {/* Return Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">How to Return an Item</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {returnSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-10 w-10 text-primary-900" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    {index < returnSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary-200 transform -translate-y-1/2" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">{step.title}</h3>
                  <p className="text-primary-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Return Policies by Category */}
        <section className="py-16 bg-accent-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Return Policies by Category</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {returnPolicies.map((policy, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-accent-200 overflow-hidden">
                  <div className="bg-primary-900 text-white p-4">
                    <h3 className="text-xl font-bold">{policy.category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-primary-600">Return Window:</span>
                        <span className="font-semibold text-primary-900">{policy.timeLimit}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-primary-600">Restocking Fee:</span>
                        <span className="font-semibold text-primary-900">{policy.restockingFee}</span>
                      </div>
                      <div>
                        <span className="text-primary-600">Condition Required:</span>
                        <p className="text-primary-900 font-medium mt-1">{policy.condition}</p>
                      </div>
                      <div>
                        <span className="text-primary-600">Special Notes:</span>
                        <p className="text-primary-700 mt-1">{policy.specialNotes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Refund Options */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Refund Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {refundOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-accent-200 hover:border-primary-200 transition-all duration-300 hover:shadow-xl group">
                  <div className="p-6 text-center">
                    <option.icon className="h-12 w-12 text-primary-900 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{option.method}</h3>
                    <div className="text-lg font-semibold text-primary-600 mb-3">{option.timeframe}</div>
                    <p className="text-primary-600 text-sm">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Non-Returnable Items */}
        <section className="py-16 bg-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <XCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-red-900 mb-4">Non-Returnable Items</h2>
              <p className="text-lg text-red-700">The following items cannot be returned for hygiene and safety reasons</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-red-200 p-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {nonReturnableItems.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-amber-800 mb-4">Important Return Information</h3>
                  <div className="space-y-3 text-amber-700">
                    <p>• Returns must be initiated within the specified time limit from the delivery date</p>
                    <p>• Items must be returned in their original condition and packaging</p>
                    <p>• Return shipping is free for defective or incorrect items</p>
                    <p>• Customer is responsible for return shipping costs for non-defective items</p>
                    <p>• Refunds are processed after quality inspection of returned items</p>
                    <p>• Sale and clearance items may have different return policies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Need Help with Your Return?</h2>
            <p className="text-lg text-primary-600 mb-8">
              Our customer service team is here to help you with any questions about returns or refunds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl">
                Start Return Process
              </button>
              <button className="border-2 border-primary-900 text-primary-900 px-8 py-4 rounded-xl font-semibold hover:bg-primary-900 hover:text-white transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
