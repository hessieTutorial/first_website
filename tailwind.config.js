/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        taskgo: {
          primary: '#6046E9',
          secondary: '#7561ED',
          'lavender-light': '#E9E7FF',
          'lavender-soft': '#F2F0FF',
          navy: '#17152C',
          text: '#202034',
          muted: '#737487',
          'light-grey': '#F5F6F9',
          'card-grey': '#EFF1F5',
          border: '#E5E7EF',
          'muted-bg': '#FAFAFC',
        }
      },
      fontFamily: {
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card-subtle': '0 4px 18px rgba(25, 20, 70, 0.05)',
        'card-hover': '0 8px 30px rgba(25, 20, 70, 0.07)',
        'dashboard': '0 25px 60px -15px rgba(23, 21, 44, 0.08), 0 10px 30px -10px rgba(96, 70, 233, 0.08)',
        'dashboard-lg': '0 30px 70px -20px rgba(23, 21, 44, 0.12), 0 15px 35px -10px rgba(96, 70, 233, 0.15)',
        'pill-glow': '0 4px 14px rgba(96, 70, 233, 0.35)',
      },
      borderRadius: {
        'control': '6px',
        'dashboard': '10px',
        'feature': '16px',
        'canvas': '24px',
        'canvas-lg': '32px',
      }
    },
  },
  plugins: [],
}
