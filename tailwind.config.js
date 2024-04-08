/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1240px",
      },
      colors: {
        primary: {
          blue: "#695cff",
          hoverblue:"#5249bd",
          black: "#242424",
          bannerbg: "#f4f6ff",
          white: "#fff",
          greenbg:"#40cf79",
        },
}
    },
  },
  plugins: [],
}

