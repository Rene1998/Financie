<template>
  <div class="div">
    <div class="row">
      <div>
        <div class="col-4 d-flex align-items-center">
          <b-icon icon="link45deg"></b-icon>
          <h6 class="m-0">Užitočné linky</h6>
        </div>
        <div class="card" v-for="link1Card in link1Cards" :key="link1Card.id">
          <div class="body">
            <p class="mt-4">
              {{ posted_at }} • {{ link1Card.time }} prečítanie
            </p>
            <h3>
              {{ link1Card.content }}
            </h3>
          </div>
        </div>
      </div>
      <div>
        <div class="col-4 d-flex align-items-center">
          <b-icon icon="question-circle-fill"></b-icon>
          <h6 class="m-0 ml-1">Mohlo by vás zaujímať</h6>
        </div>
        <div class="card" v-for="link2Card in link2Cards" :key="link2Card.id">
          <div class="body">
            <p class="mt-4">
              {{ posted_at }} • {{ link2Card.time }} prečítanie
            </p>
            <h3>
              {{ link2Card.content }}
            </h3>
          </div>
        </div>
      </div>
      <div>
        <div class="col-4 d-flex align-items-center">
          <b-icon icon="calculator-fill"></b-icon>
          <h6 class="m-0">Kalkulačky a návody</h6>
        </div>
        <div class="card" v-for="link3Card in link3Cards" :key="link3Card.id">
          <div class="body">
            <p class="mt-4">
              {{ posted_at }} • {{ link3Card.time }} prečítanie
            </p>
            <h3>
              {{ link3Card.content }}
            </h3>
          </div>
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
      link1Cards: [],
      link2Cards: [],
      link3Cards: [],
    };
  },
  computed: {
    posted_at() {
      return moment(this.linkCards.created_at)
        .lang("sk")
        .format("LL");
    },
  },
  async mounted() {
    await this._loadCards();
  },
  methods: {
    async _loadCards() {
      try {
        const cards = await apiService.get("linkCard");
        const cards2 = await apiService.get(
          `linkCard/categories/slug/uzitocne-linky`
        );
        const cards3 = await apiService.get(
          `linkCard/categories/slug/mohlo-vas-zaujimat`
        );
        const cards4 = await apiService.get(
          `linkCard/categories/slug/kalkulacky-navody`
        );
        this.linkCards = cards.data;
        this.link1Cards = cards2.data.link_cards;
        this.link2Cards = cards3.data.link_cards;
        this.link3Cards = cards4.data.link_cards;
        console.log(cards.data);
        console.log(this.link1Cards);
        console.log(this.link2Cards);
        console.log(this.link3Cards);
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
  border-radius: 0px;
  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(137, 137, 137, 0.2);
  }

  h3 {
    max-width: 235px;
    font-size: 18px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
      color: #1eaee1;
    }
  }

  p {
    font-size: 14px;
    color: #898989;
  }
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
