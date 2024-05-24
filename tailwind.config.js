/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      PoppinsLight: ['PoppinsLight'],
      PoppinsRegular: ['PoppinsRegular'],
      PoppinsMedium: ['PoppinsMedium'],
      PoppinsSemiBold: ['PoppinsSemibold'],
      PoppinsBold: ['PoppinsBold'],
      ChoplinBlack: ['ChoplinBlack'],
      ChoplinBold: ['ChoplinBold'],
      ChoplinSemiBold: ['ChoplinSemiBold'],
    },
    extend: {
      colors: {
        bgColor: 'var(--background-color)',
        textColor: 'var(--text-color)',
        accentColor: 'var(--text-accent)',
      },
      screens: {
        xs: '468px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '1rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
};
