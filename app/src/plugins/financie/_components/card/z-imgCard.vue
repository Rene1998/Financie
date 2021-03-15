<template>
  <div> 
    <div class="card mb-3 border-0" v-for="zicard in zicards" :key="zicard.id">
      <img :src="zicard.image.path" class="card-img-top" alt="" />
      <div class="card-body p-0 pt-4 pr-5">
        <p class="timestamp">
          {{zicard.created_at}}
        </p>
        <h5 class="card-title">
          {{zicard.title}}
        </h5>
        <p class="card-text">
          {{zicard.content}}
        </p>
        <p class="card-text">
          <a href="#">Prečítať viac</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
const api = {
  cards: () => axios.get("http://localhost:8081/api/zicard"),
};

import axios from "axios";

export default {
  name: "z-imgCard",
  data() {
    return {
      zicards: [],
    };
  },
  async mounted() {
    await this._loadCards();
  },
  methods: {
    async _loadCards() {
      try {
        const cards = await api.cards();
        this.zicards = cards.data;
        console.log(cards.data);
      } catch (e) {
        console.error(e);
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.timestamp{
  color: #898989;
}
h5{
  font-size: 18px;
}
a{
  color: #1eaee1;
  text-decoration: none;
}
img{
  width: 538px;
  height: 302.35px;
}
</style>
