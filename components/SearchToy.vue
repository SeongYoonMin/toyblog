<script lang="ts" setup>
interface Props {
  type: string;
  searchValue: string;
  searchSelect: string;
}
// Props , Emits
const props = defineProps<Props>();
const emits = defineEmits<{
  (e: "update:value", value: string): void;
  (e: "update:select", value: string): void;
  (e: "update:submit"): void;
}>();

const searchValue = ref<string>(props.searchValue);
const searchSelect = ref<string>(props.searchSelect);

const updateSearchValue = () => {
  emits("update:value", searchValue.value);
};
const updateSearchSelect = () => {
  emits("update:select", searchSelect.value);
};
const updateSearchSubmit = () => {
  emits("update:submit");
};
</script>

<template>
  <form
    @submit.prevent="updateSearchSubmit"
    class="flex w-full items-center justify-center search_form overflow-hidden px-2 max-w-[500px] mx-auto bg-[#f5f5f5]"
  >
    <legend class="sr-only">검색</legend>
    <select
      id="select"
      v-model="searchSelect"
      @change="updateSearchSelect"
      class="w-full max-w-[80px] bg-[#f5f5f5]"
    >
      <option value="default" disabled selected>
        {{ props.type === "df" ? "서버" : "카테고리" }}
      </option>
      <option :value="items.value" v-for="items in dfServer" :key="items.id">
        {{ items.name }}
      </option>
    </select>
    <input
      class="flex-1 py-1 bg-[#f5f5f5] px-2 box-border"
      type="text"
      :placeholder="
        props.type === 'df'
          ? '캐릭터명을 입력해주세요.'
          : '아이템명을 입력해주세요.'
      "
      v-model="searchValue"
      @input="updateSearchValue"
    />
    <button
      type="submit"
      class="w-full max-w-[80px] text-center hover:font-semibold duration-300 font-medium"
    >
      검색
    </button>
  </form>
</template>

<style lang="scss" scoped>
.search_form {
  box-shadow: 0 0 1px 1px #fff, 0 0 10px 4px #87ceeb, 0 0 3px 1px #861657;
  border-radius: 50px;
}
</style>
