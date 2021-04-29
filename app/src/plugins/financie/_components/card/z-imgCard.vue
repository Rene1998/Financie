<template>
  <div class="d-flex">
    <div
      class="card mb-3 border-0 d-flex m-3"
      style="width: 35rem;"
      v-for="imgCard in imgCards"
      :key="imgCard.id"
    >
      <img :src="imgCard.image.path" class="card-img-top" alt="" />
      <div class="card-body p-0 pt-4 pr-5">
        <p class="timestamp">{{posted_at}} • zaberie to iba {{imgCard.time}} min</p>
        <h5 class="card-title">
          {{ imgCard.title }}
        </h5>
        <p class="card-text">
          {{ imgCard.content }}
        </p>
        <p class="card-text">
          <a href="#">Prečítať viac</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import apiService from "../../common/apiService"
import moment from 'moment'

export default {
  name: "z-imgCard",
  data() {
    return {
      imgCards: [],
      rightPage: null,
    };
  },
  watch: {
    "$route.name": {
      immediate: true,
      handler(val) {
        this.actualPage(val);
        console.log(this.rightPage);
      },
    },
  },
  async mounted() {
    await this._loadCards();
  },
  computed: {
    posted_at(){
      return moment(this.imgCards.created_at).lang("sk").format('LL')
    }
  },
  methods: {
    async _loadCards() {
      try {
        const cards = await apiService.get('imgCard')
        this.imgCards = cards.data.filter(x => x.category.filter(y => y.slug === this.rightPage).length > 0 ?true:false)
        console.log(this.imgCards);
      } catch (e) {
        console.error(e);
      }
    },
    actualPage(page) {
      this.rightPage = page
    },
  },
}
</script>
<style lang="scss" scoped>
.timestamp {
  color: #898989;
}
h5 {
  font-size: 18px;
}
a {
  color: #1eaee1;
  text-decoration: none;
}
img {
  width: 538px;
  height: 302.35px;
}
</style>
