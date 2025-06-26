import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SignAI - Breaking Communication Barriers',
  description: 'A revolutionary sign language translator that breaks communication barriers for the deaf and hard of hearing community.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}