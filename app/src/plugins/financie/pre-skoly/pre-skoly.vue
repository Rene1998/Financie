<template>
  <div>
    <div class="container-fluid preskoly-main">
      <div class="container">
        <div class="preskoly-welcome-text mb-5">
          <h1 class="title">{{ title }}</h1>
          <p class="content">{{ content }}</p>
          <p>
            <router-link
              :class="{ isActiveA: activePage == 'zakladne-skoly' }"
              to="/pre-skoly/zakladne-skoly"
              >Základné školy</router-link
            >
            •
            <router-link
              :class="{ isActiveA: activePage == 'stredne-skoly' }"
              to="/pre-skoly/stredne-skoly"
              >Stredné školy</router-link
            >
            •
            <router-link
              :class="{ isActiveA: activePage == 'vysoke-skoly' }"
              to="/pre-skoly/vysoke-skoly"
              >Vysoke školy</router-link
            >
          </p>
        </div>
      </div>
    </div>

    <div class="d-block d-sm-block d-md-none">
      <carousel class="carousel-wrapper" :perPage="1">
        <slide
          class="slide"
          v-for="card in skola"
          :key="card.id"
          :title="card.title"
          :img="card.img"
          :link="card.link"
        >
          <div
            v-on:click="changeCardContent(card.link)"
            class="col-10 offset-1"
          >
            <z-categoryCard
              :card="card"
              :activeCard="activeCard"
            ></z-categoryCard>
          </div>
        </slide>
      </carousel>
    </div>
    <div class="container carousel-wrapper">
      <div class="row">
        <div
          v-for="card in skola"
          :key="card.id"
          :title="card.title"
          :img="card.img"
          :link="card.link"
          class="col-3 d-none d-md-block d-lg-block d-xl-block"
        >
          <div v-on:click="changeCardContent(card.link)">
            <z-categoryCard
              :card="card"
              :activeCard="activeCard"
            ></z-categoryCard>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <z-carousel></z-carousel>

    <div class="container text-center mt-5 mb-5 hardcode-text">
      <h4>
        Boli by sme radi, aby už na základnej škole mali deti finančné
        vzdelávanie.
      </h4>
      <p>
        A preto sme učiteľom a ich žiakom na základných a stredných školách
        pripravili príručky, cvičenia a videá, ktoré vás
        <br />prevedú finančným vzdelaním.
      </p>
    </div>

    <div class="switch-wrapper mb-5">
      <b-button-group>
        <button
          class="switch-button p-0"
          :class="{ switchIsActive: active }"
          @click="
            changeCardCategory('advancedImgCardLink');
            active = !active;
          "
        >
          Učebné materiály
        </button>

        <button
          class="switch-button p-0"
          :class="{ switchIsActive: !active }"
          @click="
            changeCardCategory('advancedImgCardVideo');
            active = !active;
          "
        >
          Videá
        </button>
      </b-button-group>
    </div>

    <div class="container">
      <z-advancedImgCards
        :cardContent="cardContent"
        :cardCategory="cardCategory"
      ></z-advancedImgCards>
    </div>

    <div class="container text-center mb-5">
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
      <div class="row mb-5">
        <div class="col-12 col-md-6">
          <z-imgCard></z-imgCard>
        </div>
        <span class="divider border-left"></span>
        <div class="col pl-2 pl-md-5 d-flex align-items-end">
          <z-textCard></z-textCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//docs => https://ssense.github.io/vue-carousel/api/
import cardContent from "./pre-skoly_content.js";
import { Carousel, Slide } from "vue-carousel";
export default {
  watch: {
    "$route.params.slug": {
      immediate: true,
      handler(val) {
        this.changePageContent(val);
        console.log(val);
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
      active: true,
      activeCard: null,
      activePage: null,
    };
  },
  methods: {
    changePageContent(val) {
      this.skola = cardContent[val].category;
      this.title = cardContent[val].title;
      this.content = cardContent[val].content;
      this.cardContent = cardContent[val].defaultLink;
      this.activeCard = cardContent[val].defaultLink;
      this.activePage = val;
    },
    changeCardContent(val) {
      this.cardContent = val;
      this.activeCard = val;
    },
    changeCardCategory(val) {
      this.cardCategory = val;
      console.log(this.cardCategory);
    },
  },
  components: {
    Carousel,
    Slide,
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
.carousel-wrapper {
  margin-top: -80px;
  margin-bottom: 80px;
}

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

@media (max-width: 500px) {
  .preskoly-main {
    background-image: none;
    background-color: rgb(237, 239, 238);
  }
}

.download-all {
  width: 223px;
  height: 59.47px;
  background: #FFA800;
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
  font-weight: 400;
  font-size: 18px;
}

.title {
  font-weight: 700;
  font-size: 40px;
}

.switch-wrapper {
  margin: auto;
  width: 95%;
  max-width: 500px;

  .btn-group {
    background: rgba(118, 118, 128, 0.12);
    padding: 2px;
    border-radius: 8px;
    width: 100%;

    .switch-button {
      width: 100%;
      height: 28px;
      border: 0px;
      color: #192949;
      font-weight: 500;
      font-style: normal;

      &:hover {
        background: #ffffff;
        border: 0.5px solid rgba(0, 0, 0, 0.04);
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12),
          0px 3px 1px rgba(0, 0, 0, 0.04);
        border-radius: 6.93px;
      }
    }
  }
}

.switchIsActive {
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
  border-radius: 6.93px;
}

.isActiveA {
  color: #1eaee1;
}

hr {
  max-width: 73%;
  border: 1px solid #f3f4f5;
}

@media (max-width: 600px) {
  .divider {
    display: none;
  }
}

/deep/ {
  &.VueCarousel-dot:focus {
    outline: none !important;
  }

  &.VueCarousel-dot--active {
    background-color: #1eaee1 !important;
  }

  &.VueCarousel-dot {
    width: 6px !important;
    height: 6px !important;
    width: 6px !important;
    height: 6px !important;
  }
}
.hardoce-text {
  color: #192949;
  font-weight: bold;
  font-style: normal;
}
</style>
