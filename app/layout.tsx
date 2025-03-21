import type { Metadata } from 'next'
import './globals.css'
import { Mitr } from 'next/font/google'

const mitr = Mitr({ subsets: ['thai', 'latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Unit.co.Ltd',
  description: 'Unit.co.Ltd Test Frontend',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={mitr.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
