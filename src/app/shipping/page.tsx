import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Truck, Package, Clock, MapPin, Globe, Calculator, CheckCircle, AlertCircle } from 'lucide-react'

export default function ShippingPage() {
  const shippingMethods = [
    {
      name: "Standard Shipping",
      duration: "5-7 business days",
      cost: "Free on orders over ₹500",
      description: "Our most popular shipping option with reliable delivery times",
      icon: Package
    },
    {
      name: "Express Shipping",
      duration: "2-3 business days",
      cost: "₹150",
      description: "Faster delivery for when you need your items quickly",
      icon: Truck
    },
    {
      name: "Next Day Delivery",
      duration: "1 business day",
      cost: "₹300",
      description: "Get your order the next business day (select cities only)",
      icon: Clock
    },
    {
      name: "Same Day Delivery",
      duration: "Within 24 hours",
      cost: "₹500",
      description: "Available in major metro cities for urgent deliveries",
      icon: CheckCircle
    }
  ]

  const deliveryZones = [
    {
      zone: "Metro Cities",
      cities: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"],
      standardTime: "3-5 days",
      expressTime: "1-2 days",
      sameDayAvailable: true
    },
    {
      zone: "Tier 1 Cities",
      cities: ["Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Patna", "Bhopal", "Ludhiana"],
      standardTime: "4-6 days",
      expressTime: "2-3 days",
      sameDayAvailable: false
    },
    {
      zone: "Tier 2 Cities",
      cities: ["Agra", "Varanasi", "Meerut", "Rajkot", "Jabalpur", "Guwahati", "Chandigarh", "Coimbatore"],
      standardTime: "5-7 days",
      expressTime: "3-4 days",
      sameDayAvailable: false
    },
    {
      zone: "Rural Areas",
      cities: ["Remote villages", "Hill stations", "Border areas"],
      standardTime: "7-10 days",
      expressTime: "5-7 days",
      sameDayAvailable: false
    }
  ]

  const shippingPolicies = [
    {
      title: "Order Processing Time",
      content: "Orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed the next business day.",
      icon: Clock
    },
    {
      title: "Shipping Costs",
      content: "Shipping costs are calculated based on weight, dimensions, and destination. Free shipping is available on orders over ₹500.",
      icon: Calculator
    },
    {
      title: "International Shipping",
      content: "We currently ship to select international destinations. Additional customs duties may apply for international orders.",
      icon: Globe
    },
    {
      title: "Address Accuracy",
      content: "Please ensure your shipping address is accurate and complete. We are not responsible for packages delivered to incorrect addresses.",
      icon: MapPin
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Truck className="h-16 w-16 mx-auto mb-6 text-accent-100" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Shipping Information</h1>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Fast, reliable, and secure delivery options to get your orders to you quickly
            </p>
          </div>
        </section>

        {/* Shipping Methods */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Shipping Methods</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {shippingMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-accent-200 hover:border-primary-200 transition-all duration-300 hover:shadow-xl group">
                  <div className="p-6 text-center">
                    <method.icon className="h-12 w-12 text-primary-900 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{method.name}</h3>
                    <div className="text-2xl font-bold text-primary-600 mb-2">{method.duration}</div>
                    <div className="text-lg font-semibold text-primary-800 mb-3">{method.cost}</div>
                    <p className="text-primary-600 text-sm">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Zones */}
        <section className="py-16 bg-accent-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Delivery Zones & Times</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {deliveryZones.map((zone, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-accent-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-primary-900">{zone.zone}</h3>
                      {zone.sameDayAvailable && (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Same Day Available
                        </span>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-primary-600 mb-2">
                        <strong>Cities:</strong> {zone.cities.join(', ')}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary-50 rounded-lg p-3">
                        <div className="text-sm text-primary-600 mb-1">Standard Delivery</div>
                        <div className="font-bold text-primary-900">{zone.standardTime}</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-3">
                        <div className="text-sm text-primary-600 mb-1">Express Delivery</div>
                        <div className="font-bold text-primary-900">{zone.expressTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Policies */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Shipping Policies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {shippingPolicies.map((policy, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-accent-200 hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <policy.icon className="h-8 w-8 text-primary-900 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-primary-900 mb-3">{policy.title}</h3>
                        <p className="text-primary-600 leading-relaxed">{policy.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracking Section */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Package className="h-12 w-12 text-primary-900 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Track Your Order</h2>
            <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
              Enter your order number to track the status and location of your package in real-time.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter order number"
                  className="flex-1 px-4 py-3 border border-accent-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-900 text-white px-6 py-3 rounded-r-lg hover:bg-primary-800 transition-colors">
                  Track
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-amber-800 mb-2">Important Shipping Notes</h3>
                  <ul className="space-y-2 text-amber-700">
                    <li>• Delivery times may vary during peak seasons and holidays</li>
                    <li>• PO Box addresses are not accepted for certain shipping methods</li>
                    <li>• Large or heavy items may require special handling with additional delivery time</li>
                    <li>• Weather conditions may affect delivery schedules</li>
                    <li>• A signature may be required for high-value packages</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
