<template>
  <div class="row">
      <div class="card mb-5 col-12 col-lg-4 col-md-6 col-sm-6" v-for="blog in blogCards" :key="blog.id" style="width: 18.7rem;">
      <img :src="blog.thumbnail_image.path" class="card-img-top" />
      <div class="card-body p-0 " >
        <p class="timestamp mt-4"> {{posted_at}} • zaberie to iba {{blog.time}} min </p>
        <h5 class="card-title mb-3">{{blog.title}}</h5>
        <div v-html="blog.short_content" class="blog mt-0 mb-4"></div>
        <router-link class="link" :to="rightPage + '/' + blog.slug">Prečítať viac</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import apiService from "../../common/apiService"
import moment from 'moment'

export default {
  name: "z-blogCards",
  data() {
    return {
      blogCards: [],
      rightPage: null,
    };
  },
  watch: {
    "$route.params.slug": {
      immediate: true,
      handler(val) {
        console.log(val)
        this.changeRightPage(val);
      },
    },
  },
  async mounted() {
    await this._loadCards(this.rightPage);
  },
  computed: {
    posted_at(){
      return moment(this.blogCards.created_at).lang("sk").format('LL')
    }
  },
  methods: {
    changeRightPage(page) {
      this.rightPage = page
    },
    async _loadCards(rightPage) {
      try {
        const cards = await apiService.get(`blog/categories/slug/${rightPage}`);
        this.blogCards = cards.data.blog;
        console.log(this.blogCards);
      } catch (e) {
        console.error(e);
      }
    },
  },
}
</script>
<style lang="scss" scoped>
  .card { 
    border: none;
    .card-img-top {
      width: auto;
      height: 13.5rem;
    }
  }
  .blog {
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   line-height: 24px;
   color: #192949;
  }
  .timestamp{
    color: #898989;
    font-size: 14px;
  }
  .card-title{
    min-height: 90px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    color: #192949;
  }
  .link{
    text-decoration: none;
    color: #1EAEE1;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }
</style>
