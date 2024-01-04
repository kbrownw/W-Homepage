/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "hsl(35, 77%, 62%)",
        "primary-red": "hsl(5, 85%, 63%)",
        "neutral-off-white": "hsl(36, 100%, 99%)",
        "neutral-grayish-blue": "hsl(233, 8%, 79%)",
        "neutral-dark-gray-blue": "hsl(236, 13%, 42%)",
        "neutral-dark-blue": "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      md: "1060px",
    },
  },
  plugins: [],
};
