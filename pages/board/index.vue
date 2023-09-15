<script setup lang="ts">
const { data } = await useApiFetch<IBoardItems[]>("/api/board/list", {
  method: "GET",
});
</script>

<template>
  <section>
    <div class="flex w-full items-center justify-between">
      <h1>BOARD</h1>
      <NuxtLink to="/board/write">WRITE</NuxtLink>
    </div>
    <div
      v-if="data"
      class="list flex items-start justify-start gap-2 flex-col py-10"
    >
      <NuxtLink
        v-for="items in data"
        :key="items.id"
        :to="'/board/' + items.id"
        class="items flex w-full box-border border-b-[1px] border-solid items-center border-[#c7c7c7] text-[#c7c7c7] justify-between px-2 py-1 hover:text-[#000] hover:border-[#000] duration-300"
      >
        <p>{{ items.title }}</p>
        <p>{{ items.date }}</p>
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
