import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\+56)(\d)(\d{4})(\d{4})/, '$1 $2 $3 $4')
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    const headerOffset = 96
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, margin: '-80px' }
}

export const staggerContainer = {
  initial: {},
  whileInView: {},
  transition: { staggerChildren: 0.08, delayChildren: 0.1 }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

