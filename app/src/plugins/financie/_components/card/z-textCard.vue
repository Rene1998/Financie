<template>
  <div>
    <div class="card border-0 " v-for="ztcard in ztcards" :key="ztcard.id">
      <div class="card-body p-3">
        <p class="timestamp">
          {{ztcard.created_at}}
        </p>
        <h5 class="card-text">
          {{ztcard.content}}
        </h5>
        <a href="#" class="card-link">Prečítať viac</a>
        <div class="divider border-bottom m-3"></div>
      </div>
       
    </div>
    
    
  </div>
</template>
<script>
const api = {
  cards: () => axios.get("http://localhost:8081/api/ztcard"),
};

import axios from "axios";

export default {
  name: "z-textCard",
  data() {
    return {
      ztcards: [],
    };
  },
  async mounted() {
    await this._loadCards();
  },
  methods: {
    async _loadCards() {
      try {
        const cards = await api.cards();
        this.ztcards = cards.data;
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
}
</style>
