import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

export function getAssetPath(path: string): string {
  const basePath = process.env.BASE_PATH || '';
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}

