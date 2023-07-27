/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        henry: "#ffff01",
        platzi: "#98ca3f",
        coder: "#1a1a1a",
        gray: "#dce0dd",
      },
    },
  },
  plugins: [],
};
