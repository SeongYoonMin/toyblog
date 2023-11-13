<script setup lang="ts">
interface Props {
  modelValue: string;
  name: string;
}
interface Emits {
  (e: "update:modelValue", value: string): void;
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <label :for="props.name">
    <p class="radio_items">{{ props.name }}</p>
    <input type="radio" :id="props.name" v-model="value" :value="props.name" class="sr-only" />
  </label>
</template>
<!-- 
  <label
              :for="'radio' + items.id"
              v-for="items in contactRadio"
              :key="items.id"
            >
              <p class="radio_items">{{ items.value }}</p>
              <input
                class="sr-only"
                type="radio"
                :id="'radio' + items.id"
                :value="items.value"
                name="contact"
                v-model="contactType"
              />
            </label>
-->

<style lang="scss" scoped>
label {
  @apply flex-1;
  .radio_items {
    @apply bg-[#2B2F3B] text-center rounded-xl cursor-pointer duration-300 border border-solid border-[#2B2F3B] box-border py-5;
    &:hover {
      @apply bg-[#020715] border-[#00EF00] text-[#00EF00] font-semibold;
    }
  }
  input:checked + .radio_items {
    @apply bg-[#020715] border-[#00EF00] text-[#00EF00] font-semibold;
  }
}
</style>
