<template>
  <div>
    <div class="container">
      <div class="row d-flex m-auto">
        <h1 class="mt-5">
          {{ blog.title }}
        </h1>

        <div v-html="blog.content" class="blog"></div>
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
.row {
  width: 100%;
}
</style>
