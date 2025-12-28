/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue-500
          dark: '#2563EB',    // Blue-600
        },
        dark: {
          bg: '#0F172A',      // Slate-900
          card: '#1E293B',    // Slate-800
          text: '#F8FAFC',    // Slate-50
        },
        light: {
          bg: '#FFFFFF',
          card: '#F1F5F9',    // Slate-100
          text: '#0F172A',    // Slate-900
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
