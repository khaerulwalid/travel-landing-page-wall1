import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/images/header/travel_header.jpg')",
      },
      colors: {
        'primary': '#0077B6',    // Biru laut
        'secondary': '#00B4D8',  // Biru muda
        'accent': '#90E0EF',     // Biru pastel
        'background': '#F0F4F8', // Latar belakang yang cerah
        'highlight': '#FFB703',  // Kuning cerah
        'text-primary': '#333',  // Warna teks utama
        'text-secondary': '#555',// Warna teks sekunder
        'border': '#E1E1E1',     // Warna border atau garis
      },
    },
  },
  plugins: [],
};
export default config;
