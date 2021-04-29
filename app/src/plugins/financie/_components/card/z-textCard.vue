<template>
  <div>
    <div class="card mb-3 " v-for="textCard in textCards" :key="textCard.id">
      <div class="card-body p-3">
        <p class="timestamp mb-4 ">
          {{posted_at}} • zaberie to iba {{textCard.time}} min
        </p>
        <h5 class="card-text mb-4">
          {{textCard.content}}
        </h5>
        <a href="#" class="card-link">Prečítať viac</a>
        
      </div>

    </div>


  </div>
</template>
<script>
import apiService from "../../common/apiService"
import moment from 'moment'

export default {
  name: "z-textCard",
  data() {
    return {
      textCards: [],
    };
  },
  computed: {
    posted_at(){
      return moment(this.textCards.created_at).lang("sk").format('LL')
    }
  },
  async mounted() {
    await this._loadCards();
  },
  methods: {
    async _loadCards() {
      try {
        const cards = await apiService.get('textCard');
        this.textCards = cards.data;
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

.card{
  border: 0px;
  border-radius: 0px;

  &:not(:last-of-type){
   border-bottom: 1px solid rgba(137, 137, 137, 0.2);
}

.card-text{
  max-width: 523px;
}


}
</style>
