<script lang="ts" setup>
const route = useRoute();
// id = 캐릭터닉네임, query-serverid = 서버아이디
const searchQuery = computed(() => {
  const { serverid } = route.query;
  return {
    serverid,
  };
});
console.log("ID = ", route.params.id);
console.log("Query = ", searchQuery.value.serverid);
</script>

<template>
  <section>
    <picture class="header w-full flex items-center justify-center"
      ><img src="~assets/images/icons/df.png" alt=""
    /></picture>
  </section>
</template>

<style lang="scss" scoped></style>
