<template>
  <div>
    <div v-for="advancedImgCard in advancedImgCards"
      :key="advancedImgCard.id">

    <b-card
      :title="advancedImgCard.title"
      :img-src="advancedImgCard.image.path"
      img-alt="Image"
      tag="article"
      class="mb-2 border border-0 m-2"
    >
      <div>
        <b-card-text class="d-flex align-items-end mb-5">
          {{ advancedImgCard.content }}
        </b-card-text>
        <div class="hb">
          <b-card-body
            class="hb d-flex justify-content-between mr-2"
            v-if="advancedImgCard.doc1_link != ''"
          >
            <div>
              <h6 class=" mb-0">{{ advancedImgCard.doc1_link }}</h6>
            </div>

            <div>
              <a :href="advancedImgCard.doc1_link_download" class=" card-link">
                <b-icon icon="download"></b-icon>
              </a>
              <a
                :href="advancedImgCard.doc1_link_show"
                target="_blank"
                class=" card-link"
              >
                <b-icon icon="eye"> </b-icon>
              </a>
            </div>
          </b-card-body>
          <hr class="hb m-0" />
        </div>
        <div class="hb">
          <b-card-body
            class="d-flex justify-content-between mr-2"
            v-if="advancedImgCard.doc2_link != ''"
          >
            <div class="m-0">
              <h6 class="m-0 mb-0">{{ advancedImgCard.doc2_link }}</h6>
            </div>

            <div>
              <a :href="advancedImgCard.doc1_link_download" class="card-link">
                <b-icon icon="download"></b-icon>
              </a>
              <a
                :href="advancedImgCard.doc1_link_show"
                target="_blank"
                class="card-link"
              >
                <b-icon icon="eye"></b-icon>
              </a>
            </div>
          </b-card-body>
          <hr class="hb m-0" />
        </div>
        <b-card-body class="hb d-flex justify-content-between mr-2">
          <div>
            <h6 class="mb-0">{{ advancedImgCard.video_link }}</h6>
          </div>

          <div>
            <a
              :href="advancedImgCard.video_show"
              target="_blank"
              class="card-link"
            >
              <b-icon icon="play-circle"></b-icon>
            </a>
          </div>
        </b-card-body>
      </div>
    </b-card>
  </div>
  </div>
</template>

<script>
import apiService from "../../common/apiService"
export default {
  name: "z-advancedImgCards",
  props: {
    cardCategory: {
      type: String,
      required: true,
    },
    cardContent: {
      type: String,
      required: true,
    },
  },
  watch: {
    "$route.params.slug": {
      immediate: true,
      handler(val) {
        this.actualPage(val);
        console.log(this.page);
      },
    },
    cardContent: {
      immediate: true,
      handler(val) {
        this._loadCards(val, this.page, this.cardCategory);
      },
    },
    cardCategory: {
      handler(val) {
        this._loadCards(this.cardContent, this.page, val);
      },
    },
  },
  data() {
    return {
      advancedImgCards: [],
      page: "",
    };
  },
  methods: {
    async _loadCards(rocnik, stranka, kategoria) {
      console.log(rocnik, stranka, kategoria);
      try {
        const cards = await apiService.get(`categories/slug/${stranka}`);
        this.advancedImgCards = cards.data.year_category
          .find((e) => e.slug === rocnik)
          .advanced_img_cards.filter((e) => e.type === kategoria);
        console.log(this.advancedImgCards);
      } catch (e) {
        console.error(e);
      }
    },
    actualPage(stranka) {
      this.page = stranka;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: inline-block;

  img {
    height: 210px;
  }

  .card-title {
    min-height: 35px;
    margin-top: 17.5px;
  }
}

.div {
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
