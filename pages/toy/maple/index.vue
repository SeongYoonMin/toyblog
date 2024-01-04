<script setup lang="ts">
import { useMapleStore } from '~/stores/maple';

const mapleStore = useMapleStore();
await mapleStore.setMapleKey("반전거북이")

</script>

<template>
  <section>메이플</section>
</template>

<style lang="scss" scoped></style>
