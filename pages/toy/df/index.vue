<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const searchValue = ref<string>("");
const searchSelect = ref<string>("default");

/** DF Character는 URL Encoding 필요 */
const searchQuery = computed(() => {
  const { server, character } = route.query;
  return <ISearchDf>{
    server: server?.toString() || "",
    character: character?.toString() || "",
  };
});

// emits
const updateSearchValue = (value: string) => {
  searchValue.value = value;
};
const updateSearchSelect = (value: string) => {
  searchSelect.value = value;
};

const updateSearchSubmit = () => {
  if (searchValue.value === "") {
    alert("캐릭터명을 입력해주세요!");
    return;
  } else if (searchSelect.value === "default") {
    alert("검색옵션을 입력해주세요!");
    return;
  } else {
    router.push({
      path: route.fullPath + `/${searchValue.value}`,
      query: {
        serverid: searchSelect.value,
      },
    });
    // router.push("/toy/df/" + searchValue.value + '?serverid=' + searchSelect.value)
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
    <div class="info"></div>
  </section>
</template>

<style lang="scss" scoped></style>
