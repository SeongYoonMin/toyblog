<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const searchValue = ref<string>("");
const searchSelect = ref<string>("default");
const searchDataRows = ref<ISearchDfChar | null>(null);
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
  const { data: characterList } = await useApiFetch<ISearchDfChar>(
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
  console.log(searchDataRows.value);
};
</script>

<template>
  <section class="df flex flex-col justify-center gap-10">
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
    <div class="search" v-if="searchDataRows">
      <div class="search_rows" v-if="searchDataRows.rows">
        <h2 class="text-end text-2xl">검색 결과 : <strong>{{ searchDataRows.rows.length }}</strong>개</h2>
        <NuxtLink
        :to="route.fullPath + '/' + items.characterId"
          class="search_items flex items-center justify-start gap-2 text-xl w-full border-b border-solid brder-[#ececec] cursor-pointer"
          v-for="(items, index) in searchDataRows.rows"
          :key="index"
        >
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
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
