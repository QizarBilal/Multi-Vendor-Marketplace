<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Multi-Vendor Marketplace - Copilot Instructions

This is a comprehensive multi-vendor marketplace application built with Next.js, TypeScript, PostgreSQL (Prisma), Stripe, and NextAuth.js.

## Project Structure
- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes with Prisma ORM
- **Database**: PostgreSQL with Prisma
- **Authentication**: NextAuth.js with Google OAuth and credentials
- **Payments**: Stripe with Stripe Connect for vendor payouts
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React icons

## Key Features
1. **Multi-role authentication** (Admin, Vendor, Customer)
2. **Vendor management** with Stripe Connect integration
3. **Product catalog** with categories, search, and filtering
4. **Shopping cart** and checkout with Stripe
5. **Review and rating system**
6. **Order management** and tracking
7. **Admin dashboard** for platform management
8. **Vendor dashboard** with analytics
9. **Responsive design** with mobile-first approach

## Code Conventions
- Use TypeScript for all files
- Follow Next.js App Router patterns
- Use server actions for form submissions
- Implement proper error handling with try-catch
- Use Prisma for all database operations
- Follow the established component structure
- Use the custom CSS classes defined in globals.css
- Implement proper loading states and error boundaries

## Database Schema
The Prisma schema includes models for:
- User (with roles)
- VendorProfile
- Product
- Category
- Order & OrderItem
- Payment
- Review
- CartItem

## API Structure
- Authentication: `/api/auth/[...nextauth]`
- Products: `/api/products`
- Vendors: `/api/vendors`
- Orders: `/api/orders`
- Payments: `/api/payments`
- Stripe webhooks: `/api/webhooks/stripe`

## Environment Variables
Required environment variables are defined in `.env.example`. Always use environment variables for sensitive data like API keys and database URLs.

## Components Guidelines
- Create reusable components in `src/components`
- Use proper TypeScript interfaces from `src/types`
- Implement responsive design with Tailwind CSS
- Add proper accessibility attributes
- Use Next.js Image component for optimized images
- Implement proper SEO with metadata

## Security Considerations
- Always validate input data with Zod schemas
- Protect API routes with authentication checks
- Use CSRF protection for forms
- Sanitize user-generated content
- Implement rate limiting for API endpoints
- Use HTTPS in production
- Validate webhook signatures from Stripe
