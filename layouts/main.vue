<script setup lang="ts">
</script>

<template>
  <div id="app">
    <LayoutHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
#app {
  max-height: 100vh;
}
</style>
