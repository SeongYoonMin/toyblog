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
    <div v-if="data">
      <p>{{ data.title }}</p>
      <p>{{ data.name }}</p>
      <p>{{ data.date }}</p>
      <p>{{ data.content }}</p>
    </div>
    <div v-else>잘못된 아이디값 입니다.</div>
  </section>
</template>

<style lang="scss" scoped></style>
