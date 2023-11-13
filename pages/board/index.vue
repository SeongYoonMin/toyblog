<script setup lang="ts">
const { data } = await useApiFetch<IBoardItems[]>("/api/board/list", {
  method: "GET",
});
</script>

<template>
  <section class="board pt-20 py-[120px]">
    <div class="flex w-full items-end justify-between pb-5">
      <h1 class="text-[88px]">BOARD</h1>
      <NuxtLink
        to="/board/write"
        class="px-5 py-3 rounded-xl"
        style="background-color: rgba(255, 255, 255, 0.16)"
        >글쓰기</NuxtLink
      >
    </div>
    <div class="sort pb-10 flex items-center justify-end py-3">
      <button type="button" class="px-3 text-[#9A9CA1] relative desc">
        최신순
      </button>
      <button type="button" class="px-3 text-[#9A9CA1] asc">오래된순</button>
    </div>
    <ClientOnly>
      <div v-if="data" class="list flex items-start justify-start flex-col">
        <NuxtLink
          v-for="items in data"
          :key="items.id"
          :to="'/board/' + items.id"
          class="p-5 flex flex-col items-strat justify-center border-b border-solid border-[#424242] w-full"
        >
          <h2 class="text-2xl">{{ items.title }}</h2>
          <p v-html="items.content" class="text-[#9A9CA1] pt-2 pb-3"></p>
          <p class="text-xs text-[#4F535E]">{{ items.date }}</p>
        </NuxtLink>
      </div>
    </ClientOnly>
  </section>
</template>

<style lang="scss" scoped>
.desc {
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 16px;
    background-color: #424242;
    top: 4px;
    right: 0px;
  }
}
</style>
