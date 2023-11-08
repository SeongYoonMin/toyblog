<script setup lang="ts">
const route = useRoute();
const nowPath = ref<string>(route.path);
const links = ref<{ to: string; title: string }[]>([
  {
    to: "/about",
    title: "ABOUT",
  },
  {
    to: "/board",
    title: "BOARD",
  },
  {
    to: "/toy",
    title: "TOY",
  },
  {
    to: "/contact",
    title: "CONTACT",
  },
]);
const blanks = ref<{ to: string; src: string; title: string }[]>([
  {
    to: "https://velog.io/@villain_uni",
    src: "blank/new_velog.svg",
    title: "VELOG",
  },
  {
    to: "https://github.com/SeongYoonMin",
    src: "blank/new_github.svg",
    title: "GITHUB",
  },
  {
    to: "mailto:namo4862@gmail.com",
    src: "blank/new_google.svg",
    title: "GOOGLE",
  },
]);
watch(
  () => route.path,
  (path) => {
    nowPath.value = path;
  }
);
</script>

<template>
  <header
    id="header"
    class="flex items-center justify-between sticky w-full top-0 left-0 right-0 z-10 h-[74px] mx-auto max-w-[1296px]"
  >
    <NuxtLink to="/" class="link">
      <picture
        ><img src="../assets/images/icons/home.svg" alt="홈버튼"
      /></picture>
    </NuxtLink>
    <nav class="flex items-center justify-center">
      <NuxtLink
        v-for="(items, index) in links"
        :key="index + 'links'"
        class="link"
        :class="{ selected: nowPath === items.to }"
        :to="items.to"
        >{{ items.title }}</NuxtLink
      >
    </nav>
    <div class="flex items-center justify-center">
      <NuxtLink target="_blank" to="https://velog.io/@villain_uni" class="link">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.375 0C29 0 32 3 32 7.62501V24.375C32 29 29 32 24.375 32H7.62501C3 32 0 29 0 24.375V7.62501C0 3 3 0 7.62501 0H24.375ZM5.24163 12.7587C5.24163 12.7587 7.38643 10.2 8.36456 12.7587C8.36456 12.7587 10.6974 20.4717 11.7134 23.7453C12.7291 27.0186 16.0403 25.7019 16.0403 25.7019C16.0403 25.7019 19.991 24.4976 24.7318 16.5963C29.4726 8.69495 25.5929 6.55834 25.5929 6.55834C25.5929 6.55834 22.2107 4.18002 18.787 8.24348C18.787 8.24348 17.6707 9.50535 17.1024 11.4723C17.1024 11.4723 20.0744 9.81148 20.4459 12.2371C20.8174 14.6627 17.5614 18.2246 17.5614 18.2246C17.5614 18.2246 16.2059 20.1475 15.5507 17.0227C15.5507 17.0227 14.1307 10.008 14.0214 9.22135C14.0214 9.22135 13.296 4.53663 9.05651 7.07156C9.05651 7.07156 6.52189 8.79148 4.00003 11.3664L5.24163 12.7587Z"
            fill="white"
          />
        </svg>
      </NuxtLink>
      <NuxtLink target="_blank" to="mailto:namo4862@gmail.com" class="link">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.375 0C29 0 32 3 32 7.62501V24.375C32 29 29 32 24.375 32H7.62501C3 32 0 29 0 24.375V7.62501C0 3 3 0 7.62501 0H24.375ZM12.9651 5.92058C10.3699 6.81306 8.15852 8.76497 6.9268 11.2351C6.49715 12.0873 6.18778 12.9913 5.99873 13.9298C5.52896 16.256 5.85551 18.7377 6.92108 20.8566C7.61429 22.2385 8.61111 23.4707 9.8142 24.4322C10.9542 25.342 12.2776 26.0214 13.6869 26.3957C15.4629 26.8736 17.3534 26.8621 19.1409 26.4533C20.7564 26.079 22.286 25.3017 23.5063 24.1731C24.7953 22.9813 25.7177 21.4151 26.2046 19.728C26.7373 17.8913 26.8061 15.9278 26.474 14.0392C23.1339 14.0392 19.7882 14.0392 16.4483 14.0392C16.4483 15.4326 16.4483 16.826 16.4483 18.2195C18.3846 18.2195 20.321 18.2195 22.2574 18.2195C22.034 19.5553 21.2434 20.776 20.1262 21.5302C19.4216 22.0082 18.6138 22.3133 17.7774 22.463C16.941 22.607 16.0702 22.6243 15.2337 22.4573C14.3801 22.2845 13.5723 21.9275 12.862 21.4266C11.7276 20.6263 10.8626 19.4574 10.4215 18.1388C9.96887 16.7973 9.96314 15.3059 10.4215 13.9701C10.7423 13.0258 11.2693 12.1564 11.9683 11.4424C12.8276 10.5557 13.9447 9.92231 15.1535 9.66322C16.1847 9.44442 17.2732 9.48472 18.2815 9.78988C19.1409 10.049 19.9315 10.5269 20.5788 11.1488C21.2319 10.4924 21.885 9.83595 22.5381 9.17955C22.8818 8.82833 23.2428 8.48859 23.575 8.12584C22.5839 7.20459 21.4152 6.4618 20.1434 5.98966C17.8519 5.13751 15.2738 5.12022 12.9651 5.92058Z"
            fill="white"
          />
        </svg>
      </NuxtLink>
      <NuxtLink
        target="_blank"
        to="https://github.com/SeongYoonMin"
        class="link"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.375 0C29 0 32 3 32 7.62501V24.375C32 29 29 32 24.375 32H7.62501C3 32 0 29 0 24.375V7.62501C0 3 3 0 7.62501 0H24.375ZM4.92737 8.96542C4.82887 6.91024 6.99448 5.52017 8.82656 6.4626C9.48401 6.80079 9.92166 7.34834 10.1326 7.9629C11.1262 7.61601 12.194 7.42744 13.3059 7.42744H18.6939C19.8557 7.42744 20.9694 7.6333 22.0005 8.01052C22.2049 7.37668 22.648 6.8095 23.3224 6.4626C25.1545 5.52017 27.3201 6.91024 27.2216 8.96542C27.1805 9.8212 26.7598 10.5252 26.1575 10.9752C27.508 12.6321 28.3177 14.7471 28.3177 17.0512C28.3177 22.3663 24.009 26.675 18.6939 26.675H13.3059C7.99087 26.675 3.68216 22.3663 3.68216 17.0512C3.68216 14.7141 4.51525 12.5716 5.90067 10.9044C5.3472 10.4529 4.9663 9.77753 4.92737 8.96542Z"
            fill="white"
          />
        </svg>
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.link {
  @apply text-white text-2xl px-5 duration-300;
  svg {
    border-radius: 6px;
    @apply duration-300;
    path {
      @apply duration-300;
    }
  }
  &.selected {
    color: #00ff00;
  }

  &:hover {
    color: #00ff00;
    text-shadow: 1px 4px 5px rgba(0, 255, 0, 0.5);
    svg {
      box-shadow: 1px 4px 5px rgba(0, 255, 0, 0.5);
      path {
        fill: #00ff00;
      }
    }
  }
}
</style>
