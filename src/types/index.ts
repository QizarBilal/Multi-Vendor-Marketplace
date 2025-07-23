export interface User {
  id: string
  email: string
  name?: string
  image?: string
  role: 'ADMIN' | 'VENDOR' | 'CUSTOMER'
  emailVerified?: Date
  createdAt: Date
  updatedAt: Date
}

export interface VendorProfile {
  id: string
  userId: string
  shopName: string
  description?: string
  logo?: string
  stripeAccountId?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Product {
  id: string
  name: string
  description?: string
  price: number
  stock: number
  images: string[]
  isActive: boolean
  vendorId: string
  categoryId: string
  createdAt: Date
  updatedAt: Date
  vendor?: VendorProfile
  category?: Category
  reviews?: Review[]
  _avg?: {
    rating: number
  }
}

export interface Category {
  id: string
  name: string
  description?: string
  image?: string
  createdAt: Date
  updatedAt: Date
}

export interface Order {
  id: string
  orderNumber: string
  total: number
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED'
  shippingName: string
  shippingEmail: string
  shippingPhone?: string
  shippingAddress: string
  customerId: string
  createdAt: Date
  updatedAt: Date
  orderItems: OrderItem[]
  payment?: Payment
}

export interface OrderItem {
  id: string
  quantity: number
  price: number
  orderId: string
  productId: string
  product: Product
}

export interface Payment {
  id: string
  stripePaymentId: string
  amount: number
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED'
  platformFee: number
  vendorAmount: number
  orderId: string
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  rating: number
  comment?: string
  customerId: string
  productId: string
  customer: User
  createdAt: Date
  updatedAt: Date
}

export interface CartItem {
  id: string
  quantity: number
  userId: string
  productId: string
  product: Product
}
