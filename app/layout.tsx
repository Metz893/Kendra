import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FloatingHearts from '@/components/FloatingHearts';

export const metadata: Metadata = {
  title: 'Kendra 17',
  description: 'A birthday scrapbook for Kendra',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FloatingHearts />
        <div className="site-bg" />
        <Navbar />
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}