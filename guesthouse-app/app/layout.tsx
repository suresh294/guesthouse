import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mrs-guesthouse.vercel.app'),
  title: {
    default: 'MRS Guest House | Premium Stay',
    template: '%s | MRS Guest House',
  },
  description: 'A refined luxury guest house landing page designed for calm comfort, elegant hospitality, and effortless booking.',
  keywords: ['luxury guest house', 'boutique stay', 'luxury hospitality', 'premium retreat'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MRS Guest House',
    description: 'A refined luxury guest house experience with timeless hospitality.',
    url: '/',
    type: 'website',
    siteName: 'MRS Guest House',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MRS Guest House',
    description: 'A refined luxury guest house experience with timeless hospitality.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-warm text-slateText antialiased">{children}</body>
    </html>
  );
}
