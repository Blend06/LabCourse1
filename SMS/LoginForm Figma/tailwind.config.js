module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          "900_99": "#00000099",
          "900_33": "#00000033",
          "900_02": "#000000",
          "900_7f": "#0000007f",
          "900_cc": "#000000cc",
        },
        gray: { 100: "#f5f5f5" },
        deep_purple: { A400: "#462af6" },
        indigo: { 900: "#09016a" },
        blue_gray: { 100: "#d9d9d9" },
        white: { A700: "#fffcfc", A700_01: "#ffffff" },
        light_blue: { 400: "#2ac5f6" },
        red: { A700_01: "#ff0000" },
        black_900: "#0c0c0c",
        black_900_01: "#0f0f0f",
      },
      boxShadow: { xs: "5px 6px 4px 0px #000000", sm: "4px 4px 4px 0px #000000", md: "0px 4px 4px 0px #000000" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #c8d1fb6d,#f5f5f56d)",
        gradient1: "linear-gradient(180deg, #fff3fd,#e7f2f7)",
      },
      fontFamily: {
        iowanoldstyle: "Iowan Old Style",
        itim: "Itim",
        timesnewroman: "Times New Roman",
        jacquesfrancois: "Jacques Francois",
      },
      textShadow: { ts: "0px 4px 4px #000000" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
