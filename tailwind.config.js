/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0B0B0B',
          bgPure: '#000000',
          card: '#121312',
          cardHover: '#171817',
          cardBorder: '#222422',
          lime: '#CCFF00',
          limeHover: '#A8FF00',
          limeGlow: 'rgba(204, 255, 0, 0.25)',
          textMuted: '#A1A1AA',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'lime-glow': '0 0 25px -5px rgba(204, 255, 0, 0.4)',
        'lime-glow-sm': '0 0 15px -3px rgba(204, 255, 0, 0.3)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(204, 255, 0, 0.12) 0%, transparent 60%)',
        'grid-pattern': 'linear-gradient(to right, #1f211f 1px, transparent 1px), linear-gradient(to bottom, #1f211f 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
