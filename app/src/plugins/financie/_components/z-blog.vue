<template>
  <div>
    <div class="container">
      <h1 class="mt-5">
        {{ blog.title }}
      </h1>

      <div v-html="blog.content" class="blog"></div>

      <div class="container text-center mt-5 mb-5 hardcode-text">
        <h4>Najlepšie produkty na našom trhu</h4>
        <p>Pripravili sme pre vás tie najlepšie produkty v ramci hypotek...</p>
      </div>

      <div class="container mb-5">
        <div class="row d-flex justify-content-center">
          <z-imgCard></z-imgCard>
        </div>
      </div>

      <div class="container">
      <div class="row border-center mb-5">
        <div class="col-4 ">
          <div class="d-flex align-items-center">
            <b-icon icon="link45deg"></b-icon>
            <h6 class="m-0">Užitočné linky</h6>
          </div>
          <z-linkCards></z-linkCards>
        </div>
        <div class="col-4 d-flex align-items-center">
          <b-icon icon="question-circle-fill"></b-icon>
          <h6 class="m-0 ml-1">Mohlo by vás zaujímať</h6>
        </div>
        <div class="col-4 d-flex align-items-center">
          <b-icon icon="calculator-fill"></b-icon>
          <h6 class="m-0">Kalkulačky a návody</h6>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import apiService from "../common/apiService";
export default {
  name: "z-blog",
  data() {
    return {
      blog: [],
      rightBlog: null,
    };
  },
  watch: {
    "$route.params.slug": {
      immediate: true,
      handler(val) {
        console.log(val);
        this.changeRightBlog(val);
      },
    },
  },
  async mounted() {
    await this._loadBlogs();
  },
  methods: {
    async _loadBlogs() {
      try {
        const blogs = await apiService.get("blog");
        this.blog = blogs.data.data.find((e) => e.slug === this.rightBlog);
        console.log(this.blog);
      } catch (e) {
        console.error(e);
      }
    },
    changeRightBlog(blog) {
      this.rightBlog = blog;
    },
  },
  components: {
    "z-imgCard": () => import("../_components/card/z-imgCard"),
  },
};
</script>
<style lang="scss" scoped>
.blog {
  font-family: Helvetica Neue;
  font-style: normal;
  color: #192949;
  margin: 10% auto 20%;
}
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
.b-icon {
  cursor: pointer;
  width: 28px;
  height: 28px;
  &:hover {
    color: #1eaee1;
  }
}
</style>
