// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      secret: process.env.ADMIN_DATA,
      df_url: process.env.DF_URL,
      df_api: process.env.DF_API,
      df_img: process.env.DF_IMG,
      mail_user: process.env.MAIL_USER,
      mail_pass: process.env.MAIL_PASS,
      maple_url: process.env.MAPLE_URL,
      maple_api: process.env.MAPLE_API,
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
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  css: [
    "~/assets/scss/reset.scss",
    "~/assets/scss/tailwind.scss",
    "~/assets/scss/tiptap.scss",
    "~/assets/scss/typed.scss",
    "~/assets/scss/about.scss",
    "swiper/css",
  ],
  modules: ["@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
