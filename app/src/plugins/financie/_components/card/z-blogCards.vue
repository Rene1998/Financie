<template>
  <div class="d-flex">
    <div class="card d-flex m-5" style="width: 18rem;" v-for="blog in blogCards" :key="blog.id">
      <img :src="blog.thumbnail_image.path" class="card-img-top" />
      <div class="card-body p-0" >
        <p class="timestamp mt-4"> {{posted_at}} • {{blog.time}} prečítanie </p>
        <h5 class="card-title">{{blog.title}}</h5>
        <div v-html="blog.content" class="blog mt-0"></div>
        <router-link class="link mt-4" :to="rightPage + '/' + blog.slug">Prečítať viac</router-link>
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
  }
  .blog {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 4; /* number of lines to show */
   -webkit-box-orient: vertical;
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   line-height: 24px;
   color: #192949;
  }
  .timestamp{
    color: #898989;
  }
  .card-title{
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
