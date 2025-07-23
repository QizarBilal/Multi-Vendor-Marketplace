import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@marketplace.com' },
    update: {},
    create: {
      email: 'admin@marketplace.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
      emailVerified: new Date(),
    },
  })

  // Create vendor user
  const vendorPassword = await bcrypt.hash('vendor123', 12)
  const vendor = await prisma.user.upsert({
    where: { email: 'vendor@marketplace.com' },
    update: {},
    create: {
      email: 'vendor@marketplace.com',
      name: 'Vendor User',
      password: vendorPassword,
      role: 'VENDOR',
      emailVerified: new Date(),
    },
  })

  // Create customer user
  const customerPassword = await bcrypt.hash('customer123', 12)
  const customer = await prisma.user.upsert({
    where: { email: 'customer@marketplace.com' },
    update: {},
    create: {
      email: 'customer@marketplace.com',
      name: 'Customer User',
      password: customerPassword,
      role: 'CUSTOMER',
      emailVerified: new Date(),
    },
  })

  // Create vendor profile
  const vendorProfile = await prisma.vendorProfile.upsert({
    where: { userId: vendor.id },
    update: {},
    create: {
      userId: vendor.id,
      shopName: 'TechStore Pro',
      description: 'Premium electronics and gadgets for tech enthusiasts',
      isActive: true,
    },
  })

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { name: 'Electronics' },
      update: {},
      create: {
        name: 'Electronics',
        description: 'Electronic devices and gadgets',
      },
    }),
    prisma.category.upsert({
      where: { name: 'Fashion' },
      update: {},
      create: {
        name: 'Fashion',
        description: 'Clothing, shoes, and accessories',
      },
    }),
    prisma.category.upsert({
      where: { name: 'Home & Garden' },
      update: {},
      create: {
        name: 'Home & Garden',
        description: 'Home improvement and garden supplies',
      },
    }),
    prisma.category.upsert({
      where: { name: 'Sports & Outdoors' },
      update: {},
      create: {
        name: 'Sports & Outdoors',
        description: 'Sports equipment and outdoor gear',
      },
    }),
  ])

  // Create sample products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Premium Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 199.99,
        stock: 50,
        images: ['/api/placeholder/400/400'],
        vendorId: vendorProfile.id,
        categoryId: categories[0].id,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Smart Fitness Watch',
        description: 'Advanced fitness tracking with heart rate monitor',
        price: 299.99,
        stock: 25,
        images: ['/api/placeholder/400/400'],
        vendorId: vendorProfile.id,
        categoryId: categories[0].id,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Organic Cotton T-Shirt',
        description: 'Comfortable organic cotton t-shirt in various sizes',
        price: 29.99,
        stock: 100,
        images: ['/api/placeholder/400/400'],
        vendorId: vendorProfile.id,
        categoryId: categories[1].id,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Professional Coffee Maker',
        description: 'Programmable coffee maker with thermal carafe',
        price: 149.99,
        stock: 30,
        images: ['/api/placeholder/400/400'],
        vendorId: vendorProfile.id,
        categoryId: categories[2].id,
      },
    }),
  ])

  // Create sample reviews
  await Promise.all([
    prisma.review.create({
      data: {
        rating: 5,
        comment: 'Excellent sound quality and comfortable fit!',
        customerId: customer.id,
        productId: products[0].id,
      },
    }),
    prisma.review.create({
      data: {
        rating: 4,
        comment: 'Great features but battery life could be better.',
        customerId: customer.id,
        productId: products[1].id,
      },
    }),
    prisma.review.create({
      data: {
        rating: 5,
        comment: 'Super soft and great quality fabric.',
        customerId: customer.id,
        productId: products[2].id,
      },
    }),
  ])

  console.log('Database seeded successfully!')
  console.log('Admin user: admin@marketplace.com (password: admin123)')
  console.log('Vendor user: vendor@marketplace.com (password: vendor123)')
  console.log('Customer user: customer@marketplace.com (password: customer123)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
