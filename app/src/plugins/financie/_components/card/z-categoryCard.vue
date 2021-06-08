<template>
  <div>
    <div
      class="card d-flex align-items-center flex-column text-center"
      :class="{ isActive: act }">
      <div class="card-body d-flex align-items-center flex-column">
        <img class="category-card" :src="cardImg" alt="" />
        <h6 class="card-title mt-3">{{ card.title }}</h6>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
    activeCard: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      act: false,
    };
  },
  watch: {
    activeCard: {
      handler(val){
        this.actCard2(val)
      }
    }
  },
  computed: {
    cardImg() {
      return require(`./assets/${this.card.img}`);
    },
  },
  methods: {
    actCard() {
      if (this.card.link != this.activeCard) return 
      this.act = true
    },
    actCard2(val) {
      this.act = false
      if (this.card.link == val) {
        this.act = true
      }
    },
  },
  mounted() {
    this.actCard()
  },
};
</script>
<style lang="scss" scoped>
.card {
  cursor: pointer;
  border: none;

  a {
    color: #ffffff;
  }

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(177, 177, 177, 0.15);
  border-radius: 4px;

  border-bottom: 5px solid transparent;
  &:hover {
    border-bottom: 5px solid #FFA800;
    border-radius: 5px;
  }
  &:focus {
    border-bottom: 5px solid #FFA800;
  }
}
h6 {
  font-size: 18px;
  font-weight: 400;
}
.isActive {
  border-bottom: 5px solid #FFA800;
  border-radius: 5px;
}

@media (max-width:500px) {
  .card {
    margin: auto;
    max-width: 18rem;
  }
}
</style>
