import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cairo = Cairo({ 
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ابراهيم محمد | مصمم ومطور مواقع',
  description: 'أصمّم لك صفحة شخصية تعكس هويتك وتزيد فرص وصولك للعملاء. خدمات تصميم مواقع، إدارة محتوى، وصيانة حاسوب.',
  keywords: ['تصميم مواقع', 'بورتفوليو', 'تطوير ويب', 'صيانة حاسوب', 'إدارة محتوى', 'السعودية', 'فريلانسر'],
  authors: [{ name: 'Ibrahim Mohammed' }],
  openGraph: {
    title: 'ابراهيم محمد | مصمم ومطور مواقع',
    description: 'أصمّم لك صفحة شخصية تعكس هويتك وتزيد فرص وصولك للعملاء',
    type: 'website',
    locale: 'ar_SA',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
