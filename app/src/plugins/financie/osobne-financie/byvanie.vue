<template>
  <div>
    <div class="container-fluid byvanie-main">
      <div class="container">
        <div class="byvanie-welcome-text">
          <div class="row">
            <h1>Bývanie</h1>
            <p>Chcete návod ako sa najrýchlejšie dopracovať k vlastnému bývaniu krok po kroku... </p>
          </div>
        </div>
      </div>
    </div>
    <z-carousel></z-carousel>
  </div>
</template>

<script>
export default {
  components: {
    "z-carousel": () => import("../home/z-carousel"),
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
</style>
