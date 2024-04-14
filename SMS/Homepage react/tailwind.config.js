module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fff2fd", 100: "#f5f5f5" },
        black: { 900: "#000000", "900_7f": "#0000007f" },
        blue_gray: { "100_3f": "#d9d9d93f", "100_01": "#d9d9d9" },
        pink: { 600: "#d81d82" },
        indigo: { 900: "#100e78" },
      },
      boxShadow: {
        xs: "5px 6px 4px 0px #000000",
        sm: "10px 10px 4px 0px #000000",
        md: "0px 4px 4px 0px #000000",
        lg: "9px 10px 4px 0px #000000",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #c8d1fb6d,#f5f5f56d)",
        gradient1: "linear-gradient(180deg, #ffffff,#cde4ed,#f0f7f2)",
      },
      fontFamily: { iowanoldstyle: "Iowan Old Style", itim: "Itim", jacquesfrancois: "Jacques Francois" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
