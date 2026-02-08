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
        // New specialized palette
        obsidian: {
          800: '#1a1b26', // Darker navy
          900: '#0f111a', // Deep navy background
          950: '#0a0a0c', // Almost black
        },
        neon: {
          cyan: '#00f2ff', // Primary accent
          blue: '#00c3ff', // Secondary blue
          purple: '#9d00ff', // Tertiary accent
        },
        gold: {
          DEFAULT: '#D4AF37', // Matches globals.css --gold
          400: '#ffd700',
          500: '#ffb700',
          dim: '#AA8C2C', // Matches globals.css --gold-dim
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 242, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 242, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
