<template>
  <div>
    <div class="container-fluid byvanie-main">
      <div class="container">
        <div class="byvanie-welcome-text">
          <div class="col d-flex flex-column mb-5">
            <h1>Bývanie</h1>
            <p>
              Chcete návod ako sa najrýchlejšie dopracovať k vlastnému bývaniu
              krok po kroku...
            </p>
          </div>
        </div>
      </div>
    </div>
    <z-progressBar></z-progressBar>
    <z-carousel></z-carousel>

    <div class="container text-center mt-5 mb-5 hardcode-text">
      <h4>Základné články</h4>
      <p>
        Pripravili sme pre vás všetky možné finančné otázky a odpovede <br> na ktoré môžete naraziť vo vašom živote.
      </p>
    </div>

    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-3">
          <z-miniCards></z-miniCards>
        </div>
        <div class="col-3">
          <z-miniCards></z-miniCards>
        </div>
        <div class="col-3">
          <z-miniCards></z-miniCards>
        </div>
        <div class="col-3">
          <z-miniCards></z-miniCards>
        </div>
      </div>
    </div>

     <div class="container text-center mt-5 mb-5 hardcode-text">
      <h4>Najnovšie články o hypotekách</h4>
      <p>
        Pripravili sme pre vás všetky možné finančné otázky a odpovede <br> na ktoré môžete naraziť vo vašom živote.
      </p>
    </div>

    <div class="container text-center mt-5 mb-5 hardcode-text">
      <h4>Najlepšie produkty na našom trhu</h4>
      <p>
       Pripravili sme pre vás tie najlepšie produkty v ramci hypotek...
      </p>
    </div>


    <div class="container">
      <div class="row border-center mb-5">
        <div class="col-4 ">
          <div class="d-flex align-items-center">
            <b-icon icon="link45deg"></b-icon>
            <h6 class="m-0">Užitočné linky</h6>
          </div>
          <!-- tie link card si nic nemaju nacitavat zo serveru, to si maju nacitat na tomto screene a do link cards poslat cez props iba data ktore maju vypisat/ -->
          <z-linkCards></z-linkCards>
        </div>
        <div class="col-4 d-flex align-items-center">
          <b-icon icon="question-circle-fill"></b-icon>
          <h6 class="m-0 ml-1">Mohlo by vás zaujímať</h6>
        </div>
        <div class="col-4 d-flex align-items-center">
          <b-icon icon="calculator-fill"></b-icon>
          <h6 class="m-0">Kalkulačky a návody</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "z-carousel": () => import("../home/z-carousel"),
    "z-miniCards": () => import("../_components/card/z-miniCards"),
    "z-linkCards": () => import("../_components/card/z-linkCards"),
    "z-progressBar": () => import("../osobne-financie/z-progressBar"),
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
    border-right: 1px solid red;
  }
}
</style>
