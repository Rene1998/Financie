<template>
  <div>
    <b-card
      v-for="advancedImgHomeCard in advancedImgHomeCards"
      :key="advancedImgHomeCard.id"
      img-alt="Image"
      tag="article"
      class="mb-2 border border-0 m-2"
    >
      <router-link :to="'/osobne-financie/' + advancedImgHomeCard.link">
        <b-card-img :src="advancedImgHomeCard.image"></b-card-img>
        <b-card-title class="card-title-adv">
          {{ advancedImgHomeCard.title }}
        </b-card-title>
        <b-card-text class="d-flex align-items-end mb-5">
          {{ advancedImgHomeCard.content }}
        </b-card-text>
      </router-link>
      <div class="hb">
        <b-card-body class="hb d-flex justify-content-between mr-2">
          <div>
            <h6 class="mb-0">
              {{ advancedImgHomeCard.titulok1 }}
            </h6>
          </div>

          <div>
            <a :href="advancedImgHomeCard.link1" class="blue card-link">
              <b-icon icon="arrow-right"></b-icon>
            </a>
          </div>
        </b-card-body>
        <hr class="hb m-0" />
      </div>
      <div class="hb">
        <b-card-body class="hb d-flex justify-content-between mr-2">
          <div>
            <h6 class="mb-0">
              {{ advancedImgHomeCard.titulok2 }}
            </h6>
          </div>

          <div>
            <a :href="advancedImgHomeCard.link2" class="blue card-link">
              <b-icon icon="arrow-right"></b-icon>
            </a>
          </div>
        </b-card-body>
        <hr class="hb m-0" />
      </div>
      <div class="hb">
        <b-card-body class="hb d-flex justify-content-between mr-2">
          <div>
            <h6 class="mb-0">
              {{ advancedImgHomeCard.titulok3 }}
            </h6>
          </div>

          <div>
            <a :href="advancedImgHomeCard.link3" class="blue card-link">
              <b-icon icon="arrow-right"></b-icon>
            </a>
          </div>
        </b-card-body>
        <hr class="hb m-0" />
      </div>
      <div v-if="advancedImgHomeCard.titulok4 != ''">
        <b-card-body class="hb d-flex justify-content-between mr-2">
          <div>
            <h6 class="mb-0">
              {{ advancedImgHomeCard.titulok4 }}
            </h6>
          </div>

          <div>
            <a :href="advancedImgHomeCard.link4" class="blue card-link">
              <b-icon icon="arrow-right"></b-icon>
            </a>
          </div>
        </b-card-body>
      </div>
    </b-card>
  </div>
</template>

<script>
import pageContent from "./osobne-financie_content_linky";
export default {
  name: "z-advancedImgHomeCards",
  data() {
    return {
      advancedImgHomeCards: pageContent,
    };
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

  .div {
    line-height: 24px;
  }
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
  color: #d1d4d8;

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
  min-height: 60px !important;
}

</style>
