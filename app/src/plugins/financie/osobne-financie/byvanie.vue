<template>
  <div>
    <div class="container-fluid byvanie-main">
      <div class="container">
        <div class="byvanie-welcome-text">
          <div class="row">
            <h1>Bývanie</h1>
            <p>
              Chcete návod ako sa najrýchlejšie dopracovať k vlastnému bývaniu
              krok po kroku...
            </p>
          </div>
        </div>
      </div>
    </div>
    <z-carousel></z-carousel>
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

    <div class="container">
      <div class="row mb-5">
        <div class="col-4 d-flex align-items-center">
          <b-icon icon="link45deg"></b-icon>
          <h6 class="m-0">Užitočné linky</h6>
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
    <div class="container">
      <div class="row">
        <div class="line col-4">
          <div><z-linkCards></z-linkCards></div>
          <hr />
          <div><z-linkCards></z-linkCards></div>
          <hr />
          <div><z-linkCards></z-linkCards></div>
        </div>

        <div class="line col-4">
          <div><z-linkCards></z-linkCards></div>
          <hr />
          <div><z-linkCards></z-linkCards></div>
          <hr />
          <div><z-linkCards></z-linkCards></div>
        </div>

        <div class="line col-4">
          <div><z-linkCards></z-linkCards></div>
          <hr />
          <div><z-linkCards></z-linkCards></div>
          <hr />
          <div><z-linkCards></z-linkCards></div>
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
  },
};
</script>

<style lang="scss" scoped>
.byvanie-main {
  background-image: url(/assets/byvanie-img.png);
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

.b-icon {
  cursor: pointer;
  width: 28px;
  height: 28px;
  &:hover {
    color: #1eaee1;
  }
}
</style>
