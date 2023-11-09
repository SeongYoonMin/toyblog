<script setup lang="ts">
interface Props {
  title: string; // 제목
  date: string; // 제작일
  img: string;
  intro: string; // 소개링크
  to: string; // 링크
}
interface Emits {
  (e: "update:intro", value: string): void;
  (e: "update:to", value: string): void;
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();
</script>

<template>
  <section class="card">
    <picture class="thumb"><img :src="props.img" :alt="props.title" /></picture>
    <div class="info"></div>
  </section>
</template>

<style lang="scss" scoped>


</style>
