<script setup lang="ts">
const { $swiper } = useNuxtApp();
const toyList = ref<
  { title: string; date: string; img: string; intro: string; to: string }[]
>([
  {
    title: "DUNGEON&FIGTHER",
    date: "2023.10.06 - 2023.11.06",
    img: "images/toy-df.png",
    intro: "toy/df/intro",
    to: "toy/df",
  },
]);
</script>

<template>
  <section class="toy flex flex-col items-start justify-center py-20">
    <h1 class="text-[88px]">TOY</h1>
    <ClientOnly>
      <Swiper class="w-full list" :spaceBetween="20" :slidesPerView="2.67">
        <SwiperSlide v-for="(items, index) in toyList" :key="index">
          <ToyCard
            :title="items.title"
            :date="items.date"
            :img="items.img"
            :intro="items.intro"
            :to="items.to"
          />
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </section>
</template>

<style lang="scss" scoped></style>
