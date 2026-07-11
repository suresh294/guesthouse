'use client';

import { useState } from 'react';
import Image from 'next/image';
import contactBg from '../images/image5.png';

const quickLinks = ['Rooms', 'Contact'];
const socialLinks = ['Instagram', 'WhatsApp'];

const whatsappNumber = '9363058387';
const phoneNumber = '9363058387';
const whatsappMessage = encodeURIComponent('Hello! I would like to check availability and book a stay. Please share the best options and rates.');
const whatsappLink = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${whatsappMessage}&type=phone_number&app_absent=0`;
const phoneLink = `tel:${phoneNumber}`;
const address ='3/13, Mettu St, Chinamudaliar Chavadi, Kottakuppam, Tamil Nadu 605104';

export default function LocationContactSection() {
  const [copyStatus, setCopyStatus] = useState<string>('');

  const mapQuery = encodeURIComponent(address);
  const googleMapsSearch = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const googleMapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  const copyAddress = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(address);
      } else {
        // fallback for insecure or older browsers
        const ta = document.createElement('textarea');
        ta.value = address;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopyStatus('Address copied!');
    } catch (error) {
      setCopyStatus('Unable to copy address.');
    }
    window.setTimeout(() => setCopyStatus(''), 3000);
  };

  const shareLocation = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'MRS Guest House',
          text: `Find MRS Guest House at ${address}`,
          url: googleMapsSearch,
        });
      } catch {
        // Sharing cancelled or not supported
      }
    } else {
      copyAddress();
    }
  };
  return (
    <section className="bg-warm px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-4">Location</p>
          <h2 className="section-title">Find Us Easily</h2>
          <p className="section-copy mt-5">
            A calm setting with effortless access, designed for a seamless arrival experience.
          </p>
        </div>

        <div id="location" className="card-surface mt-14 overflow-hidden p-3 sm:p-4">
          <div className="relative h-[320px] overflow-hidden rounded-[24px] sm:h-[420px] lg:h-[520px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9473329182647!2d79.84082737319032!3d11.978146235883495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5363f834b0d4b3%3A0xddd86626cabde800!2sMRS%20GUEST%20HOUSE!5e0!3m2!1sen!2sin!4v1783139641875!5m2!1sen!2sin"
              title="MRS Guest House location map"
              className="h-full w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.12),rgba(2,6,23,0.28))]" />
            <div className="absolute left-4 top-4 flex flex-wrap gap-3 sm:left-6 sm:top-6">
              <a href={googleMapsSearch} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center rounded-full bg-white/90 px-4 text-sm font-semibold text-navy backdrop-blur-sm transition duration-200 hover:-translate-y-0.5">Open Google Maps</a>
              <a href={googleMapsDirections} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center rounded-full bg-white/90 px-4 text-sm font-semibold text-navy backdrop-blur-sm transition duration-200 hover:-translate-y-0.5">Get Directions</a>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-3 sm:bottom-6 sm:left-6 sm:right-6">
              <button type="button" onClick={shareLocation} className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5">Share Location</button>
              <button type="button" onClick={copyAddress} className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5">Copy Address</button>
              {copyStatus ? <span className="text-xs uppercase tracking-[0.25em] text-white/80">{copyStatus}</span> : null}
            </div>
          </div>
        </div>

        <div id="contact" className="mt-24 grid gap-8 grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="card-surface rounded-[32px] bg-white/80 p-8 backdrop-blur-sm sm:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gold">Contact</p>
            <h3 className="font-serif text-3xl text-navy sm:text-4xl">Reserve With Ease</h3>
            <div className="mt-8 space-y-5 text-base text-slateText/75">
              <p>Phone: {phoneNumber}</p>
              <p>WhatsApp: {whatsappNumber}</p>
              <p>Email: hello@luxehouse.com</p>
              <p>Address: {address}</p>
              <p>Working Hours: 24/7 Reception</p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">Book via WhatsApp</a>
              <a href={phoneLink} className="btn-secondary">Call Now</a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-navy p-8 text-white shadow-[0_20px_55px_rgba(15,23,42,0.14)] sm:p-10">
            <Image
              src={contactBg}
              alt="Luxury guest house exterior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.86),rgba(2,6,23,0.58))]" />
            <div className="relative z-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gold">Visit</p>
              <h3 className="font-serif text-3xl sm:text-4xl">Ready for Your Stay?</h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/75">A private retreat with refined comfort and thoughtful hospitality awaits your arrival.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">Book via WhatsApp</a>
                <a href={phoneLink} className="btn-contrast">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="site-footer mx-auto mt-24 max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <p className="mb-3 text-xs footer-accent uppercase tracking-[0.35em]">MRS Guest House</p>
            <h3 className="font-serif text-2xl text-white sm:text-3xl">Where calm luxury feels effortless.</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              A quietly refined retreat with timeless hospitality, designed for guests who value comfort, privacy, and beautiful details.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            <div className="rounded-[24px] border border-white/10 bg-white/10 p-4 shadow-[0_16px_48px_rgba(255,255,255,0.08)] backdrop-blur-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald">Book Direct</p>
              <div className="flex flex-col gap-2">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center rounded-full bg-emerald px-4 text-sm font-semibold text-white transition hover:bg-[#15913f]">WhatsApp Booking</a>
                <a href={phoneLink} className="inline-flex h-11 items-center justify-center rounded-full border border-emerald/60 px-4 text-sm font-semibold text-emerald transition hover:bg-emerald/20">Call Now</a>
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald">Quick Links</p>
              <div className="space-y-2 text-sm text-white/70">
                {quickLinks.map((link) => (
                  <a key={link} href="#" className="block hover-impressive">{link}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald">Social Media</p>
              <div className="space-y-2 text-sm text-white/70">
                {socialLinks.map((link) => (
                  <a key={link} href="#" className="block hover-impressive">{link}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MRS Guest House. All rights reserved.</p>
          <p>Designed for calm, comfort, and lasting impressions.</p>
        </div>
      </footer>
    </section>
  );
}
