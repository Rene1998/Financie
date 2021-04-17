<template>
  <div>
    <div class="card d-flex" style="width: 18rem;" v-for="blog in blogCards" :key="blog.id">
      <img src="../card/assets/imgcard.png" class="card-img-top" alt="..." />
      <div class="card-body p-0" >
        <p class="mt-4"> {{posted_at}} • {{blog.time}} prečítanie </p>
        <h5 class="card-title">{{blog.title}}</h5>
        <div v-html="blog.content" class="blog mt-0"></div>
        <a href="#" class="mt-4">Prečítať viac</a>
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
    };
  },
  async mounted() {
    await this._loadCards();
  },
  computed: {
    posted_at(){
      return moment(this.blogCards.created_at).lang("sk").format('LL')
    }
  },
  methods: {
    async _loadCards() {
      try {
        const cards = await apiService.get('blog');
        this.blogCards = cards.data.data;
        console.log(cards.data);
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
   -webkit-line-clamp: 6; /* number of lines to show */
   -webkit-box-orient: vertical;
  }
</style>
