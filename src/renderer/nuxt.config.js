/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  ssr: false,
  target: "static",
  css: ["@/assets/css/tailwind.css"],
  head: {
    title: "earnd",
    meta: [{ charset: "utf-8" }]
  },
  loading: false,
  plugins: [{ ssr: true, src: "@/plugins/icons.js" }],
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/vuetify", "portal-vue/nuxt"],
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: "#1867c0",
          secondary: "#b0bec5",
          accent: "#8c9eff",
          error: "#b71c1c"
        }
      }
    }
  }
};
