/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./js/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        cb: "#d9dddc",
        bg: "#f2f2f2",
        facebook: "#3b5998",
        twitter: "#73b4ff",
        instagram: "#de3073",
        pinterest: "#bd081c",
      },
    },
  },
  plugins: [],
};
