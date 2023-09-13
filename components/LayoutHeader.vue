<script setup lang="ts"></script>

<template>
  <header
    id="header"
    class="flex items-center justify-between sticky w-full top-0 left-0 right-0 z-10 px-4 py-2"
  >
    <NuxtLink to="/" class="link">HOME</NuxtLink>
    <ul class="flex items-center justify-center gap-3">
      <li><NuxtLink to="/about" class="link">ABOUT</NuxtLink></li>
      <li><NuxtLink to="/board" class="link">BOARD</NuxtLink></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
.link {
  font-size: 24px;
  transition: .3s all;
  &:hover {
    color: #87CEEB;
  }
}
</style>
