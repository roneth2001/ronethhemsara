// app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import photo from '../images/img.png';
import { useEffect, useState } from 'react';

const services = [
  {
    label: 'Web dev',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <polyline points="9 9 7 12 9 15"/>
        <polyline points="15 9 17 12 15 15"/>
      </svg>
    ),
  },
  {
    label: 'Mobile apps (Flutter)',
    icon: (
      <svg width="26" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12" y2="18.01"/>
      </svg>
    ),
  },
  {
    label: 'IoT & systems',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="12" cy="12" r="7"/>
        <line x1="12" y1="2" x2="12" y2="5"/>
        <line x1="12" y1="19" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="5" y2="12"/>
        <line x1="19" y1="12" x2="22" y2="12"/>
        <line x1="4.93" y1="4.93" x2="7.05" y2="7.05"/>
        <line x1="16.95" y1="16.95" x2="19.07" y2="19.07"/>
        <line x1="4.93" y1="19.07" x2="7.05" y2="16.95"/>
        <line x1="16.95" y1="7.05" x2="19.07" y2="4.93"/>
      </svg>
    ),
  },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .anim-fade-up   { opacity: 0; animation: fadeUp 0.7s ease forwards; }
        .anim-fade-in   { opacity: 0; animation: fadeIn 0.8s ease forwards; }
        .anim-float     { animation: float 4s ease-in-out infinite; }
        .anim-spin-slow { animation: spinSlow 12s linear infinite; }
        .anim-slide-r   { opacity: 0; animation: slideRight 0.6s ease forwards; }

        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(14,159,124,0.15);
          border-color: rgba(14,159,124,0.4);
        }
        .btn-primary-anim {
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .btn-primary-anim:hover { transform: scale(1.04); }
        .btn-outline-anim {
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .btn-outline-anim:hover { transform: scale(1.04); }
      `}</style>

      <div className="max-w-6xl mx-auto px-8">

        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center pt-5 min-h-[50vh]">

          {/* Left */}
          <div className="flex flex-col gap-4">

            {/* Name + role */}
            <div
              className="anim-slide-r"
              style={{ animationDelay: '0.1s' }}
            >
              <p className="text-[20px] font-semibold text-[#0d2d2a]">Roneth Hemsara Rupasingha</p>
              <p className="text-[15px] uppercase tracking-widest text-[#4a9e90] mt-0.5">
                Full-Stack Developer & ICT Student
              </p>
            </div>

            {/* Headline */}
            <h1
              className="text-[42px] md:text-[48px] font-bold uppercase leading-[1.1] tracking-tight text-[#0d2d2a] anim-fade-up"
              style={{ animationDelay: '0.25s' }}
            >
              Crafting robust<br />solutions with<br />innovative tech
            </h1>

            {/* Description */}
            <p
              className="text-[14px] text-[#4a7a74] leading-relaxed max-w-[320px] anim-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              Aspiring software engineer specialising in mobile app development and embedded systems.
            </p>

            {/* Buttons */}
            <div
              className="flex gap-3 mt-1 anim-fade-up"
              style={{ animationDelay: '0.55s' }}
            >
              <Link
                href="/projects"
                className="btn-primary-anim bg-[#0e9f7c] text-white text-[12px] font-semibold uppercase tracking-widest px-6 py-3 rounded-full"
              >
                View projects
              </Link>
              <Link
                href="/about"
                className="btn-outline-anim border-2 border-[#0e9f7c] text-[#0e9f7c] hover:bg-[#0e9f7c]/10 text-[12px] font-semibold uppercase tracking-widest px-6 py-3 rounded-full"
              >
                See my skills
              </Link>
            </div>
          </div>

          {/* Right — Floating photo */}
          <div
            className="flex justify-center items-end anim-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="anim-float">
              <div
                className="relative w-[260px] h-[380px] rounded-2xl overflow-hidden"
                style={{ background: 'linear-gradient(160deg, #a8ddd4 0%, #c8e8f5 100%)' }}
              >
                {/* Spinning geometric decoration */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                  <svg
                    className="absolute w-full h-full opacity-20 anim-spin-slow"
                    style={{ transformOrigin: 'center' }}
                    viewBox="0 0 260 380"
                    fill="none"
                  >
                    <polygon points="15,15 55,8 62,45 22,52" stroke="#0e9f7c" strokeWidth="1" fill="none"/>
                    <polygon points="195,20 235,12 242,50 202,58" stroke="#0e9f7c" strokeWidth="1" fill="none"/>
                    <polygon points="8,300 38,285 52,318 22,333" stroke="#0e9f7c" strokeWidth="1" fill="none"/>
                    <polygon points="210,310 240,295 254,327 224,342" stroke="#0e9f7c" strokeWidth="1" fill="none"/>
                  </svg>
                </div>

                {/* Photo */}
                <Image
                  src={photo}
                  alt="Alex Johnson"
                  fill
                  className="object-cover object-top z-0"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
          {services.map(({ label, icon }, i) => (
            <div
              key={label}
              className="card-hover bg-white/90 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-4 border border-white/60 anim-fade-up"
              style={{ animationDelay: `${0.6 + i * 0.15}s` }}
            >
              {/* Icon with subtle spin on hover */}
              <div
                className="text-[#0d2d2a] transition-transform duration-500 group-hover:rotate-12"
              >
                {icon}
              </div>
              <span className="text-[14px] font-semibold text-[#0d2d2a]">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}