import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        warm: '#F8F8F6',
        navy: '#0F172A',
        gold: '#C9A227',
        emerald: '#16A34A',
        slateText: '#1E293B',
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.14)',
      },
    },
  },
  plugins: [],
} satisfies Config;
