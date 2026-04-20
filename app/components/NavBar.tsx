// components/NavBar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About me', href: '/about' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Projects', href: '/projects' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/20"
      style={{ background: 'rgba(232, 247, 244, 0.85)' }}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5">
          <span
            className="text-[22px] font-bold tracking-tight"
            style={{ color: '#0d2d2a', fontFamily: 'Georgia, serif' }}
          >
            RHR
          </span>
          <span className="text-[22px] font-bold" style={{ color: '#0e9f7c' }}>.</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="text-[12px] uppercase tracking-widest font-medium transition"
                style={{ color: isActive ? '#0e9f7c' : '#4a7a74' }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="https://mail.google.com/mail/u/0/?to=rarhemsara@gmail.com&fs=1&tf=cm"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-[12px] font-semibold uppercase tracking-widest text-white px-5 py-2.5 rounded-full transition hover:opacity-90"
          style={{ background: '#0e9f7c' }}
        >
          Contact me
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Open menu">
          <span className="w-5 h-px block" style={{ background: '#0d2d2a' }} />
          <span className="w-5 h-px block" style={{ background: '#0d2d2a' }} />
          <span className="w-3 h-px block" style={{ background: '#0d2d2a' }} />
        </button>

      </div>
    </nav>
  );
}