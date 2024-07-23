/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  future: {
    hoverOnlyWhenSupported: true, // Fix to disable hover styles on mobile
  },
  theme: {
    screens: {
      sm: "375px",
      md: "550px",
      betterHover: { raw: "(hover: hover)" },
    },
    extend: {
      height: {
        screen: ["100vh", "100svh"],
      },
      colors: {
        primary: {
          "bright-blue": "hsl(220, 98%, 61%)",
        },
        light: {
          "very-light-gray": "hsl(0, 0%, 98%)",
          "very-light-grayish-blue": "hsl(236, 33%, 83%)",
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
        },
      },
      backgroundImage: {
        "sm-banner-light": "url('images/bg-mobile-light.jpg')",
        "sm-banner-dark": "url('images/bg-mobile-dark.jpg')",
        "lg-banner-light": "url('images/bg-desktop-light.jpg')",
        "lg-banner-dark": "url('images/bg-desktop-dark.jpg')",
        "check-background":
          "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
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
