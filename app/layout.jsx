import { Questrial } from 'next/font/google'
import './globals.css'
export const metadata = {
  title: {
    default: "Dilip Kumar | Web Developer",
    template: "%s | Dilip Kumar Maurya"
  },
  icons: {
    icon: '/favicon.png',
  },
  description: "Hi my name is Dilip Kumar Maurya and I am a Web developer based in New Delhi, India.",
  robots: "follow, index",
  applicationName: 'Dilip Kumar ',
  referrer: 'origin-when-cross-origin',
  keywords: ['Dilipmaurya', 'curiousdilip', 'mauryaji'],
  authors: [{ name: 'Dilip Kumar', url: 'https://www.dilipmaurya.in' }],
  // colorScheme: 'black',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.dilipmaurya.in'),
  alternates: {
    canonical: 'https://www.dilipmaurya.in/',
    '/about': 'https://www.dilipmaurya.in/about',
    '/projects': 'https://www.dilipmaurya.in/projects',
    '/resume': 'https://www.dilipmaurya.in/resume',
    '/contact': 'https://www.dilipmaurya.in/contact',
  },
  openGraph: {
    images: {
      default: '/profilecardimg.jpeg',
      template: '%s'
    },
    description: {
      default: 'Hi my name is Dilip Kumar Maurya and I am a Web developer based in New Delhi, India.',
      template: "%s"
    },
    title: {
      default: 'Dilip Kumar | Web Developer',
      template: "%s | Dilip Kumar Maurya"
    },
    url: 'https://www.dilipmaurya.in',
    siteName: 'Dilip Kumar | Web Developer',
    locale: 'en_US',
    type: 'website',
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
