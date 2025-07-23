'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Star, MapPin, Package, Users, Clock, Award } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const VENDORS = [
  {
    id: 1,
    name: 'TechGear Pro',
    description: 'Premium electronics and gadgets for modern living',
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=300&fit=crop&auto=format',
    rating: 4.8,
    reviews: 1250,
    products: 89,
    followers: 5420,
    location: 'San Francisco, CA',
    joinedDate: '2020-03-15',
    isVerified: true,
    categories: ['Electronics', 'Gadgets', 'Accessories'],
    totalSales: 15000,
    responseTime: '< 2 hours'
  },
  {
    id: 2,
    name: 'EcoWear',
    description: 'Sustainable fashion for conscious consumers',
    logo: 'https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=300&fit=crop&auto=format',
    rating: 4.6,
    reviews: 890,
    products: 156,
    followers: 3280,
    location: 'Portland, OR',
    joinedDate: '2019-08-22',
    isVerified: true,
    categories: ['Clothing', 'Eco-Friendly', 'Fashion'],
    totalSales: 8500,
    responseTime: '< 4 hours'
  },
  {
    id: 3,
    name: 'HydroLife',
    description: 'Premium water bottles and hydration solutions',
    logo: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=300&fit=crop&auto=format',
    rating: 4.9,
    reviews: 654,
    products: 42,
    followers: 2150,
    location: 'Denver, CO',
    joinedDate: '2021-01-10',
    isVerified: true,
    categories: ['Sports', 'Health', 'Outdoor'],
    totalSales: 6200,
    responseTime: '< 3 hours'
  },
  {
    id: 4,
    name: 'Craftsman Co.',
    description: 'Handcrafted leather goods and accessories',
    logo: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=300&fit=crop&auto=format',
    rating: 4.7,
    reviews: 432,
    products: 78,
    followers: 1890,
    location: 'Austin, TX',
    joinedDate: '2020-11-05',
    isVerified: false,
    categories: ['Leather Goods', 'Handmade', 'Accessories'],
    totalSales: 4300,
    responseTime: '< 6 hours'
  },
  {
    id: 5,
    name: 'Kitchen Essentials',
    description: 'Modern kitchen tools and home cooking solutions',
    logo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1565060299244-dd7aeb2fd135?w=800&h=300&fit=crop&auto=format',
    rating: 4.5,
    reviews: 789,
    products: 203,
    followers: 4520,
    location: 'Chicago, IL',
    joinedDate: '2019-05-18',
    isVerified: true,
    categories: ['Kitchen', 'Home', 'Cooking'],
    totalSales: 12000,
    responseTime: '< 2 hours'
  },
  {
    id: 6,
    name: 'FitLife',
    description: 'Fitness equipment and wellness products',
    logo: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=300&fit=crop&auto=format',
    rating: 4.6,
    reviews: 567,
    products: 134,
    followers: 3850,
    location: 'Miami, FL',
    joinedDate: '2020-07-12',
    isVerified: true,
    categories: ['Fitness', 'Sports', 'Health'],
    totalSales: 9800,
    responseTime: '< 4 hours'
  },
  {
    id: 7,
    name: 'Cozy Home',
    description: 'Home decor and comfort essentials',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=300&fit=crop&auto=format',
    rating: 4.8,
    reviews: 923,
    products: 187,
    followers: 6240,
    location: 'Seattle, WA',
    joinedDate: '2018-12-03',
    isVerified: true,
    categories: ['Home Decor', 'Candles', 'Comfort'],
    totalSales: 18500,
    responseTime: '< 1 hour'
  },
  {
    id: 8,
    name: 'ArtisanCraft',
    description: 'Unique handmade crafts and artistic creations',
    logo: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=300&fit=crop&auto=format',
    rating: 4.4,
    reviews: 345,
    products: 95,
    followers: 2380,
    location: 'Nashville, TN',
    joinedDate: '2021-09-20',
    isVerified: false,
    categories: ['Handmade', 'Art', 'Crafts'],
    totalSales: 3200,
    responseTime: '< 8 hours'
  },
  {
    id: 9,
    name: 'Urban Style',
    description: 'Contemporary fashion and streetwear essentials',
    logo: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=300&fit=crop&auto=format',
    rating: 4.5,
    reviews: 672,
    products: 124,
    followers: 4120,
    location: 'New York, NY',
    joinedDate: '2020-02-28',
    isVerified: true,
    categories: ['Clothing', 'Fashion', 'Streetwear'],
    totalSales: 11200,
    responseTime: '< 3 hours'
  },
  {
    id: 10,
    name: 'SoundWave',
    description: 'Professional audio equipment and sound systems',
    logo: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=300&fit=crop&auto=format',
    rating: 4.7,
    reviews: 543,
    products: 67,
    followers: 2890,
    location: 'Los Angeles, CA',
    joinedDate: '2019-11-14',
    isVerified: true,
    categories: ['Electronics', 'Audio', 'Music'],
    totalSales: 8900,
    responseTime: '< 2 hours'
  },
  {
    id: 11,
    name: 'GameZone',
    description: 'Gaming peripherals and esports equipment',
    logo: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=300&fit=crop&auto=format',
    rating: 4.8,
    reviews: 1156,
    products: 89,
    followers: 7230,
    location: 'Austin, TX',
    joinedDate: '2020-06-08',
    isVerified: true,
    categories: ['Electronics', 'Gaming', 'Technology'],
    totalSales: 22000,
    responseTime: '< 1 hour'
  },
  {
    id: 12,
    name: 'Green Thumb',
    description: 'Indoor plants and gardening supplies',
    logo: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1558618666-fccd8c0b5c09?w=800&h=300&fit=crop&auto=format',
    rating: 4.6,
    reviews: 423,
    products: 156,
    followers: 3240,
    location: 'Phoenix, AZ',
    joinedDate: '2021-03-22',
    isVerified: true,
    categories: ['Home & Garden', 'Plants', 'Outdoor'],
    totalSales: 7800,
    responseTime: '< 5 hours'
  },
  {
    id: 13,
    name: 'Pure Beauty',
    description: 'Organic skincare and natural beauty products',
    logo: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=300&fit=crop&auto=format',
    rating: 4.9,
    reviews: 834,
    products: 92,
    followers: 5670,
    location: 'Santa Barbara, CA',
    joinedDate: '2019-07-30',
    isVerified: true,
    categories: ['Beauty', 'Skincare', 'Organic'],
    totalSales: 16500,
    responseTime: '< 2 hours'
  },
  {
    id: 14,
    name: 'SportActive',
    description: 'Athletic wear and performance sportswear',
    logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=300&fit=crop&auto=format',
    rating: 4.4,
    reviews: 567,
    products: 134,
    followers: 4320,
    location: 'Orlando, FL',
    joinedDate: '2020-09-15',
    isVerified: true,
    categories: ['Clothing', 'Sports', 'Athletic Wear'],
    totalSales: 9200,
    responseTime: '< 4 hours'
  },
  {
    id: 15,
    name: 'FootCraft',
    description: 'Premium handcrafted footwear and leather boots',
    logo: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&h=300&fit=crop&auto=format',
    rating: 4.8,
    reviews: 723,
    products: 45,
    followers: 2890,
    location: 'Boston, MA',
    joinedDate: '2018-10-12',
    isVerified: true,
    categories: ['Clothing', 'Footwear', 'Handmade'],
    totalSales: 19800,
    responseTime: '< 6 hours'
  },
  {
    id: 16,
    name: 'Bright Lights',
    description: 'LED lighting solutions and smart home illumination',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=300&fit=crop&auto=format',
    rating: 4.5,
    reviews: 445,
    products: 78,
    followers: 2140,
    location: 'Las Vegas, NV',
    joinedDate: '2021-01-18',
    isVerified: false,
    categories: ['Home & Garden', 'Electronics', 'Lighting'],
    totalSales: 5600,
    responseTime: '< 8 hours'
  },
  {
    id: 17,
    name: 'Coffee Masters',
    description: 'Premium coffee beans and brewing equipment',
    logo: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=300&fit=crop&auto=format',
    rating: 4.7,
    reviews: 1023,
    products: 156,
    followers: 6780,
    location: 'Portland, OR',
    joinedDate: '2019-04-25',
    isVerified: true,
    categories: ['Home & Kitchen', 'Coffee', 'Beverages'],
    totalSales: 24500,
    responseTime: '< 2 hours'
  },
  {
    id: 18,
    name: 'Fashion Forward',
    description: 'Trendy women\'s fashion and designer accessories',
    logo: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=300&fit=crop&auto=format',
    rating: 4.6,
    reviews: 892,
    products: 234,
    followers: 8950,
    location: 'Miami, FL',
    joinedDate: '2020-01-12',
    isVerified: true,
    categories: ['Clothing', 'Fashion', 'Accessories'],
    totalSales: 18700,
    responseTime: '< 3 hours'
  },
  {
    id: 19,
    name: 'Strength Pro',
    description: 'Professional gym equipment and fitness gear',
    logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=300&fit=crop&auto=format',
    rating: 4.9,
    reviews: 567,
    products: 89,
    followers: 4230,
    location: 'Denver, CO',
    joinedDate: '2020-04-30',
    isVerified: true,
    categories: ['Fitness', 'Sports', 'Equipment'],
    totalSales: 31200,
    responseTime: '< 2 hours'
  },
  {
    id: 20,
    name: 'Kitchen Pro',
    description: 'Professional cookware and culinary tools',
    logo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=300&fit=crop&auto=format',
    rating: 4.8,
    reviews: 1234,
    products: 167,
    followers: 7890,
    location: 'New Orleans, LA',
    joinedDate: '2018-09-14',
    isVerified: true,
    categories: ['Home & Kitchen', 'Cookware', 'Appliances'],
    totalSales: 28900,
    responseTime: '< 1 hour'
  },
  {
    id: 21,
    name: 'Eco Living',
    description: 'Sustainable home products and eco-friendly solutions',
    logo: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=300&fit=crop&auto=format',
    rating: 4.5,
    reviews: 456,
    products: 112,
    followers: 3450,
    location: 'San Diego, CA',
    joinedDate: '2020-12-08',
    isVerified: true,
    categories: ['Home & Garden', 'Eco-Friendly', 'Sustainable'],
    totalSales: 8900,
    responseTime: '< 5 hours'
  },
  {
    id: 22,
    name: 'TimeKeepers',
    description: 'Luxury watches and timepiece accessories',
    logo: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=300&fit=crop&auto=format',
    rating: 4.9,
    reviews: 345,
    products: 67,
    followers: 2890,
    location: 'New York, NY',
    joinedDate: '2019-02-20',
    isVerified: true,
    categories: ['Accessories', 'Watches', 'Luxury'],
    totalSales: 45600,
    responseTime: '< 3 hours'
  },
  {
    id: 23,
    name: 'Garden Master',
    description: 'Professional gardening tools and outdoor equipment',
    logo: 'https://images.unsplash.com/photo-1558618666-fccd8c0b5c09?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=300&fit=crop&auto=format',
    rating: 4.6,
    reviews: 678,
    products: 134,
    followers: 4120,
    location: 'Atlanta, GA',
    joinedDate: '2020-05-17',
    isVerified: true,
    categories: ['Home & Garden', 'Tools', 'Outdoor'],
    totalSales: 12400,
    responseTime: '< 4 hours'
  },
  {
    id: 24,
    name: 'Bake Easy',
    description: 'Professional baking supplies and pastry tools',
    logo: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1565060299244-dd7aeb2fd135?w=800&h=300&fit=crop&auto=format',
    rating: 4.7,
    reviews: 543,
    products: 89,
    followers: 3890,
    location: 'Nashville, TN',
    joinedDate: '2021-02-14',
    isVerified: true,
    categories: ['Home & Kitchen', 'Baking', 'Tools'],
    totalSales: 9800,
    responseTime: '< 3 hours'
  },
  {
    id: 25,
    name: 'Health Tech',
    description: 'Wearable technology and health monitoring devices',
    logo: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=300&fit=crop&auto=format',
    rating: 4.5,
    reviews: 432,
    products: 56,
    followers: 2670,
    location: 'Silicon Valley, CA',
    joinedDate: '2021-06-01',
    isVerified: true,
    categories: ['Electronics', 'Health', 'Wearables'],
    totalSales: 13200,
    responseTime: '< 2 hours'
  },
  {
    id: 26,
    name: 'SunStyle',
    description: 'Premium sunglasses and eyewear collections',
    logo: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=300&fit=crop&auto=format',
    rating: 4.6,
    reviews: 789,
    products: 123,
    followers: 5230,
    location: 'Malibu, CA',
    joinedDate: '2019-12-05',
    isVerified: true,
    categories: ['Accessories', 'Eyewear', 'Fashion'],
    totalSales: 17800,
    responseTime: '< 4 hours'
  },
  {
    id: 27,
    name: 'Minimal Design',
    description: 'Minimalist accessories and lifestyle products',
    logo: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=300&fit=crop&auto=format',
    rating: 4.4,
    reviews: 234,
    products: 67,
    followers: 1890,
    location: 'San Francisco, CA',
    joinedDate: '2021-08-12',
    isVerified: false,
    categories: ['Accessories', 'Minimalist', 'Design'],
    totalSales: 5600,
    responseTime: '< 6 hours'
  },
  {
    id: 28,
    name: 'Aromatherapy Plus',
    description: 'Essential oils and aromatherapy products',
    logo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=300&fit=crop&auto=format',
    rating: 4.7,
    reviews: 456,
    products: 89,
    followers: 3450,
    location: 'Sedona, AZ',
    joinedDate: '2020-10-22',
    isVerified: true,
    categories: ['Beauty', 'Wellness', 'Essential Oils'],
    totalSales: 11200,
    responseTime: '< 3 hours'
  },
  {
    id: 29,
    name: 'Wood Craft',
    description: 'Handcrafted wooden furniture and home accessories',
    logo: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=300&fit=crop&auto=format',
    rating: 4.8,
    reviews: 567,
    products: 78,
    followers: 2340,
    location: 'Asheville, NC',
    joinedDate: '2019-06-18',
    isVerified: true,
    categories: ['Home & Kitchen', 'Handmade', 'Furniture'],
    totalSales: 15600,
    responseTime: '< 5 hours'
  },
  {
    id: 30,
    name: 'Storage Solutions',
    description: 'Innovative storage and organization products',
    logo: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=300&fit=crop&auto=format',
    rating: 4.5,
    reviews: 432,
    products: 156,
    followers: 4120,
    location: 'Minneapolis, MN',
    joinedDate: '2020-11-30',
    isVerified: true,
    categories: ['Home & Kitchen', 'Storage', 'Organization'],
    totalSales: 8900,
    responseTime: '< 4 hours'
  },
  {
    id: 31,
    name: 'Elegant Accessories',
    description: 'Fine jewelry and luxury fashion accessories',
    logo: 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=300&fit=crop&auto=format',
    rating: 4.9,
    reviews: 234,
    products: 89,
    followers: 2890,
    location: 'Beverly Hills, CA',
    joinedDate: '2019-03-08',
    isVerified: true,
    categories: ['Accessories', 'Jewelry', 'Luxury'],
    totalSales: 34500,
    responseTime: '< 2 hours'
  },
  {
    id: 32,
    name: 'NutriGear',
    description: 'Sports nutrition and fitness supplements',
    logo: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=300&fit=crop&auto=format',
    rating: 4.6,
    reviews: 678,
    products: 134,
    followers: 5670,
    location: 'Phoenix, AZ',
    joinedDate: '2020-07-25',
    isVerified: true,
    categories: ['Fitness', 'Nutrition', 'Supplements'],
    totalSales: 19800,
    responseTime: '< 3 hours'
  },
  {
    id: 33,
    name: 'Cozy Threads',
    description: 'Comfortable loungewear and cozy clothing',
    logo: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=300&fit=crop&auto=format',
    rating: 4.7,
    reviews: 543,
    products: 167,
    followers: 4560,
    location: 'Portland, ME',
    joinedDate: '2020-08-14',
    isVerified: true,
    categories: ['Clothing', 'Comfort', 'Loungewear'],
    totalSales: 12400,
    responseTime: '< 4 hours'
  },
  {
    id: 34,
    name: 'RunFast',
    description: 'Professional running gear and athletic footwear',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&auto=format',
    banner: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=300&fit=crop&auto=format',
    rating: 4.8,
    reviews: 892,
    products: 89,
    followers: 6780,
    location: 'Boulder, CO',
    joinedDate: '2019-09-12',
    isVerified: true,
    categories: ['Sports', 'Running', 'Footwear'],
    totalSales: 23400,
    responseTime: '< 2 hours'
  }
]

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Sports', 'Home', 'Handmade', 'Art']

export default function VendorsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('rating')
  const [verifiedOnly, setVerifiedOnly] = useState(false)

  const filteredVendors = VENDORS.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || 
                           vendor.categories.some(cat => cat.toLowerCase().includes(selectedCategory.toLowerCase()))
    const matchesVerified = !verifiedOnly || vendor.isVerified
    return matchesSearch && matchesCategory && matchesVerified
  })

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating
      case 'products':
        return b.products - a.products
      case 'sales':
        return b.totalSales - a.totalSales
      case 'newest':
        return new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime()
      case 'alphabetical':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-accent-50">
      <Navbar />
      
      {/* Hero Header Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Meet Our Vendors
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Discover amazing sellers and explore their unique collections
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-accent-200">
          <h2 className="text-lg font-semibold text-secondary-900 mb-4">Filter Vendors</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search vendors..."
                className="w-full pl-10 pr-4 py-3 border border-accent-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-accent-50 transition-colors"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-secondary-400" />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-accent-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category === 'All' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-accent-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-accent-50 transition-colors"
            >
              <option value="rating">Top Rated</option>
              <option value="products">Most Products</option>
              <option value="sales">Top Sales</option>
              <option value="newest">Newest</option>
              <option value="alphabetical">A-Z</option>
            </select>

            {/* Verified Only */}
            <label className="flex items-center bg-accent-50 px-4 py-3 rounded-lg border border-accent-300 cursor-pointer hover:bg-accent-100 transition-colors">
              <input
                type="checkbox"
                checked={verifiedOnly}
                onChange={(e) => setVerifiedOnly(e.target.checked)}
                className="h-4 w-4 text-primary-900 focus:ring-primary-500 border-accent-300 rounded"
              />
              <span className="ml-2 text-sm font-medium text-secondary-700">Verified Only</span>
            </label>
          </div>
        </div>

        {/* Results Count Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-accent-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-secondary-900">Vendor Directory</h2>
              <p className="text-secondary-600">
                Showing {sortedVendors.length} of {VENDORS.length} verified vendors
              </p>
            </div>
            <div className="bg-primary-50 px-4 py-2 rounded-lg">
              <span className="text-primary-900 font-semibold">{VENDORS.length} Total</span>
            </div>
          </div>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sortedVendors.map((vendor) => (
            <div key={vendor.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-accent-200 hover:border-primary-200">
              {/* Banner */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={vendor.banner}
                  alt={`${vendor.name} banner`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {vendor.isVerified && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-full text-xs font-bold flex items-center shadow-lg">
                      <Award className="h-4 w-4 mr-1" />
                      Verified
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Vendor Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative -mt-8">
                    <Image
                      src={vendor.logo}
                      alt={`${vendor.name} logo`}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full border-4 border-white object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-xl font-bold text-primary-900 truncate">
                        <Link href={`/vendors/${vendor.id}`} className="hover:text-primary-800 transition-colors">
                          {vendor.name}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-secondary-600 text-sm mb-2 line-clamp-2">{vendor.description}</p>
                    <div className="flex items-center text-sm text-secondary-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {vendor.location}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(vendor.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-secondary-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-secondary-600">
                      {vendor.rating} ({vendor.reviews})
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-secondary-600">
                    <Package className="h-4 w-4" />
                    <span>{vendor.products} products</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-secondary-600">
                    <Users className="h-4 w-4" />
                    <span>{vendor.followers.toLocaleString()} followers</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-secondary-600">
                    <Clock className="h-4 w-4" />
                    <span>{vendor.responseTime}</span>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {vendor.categories.map((category, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 text-primary-900 text-xs rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-secondary-600">
                    <span className="font-medium">{vendor.totalSales.toLocaleString()}</span> total sales
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      href={`/vendors/${vendor.id}`}
                      className="px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors text-sm font-medium"
                    >
                      View Store
                    </Link>
                    <button className="px-4 py-2 border border-accent-300 text-secondary-700 rounded-lg hover:bg-accent-50 transition-colors text-sm">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedVendors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-secondary-600">No vendors found matching your criteria.</p>
          </div>
        )}

        {/* Become a Vendor CTA */}
        <div className="mt-12 bg-primary-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to become a vendor?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Join our marketplace and start selling your products to thousands of customers. 
            Easy setup, competitive fees, and powerful tools to grow your business.
          </p>
          <Link
            href="/vendor/register"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-xl hover:bg-accent-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Apply to Become a Vendor
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
