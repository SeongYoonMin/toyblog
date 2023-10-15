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
  <section>
    <form
      @submit.prevent="updateSearchSubmit"
      class="flex w-full items-center justify-center gap-4"
    >
      <legend class="sr-only">검색</legend>
      <select
        id="select"
        v-model="searchSelect"
        @change="updateSearchSelect"
      >
        <option value="default" disabled selected>
          {{ props.type === "df" ? "서버" : "카테고리" }}
        </option>
        <option :value="items.value" v-for="items in dfServer" :key="items.id">
          {{ items.name }}
        </option>
      </select>
      <input
        type="text"
        :placeholder="
          props.type === 'df'
            ? '캐릭터명을 입력해주세요.'
            : '아이템명을 입력해주세요.'
        "
        v-model="searchValue"
        @input="updateSearchValue"
      />
      <button type="submit">검색</button>
    </form>
  </section>
</template>

<style lang="scss" scoped></style>
