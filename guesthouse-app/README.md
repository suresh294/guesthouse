# MRS Guest House — Hospitality Landing Page

**Live site:** [mrs-guesthouse.vercel.app](https://mrs-guesthouse.vercel.app)

A responsive guest-house marketing website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. It presents the property, rooms, amenities, gallery, location, and contact options.

## Features

- Hero section and responsive navigation.
- Room information and amenities/gallery sections.
- Location and contact section.
- Phone and WhatsApp enquiry links.
- Motion effects and responsive layouts.
- Next.js metadata for page title, description, and social sharing.

**Scope note:** This is a marketing and enquiry website. It does not implement a live room-availability database, reservation management, or online payment processing.

## Technology Stack

- Next.js and React
- TypeScript
- Tailwind CSS
- Framer Motion

## Run Locally

Prerequisites: Node.js compatible with the Next.js version in `package.json`, and npm.

```bash
cd guesthouse-app
npm ci
npm run dev
```

Open the local URL shown by Next.js, usually `http://localhost:3000`.

## Production Build

```bash
npm run build
npm start
```

## Before Publishing

- Review the contact phone and WhatsApp number in `app/page.tsx`.
- Keep `metadataBase` aligned with the actual production domain.
- Check that all property images, descriptions, prices, and contact details are accurate.
- Keep secrets out of client-side code.

## Repository

[View source on GitHub](https://github.com/suresh294/guesthouse/tree/master/guesthouse-app)
