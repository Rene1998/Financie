<template>
    <div>
    <b-card
      v-for="zaihcard in zaihcards"
      :key="zaihcard.id"
      :title="zaihcard.title"
      :img-src="zaihcard.image.path"
      img-alt="Image"
      tag="article"
      class="mb-2 border border-0 m-2"
    >
      <b-card-text class="d-flex align-items-end mb-5">
        {{zaihcard.content}}
      </b-card-text>

      <b-card-body class="d-flex justify-content-between mr-2">
        <b-card-link>
          <h6 class="mb-0">
            {{zaihcard.link1}}
          </h6>
        </b-card-link>

        <b-card-link>
          <a :href="zaihcard.link1_link" class="blue card-link">
            <b-icon icon="arrow-right"></b-icon>
          </a>
        </b-card-link>
      </b-card-body>
      <hr class="m-0"/>
      <b-card-body class="d-flex justify-content-between mr-2">
        <b-card-link>
          <h6 class="mb-0">
            {{zaihcard.link2}}
          </h6>
        </b-card-link>

        <b-card-link>
          <a :href="zaihcard.link2_link" class="blue card-link">
            <b-icon icon="arrow-right"></b-icon>
          </a>
        </b-card-link>
      </b-card-body>
      <hr class="m-0"/>
      <b-card-body class="d-flex justify-content-between mr-2">
        <b-card-link>
          <h6 class="mb-0">
            {{zaihcard.link3}}
          </h6>
        </b-card-link>

        <b-card-link>
          <a :href="zaihcard.link3_link" class="blue card-link">
            <b-icon icon="arrow-right"></b-icon>
          </a>
        </b-card-link>
      </b-card-body>
      <div v-if="zaihcard.link4 != ''">
        <hr class="m-0"/>
      <b-card-body class="d-flex justify-content-between mr-2">
        <b-card-link>
          <h6 class="mb-0">
            {{zaihcard.link4}}
          </h6>
        </b-card-link>

        <b-card-link>
          <a :href="zaihcard.link4_link" class="blue card-link">
            <b-icon icon="arrow-right"></b-icon>
          </a>
        </b-card-link>
      </b-card-body>
      </div>
    </b-card>
  </div>
</template>

<script>
const api = {
  cards: () => axios.get("http://localhost:8081/api/zaihcard"),
};

import axios from "axios";

export default {
  name: "z-advancedImgHomeCards",
  data() {
    return {
      zaihcards: [],
    };
  },
  async mounted() {
    await this._loadCards();
  },
  methods: {
    async _loadCards() {
      try {
        const cards = await api.cards();
        this.zaihcards = cards.data;
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
  width: 363px !important;
  display: inline-block;
  

  img {
    height: 210px;
  }
}

.b-card-link {
  line-height: 24px;
}

p {
  font-size: 14px;
  color: #192949;
}

.card-img-top {
  border-radius: 4px;
}

a {
  color: #d1d4d8;

  &:hover {
    color: #1eaee1;
  }
}

.card-body {
  padding: 10px;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

h6 {
  font-size: 16px;
  line-height: 30px color #192949;
  font-weight: 400;
}
.col-4 {
  border: 0px 20px !important;
}
.card-title{
  min-height: 35px;
  margin-top: 17.5px;
}
</style>
