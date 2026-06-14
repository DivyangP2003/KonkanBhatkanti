import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Coastal blues and warm tones
        'primary-dark': '#0D5C6B',      // Deep teal
        'primary': '#00A8A8',            // Vibrant teal
        'primary-light': '#4DD9D9',      // Light teal
        'accent': '#D97853',             // Coral warmth
        'accent-light': '#F4A88A',       // Light coral
        'sand': '#E8C4A0',               // Warm sand
        'cream': '#FFF9F5',              // Cream background
        'text-primary': '#1a1a1a',       // Dark text
        'text-secondary': '#666666',     // Gray text
      },
      fontFamily: {
        'serif': ['Crimson Text', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.6s ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
