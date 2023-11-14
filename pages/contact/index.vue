<script setup lang="ts">
import dayjs from "dayjs";

const contactType = ref<string>("프로젝트 의뢰");
const contactName = ref<string>("");
const contactCompany = ref<string>("");
const contactEmail = ref<string>("");
const contactPhone = ref<string>("");
const contactTextArea = ref<string>("");
const contactRadio = ref<{ id: number; value: string }[]>([
  {
    id: 0,
    value: "프로젝트 의뢰",
  },
  {
    id: 1,
    value: "입사",
  },
  {
    id: 2,
    value: "기술",
  },
  {
    id: 3,
    value: "기타",
  },
]);

const submitContact = async () => {
  const validateState: { status: boolean; problem: string } = validate([
    {
      validateName: "이름",
      validateValue: contactName.value,
    },
    {
      validateName: "소속",
      validateValue: contactCompany.value,
    },
    {
      validateName: "이메일",
      validateValue: contactEmail.value,
    },
    {
      validateName: "전화번호",
      validateValue: contactPhone.value,
    },
    {
      validateName: "문의 내용",
      validateValue: contactTextArea.value,
    },
  ]);
  if (!validateState.status) {
    alert(validateState.problem + "을 적어주세요!");
    return;
  }
  const body = {
    name: contactName.value,
    type: contactType.value,
    company: contactCompany.value,
    email: contactEmail.value,
    phone: contactPhone.value,
    inquiry: contactTextArea.value,
    date: dayjs(new Date()).format("YYYY-MM-DD"),
  };

  const data: { status: boolean; message: string } = await useApi("/api/mail", {
    method: "POST",
    body: body,
  });
};
</script>

<template>
  <section class="contact">
    <h1 class="head">CONTACT</h1>
    <div class="body">
      <div class="info">
        <div class="items">
          <p class="key">TEL</p>
          <p class="value">010.6414.9400</p>
        </div>
        <div class="items">
          <p class="key">GIT</p>
          <p class="value">https://github.com/SeongYoonMin</p>
        </div>
        <div class="items">
          <p class="key">EMAIL</p>
          <p class="value">namo4862@naver.com</p>
        </div>
        <div class="items"></div>
      </div>
      <form @submit.prevent="submitContact" class="contact_form">
        <legend class="sr-only">문의하기</legend>
        <fieldset class="answer">
          <h2 class="title">어떤 것을 문의하고 싶으신가요?</h2>
          <div class="radios">
            <CustomInputRadio
              v-model="contactType"
              v-for="items in contactRadio"
              :key="items.id"
              :name="items.value"
            />
          </div>
        </fieldset>
        <fieldset class="answer">
          <h2 class="title">문의하시는 분의 정보를 적어주세요.</h2>
          <div class="text_items">
            <CustomInputText
              title="NAME"
              type="text"
              placeholder="이름을 입력하세요."
              v-model="contactName"
            />
            <CustomInputText
              title="COMPANY"
              type="text"
              placeholder="소속을 입력하세요."
              v-model="contactCompany"
            />
            <CustomInputText
              title="EMAIL"
              type="email"
              placeholder="이메일을 입력하세요."
              v-model="contactEmail"
            />
            <CustomInputText
              title="PHONE"
              type="text"
              placeholder="연락처를 입력하세요."
              v-model="contactPhone"
            />
          </div>
        </fieldset>
        <fieldset class="answer">
          <h2 class="title">문의 내용을 작성해 주세요.</h2>
          <CustomInputTextarea
            title="CONTACT"
            cols="30"
            rows="10"
            placeholder="문의 내용를 입력하세요."
            v-model="contactTextArea"
          />
        </fieldset>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  @apply pt-20 pb-[120px];
  .head {
    @apply text-[88px] font-extrabold pb-5;
  }
  .body {
    @apply py-5;
    .info {
      @apply p-5 box-border grid grid-cols-2 mb-10;
      .items {
        @apply flex items-center justify-center gap-x-5 p-5 border-b border-solid border-[#424242];
        .key {
          @apply w-[72px] text-[#9A9CA1] leading-[22px];
        }
        .value {
          @apply flex-1;
        }
      }
    }
    .contact_form {
      @apply p-5 box-border flex flex-col items-center justify-center gap-5;
      .legend {
      }
      .answer {
        @apply flex flex-col gap-5 box-border items-start justify-center py-5 w-full border-b border-solid border-[#161A27];
        .title {
          @apply text-2xl;
        }
        .radios {
          @apply flex items-center justify-center gap-x-3 w-full;
        }
        .text_items {
          @apply grid grid-cols-2 gap-3 w-full;
        }
      }
    }
  }
}
</style>
