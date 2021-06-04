<template>
  <div class="row">
    <div
      v-for="advancedImgHomeCard in advancedImgHomeCards"
      :key="advancedImgHomeCard.id"
      class="col-12 col-lg-4 col-md-6"
    >
      <b-card img-alt="Image" tag="article" class="mb-2 border border-0 m-2">
        <router-link :to="'/osobne-financie/' + advancedImgHomeCard.link">
          <b-card-img :src="cardImg(advancedImgHomeCard)"></b-card-img>
          <b-card-title class="card-title-adv">
            {{ advancedImgHomeCard.title }}
          </b-card-title>
          <b-card-text class="d-flex mb-5">
            {{ advancedImgHomeCard.content }}
          </b-card-text>
        </router-link>
        <div class="hb">
          <b-card-body class="hb d-flex justify-content-between mr-2">
            <div>
              <router-link :to="'/osobne-financie/clanky/' + advancedImgHomeCard.link1">
                <h6 class="mb-0">
                  {{ advancedImgHomeCard.titulok1 }}
                </h6>
              </router-link>
            </div>

            <div>
              <router-link :to="'/osobne-financie/clanky/' + advancedImgHomeCard.link1">
                <a class="blue card-link">
                  <b-icon icon="arrow-right"></b-icon>
                </a>
              </router-link>
            </div>
          </b-card-body>
          <hr class="hb m-0" />
        </div>
        <div class="hb">
          <b-card-body class="hb d-flex justify-content-between mr-2">
            <div>
              <router-link :to="'/osobne-financie/clanky/' + advancedImgHomeCard.link2">
                <h6 class="mb-0">
                  {{ advancedImgHomeCard.titulok2 }}
                </h6>
              </router-link>
            </div>

            <div>
              <router-link :to="'/osobne-financie/clanky/' + advancedImgHomeCard.link2">
                <a class="blue card-link">
                  <b-icon icon="arrow-right"></b-icon>
                </a>
              </router-link>
            </div>
          </b-card-body>
          <hr class="hb m-0" />
        </div>
        <div class="hb">
          <b-card-body class="hb d-flex justify-content-between mr-2">
            <div>
              <router-link :to="'/osobne-financie/clanky/' + advancedImgHomeCard.link3">
                <h6 class="mb-0">
                  {{ advancedImgHomeCard.titulok3 }}
                </h6>
              </router-link>
            </div>

            <div>
              <router-link :to="'/osobne-financie/clanky/' + advancedImgHomeCard.link3">
                <a class="blue card-link">
                  <b-icon icon="arrow-right"></b-icon>
                </a>
              </router-link>
            </div>
          </b-card-body>
          <hr class="hb m-0" />
        </div>
        <div>
          <b-card-body class="hb d-flex justify-content-between mr-2">
            <div>
              <router-link :to="'/osobne-financie/clanky/' + advancedImgHomeCard.link4">
                <h6 class="mb-0">
                  {{ advancedImgHomeCard.titulok4 }}
                </h6>
              </router-link>
            </div>

            <div>
              <router-link :to="'/osobne-financie/clanky/' + advancedImgHomeCard.link">
                <a class="blue card-link">
                  <b-icon icon="arrow-right"></b-icon>
                </a>
              </router-link>
            </div>
          </b-card-body>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import pageContent from "./osobne-financie_content_linky";
export default {
  data() {
    return {
      advancedImgHomeCards: pageContent,
    };
  },
  methods: {
    cardImg(card) {
      return require(`./assets/${card.image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  img {
    height: 210px;
  }

  .card-title {
    margin-top: 17.5px;
    color: #192949;
    font-weight: bold;
    font-style: normal;
  }

  .div {
    line-height: 24px;
  }
}
.card-text {
  text-decoration: none;
  color: #192949;
  min-height: 2.5vw;
}
.card-body {
  padding: 10px;
  padding-left: 0px !important;
  padding-right: 0px !important;

  h6 {
    font-size: 16px;
    line-height: 30px color #192949;
    font-weight: 400;
  }
}

a {
  color: #19283B;

  &:hover {
    color: #1eaee1;
    text-decoration: none !important;
  }
}

.hb:hover {
  color: #1eaee1 !important;

  a {
    color: #1eaee1;
  }

  hr {
    border-top: 1px solid #1eaee1 !important;
  }
}

.card-title-adv {
  color: black;
  text-decoration: none;
}
</style>
