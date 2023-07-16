/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        TMDB_Warning: "#CCCF30",
        TMDB_Blue_1: "#032541",
        TMDB_Blue_2: "#01B4E4",
        TMDB_Black: "#2F2F2F",
        TMDB_Gray_1: "#E4E7EB",
        TMDB_Gray_2: "#666666",
        TMDB_Success: "#21C171",
        TMDB_Danger: "#D6225E",
      },
    },
  },
  plugins: [],
};
