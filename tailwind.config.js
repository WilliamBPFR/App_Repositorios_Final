/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter var", "Inter", "sans-serif"],
      aladin: ["Aladin", "cursive"],
      'poppins-100': ['Poppins', 'sans-serif'],
      'poppins-700': ['Poppins', 'sans-serif'],
      andada: ["Andada Pro", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': '0 35px 35px rgba(0, 0, 0, 0.25), 0 45px 65px rgba(0, 0, 0, 0.15)',
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      boxShadow:{
        'custom': '0 4px 25px rgba(31, 31, 55, 0.04)',
      },
      width:{
        'boton_login': '450px',
        'img-navbar': '6.8%',
        'boton-avatar': '10.3%',
        'dropdown-foto-perfil': '9.5%',
        'boton-navbar': '21.3%',
        'modal': '43%',
      },
      borderRadius:{
        'custom': '50px',
        'boton_navbar': '30px',
        'input_filtro': '10px'
      },
      colors:{
        'custom': '#000000-48',
      },
      height:{
        'div-login': '90%',
        'img-navbar': '5.8%',
        'boton-navbar': '6%',
        'boton-avatar': '10.3%',
        'tabla': '66vh',
        'linea_menu_dropdown': '1px',
      },
      backgroundColor:{
        'custom': '#BA68CF-24',
      },
      borderWidth:{
        'boton_navbar': '3px',
      },
      boxShadowColor:{
        'nav_bar': '#59C3C3'
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'fadeOut': 'fadeOut 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
