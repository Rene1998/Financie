<template>
  <div>
    <div class="container-fluid byvanie-main">
      <div class="container">
        <div class="byvanie-welcome-text">
          <div class="col d-flex flex-column mb-5 b-arrow">
            <router-link to="/home"
              ><a class="mb-5 d-flex align-items-center"
                ><b-icon class="mr-2" icon="arrow-left"></b-icon>Späť na hlavnú
                stránku</a
              ></router-link
            >
            <h1 mt-5>{{ title }}</h1>
            <p class="mt-4 content">
              {{ content }}
            </p>
            <div class="m-5"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="progressBar">
      <z-progressBar></z-progressBar>
    </div>
    <div id="vedeliSte">
      <z-carousel></z-carousel>
    </div>
    <div id="zakladneInformacie">
      <div class="container text-center mt-5 mb-5 hardcode-text">
        <h4>Základné články</h4>
        <p>
          Pripravili sme pre vás všetky možné finančné otázky a odpovede <br />
          na ktoré môžete naraziť vo vašom živote.
        </p>
      </div>
      <div class="d-sm-block d-md-none">
        <carousel class="carousel-wrapper" :perPage="1">
          <slide
            v-for="card in cards"
            :key="card.id"
            :title="card.title"
            :text="card.text"
          >
            <z-miniCards :card="card"></z-miniCards>
          </slide>
        </carousel>
      </div>
      <div class="d-none d-md-block d-lgblock d-xl-block">
        <div class="container mt-5 mb-5">
          <div class="row">
            <div
              v-for="card in cards"
              :key="card.id"
              :title="card.title"
              :text="card.text"
              class="col-3"
            >
              <z-miniCards :card="card"></z-miniCards>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="najnovsieClanky">
      <div class="container text-center mt-5 mb-5 hardcode-text">
        <h4>Najnovšie články o hypotekách</h4>
        <p>
          Pripravili sme pre vás všetky možné finančné otázky a odpovede <br />
          na ktoré môžete naraziť vo vašom živote.
        </p>
      </div>
    </div>

    <div class="container">
      <z-blogCards></z-blogCards>
    </div>
    <div id="najnovsieProdukty">
      <div class="container text-center mt-5 mb-5 hardcode-text">
        <h4>Najlepšie produkty na našom trhu</h4>
        <p>Pripravili sme pre vás tie najlepšie produkty v ramci hypotek...</p>
      </div>

      <div class="container mb-5">
        <z-imgCard></z-imgCard>
      </div>
    </div>
    <div id="uzitocneLinky">
      <div class="container ">
        <div class="row border-center mb-5">
          <z-linkCards></z-linkCards>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageContent from "./osobne-financie_content.js";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
    "z-carousel": () => import("../home/z-carousel"),
    "z-miniCards": () => import("../_components/card/z-miniCards"),
    "z-linkCards": () => import("../_components/card/z-linkCards"),
    "z-progressBar": () => import("../osobne-financie/z-progressBar"),
    "z-blogCards": () => import("../_components/card/z-blogCards"),
    "z-imgCard": () => import("../_components/card/z-imgCard"),
  },
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
      title: null,
      content: null,
      titulok1: null,
      titulok2: null,
      titulok3: null,
      titulok4: null,
      link1: null,
      link2: null,
      link3: null,
      link4: null,
      text1: null,
      text2: null,
      text3: null,
      text4: null,

      cards: [
        {
          id: 1,
          title: "",
          text: "",
          link: "",
          icon: "Blue-home.svg",
        },
        {
          id: 2,
          title: "",
          text: "",
          link: "",
          icon: "Slide-img.svg",
        },
        {
          id: 3,
          title: "",
          text: "",
          link: "",
          icon: "Home$.svg",
        },
        {
          id: 4,
          title: "",
          text: "",
          link: "",
          icon: "Umbrella.svg",
        },
      ],
    };
  },
  methods: {
    changePageContent(val) {
      this.title = pageContent[val].title;
      this.content = pageContent[val].content;
      this.titulok1 = pageContent[val].titulok1;
      this.titulok2 = pageContent[val].titulok2;
      this.titulok3 = pageContent[val].titulok3;
      this.titulok4 = pageContent[val].titulok4;
      this.link1 = pageContent[val].link1;
      this.link2 = pageContent[val].link2;
      this.link3 = pageContent[val].link3;
      this.link4 = pageContent[val].link4;
      this.text1 = pageContent[val].text1;
      this.text2 = pageContent[val].text2;
      this.text3 = pageContent[val].text3;
      this.text4 = pageContent[val].text4;
    },
  },
  mounted() {
    this.cards.map((card, i) => {
      card.title = this[`titulok${i + 1}`];
      card.link = this[`link${i + 1}`];
      card.text = this[`text${i + 1}`];
    });
  },
};
</script>

<style lang="scss" scoped>
.byvanie-main {
  background-image: url(/assets/byvanie-img.png);
  max-height: 370px;
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

.b-icon {
  cursor: pointer;
  width: 28px;
  height: 28px;
  &:hover {
    color: #1eaee1;
  }
}

.border-center {
  .col-4:not(:last-of-type) {
    border-right: 1px solid rgba(137, 137, 137, 0.2);
  }
}
a {
  color: #1eaee1;
  text-decoration: none;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
}

.b-arrow {
  .b-icon {
    height: 20px !important;
    width: 20px !important;
  }
}

.content {
  max-width: 450px;
}
h1 {
  font-weight: bold;
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

@media (max-width: 800px) {
  .byvanie-main {
    background-image: none;
    background-color: rgb(237, 239, 238);
  }
}
.pracujemeNaTom {
  display: none;
}
</style>
