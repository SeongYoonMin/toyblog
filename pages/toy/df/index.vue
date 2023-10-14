<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

/** DF Character는 URL Encoding 필요 */
const searchQuery = computed(() => {
  const { server, character } =
    route.query;
  return <ISearchDf>{
    server: server?.toString() || "",
    character: character?.toString() || ""
  };
})
</script>

<template>
  <section class="df flex flex-col justify-center gap-10">
    <picture class="header w-full flex items-center justify-center"><img src="~assets/images/icons/df.png" alt=""></picture>
    <div class="info"></div>
  </section>
</template>

<style lang="scss" scoped></style>
