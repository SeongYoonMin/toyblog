<script setup lang="ts">
interface Props {
  cols: string;
  rows: string;
  title: string;
  placeholder: string;
  modelValue: string;
}
interface Emits {
  (e: "update:modelValue", value: string): void;
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const textValue = computed({
  get() {
    return props.modelValue;
  },
  set(setValue: string) {
    emits("update:modelValue", setValue);
  }
})
</script>

<template>
  <label :for="props.title" class="items">
    <p>{{ props.title }}</p>
    <textarea v-model="textValue" :placeholder="props.placeholder" :rows="props.rows" :cols="props.cols" />
  </label>
</template>

<style lang="scss" scoped>
.items {
  @apply w-full flex flex-col box-border p-5 gap-y-2 border border-solid border-[#676A73] rounded-xl bg-[#2B2F3B] duration-300;
  textarea {
    @apply bg-transparent;
  }
  &:focus {
    @apply border-[#00EF00] bg-[#020715];
  }
}
</style>
