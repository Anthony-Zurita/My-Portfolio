/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Extend the default theme with the google font we imported
    extend: {
      fontFamily: {
        // Specifying the font family for the project as Poppins
        primary: ["Poppins"],
      },
    },
  },
  plugins: [],
}