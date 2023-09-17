<script setup lang="ts">
import dayjs from "dayjs";
const router = useRouter();
const title = ref<string>("");
const content = ref<string>("");
const submitEventHandle = async () => {
  if (title.value === "") {
    alert("타이틀을 적어주세요.");
    return;
  }
  if (content.value === "") {
    alert("설명을 적어주세요.");
    return;
  }
  const body: IBoard = {
    title: title.value,
    name: "유니",
    content: content.value,
    date: dayjs(new Date()).format("YYYY-MM-DD"),
  };
  try {
    const data = await useApi("/api/board/write", {
      method: "POST",
      body: body,
    });
    alert(data);
    router.push("/board");
  } catch (error) {}
};
</script>

<template>
  <section>
    <form @submit.prevent="submitEventHandle">
      <legend class="sr-only">게시글 작성</legend>
      <input type="text" placeholder="title" v-model="title" />
      <button type="submit">SUBMIT</button>
    </form>
    <Tiptap v-model="content" />
    <div v-html="content"></div>
  </section>
</template>

<style lang="scss" scoped></style>
