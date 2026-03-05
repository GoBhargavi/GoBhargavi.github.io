import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          900: 'var(--obsidian-900)',
          950: 'var(--obsidian-950)',
        },
        'signal-orange': 'var(--signal-orange)',
        'slate-deep': 'var(--slate-deep)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        technical: ['IBM Plex Mono', 'monospace'],
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, #333 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-size': '24px 24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-staggered': 'fadeIn 0.5s ease-out forwards',
        'glitch': 'glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
