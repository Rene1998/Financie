<template>
  <div>
    <div class="container-fluid byvanie-main">
      <div class="container">
        <div class="byvanie-welcome-text">
          <div class="col d-flex flex-column mb-5 b-arrow">
            <a class="mb-5 d-flex align-items-center " @click="$router.go(-1)"
              ><b-icon class="mr-2" icon="arrow-left"></b-icon>Späť na hlavnú
              stránku</a
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
    <z-progressBar></z-progressBar>
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

      <div class="container mt-5 mb-5">
        <div class="row">
          <div
            v-for="card in cards"
            :key="card.title"
            :title="card.title"
            :text="card.text"
            class="col-3"
          >
            <z-miniCards :card="card"></z-miniCards>
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

      <div class="container">
        <div class="row d-flex justify-content-center">
          <z-blogCards></z-blogCards>
        </div>
      </div>
    </div>
    <div id="najnovsieProdukty">
      <div class="container text-center mt-5 mb-5 hardcode-text">
        <h4>Najlepšie produkty na našom trhu</h4>
        <p>
          Pripravili sme pre vás tie najlepšie produkty v ramci hypotek...
        </p>
      </div>

      <div class="container mb-5">
        <div class="row d-flex justify-content-center">
          <z-imgCard></z-imgCard>
        </div>
      </div>
    </div>
    <div id="uzitocneLinky">
      <div class="container">
        <div class="row border-center mb-5">
          <z-linkCards></z-linkCards>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageContent from "./osobne-financie_content.js";
export default {
  components: {
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
      cards: [
        {
          title: "Hypotéka",
          text: "Ako si vziat vyhodnu hypotenku? Ako môžete začať.",
          icon: "Blue-home.svg",
        },
        {
          title: "Refinancovanie",
          text: "Môžete refinancovať vašu hypotéku bez problémov.",
          icon: "Slide-img.svg",
        },
        {
          title: "Americká hypotéka",
          text: "Čo znamená americká hypo",
          icon: "Home$.svg",
        },
        {
          title: "Poistenie",
          text: "Ako si vziat vyhodnu hypotenku? Ako môžete začať.",
          icon: "Umbrella.svg",
        },
      ],
    };
  },
  methods: {
    changePageContent(val) {
      this.title = pageContent[val].title;
      this.content = pageContent[val].content;
    },
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
</style>
