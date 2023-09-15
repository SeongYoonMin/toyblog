<script setup lang="ts">
const route = useRoute();
const { data } = await useApiFetch<IBoardItems>("/api/board/read", {
  method: "GET",
  params: {
    id: route.params.id,
  },
});
</script>

<template>
  <section>
    <div v-if="data" class="data flex flex-col w-full items-start justify-center gap-10">
      <div class="header flex items-start justify-between w-full">
        <h1 class="title font-semibold text-2xl">{{ data.title }}</h1>
        <div class="info flex items-end justify-center flex-col">
          <p class="name">{{ data.name }}</p>
          <p class="date">{{ data.date }}</p>
        </div>
      </div>
      <div v-html="data.content" class="content"></div>
    </div>
    <div v-else>잘못된 아이디값 입니다.</div>
  </section>
</template>

<style lang="scss" scoped></style>
