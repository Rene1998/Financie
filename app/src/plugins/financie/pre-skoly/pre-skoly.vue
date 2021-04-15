<template>
  <div>
    <div class="container-fluid preskoly-main">
      <div class="container ">
        <div class="preskoly-welcome-text">
          <h1>{{ title }}</h1>
          <p class="content">
            {{ content }}
          </p>
          <p>
            <router-link to="/pre-skoly/zakladne-skoly"
              >Základné školy</router-link
            >
            •
            <router-link to="/pre-skoly/stredne-skoly"
              >Stredné školy</router-link
            >
            •
            <router-link to="/pre-skoly/vysoke-skoly">Vysoke školy</router-link>
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div
          v-for="card in skola"
          :key="card.id"
          :title="card.title"
          :img="card.img"
          :link="card.link"
          class="col-3"
        >
          <div v-on:click="changeCardContent(card.link)">
            <z-categoryCard :card="card"></z-categoryCard>
          </div>
        </div>
      </div>
    </div>

    <z-carousel></z-carousel>

    <div class="container text-center mt-5 mb-5 hardcode-text">
      <h4>
        Boli by sme radi, aby už na základnej škole mali deti finančné
        vzdelávanie.
      </h4>
      <p>
        A preto sme učiteľom a ich žiakom na základných a stredných školách
        pripravili príručky, cvičenia a videá, ktoré vás <br />
        prevedú finančným vzdelaním.
      </p>
    </div>

    <div class="container">
      <div class="row mb-4">
        <z-advancedImgCards :cardContent="cardContent" :cardCategory="cardCategory"></z-advancedImgCards>
      </div>
    </div>
    
    <div class="d-flex align-items-center justify-content-center mb-5"> 
      <z-switch></z-switch>
    </div>

   
    

    <div class="container text-center mb-5 ">
      <b-button variant="primary" class="download-all mb-5"
        >Stiahnuť všetky dokumenty</b-button
      >
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <z-showArticles></z-showArticles>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row mb-5 ">
        <div class="col pr-5">
          <z-imgCard></z-imgCard>
        </div>
        <span class="divider border-left"></span>
        <div class="col pl-5 d-flex align-items-end">
          <z-textCard></z-textCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardContent from "./pre-skoly_content.js";
export default {
  watch: {
    "$route.params.slug": {
      immediate: true,
      handler(val) {
        this.changePageContent(val);
      },
    },
  },
  data() {
    return {
      skola: null,
      title: null,
      content: null,
      cardContent: null,
      cardCategory: "advancedImgCardLink",
    };
  },
  methods: {
    changePageContent(val) {
      this.skola = cardContent[val].category
      this.title = cardContent[val].title
      this.content = cardContent[val].content
      this.cardContent = cardContent[val].defaultLink
    },
    changeCardContent(val) {
      this.cardContent = val
    },
    changeCardCategory(val) {
      this.cardCategory = val
    },
  },
  components: {
    "z-carousel": () => import("../home/z-carousel"),
    "z-advancedImgCards": () => import("../_components/card/z-advancedImgCards"),
    "z-categoryCard": () => import("../_components/card/z-categoryCard"),
    "z-imgCard": () => import("../_components/card/z-imgCard"),
    "z-textCard": () => import("../_components/card/z-textCard"),
    "z-showArticles": () => import("../_components/z-showArticles"),
    "z-switch": () => import("../_components/card/z-switch"),
  },
};
</script>

<style lang="scss" scoped>
.preskoly-main {
  background-image: url(/assets/group1.png);
  min-height: 500px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    align-items: center;
    min-height: 500px;
  }
}

.download-all {
  width: 223px;
  height: 59.47px;
  background: #1eaee1;
  border: none;
  border-radius: 5px !important;
}
a {
  color: rgba(25, 40, 59, 1);
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  &:hover {
    color: #1eaee1;
  }
}

h5 {
  font-size: 24px;
}
.content {
  max-width: 315px;
}
</style>
