<template>
    <div>
        <div class="container">
            <div v-for="blog in blogs" :key="blog.id">
                <h1>
                    {{blog.title}}
                </h1>

                <div v-html="blog.content" class="blog">
                  
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
      blogs: [],
    };
  },
  async mounted() {
    await this._loadBlogs();
  },
  methods: {
    async _loadBlogs() {
      try {
        const blogs = await apiService.get("blog");
        this.blogs = blogs.data.data;
        console.log(blogs.data);
      } catch (e) {
        console.error(e);
      }
    },
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
</style>