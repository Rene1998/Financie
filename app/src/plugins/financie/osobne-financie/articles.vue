<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-center flex-column p-3">
        <h1 class="mt-5">{{ title }}</h1>
        <p>{{ content }}</p>
        <img :src="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import articleContent from "./clanky.js";
export default {
  watch: {
    "$route.params.slug": {
      immediate: true,
      handler(val) {
        this.changePageContent(val);
        console.log(val);
      },
    },
  },
  data() {
    return {
      title: null,
      content: null,
      image: null,
    };
  },
  methods: {
    changePageContent(val) {
      this.title = articleContent[val].title;
      this.content = articleContent[val].content;
      this.image = articleContent[val].image;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 30px;
  color: #192949;
  max-width: 800px;
  justify-content: center;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
}
img {
  min-width: 50%;
}
</style>
