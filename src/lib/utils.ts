import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36)
  const randomStr = Math.random().toString(36).substring(2, 5)
  return `ORDER-${timestamp}${randomStr}`.toUpperCase()
}

export function calculatePlatformFee(amount: number, feePercentage: number = 10): number {
  return (amount * feePercentage) / 100
}

export function getImageUrl(imageId: string, transformation?: string): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  if (!cloudName) return ''
  
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`
  return transformation ? `${baseUrl}/${transformation}/${imageId}` : `${baseUrl}/${imageId}`
}
