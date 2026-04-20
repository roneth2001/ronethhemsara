// components/Footer.tsx
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About me', href: '/about' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Projects', href: '/projects' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/roneth2001' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/roneth-hemsara-965b10253/' },
  { label: 'Email', href: 'mailto:rarhemsara@gmail.com' },
];

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const socialIcons: Record<string, React.FC> = {
  'https://github.com/roneth2001': GitHubIcon,
  'https://www.linkedin.com/in/roneth-hemsara-965b10253/': LinkedInIcon,
  'mailto:rarhemsara@gmail.com': EmailIcon,
};

export default function Footer() {
  return (
    <footer
      className="border-t border-white/30"
      style={{ background: 'linear-gradient(135deg, #e8f7f4 0%, #d4edf9 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-8 py-14">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">

          {/* Brand */}
          <div className="max-w-[260px]">
            <div className="flex items-center gap-0.5 mb-4">
              <span
                className="text-[24px] font-bold tracking-tight"
                style={{ color: '#0d2d2a', fontFamily: 'Georgia, serif' }}
              >
                RHR
              </span>
              <span className="text-[24px] font-bold" style={{ color: '#0e9f7c' }}>.</span>
            </div>

            <p className="text-[13px] leading-relaxed" style={{ color: '#4a7a74' }}>
              Aspiring software engineer crafting robust digital solutions with Flutter, Spring Boot, and AI.
            </p>

            {/* Social icon buttons */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ label, href }) => {
                const Icon = socialIcons[href];
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-full flex items-center justify-center border transition hover:border-[#0e9f7c] hover:text-[#0e9f7c]"
                    style={{
                      borderColor: 'rgba(14,159,124,0.3)',
                      color: '#4a7a74',
                      background: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            <div>
              <p
                className="text-[11px] uppercase tracking-widest font-semibold mb-5"
                style={{ color: '#0e9f7c' }}
              >
                Navigate
              </p>
              <ul className="flex flex-col gap-3">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[13px] transition hover:text-[#0e9f7c]"
                      style={{ color: '#4a7a74' }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="text-[11px] uppercase tracking-widest font-semibold mb-5"
                style={{ color: '#0e9f7c' }}
              >
                Connect
              </p>
              <ul className="flex flex-col gap-3">
                {socialLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] transition hover:text-[#0e9f7c] inline-flex items-center gap-1"
                      style={{ color: '#4a7a74' }}
                    >
                      {label}
                      <span className="text-[10px]">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/40 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[12px]" style={{ color: '#7aada6' }}>
            © {new Date().getFullYear()} Roneth Hemsara Rupasingha. All rights reserved.
          </p>
          <p className="text-[12px] italic" style={{ color: '#7aada6' }}>
            Designed & built with care
          </p>
        </div>

      </div>
    </footer>
  );
}