<script setup lang="ts">
definePageMeta({
  layout: "main",
});
const { $Typed } = useNuxtApp();
const typedContent = ref();
const typedText = ref<string[]>([
  "Hello, World!",
  "안녕하세요! 저는",
  "함께하고 싶은 개발자를 꿈꾸는",
  "프론트엔드 주니어 개발자 민성윤입니다!",
]);
onMounted(() => {
  const typed = new $Typed(typedContent.value, {
    strings: typedText.value,
    typeSpeed: 150,
    backSpeed: 50,
    
  });
});
</script>

<template>
  <section class="w-full h-screen box-border flex items-center justify-center">
    <h1 ref="typedContent" class="typed"></h1>
  </section>
</template>

<style lang="scss" scoped>
.typed {
  @apply text-[66px];
  // text-shadow: 0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.5), 0 0 80px rgba(0, 255, 0, 0.5);
  text-shadow: 0 0 10px rgb(12, 42, 126), 0 0 20px rgb(12, 42, 126), 0 0 40px rgb(12, 42, 126), 0 0 80px rgb(12, 42, 126);
}
</style>
