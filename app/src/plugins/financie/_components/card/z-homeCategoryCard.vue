<template>
  <div>
    <div class="card">
      <div class="card-body d-flex align-items-center flex-column mt-3">
        <img class="category-card " :src="cardIcon" alt="" />
        <h6 class="card-title m-0 mt-3 d-flex align-items-end">
          {{ card.title }}
        </h6>
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
  },
  computed: {
    cardIcon() {
      return require(`./assets/${this.card.icon}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  cursor: pointer;
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(177, 177, 177, 0.15);
  border-radius: 4px;
  border-bottom: 6px solid transparent;
  
  &:hover {
    border-bottom: 6px solid #1eaee1;
    border-radius: 4px;
    .b-icon {
      color: #1eaee1;
    }
  }
  &:focus {
    border-bottom: 6px solid #1eaee1;
    border-radius: 4px;
    .b-icon {
      color: #1eaee1;
    }
  }
}

h6 {
  font-size: 18px;
  font-weight: 400;
}

@media (max-width:800px) {
  .card {
    max-width: 17rem !important;
    margin: auto;
  
  }
}



</style>
