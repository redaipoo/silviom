/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#02282D',       // Deepest Teal
          DEFAULT: '#043337',    // Primary Dark Teal
          surface: '#074247',    // Elevated Teal
          card: '#063B40',       // Card Background
          cardHover: '#094B51',  // Card Hover
          border: 'rgba(187, 154, 107, 0.2)', // Subtle gold border
          gold: {
            light: '#D4B88E',
            DEFAULT: '#BB9A6B',  // Warm Gold
            dark: '#9B7C4F',
            hover: '#CDAF7E',
          },
          champagne: {
            DEFAULT: '#DFCAA7',
            light: '#EFE2CE',
            dark: '#C8B18B',
          },
          ivory: {
            DEFAULT: '#F6F1E8',
            dim: '#DCD4C6',
            muted: '#ADA597',
          },
        }
      },
      fontFamily: {
        arabic: ['"Alexandria"', '"Tajawal"', 'sans-serif'],
        display: ['"Alexandria"', 'sans-serif'],
        serif: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(2, 40, 45, 0.7), 0 0 1px 1px rgba(187, 154, 107, 0.15)',
        'luxury-gold': '0 10px 30px -5px rgba(187, 154, 107, 0.25)',
        'inner-luxury': 'inset 0 1px 1px 0 rgba(223, 202, 167, 0.15)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFCAA7 0%, #BB9A6B 50%, #9B7C4F 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(223, 202, 167, 0.15) 50%, transparent 100%)',
        'teal-gradient': 'linear-gradient(180deg, #043337 0%, #02282D 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(4, 51, 55, 0.85) 0%, rgba(2, 40, 45, 0.95) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
