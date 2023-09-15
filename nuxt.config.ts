// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      secret: process.env.ADMIN_DATA,
    },
  },
  app: {
    head: {
      title: "Toy Blog",
      link: [
        {
          rel: "stylesheet",
          as: "style",
          href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css",
        },
      ],
    },
  },
  css: ["~/assets/scss/reset.scss", "~/assets/scss/main.scss", "swiper/css", "~/assets/scss/tiptap.scss"],
  modules: ['@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
