<script setup lang="ts">
const route = useRoute();
const nowPath = ref<string>(route.path);
watch(() => route.path, (path: string) => {
  nowPath.value = path;
});
</script>

<template>
  <header
    id="header"
    class="flex items-center justify-between sticky w-full top-0 left-0 right-0 z-10 px-4 py-2"
    :class="{ main_header : nowPath === '/'}"
  >
    <NuxtLink to="/" class="link">HOME</NuxtLink>
    <ul class="flex items-center justify-center gap-3">
      <li><NuxtLink to="/about" class="link">ABOUT</NuxtLink></li>
      <li><NuxtLink to="/board" class="link">BOARD</NuxtLink></li>
      <li><NuxtLink to="/toy" class="link">TOY</NuxtLink></li>
      <li><NuxtLink to="/contact" class="link">CONTACT</NuxtLink></li>
    </ul>
    <div class="flex items-center justify-center gap-3">
      <NuxtLink
        class="max-w-[24px] hover:scale-125 duration-300"
        target="_blank"
        to="https://velog.io/@villain_uni"
        ><img src="~assets/images/icons/velog.svg" alt="VELOG" class="w-[24px]"
      /></NuxtLink>
      <NuxtLink
        class="max-w-[24px] hover:scale-125 duration-300"
        target="_blank"
        to="https://github.com/SeongYoonMin"
        ><img
          src="~assets/images/icons/github.svg"
          alt="GITHUB"
          class="w-[24px]"
      /></NuxtLink>
      <NuxtLink
        class="max-w-[24px] hover:scale-125 duration-300"
        target="_blank"
        to="mailto:namo4862@gmail.com"
        ><img
          src="~assets/images/icons/google.svg"
          alt="GOOGLE"
          class="w-[24px]"
      /></NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.link {
  font-size: 24px;
  transition: 0.3s all;
  &:hover {
    color: #87ceeb;
  }
}
.main_header {
  background-color: #DEE7E9;
  position: absolute;
}
</style>
