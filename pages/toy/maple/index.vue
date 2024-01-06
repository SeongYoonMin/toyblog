<script setup lang="ts">
import axios from "axios";
import { useMapleStore } from "~/stores/maple";

const mapleStore = useMapleStore();
const getOcid = async (name: string) => {
  await mapleStore.setMapleKey(name);
  return true;
};
let users = ref<IGetMapleInfo | null>(null);
const getUser = async () => {
  const { data } = await useApiFetch<IGetMapleInfo>("/api/toy/maple/info", {
    method: "GET",
    query: {
      ocid: mapleStore.$state.maple_key,
      date: "2024-01-03",
    },
  });
  users.value = data.value ? data.value : null;
};
</script>

<template>
  <section id="maple">
    <button type="button" @click="getOcid('반전거북이')">OCID INIT</button>
    <hr />
    <button type="button" @click="getUser">GET USER</button>
    <div class="caution_information">
      <div class="caution">
        <p>- 2023년 12월 21일 데이터부터 조회할 수 있습니다.</p>
        <p>
          - 캐릭터 정보 조회 API는 일자별 데이터로 매일 오전 1시부터 전 데이터
          조회가 가능합니다. (예를 들어, 12월 22일 데이터를 조회하면 22일
          00시부터 23일의 00시 사이의 데이터가 조회됩니다.)
        </p>
        <p>
          - 게임 콘텐츠 변경으로 ocid가 변경될 수 있습니다. ocid 기반 서비스
          갱신 시 유의해 주시길 바랍니다.
        </p>
      </div>
    </div>
    <div v-if="users">
      <picture
        ><img :src="users.character_image" :alt="users.character_name"
      /></picture>
      <h1>Lv. {{ users.character_level }} - {{ users.character_name }}</h1>
      <p>길드명 : {{ users.character_guild_name }}</p>
      <p>직업 : {{ users.character_class }}</p>
      <p>서버 : {{ users.world_name }}</p>
      <p>EXP : {{ users.character_exp_rate }}% ({{ users.character_exp }})</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#maple {
  box-sizing: border-box;
  max-width: 95%;
  margin: 0 auto;
}
.caution_information {
  display: flex;
  width: 100%;
  margin: 20px 0;;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  .caution {
    width: 100%;
    box-sizing: border-box;
    padding: 40px;
    border: 1px solid rgb(255,193,181);
    border-radius: 8px;
    word-break: keep-all;
  }
}
</style>
