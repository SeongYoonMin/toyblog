<script setup lang="ts">
const route = useRoute();
const { data } = await useApiFetch("/api/board/list", {
  method: "GET",
  params: {
    id: route.params.id,
  },
});
</script>

<template>
  <section>{{ data }}</section>
</template>

<style lang="scss" scoped></style>
