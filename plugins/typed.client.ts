import Typed from "typed.js";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      Typed: Typed,
    },
  };
});
