
<template>
  <div>
    <div class="container-fluid preskoly-main">
      <div class="container preskoly-container">
        <div class="preskoly-welcome-text">
          <h1>{{title}}</h1>
          <p>
            {{content}}
          </p>
          <p>
            <router-link :to="'/pre-skoly/' + 'zakladne-skoly'">Základné školy</router-link> •
            <router-link :to="'/pre-skoly/stredne-skoly'">Stredné školy</router-link> •
            <router-link :to="'/pre-skoly/vysoke-skoly'">Vysoke školy</router-link>
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
          class="col-3"
        >
          <z-categoryCard :card="card"></z-categoryCard>
        </div>
      </div>
    </div>

    <z-carousel></z-carousel>

    <div class="container">
      <div class="row mb-4">
        <z-advancedImgCards></z-advancedImgCards>
      </div>
    </div>
    <div class="container text-center mb-5 hardcore-text-button">
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
import cardContent from "./cardContent.js";
export default {
  watch: {
    '$route.params.slug': {
      immediate: true,
      handler(val) {
        this.changePageContent(val)
      }
    }
  },
  data() {
    return {
      skola: null,
      title: null,
      content: null
    };
  },
  mounted(){
    this.$route.meta.title = process.env.VUE_APP_DOMAIN_TITLE + this.skola
  },
  methods: {
    changePageContent(val){
      console.log(val)
      this.skola = cardContent[val].category
      this.title = cardContent[val].title
      this.content = cardContent[val].content
    }
  },
  components: {
    "z-carousel": () => import("../home/z-carousel"),
    "z-advancedImgCards": () =>
      import("../_components/card/z-advancedImgCards"),
    "z-categoryCard": () => import("../_components/card/z-categoryCard"),
    "z-imgCard": () => import("../_components/card/z-imgCard"),
    "z-textCard": () => import("../_components/card/z-textCard"),
    "z-showArticles": () => import("../_components/z-showArticles"),
  },
};
</script>
<style lang="scss" scoped>
.preskoly-container {
  display: flex;
  align-items: center;
  min-height: 500px;
}

.preskoly-main {
  background-image: url(/assets/group1.png);
  min-height: 500px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.download-all {
  width: 223px;
  height: 59.47px;
  background: #1eaee1;
  border: none;
  border-radius: 5px !important;
}
a {
  color: #1eaee1;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: #136685;
  }
}

h5 {
  font-size: 24px;
}

.size {
  font-size: 18px;
}
</style>
