'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Cover' },
  { href: '/scrapbook', label: 'Scrapbook' },
  { href: '/letters', label: 'Letters' },
  { href: '/dad-jokes', label: 'Dad Jokes' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="top-nav">
      <div className="nav-inner">
        <div className="brand">Kendra • 17 ♥</div>
        <div className="nav-links">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${active ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}