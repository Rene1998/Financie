<template>
  <div class="div">
    <div class="card" v-for="linkCard in linkCards" :key="linkCard.id">
    <div class="body">
      <p class="mt-4">{{ posted_at }} • {{ linkCard.time }} prečítanie</p>
      <div class="pointer">
        <a>
          {{ linkCard.content }}
        </a>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import apiService from "../../common/apiService";
import moment from "moment";

export default {
  name: "z-linkCards",
  data() {
    return {
      linkCards: [],
    };
  },
  computed: {
    posted_at() {
      return moment(this.linkCards.created_at).lang("sk").format("LL");
    },
  },
  async mounted() {
    await this._loadCards();
  },
  methods: {
    async _loadCards() {
      try {
        const cards = await apiService.get("linkCard");
        this.linkCards = cards.data;
        console.log(cards.data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: none;
  width: 307px;
  height: 175px;

  p {
    font-size: 14px;

    color: #898989;
  }

  .pointer {
    cursor: pointer;

    &:hover {
      color: #1eaee1;
    }
    a {
      font-size: 18px;
      font-weight: 700;
    }
  }
}
</style>
