import '@fontsource-variable/inter';
import './globals.css';
import Providers from '@/components/Providers';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE } from '@/data/site';

const description =
  'Ahmed Saleem is an Accounts Manager with 15+ years in finance and accounting, and a full stack web and app developer building React, Node.js and Supabase applications. Based in Karachi, open to remote work.';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | Accounts Manager & Full Stack Web Developer`, template: `%s | ${SITE.name}` },
  description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  keywords: ['Ahmed Saleem', 'Ahmed Saleem Karachi', 'Ahmed Saleem accounts manager', 'Ahmed Saleem web developer', 'Accounts Manager', 'Full Stack Developer', 'React developer', 'Next.js', 'Karachi', 'NextGenzCoder', 'Power BI', 'Python for Finance'],
  alternates: { canonical: '/' },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Accounts Manager & Full Stack Web Developer`,
    description,
    locale: 'en_PK',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${SITE.name}, Accounts Manager and Full Stack Web & App Developer` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Accounts Manager & Full Stack Web Developer`,
    description,
    images: ['/og-image.png'],
  },
  // app/icon.png, app/apple-icon.png and app/favicon.ico are picked up automatically.
};

export const viewport = { themeColor: '#101827', colorScheme: 'dark' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-teal focus:px-4 focus:py-2 focus:text-navy">
          Skip to content
        </a>
        <Providers>{children}</Providers>
        <WhatsAppButton />
      </body>
    </html>
  );
}
