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
const charTalisman = ref<IDfTalisman[] | null>(null);
const charBuffEquip = ref<IDfBuffEquip | null>(null);
const charBuffAvatar = ref<IDfBuffAvatar | null>(null);
const charBuffCreature = ref<IDfBuffCreature | null>(null);
await useApiFetch<
  [
    IDfCharInfo,
    IDfCharStatusList,
    IDfEquipment[],
    IDfCharAvatar,
    IDfCharCreature,
    IDfCharFlag,
    IDfCharTalisman,
    IDfCharBuffEquip,
    IDfCharBuffAvatar,
    IDfCharBuffCreature
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
      charBuffEquip.value = data.value[7].skill.buff;
      charBuffAvatar.value = data.value[8].skill.buff;
      charBuffCreature.value = data.value[9].skill.buff;
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
            'servers/' +
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
      <!-- 장비 -->
      <div>
        <template v-if="charEquip">
          <div
            v-for="(items, index) in charEquip"
            :key="index"
            class="flex items-center justify-start gap-10"
          >
            <p class="text-center w-[100px]">{{ items.slotName }}</p>
            <picture
              ><img
                :src="config.public.df_img + 'items/' + items.itemId"
                alt="장비 이미지"
            /></picture>
            <p
              :style="{
                color: dfColors.filter((el) => {
                  return el.rarity === items.itemRarity;
                })[0].colorCode,
              }"
              class="flex-1"
            >
              {{ items.itemName }} - {{ items.itemTypeDetail }}
            </p>
            <p>{{ items.itemGradeName }}</p>
          </div>
        </template>
        <template v-else>
          <p>X</p>
        </template>
      </div>
      <!-- 아바타 -->
      <div>
        <template v-if="charAvatar">
          <div
            v-for="(items, index) in charAvatar"
            :key="index"
            class="flex items-center justify-start gap-10"
          >
            <p class="text-center w-[100px]">{{ items.slotName }}</p>
            <picture
              ><img
                :src="config.public.df_img + 'items/' + items.itemId"
                alt="아바타 이미지"
            /></picture>
            <p
              :style="{
                color: dfColors.filter((el) => {
                  return el.rarity === items.itemRarity;
                })[0].colorCode,
              }"
              class="flex-1"
            >
              {{ items.itemName
              }}{{
                items.slotName !== "오라 아바타"
                  ? " - " + items.optionAbility
                  : ""
              }}
            </p>
          </div>
        </template>
        <template v-else>
          <p>X</p>
        </template>
      </div>
      <!-- 크리쳐 -->
      <div>
        <template v-if="charCreature">
          <div class="flex items-center justify-start gap-10">
            <p class="text-center w-[100px]">크리쳐</p>
            <picture
              ><img
                :src="config.public.df_img + 'items/' + charCreature.itemId"
                alt="크리쳐 이미지"
            /></picture>
            <p
              :style="{
                color: dfColors.filter((el) => {
                  return el.rarity === charCreature?.itemRarity;
                })[0].colorCode,
              }"
              class="flex-1"
            >
              {{ charCreature.itemName }}
            </p>
          </div>
          <div
            class="flex items-center justify-start gap-10"
            v-for="(items, index) in charCreature.artifact"
            :key="index"
          >
            <p>크리쳐 아티펙트</p>
            <picture
              ><img
                :src="config.public.df_img + 'items/' + items.itemId"
                alt="크리쳐 아티펙트 이미지"
            /></picture>
            <p
              :style="{
                color:
                  items.slotColor === 'RED'
                    ? 'red'
                    : items.slotColor === 'BLUE'
                    ? 'blue'
                    : 'green',
              }"
              class="flex-1"
            >
              {{ items.itemName }} - {{ items.itemRarity }}
            </p>
          </div>
        </template>
        <template v-else>
          <p>X</p>
        </template>
      </div>
      <!-- 휘장 -->
      <div>
        <template v-if="charFlag">
          <div class="flex items-center justify-start gap-10">
            <p class="text-center w-[100px]">휘장</p>
            <picture
              ><img
                :src="config.public.df_img + 'items/' + charFlag.itemId"
                alt="휘장 이미지"
            /></picture>
            <p
              :style="{
                color: dfColors.filter((el) => {
                  return el.rarity === charFlag?.itemRarity;
                })[0].colorCode,
              }"
              class="flex-1"
            >
              {{ charFlag.itemName }}
            </p>
          </div>
          <div
            class="flex items-center justify-start gap-10"
            v-for="(items, index) in charFlag.gems"
            :key="items.slotNo"
          >
            <p class="text-center w-[100px]">{{ items.slotNo }}번째 젬</p>
            <picture
              ><img
                :src="config.public.df_img + 'items/' + items.itemId"
                alt="휘장 이미지"
            /></picture>
            <p
              :style="{
                color: dfColors.filter((el) => {
                  return el.rarity === items.itemRarity;
                })[0].colorCode,
              }"
              class="flex-1"
            >
              {{ items.itemName }}
            </p>
          </div>
        </template>
        <template v-else>
          <p>X</p>
        </template>
      </div>
      <!-- 탈리스만 -->
      <div>
        <template v-if="charTalisman">
          <div
            v-for="(items, index) in charTalisman"
            :key="index"
            class="flex items-center justify-start gap-10 flex-wrap"
          >
            <p class="text-center w-[100px]">탈리스만</p>
            <picture
              ><img
                :src="config.public.df_img + 'items/' + items.talisman.itemId"
                alt="탈리스만 이미지"
            /></picture>
            <p
              class=""
              :style="{
                color: dfColors.filter((el) => {
                  return el.rarity === '유니크';
                })[0].colorCode,
              }"
            >
              {{ items.talisman.itemName }}
            </p>
            <!-- <div v-for="(runes, idx) in items.runes" :key="idx">
              {{ runes }}
            </div> -->
          </div>
        </template>
        <template v-else>
          <p>X</p>
        </template>
      </div>
      <!-- 버프 장비 -->
      
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
