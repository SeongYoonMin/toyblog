<script setup lang="ts">
interface Props {
  title: string; // 제목
  date: string; // 제작일
  img: string; // 이미지링크
  intro: string; // 소개링크
  to: string; // 링크
}
interface Emits {
  (e: "update:intro"): void;
  (e: "update:to"): void;
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const introButtonEvent = () => {
  emits("update:intro");
};
const toButtonEvent = () => {
  emits("update:to");
};
</script>

<template>
  <section class="card">
    <picture class="thumb z-0"
      ><img :src="props.img" :alt="props.title" class="w-full"
    /></picture>
    <div class="main">
      <div class="flex flex-col items-center justify-center gap-y-4">
        <h2 v-html="props.title" class="title" />
        <p>{{ props.date }}</p>
      </div>
      <div class="link">
        <button
          class="update_button update_intro"
          type="button"
          @click="introButtonEvent"
        >
          개요
        </button>
        <button
          class="update_button update_to"
          type="button"
          @click="toButtonEvent"
        >
          실행
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  @apply relative;
  .title {
    @apply text-[66px] leading-[66px] font-extrabold text-center;
  }
  .main {
    @apply absolute inset-0 flex items-center justify-center flex-col box-border p-5;
    .link {
      @apply invisible opacity-0 duration-300 flex items-center justify-center w-full gap-x-3;
      .update_button {
        @apply p-5 box-border bg-[rgba(255,255,255,0.2)] border border-solid border-white flex items-center justify-center cursor-pointer rounded-xl;
        &.update_to {
          @apply flex-1;
        }
      }
    }
    &:hover {
      @apply justify-between pt-[60px];
      .link {
        @apply visible opacity-100;
      }
    }
  }
}
</style>
