<script setup lang="ts">
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
    date: new Date(),
  };
  try {
    const data = await useApi("/api/board/write", {
      method: "POST",
      body: body,
    });
    alert(data);
    router.push("/board");
  } catch (error) {
  }
};
</script>

<template>
  <section>
    <form @submit.prevent="submitEventHandle">
      <legend>Form Submit Test</legend>
      <input type="text" placeholder="title" v-model="title" />
      <input type="text" placeholder="desc" v-model="content" />
      <button type="submit">SUBMIT</button>
    </form>
  </section>
</template>

<style lang="scss" scoped></style>
