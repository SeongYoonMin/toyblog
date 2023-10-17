<script lang="ts" setup>
const route = useRoute();
const config = useRuntimeConfig();
// id = 캐릭터닉네임, query-serverid = 서버아이디
const searchQuery = computed(() => {
  const { serverid } = route.query;
  return {
    serverid,
  };
});

const { data: searchData } = await useApiFetch<ISearchDfChar>(
  config.public.df_url + "servers/" + searchQuery.value.serverid + "/characters",
  {
    method: "GET",
    query: {
      apikey: config.public.df_api,
      characterName: route.params.id,
    }
  }
);
</script>

<template>
  <section class="p-10">
    <picture class="header w-full flex items-center justify-center"
      ><img src="~assets/images/icons/df.png" alt=""
    /></picture>
    <div v-if="searchData" class="flex flex-col items-start justify-center w-full">
      <div v-if="searchData.rows" class="w-full">
        <h1 class="text-2xl font-semibold mb-10">검색 결과</h1>
        <div v-for="items, index in searchData.rows" :key="index" class="flex items-center justify-start gap-2 w-full border-b border-[#c7c7c7]" style="border-style: groove;">
          <p>{{ items.characterName }}</p>
          <p>{{ items.level }}</p>
          <p>{{ items.jobGrowName }}</p>
          <p>{{ dfServer.filter((values) => { return items.serverId === values.value})[0].name }}</p>
        </div>
      </div>
      <div v-else>
        <h2 class="text-3xl font-bold text-center">캐릭터가 존재하지 않습니다.</h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
