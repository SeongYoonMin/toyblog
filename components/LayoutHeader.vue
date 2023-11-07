<script setup lang="ts">
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
        :to="items.to"
        >{{ items.title }}</NuxtLink
      >
    </nav>
    <div class="flex items-center justify-center">
      <NuxtLink
        v-for="(items, index) in blanks"
        target="_blank"
        :key="index + 'blanks'"
        :to="items.to"
        class="link"
      >
        <img :src="items.src" :alt="items.title" />
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.link {
  @apply text-white text-2xl px-5 duration-300;
  &:hover {
    color: #00ff00;
    text-shadow: 1px 4px 5px rgba(0, 255, 0, 0.5);
  };
}
</style>
