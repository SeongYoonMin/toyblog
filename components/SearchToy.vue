<script lang="ts" setup>
interface Props {
  searchValue: string;
  searchSelect: string;
  selectName: string;
  inputPlaceholder: string;
  inputLogoImg: string;
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
  <section class="w-full h-full">
    <picture class="header w-full flex items-center justify-center"
      ><img src="~assets/images/df_logo.png" alt=""
    /></picture>
    <form
      @submit.prevent="updateSearchSubmit"
      class="flex w-full items-center justify-center search_form overflow-hidden px-4 max-w-[500px] mx-auto bg-[#f5f5f5] gap-1"
    >
      <legend class="sr-only">검색</legend>
      <div class="select_box relative cursor-pointer">
        <select
          id="select"
          v-model="searchSelect"
          @change="updateSearchSelect"
          class="w-full max-w-[80px] bg-[rgba(255,255,255,0.12)] relative cursor-pointer"
        >
          <option value="default" disabled selected>
            {{ props.selectName }}
          </option>
          <option
            :value="items.value"
            v-for="items in dfServer"
            :key="items.id"
          >
            {{ items.name }}
          </option>
        </select>
        <picture
          class="select_arrows absolute top-1/2 right-0 w-full max-w-[14px] block translate-y-[-50%] duration-300"
          ><img
            src="../assets/images/icons/arrows.svg"
            alt="셀렉트 버튼 화살표"
        /></picture>
      </div>
      <input
        class="flex-1 py-1 bg-[#f5f5f5] px-2 box-border"
        type="text"
        :placeholder="props.inputPlaceholder"
        v-model="searchValue"
        @input="updateSearchValue"
      />
      <button
        type="submit"
        class="w-full max-w-[40px] text-center hover:font-semibold duration-300 font-medium"
      >
        검색
      </button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.search_form {
  border-radius: 50px;

  .select_box {
    #select {
      -webkit-appearance: none; // for chrome
      -moz-appearance: none; // for firefox
      appearance: none;

      &::-ms-expand {
        display: none; // for IE10,11
      }
    }
  }
}
</style>
