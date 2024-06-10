/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "375px",
    },
    extend: {
      colors: {
        primary: {
          "bright-blue": "hsl(220, 98%, 61%)",
          "check-background":
            "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        },
        light: {
          "very-light-gray": "hsl(0, 0%, 98%)",
          "very-light-grayish-blue": "hsl(236, 33%, 92%)",
          "light-grayish-blue": "hsl(233, 11%, 84%)",
          "dark-grayish-blue": "hsl(236, 9%, 61%)",
          "very-dark-grayish-blue": "hsl(235, 19%, 35%)",
        },
        dark: {
          "very-dark-blue": "hsl(235, 21%, 11%)",
          "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
          "light-grayish-blue": "hsl(234, 39%, 85%)",
          "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
          "dark-grayish-blue": "hsl(234, 11%, 52%)",
          "very-dark-grayish-blue-1": "hsl(233, 14%, 35%)",
          "very-dark-grayish-blue-2": "hsl(237, 14%, 26%)",
          "very-dark-gray": "hsl(240, 20%, 12%)",
        },
      },
      backgroundImage: {
        "sm-banner-light": "url('images/bg-mobile-light.jpg')",
        "sm-banner-dark": "url('images/bg-mobile-dark.jpg')",
        "lg-banner-light": "url('images/bg-desktop-light.jpg')",
        "lg-banner-dark": "url('images/bg-desktop-dark.jpg')",
      },
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
    },
    letterSpacing: {
      widest: "0.5em",
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  darkMode: "class",
  plugins: [],
};
