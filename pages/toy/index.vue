<script setup lang="ts"></script>

<template>
  <section class="toy flex flex-col items-start justify-center gap-10">
    <div class="header flex items-center justify-center w-full">
      <h1 class="title text-3xl font-semibold mb-10 block">TOY PROJECT LIST</h1>
    </div>
    <NuxtLink
      to="toy/df"
      class="w-full flex items-center justify-center gap-10 items px-10 py-4 box-border duration-300"
      ><picture class="thumb max-w-[400px] rounded-lg">
        <img src="~assets/images/icons/df.png" alt="D&F" class="w-full" />
      </picture>
      <div class="info flex-1">
        <h2 class="title text-2xl font-medium pb-10">DunChaeSearch</h2>
        <p class="break-keep">
          DunChae(던캐서치)는 Dungeon & Fighter Character Search의 줄임말로써
          Neople사의 던전앤파이터 API를 이용하여 만든 캐릭터 검색
          프로젝트입니다.
        </p>
      </div>
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
.toy {
  h1.title {
    background: linear-gradient(to right, #861657, #87ceeb);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 400%;
    background-position-x: 0%;
    animation: handle 2s alternate infinite;
  }
  .items {
    background-color: #fff;
    transition: 0.3s all;
    box-shadow: 0 0 1px 1px #fff, 0 0 10px 4px #87ceeb, 0 0 3px 1px #861657;
    &:hover {
      box-shadow: 0 0 1px 1px #fff, 0 0 20px 4px #87ceeb, 0 0 20px 1px #861657;
    }
  }
}
@keyframes handle {
  from {
    background-position-x: 0%;
  }
  to {
    background-position-x: 100%;
  }
}
</style>
