<script setup lang="ts">
const words = ref<HTMLCollectionOf<Element> | null>(null);
const wordArray = ref<any[]>([]);
const currentWord = ref<number>(0);
function changeWord() {
  var cw = wordArray.value[currentWord.value];
  var nw =
    currentWord.value == words.value.length - 1
      ? wordArray.value[0]
      : wordArray.value[currentWord.value + 1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord.value =
    currentWord.value == wordArray.value.length - 1 ? 0 : currentWord.value + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = "letter out";
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = "letter in";
  }, 340 + i * 80);
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.value.push(letters);
}

onMounted(() => {
  words.value = document.getElementsByClassName("word");
  words.value[currentWord.value].style.opacity = 1;
  for (var i = 0; i < words.value.length; i++) {
    splitLetters(words.value[i]);
  }
  changeWord();
  setInterval(changeWord, 4000);
});
</script>

<template>
  <section calss="about">
    <div class="text">
      <p>저는</p>
      <p class="box-border px-5 w-[300px]">
        <span class="word wisteria">함께하고 싶은</span>
        <span class="word belize">꾸준히 성장하는 </span>
      </p>
      <p>개발자 입니다.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.text {
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  line-height: 40px;
  height: 40px;
  top: 50%;
  margin-top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  p {
    height: 40px;
  }

  .word {
    position: absolute;
    opacity: 0;
    &.wisteria {
      color: #8e44ad;
    }

    &.belize {
      color: #2980b9;
    }

    &.pomegranate {
      color: #c0392b;
    }

    &.green {
      color: #16a085;
    }

    &.midnight {
      color: #2c3e50;
    }
  }
}
</style>
