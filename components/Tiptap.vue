<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import BubbleMenu from "@tiptap/extension-bubble-menu";
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
const bubbleMenu = ref<HTMLElement | null>(null);
bubbleMenu.value = document.querySelector(".bubble_menu");
const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Heading,
    BubbleMenu.configure({
      element: bubbleMenu.value,
    }),
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
  <section>
    <div v-if="editor" class="flex items-center justify-start gap-2 flex-wrap">
      <div class="bubble_menu"></div>
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        B
      </button>
      <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
        > CODE
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        H3
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      >
        H4
      </button>
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        bullet list
      </button>
      <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        ordered list
      </button>
      <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
        code block
      </button>
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        blockquote
      </button>
      <button @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </button>
      <button @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </button>
      <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        undo
      </button>
      <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        redo
      </button>
    </div>
    <editor-content :editor="editor" />
  </section>
</template>

<style lang="scss" scoped>
button {
  display: block;
  margin-bottom: 8px;
}
</style>
