<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
interface Props {
  modelValue: string;
}
const props = defineProps<Props>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
const editor = useEditor({
  content: props.modelValue,
  extensions: [StarterKit],
  onUpdate: () => {
    emits("update:modelValue", editor.value?.getHTML() || "");
  },
});

watch(
  () => props.modelValue,
  (values) => {
    const isSame = editor.value?.getHTML() === values;
    if (isSame) {
      return;
    }
    editor.value?.commands.setContent(values, false);
  }
);
</script>

<template>
  <editor-content :editor="editor" />
</template>
