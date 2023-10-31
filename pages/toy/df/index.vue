<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const searchValue = ref<string>("");
const searchSelect = ref<string>("default");
const searchDataRows = ref<ISearchDfChar[] | null>(null);
// emits
const updateSearchValue = (value: string) => {
  searchValue.value = value;
};
const updateSearchSelect = (value: string) => {
  searchSelect.value = value;
};

const updateSearchSubmit = async () => {
  if (searchValue.value === "") {
    alert("캐릭터명을 입력해주세요!");
    return;
  }
  if (searchSelect.value === "default") {
    alert("검색옵션을 입력해주세요!");
    return;
  }
  const { data: characterList } = await useApiFetch<ISearchDfChar[]>(
    "/api/toy/df/search",
    {
      method: "GET",
      query: {
        charName: searchValue.value,
        selectOption: searchSelect.value,
      },
    }
  );
  searchDataRows.value = characterList.value;
};
</script>

<template>
  <section class="df flex flex-col justify-center gap-10 min-h-screen">
    <picture class="header w-full flex items-center justify-center"
      ><img src="~assets/images/icons/df.png" alt=""
    /></picture>
    <SearchToy
      :type="'df'"
      :searchValue="searchValue"
      :searchSelect="searchSelect"
      @update:value="updateSearchValue"
      @update:select="updateSearchSelect"
      @update:submit="updateSearchSubmit"
    ></SearchToy>
    <div class="search_rows" v-if="searchDataRows">
      <div v-if="searchDataRows.length > 0">
        <h2 class="text-end text-2xl pb-10">
          검색 결과 : <strong>{{ searchDataRows.length }}</strong
          >개
        </h2>
        <div class="flex flex-col gap-2 w-full">
          <NuxtLink
            :to="
              route.fullPath +
              '/' +
              items.characterId +
              '?server=' +
              searchSelect
            "
            class="search_items flex items-center justify-start gap-2 text-xl w-full border-b border-solid border-[#c7c7c7] text-[#c7c7c7] cursor-pointer hover:text-[#616161] hover:border-[#616161] duration-300"
            v-for="(items, index) in searchDataRows"
            :key="index"
          >
            <picture class="thumb"
              ><img
                :src="
                  config.public.df_img + 'servers/' +
                  searchSelect +
                  '/characters/' +
                  items.characterId
                "
                alt=""
            /></picture>
            <div class="info flex flex-col gap-2">
              <p>{{ items.characterName }}</p>
              <p>{{ items.level }}</p>
              <p>{{ items.jobGrowName }}</p>
              <p>
                {{
                  dfServer.filter((el) => {
                    return el.value === items.serverId;
                  })[0].name
                }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div
        v-else
        class="flex items-center justify-center w-full h-[400px] border-solid border border-red-500 rounded-3xl"
      >
        <p class="text-red-500 text-3xl text-center">
          캐릭터를 찾을 수 없습니다.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
