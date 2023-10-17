<script setup lang="ts">
const config = useRuntimeConfig();
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
  } else if (searchSelect.value === "default") {
    alert("검색옵션을 입력해주세요!");
    return;
  } else {
    /** DF Character Search API */
    const { data: searchData } = await useApiFetch<ISearchDfChar>(
      config.public.df_url + "servers/" + searchSelect.value + "/characters",
      {
        method: "GET",
        query: {
          apikey: config.public.df_api,
          characterName: encodeURIComponent(searchValue.value),
        },
      }
    );
    searchDataRows.value = searchData.value;
    // router.push({
    //   path: route.fullPath + `/${searchValue.value}`,
    //   query: {
    //     serverid: searchSelect.value,
    //   },
    // });
  }
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
        <h2>검색 결과 : {{ searchDataRows.rows.length }}개</h2>
        <div
          class="search_items"
          v-for="(items, index) in searchDataRows.rows"
          :key="index"
        >
          {{ items }}
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
