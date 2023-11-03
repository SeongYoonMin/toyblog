<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const searchValue = ref<string>(""); // 검색어
const searchSelect = ref<string>("default"); // 검색옵션
const searchDataRows = ref<ISearchDfChar[] | null>(null); // 검색 데이터 로우
const searchCheck = ref<boolean>(false); // 검색했는지 체크

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
  searchCheck.value = true;
};
</script>

<template>
  <section class="df flex flex-col justify-start gap-10 min-h-screen box-border">
    <picture class="header w-full flex items-center justify-center" v-if="!searchCheck"
      ><img src="~assets/images/icons/df.png" alt=""
    /></picture>
    <SearchToy
      :searchValue="searchValue"
      :searchSelect="searchSelect"
      :selectName="'서버'"
      :inputPlaceholder="'캐릭터명을 입력해주세요.'"
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
        <div class="grid grid-cols-5 gap-x-4 gap-y-5 w-full box-border">
          <NuxtLink
            :to="
              route.fullPath +
              '/' +
              items.characterId +

              '?server=' +
              searchSelect
            "
            class="search_items flex flex-col items-center justify-center w-full text-[#c7c7c7] cursor-pointer hover:text-[#212121] hover:font-semibold duration-300"
            v-for="(items, index) in searchDataRows"
            :key="index"
          >
            <picture class="thumb relative overflow-hidden h-[200px] w-full"
              ><img
                :src="
                  config.public.df_img +
                  'servers/' +
                  searchSelect +
                  '/characters/' +
                  items.characterId +
                  '?zoom=1'
                "
                class=" absolute top-[-30px] left-[50%] translate-x-[-50%]"
                :alt="items.characterName"
            /></picture>
            <div class="info flex flex-col items-center pb-[30px]">
              <p>{{ items.characterName }} - {{
                  dfServer.filter((el) => {
                    return el.value === items.serverId;
                  })[0].name
                }}</p>
              <p>Lv. {{ items.level }}</p>
              <p>{{ items.jobName }} - {{ items.jobGrowName }}</p>
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

<style lang="scss" scoped>
.search_items {
  box-shadow: 0px 0px 3px black;
  &:hover {
    box-shadow: 0px 0px 5px black;
  }
}
</style>
