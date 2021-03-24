<template>
  <div>
    <b-card
      v-for="zaicard in zaicards"
      :key="zaicard.id"
      :title="zaicard.title"
      :img-src="zaicard.image.path"
      img-alt="Image"
      tag="article"
      class="mb-2 border border-0 m-2"
    >
      <b-card-text class="d-flex align-items-end mb-5">
        {{ zaicard.content }}
      </b-card-text>
      <div class="hb">
        <b-card-body class="hb d-flex justify-content-between mr-2">
          <b-card-link>
            <h6 class=" mb-0">Príručnka pre učiteľov</h6>
          </b-card-link>

          <b-card-link>
            <a :href="zaicard.doc1_link_download" class=" card-link">
              <b-icon icon="download"></b-icon>
            </a>
            <a
              :href="zaicard.doc1_link_show"
              target="_blank"
              class=" card-link"
            >
              <b-icon icon="eye"> </b-icon>
            </a>
          </b-card-link>
        </b-card-body>
        <hr class="hb m-0" />
      </div>
      <div class="hb">
        <b-card-body class="d-flex justify-content-between mr-2">
          <b-card-link class="m-0">
            <h6 class="m-0 mb-0">Cvičenie pre žiakov</h6>
          </b-card-link>

          <b-card-link>
            <a :href="zaicard.doc1_link_download" class="card-link">
              <b-icon icon="download"></b-icon>
            </a>
            <a :href="zaicard.doc1_link_show" target="_blank" class="card-link">
              <b-icon icon="eye"></b-icon>
            </a>
          </b-card-link>
        </b-card-body>
        <hr class="hb m-0" />
      </div>
      <b-card-body class="hb d-flex justify-content-between mr-2">
        <b-card-link>
          <h6 class="mb-0">Pozrieť video</h6>
        </b-card-link>

        <b-card-link>
          <a :href="zaicard.video_show" target="_blank" class="card-link">
            <b-icon icon="play-circle"></b-icon>
          </a>
        </b-card-link>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import apiService from "../../common/apiService";

export default {
  name: "z-advancedImgCards",
  data() {
    return {
      zaicards: [],
    };
  },
  async mounted() {
    await this._loadCards();
  },
  methods: {
    async _loadCards() {
      try {
        const cards = await apiService.get("zaicard");
        this.zaicards = cards.data;
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

  .card-title {
    min-height: 35px;
    margin-top: 17.5px;
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

.card-body {
  padding: 10px;
  padding-left: 0px !important;
  padding-right: 0px !important;

  .hb:hover {
    color: #1eaee1 !important;

    a {
      color: #1eaee1;
    }

    hr {
      border-top: 1px solid #1eaee1 !important;
    }
  }
}

h6 {
  font-size: 16px;
  line-height: 30px color #192949;
  font-weight: 400;
}

a {
  color: #d1d4d8;

  &:hover {
    color: #1eaee1;
  }
}
</style>
