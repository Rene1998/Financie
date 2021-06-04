<template>
  <div class="row">
    <div class="col-12" :class="{'col-md-6':!single}" v-for="imgCard in imgCards"
        :key="imgCard.id">
      <div
        class="card mb-3 border-0 mb-5"
        
      >
        <img :src="imgCard.image.path" class="card-img-top" alt="" />
        <div class="card-body p-0 pt-4">
          <p class="timestamp">
            {{ posted_at }} • zaberie to iba {{ imgCard.time }} min
          </p>
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
  </div>
</template>
<script>
import apiService from "../../common/apiService";
import moment from "moment";
export default {
  props: {
    single: {
      type: Boolean,
    },
  },
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
    posted_at() {
      return moment(this.imgCards.created_at)
        .lang("sk")
        .format("LL");
    },
  },
  methods: {
    async _loadCards() {
      try {
        const cards = await apiService.get("imgCard");
        this.imgCards = cards.data.filter((x) =>
          x.category.filter((y) => y.slug === this.rightPage).length > 0
            ? true
            : false
        );
        console.log(this.imgCards);
      } catch (e) {
        console.error(e);
      }
    },
    actualPage(page) {
      this.rightPage = page;
    },
  },
};
</script>
<style lang="scss" scoped>
.card-img-top {
  width: auto;
  max-height: 315px;
}
.timestamp {
  color: #898989;
}
h5 {
  font-size: 18px;
  color: #192949;
  font-weight: bold;
  font-style: normal;
}
a {
  color: #1eaee1;
  text-decoration: none;
}

@media (max-width: 800px) {
  .card-img-top {
    width: auto;
    min-height: auto;
  }
}
</style>
