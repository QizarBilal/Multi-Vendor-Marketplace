# 🛒 Multi-Vendor Marketplace

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://prisma.io/)
[![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)](https://stripe.com/)

A comprehensive, production-ready multi-vendor marketplace built with Next.js, PostgreSQL, Stripe, and modern web technologies. Features a beautiful Navy Blue + White design system, responsive animations, and professional user experience.

![Multi-Vendor Marketplace](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&auto=format)

## ✨ Live Demo

🔗 **[View Live Demo](YOUR_DEPLOYMENT_URL)**

## 🚀 Features

### Customer Features
- **Product Discovery**: Browse products with advanced filtering and search
- **Shopping Cart**: Add products to cart and manage quantities
- **Secure Checkout**: Stripe-powered payment processing
- **Order Tracking**: Track order status from confirmation to delivery
- **Review System**: Rate and review purchased products
- **User Account**: Manage profile, orders, and preferences

### Vendor Features
- **Vendor Dashboard**: Complete business management interface
- **Product Management**: Add, edit, and manage product inventory
- **Sales Analytics**: Revenue tracking and performance metrics
- **Stripe Connect**: Automated payouts with platform fee deduction
- **Order Management**: View and update order fulfillment status
- **Customer Reviews**: Monitor and respond to customer feedback

### Admin Features
- **Platform Management**: Oversee all vendors and customers
- **Transaction Monitoring**: Track all payments and platform revenue
- **Vendor Approval**: Review and approve new vendor applications
- **Content Moderation**: Manage product listings and reviews
- **Analytics Dashboard**: Platform-wide performance metrics

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js (Google OAuth + Credentials)
- **Payments**: Stripe API with Stripe Connect
- **File Storage**: Cloudinary (optional)
- **Email**: Nodemailer (optional)
- **Testing**: Jest, React Testing Library

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Stripe account
- Google OAuth credentials (optional)
- Cloudinary account (optional, for image storage)

## �️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/multi-vendor-marketplace.git
cd multi-vendor-marketplace
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Configure your environment variables:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/marketplace_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_your-stripe-publishable-key"
STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="whsec_your-webhook-secret"

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME="your-cloudinary-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
```

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# Seed the database (optional)
npx prisma db seed
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎨 Design System

This marketplace features a professional **Navy Blue + White** color scheme that's proven to be most trusted for e-commerce platforms:

- **Primary Colors**: Navy Blue (#1E40AF) with 9 shade variations
- **Accent Colors**: Crisp White (#FFFFFF) and subtle grays
- **Typography**: Clean, modern font hierarchy
- **Components**: Consistent design patterns and spacing

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy with one click

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/marketplace_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-here"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Cloudinary (optional)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

### 3. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# Seed the database (optional)
npm run db:seed
```

### 4. Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Enable Stripe Connect in your dashboard
3. Set up webhook endpoints for:
   - `payment_intent.succeeded`
   - `account.updated`
   - `payout.created`

### 5. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── vendor/            # Vendor dashboard
│   ├── admin/             # Admin panel
│   └── ...
├── components/            # Reusable React components
│   ├── layout/           # Layout components
│   ├── home/             # Home page components
│   ├── ui/               # UI components
│   └── ...
├── lib/                   # Utility libraries
│   ├── auth.ts           # NextAuth configuration
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Helper functions
├── types/                 # TypeScript type definitions
└── ...

prisma/
├── schema.prisma         # Database schema
└── seed.ts              # Database seeding script
```

## 💳 Stripe Integration

The platform uses Stripe Connect to handle multi-vendor payments:

1. **Platform Fees**: Automatically deduct commission from vendor sales
2. **Vendor Payouts**: Direct payments to vendor Stripe accounts
3. **Secure Processing**: PCI-compliant payment handling
4. **Webhook Integration**: Real-time payment status updates

### Setting up Stripe Connect

1. Enable Stripe Connect in your Stripe dashboard
2. Configure platform fees and payout schedules
3. Set up Express accounts for vendors
4. Implement webhook handlers for payment events

## 🔐 Authentication

The application supports multiple authentication methods:

- **Email/Password**: Traditional credential-based authentication
- **Google OAuth**: Social login integration
- **Role-based Access**: Admin, Vendor, and Customer roles

### User Roles

- **ADMIN**: Full platform access and management
- **VENDOR**: Product and order management
- **CUSTOMER**: Shopping and account management

## 📊 Database Schema

Key models include:

- **User**: Authentication and profile data
- **VendorProfile**: Vendor-specific information and Stripe account
- **Product**: Product catalog with categories and pricing
- **Order**: Order management and tracking
- **Payment**: Payment records and Stripe integration
- **Review**: Product reviews and ratings

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on git push

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/signin` - User sign in
- `POST /api/auth/signup` - User registration
- `GET /api/auth/session` - Get current session

### Product Endpoints
- `GET /api/products` - List products with filtering
- `POST /api/products` - Create new product (vendors)
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Order Endpoints
- `POST /api/orders` - Create new order
- `GET /api/orders` - List user orders
- `PUT /api/orders/[id]` - Update order status

### Payment Endpoints
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/webhooks/stripe` - Handle Stripe webhooks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Check the documentation in `/docs`
- Review the FAQ section

## 🔮 Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Advanced search with Elasticsearch
- [ ] Real-time chat support
- [ ] Inventory management system
- [ ] Subscription-based products
- [ ] Multi-currency support

---

Built with ❤️ using Next.js and modern web technologies.
