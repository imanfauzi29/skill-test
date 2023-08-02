/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear":
          "linear-gradient(-45deg, rgb(230, 130, 243) 0%, rgb(243, 130, 205) 25%, rgb(164, 145, 233) 51%, rgb(145, 205, 233) 100%)",
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        "animate-bg": "move 20s ease infinite",
      },
      keyframes: {
        move: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
    },
  },
  plugins: [],
}
