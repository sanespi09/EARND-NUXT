module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#504f4f"
        }
      },
      animation: {
        fade: "fadeIn .2s ease-in-out forwards"
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
