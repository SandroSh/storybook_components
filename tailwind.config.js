/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./stories/**/*.{js,ts,jsx,tsx}",
  "./.storybook/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      transparent: "transparent",
      black: {
        DEFAULT: "#000000",
      },
      white: {
        DEFAULT: "#ffffff",
        10: "rgba(250, 252, 255, 1)",
      },
      gray: {
        DEFAULT: "#f2f2f2",
        0: "#FAFAFA",
        1: "#F8F8F8",
        2: "#EFEFF4",
        3: "#0000001A",
        4: "#00000029",
        5: "#B2B2B2",
        6: "#707070",
        7: "#676069",
      },
      blue: {
        DEFAULT: "#25304A",
        1: "#182849",
      },
      red: {
        0: "#FF0000",
        10: "#80334B",
      },
      green: {
        0: "#409826",
        1: "#80334B",
      },
    },
    padding: {
      md: "16px",
      xl: "32px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      xl: "1280px",
      xxl: "1920px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
  },
};
export const plugins = [];
