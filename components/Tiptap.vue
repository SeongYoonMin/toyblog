<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
interface Props {
  modelValue: string;
}
const props = defineProps<Props>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
const lowlight = createLowlight(common);
lowlight.register("html", html);
lowlight.register("js", js);
lowlight.register("ts", ts);
lowlight.register("css", css);
const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Heading,
    BulletList,
    CodeBlockLowlight.configure({
      lowlight,
    }),
  ],
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
  <section class="editor py-10">
    <div v-if="editor" class="flex items-center justify-between flex-wrap pb-4">
      <div class="font flex items-center justify-center gap-2">
        <button
          type="button"
          @click="editor.chain().focus().toggleBold().run()"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
        >
          <img src="~assets/images/icons/bold.png" alt="굵기" />
        </button>
        <button
          type="button"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        >
          <img src="~assets/images/icons/h-1.png" alt="H1" />
        </button>
        <button
          type="button"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        >
          <img src="~assets/images/icons/h-2.png" alt="H2" />
        </button>
        <button
          type="button"
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        >
          <img src="~assets/images/icons/h-3.png" alt="H3" />
        </button>
        <button
          type="button"
          @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
        >
          <img src="~assets/images/icons/h-4.png" alt="H4" />
        </button>
        <button
          type="button"
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }"
        >
          <img
            src="~assets/images/icons/list-unordered.png"
            alt="bullet list"
          />
        </button>
        <button
          type="button"
          @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'is-active': editor.isActive('orderedList') }"
        >
          <img
            src="~assets/images/icons/list-ordered-2.png"
            alt="ordered list"
          />
        </button>
        <button
          type="button"
          @click="editor.chain().focus().toggleCodeBlock().run()"
          :disabled="!editor.can().chain().focus().toggleCode().run()"
          :class="{ 'is-active': editor.isActive('code') }"
        >
          <img src="~assets/images/icons/code-view.png" alt="코드" />
        </button>
      </div>
      <div class="history flex items-center justify-center gap-2">
        <button
          type="button"
          @click="editor.chain().focus().undo().run()"
          :disabled="!editor.can().chain().focus().undo().run()"
        >
          <img src="~assets/images/icons/undo.png" alt="UNDO" />
        </button>
        <button
          type="button"
          @click="editor.chain().focus().redo().run()"
          :disabled="!editor.can().chain().focus().redo().run()"
        >
          <img src="~assets/images/icons/redo.png" alt="REDO" />
        </button>
      </div>
    </div>
    <editor-content :editor="editor" />
  </section>
</template>

<style lang="scss" scoped>
.is-active {
  border: 1px solid #000;
  border-radius: 2px;
}
</style>
