import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: {
          DEFAULT: "#635FC7", // Default primary color
          light: "#A8A4FF", // Light variant of primary color
        },
        secondary: {
          DEFAULT: "#FF6B6B", // Default secondary color
          dark: "#FF4757", // Dark variant of secondary color
        },
        neutral: {
          dark: "#000112", // Dark neutral color
          darker: "#20212C", // Darker neutral color
          gray: "#828FA3", // Gray neutral color
          light: "#E4EBFA", // Light neutral color
        },
        accent: {
          red: "#EA5555", // Accent red color
          lightRed: "#FF9898", // Light variant of accent red
        },
        background: {
          light: "#F4F7FD", // Light background color
          white: "#FFFFFF", // White background color
        },
      },
    },
  },
  plugins: [],
};

export default config;
