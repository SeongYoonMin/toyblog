<script lang="ts" setup>
const route = useRoute();
const config = useRuntimeConfig();
const searchQuery = computed(() => {
  const { server } = route.query;
  const { id } = route.params;
  return {
    id,
    server,
  };
});
const charInfo = ref<IDfCharInfo | null>(null);
const charBuff = ref<IDfCharBuff[] | null>(null);
const charStatus = ref<IDfCharStatus[] | null>(null);
const charEquip = ref<IDfEquipment[] | null>(null);
const charAvatar = ref<IDfAvatar[] | null>(null);
const charCreature = ref<IDfCreature | null>(null);
const charFlag = ref<IDfFlag | null>(null);
const charTalisman = ref<IDfTalisman | null>(null);
await useApiFetch<
  [
    IDfCharInfo,
    IDfCharStatusList,
    IDfEquipment[],
    IDfCharAvatar,
    IDfCharCreature,
    IDfCharFlag,
    IDfCharTalisman
  ]
>("/api/toy/df/detail", {
  method: "GET",
  query: searchQuery,
})
  .then(({ data }) => {
    if (data.value) {
      charInfo.value = data.value[0];
      charBuff.value = Object.values(data.value[1])[0];
      charStatus.value = Object.values(data.value[1])[1];
      charEquip.value = data.value[2];
      charAvatar.value = data.value[3].avatar;
      charCreature.value = data.value[4].creature;
      charFlag.value = data.value[5].flag;
      charTalisman.value = data.value[6].talismans;
      return true;
    }
  })
  .catch((error) => {
    console.log(error);
    return false;
  });
</script>

<template>
  <section class="p-10">
    <div class="header">
      <picture class="thumb"
        ><img
          :src="
            config.public.df_img +
            searchQuery.server +
            '/characters/' +
            searchQuery.id
          "
          alt="캐릭터 이미지"
      /></picture>
      <div v-if="charInfo" class="info">
        <p>모험단 : {{ charInfo.adventureName }}</p>
        <p>길드 : {{ charInfo.guildName?.toString() || "없음" }}</p>
        <p>{{ charInfo.characterName }} - {{ charInfo.level }}</p>
        <p>직업 : {{ charInfo.jobGrowName }}</p>
      </div>
    </div>
    <div class="details">
      <template v-if="charEquip">
        <div v-for="(items, index) in charEquip" :key="index" class="flex items-center justify-start gap-10">
          <p class=" text-center w-[100px]">{{ items.slotName }}</p>
          <p
            :style="{
              color: dfColors.filter((el) => {
                return el.rarity === items.itemRarity;
              })[0].colorCode,
            }"
            class=" flex-1"
          >
            {{ items.itemName }} - {{ items.itemTypeDetail }}
          </p>
          <p></p>
        </div>
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
