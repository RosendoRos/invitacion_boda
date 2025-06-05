/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#172426',
        'primary-blue': '#343B55',
        'primary-brown': '#AA8A71',
        'primary-cream': '#ECE5D3',
        'primary-light': '#F4F3EF',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }
    },
  },
  plugins: [],
};