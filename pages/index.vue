<script setup lang="ts">
definePageMeta({
  layout: "main",
});
const { $Typed } = useNuxtApp();
const typedContent = ref();
const typedText = ref<string[]>([
  "Hello, World!",
  "I'm Front-end Junior Developer!",
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
  <section class="w-full h-[80vh] box-border flex items-center justify-center">
    <h1 ref="typedContent" class="typed"></h1>
  </section>
</template>

<style lang="scss" scoped>
.typed {
  @apply text-[66px];
  // text-shadow: 0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.5), 0 0 80px rgba(0, 255, 0, 0.5);
  text-shadow: 0 0 10px rgb(12, 42, 126), 0 0 20px rgb(12, 42, 126),
    0 0 40px rgb(12, 42, 126), 0 0 80px rgb(12, 42, 126);
}
</style>
