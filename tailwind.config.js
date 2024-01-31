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
      },
      borderRadius:{
        'custom': '50px',
      },
      colors:{
        'custom': '#000000-48',
      },
      height:{
        'div-login': '90%',
      },
    },
  },
  plugins: [],
};
