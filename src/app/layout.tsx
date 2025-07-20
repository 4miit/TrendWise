// app/layout.tsx
'use client'
import './globals.css'
import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

export const metadata = {
  title: 'TrendWise - AI Blog Generator',
  description: 'Generate SEO blogs using AI based on trending topics.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
