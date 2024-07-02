import { keyframes } from "@emotion/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        like: "like 1s ease-in-out forwards",
        dislike:"dislike .7s forwards",
      },
      keyframes: {
        like: {
          "0%, 50%": { transform: "scale(1)" },
          "25%,100%": { transform: "scale(1.2)" },
        },
        dislike: {
          "0%, 50%": { transform: "scale(1.2)" },
          "25%,100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
