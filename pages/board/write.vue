<script setup lang="ts">
import dayjs from "dayjs";
const router = useRouter();
const title = ref<string>("");
const content = ref<string >("");
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
      <div class="flex w-full items-center justify-between gap-10">
        <input type="text" placeholder="TITLE" v-model="title" class="title flex-1 text-2xl" />
      </div>
      <Tiptap v-model="content" />
      <div class="form_footer flex items-center justify-center gap-4">
        <button type="submit">SUBMIT</button>
        <button type="button">BACK</button>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
</style>
