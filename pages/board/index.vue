<script setup lang="ts">
const { data } = await useApiFetch<IBoardItems[]>("/api/board/list", {
  method: "GET",
});
</script>

<template>
  <section>
    <h1>BOARD</h1>
    <div v-if="data" class="list flex items-start justify-start gap-2 flex-col">
      <NuxtLink
        v-for="items in data"
        :key="items.id"
        :to="'/board/' + items.id"
      >
        {{ items.title }}
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
