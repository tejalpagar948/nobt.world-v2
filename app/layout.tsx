import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import Footer from '@/components/site-footer';
import Header from '@/components/site-header';

export const metadata = {
  title: 'NoBT Holidays – Curated Travel Experiences',
  description:
    'Experience curated group departures, international and domestic trips, and personalized travel journeys across India and the world.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Lobster&family=Playfair+Display:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-elmessiri">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
