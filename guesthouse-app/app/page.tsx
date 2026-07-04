'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../images/logo.png';
import hero from '../images/image1.png';
import Link from 'next/link';
import AmenitiesGallerySection from '@/components/AmenitiesGallerySection';
import LocationContactSection from '@/components/LocationContactSection';
import RoomsSection from '@/components/RoomsSection';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const whatsappNumber = '919363058387';
const phoneNumber = '9363058387';
const whatsappMessage = encodeURIComponent('Hello! I would like to check availability and book a stay. Please share the best options and rates.');
const whatsappLink = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${whatsappMessage}&type=phone_number&app_absent=0`;
const phoneLink = `tel:${phoneNumber}`;

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.1, 0.3, 0.5, 0.7],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-warm text-slateText" aria-label="Luxury guest house landing page">
      <section id="home" className="relative isolate min-h-screen overflow-hidden bg-navy">
        <Image
          src={hero}
          alt="Luxury guest house exterior at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-[pulse_8s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.85)_0%,rgba(2,6,23,0.55)_40%,rgba(2,6,23,0.25)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.20),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(22,163,74,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(2,6,23,0.4)_100%)]" />

        <header className="sticky top-0 z-20 border-b border-white/20 bg-navy/90 backdrop-blur-xl">
          <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-16 sm:h-20 min-w-[4rem] sm:min-w-[5rem] items-center justify-center rounded-full border-2 border-gold bg-white shadow-[0_20px_50px_rgba(201,162,39,0.4),0_10px_25px_rgba(2,6,23,0.5)] backdrop-blur-md overflow-hidden ring-4 ring-gold/20">
                <Image src={logo} alt="MRS logo" width={64} height={64} className="object-contain" priority />
              </div>
              <div className="flex flex-col">
                <Link href="#" className="text-lg sm:text-2xl font-bold uppercase tracking-[0.35em] text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]" aria-label="MRS Guest House home">
                  MRS Guest House
                </Link>
                <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.5em] text-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">Premium Stay</span>
              </div>
            </div>
            
            <nav className="hidden items-center gap-8 sm:gap-10 text-sm sm:text-base font-medium text-white md:flex" aria-label="Primary navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`transition ${isActive ? 'font-bold text-gold underline decoration-gold underline-offset-8' : 'hover:text-gold hover:scale-105'}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            
            <div className="flex items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex rounded-full border-2 border-gold bg-gold px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-navy transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_15px_40px_rgba(201,162,39,0.5)]"
              >
                Book Now
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 bg-navy/95 px-4 py-4 backdrop-blur-xl">
              <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-medium transition ${isActive ? 'font-bold text-gold' : 'text-white hover:text-gold'}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex w-full justify-center rounded-full border-2 border-gold bg-gold px-6 py-3 text-base font-bold text-navy transition duration-200 hover:bg-white"
                >
                  Book Now
                </a>
              </nav>
            </div>
          )}
        </header>

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-gold">
              Boutique Guest House
            </p>
            <h1 className="font-serif text-4xl leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Quiet luxury, framed by calm.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              A refined retreat for travellers seeking exceptional comfort, thoughtful service, and effortless tranquillity.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">
                Book via WhatsApp
              </a>
              <a href={phoneLink} className="btn-contrast">
                Call Now
              </a>
            </div>
            <div className="mt-12 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/70">
              <span className="h-px w-10 bg-white/35" />
              Scroll to discover
            </div>
          </div>
        </div>
      </section>

      <RoomsSection />
      <AmenitiesGallerySection />
      <LocationContactSection />
    </main>
  );
}
