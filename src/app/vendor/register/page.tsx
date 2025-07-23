'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Upload, Store, MapPin, Phone, Mail, Globe, CheckCircle } from 'lucide-react'

export default function VendorRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Business Information
    businessName: '',
    businessType: '',
    description: '',
    website: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    
    // Business Details
    category: '',
    taxId: '',
    businessLicense: '',
    bankAccountNumber: '',
    routingNumber: '',
    
    // Documents
    businessLicenseFile: null,
    taxIdFile: null,
    identityDocument: null,
  })

  const categories = [
    'Electronics & Gadgets',
    'Clothing & Fashion',
    'Home & Garden',
    'Sports & Fitness',
    'Health & Beauty',
    'Books & Media',
    'Toys & Games',
    'Automotive',
    'Arts & Crafts',
    'Food & Beverages',
    'Other'
  ]

  const businessTypes = [
    'Individual/Sole Proprietorship',
    'Partnership',
    'LLC (Limited Liability Company)',
    'Corporation',
    'Non-Profit Organization'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }))
  }

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Application submitted successfully! We will review your application and get back to you within 2-3 business days.')
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep
                ? 'bg-primary-900 text-white'
                : 'bg-accent-200 text-secondary-600'
            }`}
          >
            {step < currentStep ? (
              <CheckCircle className="h-6 w-6" />
            ) : (
              step
            )}
          </div>
          {step < 4 && (
            <div
              className={`w-16 h-1 mx-2 ${
                step < currentStep ? 'bg-primary-900' : 'bg-accent-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-accent-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Link href="/vendors" className="text-primary-900 hover:text-primary-800 mr-4">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-primary-900">Become a Vendor</h1>
              <p className="text-secondary-600">Join our marketplace and start selling your products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-primary-900 mb-2">Personal Information</h2>
                  <p className="text-secondary-600">Tell us about yourself</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="input"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="input"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="input"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-primary-900 mb-2">Business Information</h2>
                  <p className="text-secondary-600">Tell us about your business</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      className="input"
                      placeholder="Enter your business name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Business Type *
                      </label>
                      <select
                        required
                        value={formData.businessType}
                        onChange={(e) => handleInputChange('businessType', e.target.value)}
                        className="input"
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Primary Category *
                      </label>
                      <select
                        required
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        className="input"
                      >
                        <option value="">Select category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Business Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="input"
                      placeholder="Describe your business and products..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Website (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="input"
                      placeholder="https://your-website.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Address & Legal */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-primary-900 mb-2">Address & Legal Information</h2>
                  <p className="text-secondary-600">Legal and address details</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Business Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="input"
                      placeholder="Enter street address"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="input"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="input"
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        className="input"
                        placeholder="ZIP"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="input"
                        placeholder="Country"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Tax ID/EIN *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.taxId}
                        onChange={(e) => handleInputChange('taxId', e.target.value)}
                        className="input"
                        placeholder="Enter Tax ID or EIN"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Business License Number
                      </label>
                      <input
                        type="text"
                        value={formData.businessLicense}
                        onChange={(e) => handleInputChange('businessLicense', e.target.value)}
                        className="input"
                        placeholder="Enter license number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Documents & Banking */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-primary-900 mb-2">Documents & Banking</h2>
                  <p className="text-secondary-600">Upload required documents and banking information</p>
                </div>

                <div className="space-y-6">
                  {/* Banking Information */}
                  <div className="bg-accent-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-primary-900 mb-4">Banking Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Bank Account Number *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.bankAccountNumber}
                          onChange={(e) => handleInputChange('bankAccountNumber', e.target.value)}
                          className="input"
                          placeholder="Account number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Routing Number *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.routingNumber}
                          onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                          className="input"
                          placeholder="Routing number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Document Uploads */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-primary-900">Required Documents</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Government ID *
                        </label>
                        <div className="border-2 border-dashed border-accent-300 rounded-lg p-6 text-center hover:border-primary-900 transition-colors">
                          <Upload className="h-8 w-8 mx-auto text-secondary-400 mb-2" />
                          <p className="text-sm text-secondary-600">Upload your government ID</p>
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                            onChange={(e) => handleFileChange('identityDocument', e.target.files?.[0] || null)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Business License
                        </label>
                        <div className="border-2 border-dashed border-accent-300 rounded-lg p-6 text-center hover:border-primary-900 transition-colors">
                          <Upload className="h-8 w-8 mx-auto text-secondary-400 mb-2" />
                          <p className="text-sm text-secondary-600">Upload business license</p>
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                            onChange={(e) => handleFileChange('businessLicenseFile', e.target.files?.[0] || null)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="bg-accent-50 p-6 rounded-lg">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        required
                        className="h-4 w-4 text-primary-900 focus:ring-primary-500 border-accent-300 rounded mt-1"
                      />
                      <div className="ml-3">
                        <label className="text-sm text-secondary-700">
                          I agree to the{' '}
                          <Link href="/terms" className="text-primary-900 hover:text-primary-800 underline">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link href="/privacy" className="text-primary-900 hover:text-primary-800 underline">
                            Privacy Policy
                          </Link>
                          . I understand that my application will be reviewed and I will be notified of the decision within 2-3 business days.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-accent-200">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'bg-secondary-200 text-secondary-500 cursor-not-allowed'
                    : 'bg-accent-200 text-secondary-700 hover:bg-accent-300'
                }`}
              >
                Previous
              </button>

              <div className="text-sm text-secondary-600">
                Step {currentStep} of 4
              </div>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 font-medium transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 font-medium transition-colors"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-semibold text-primary-900 mb-6 text-center">
            Why Sell on MarketPlace?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Store className="h-8 w-8 text-primary-900" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Easy Setup</h4>
              <p className="text-secondary-600 text-sm">Get your store up and running quickly with our intuitive tools</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-primary-900" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Global Reach</h4>
              <p className="text-secondary-600 text-sm">Access millions of customers worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary-900" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Competitive Fees</h4>
              <p className="text-secondary-600 text-sm">Keep more of your earnings with our low commission rates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
