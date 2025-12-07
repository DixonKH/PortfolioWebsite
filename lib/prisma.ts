// src/lib/prisma.ts  ← VERCEL + PRODUCTION UCHUN 100% ISHLAYDIGAN VERSIYA!
import { PrismaClient } from "./generated/prisma"

declare global {
  var prisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (process.env.NODE_ENV === "production") {
  // Vercel production – har function’da yangi connection ochiladi (lekin limit ichida)
  prisma = new PrismaClient()
} else {
  // Development – global orqali singleton
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma