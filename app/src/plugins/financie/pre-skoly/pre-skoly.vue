<template>
<div>
    <div class="container-fluid preskoly-main">
      <div class="container preskoly-container">
        <div class="preskoly-welcome-text">
          <h1>Základná škola</h1>
          <p>Pripravili sme pre vás materiály pre učiteľov zo základných škol.</p>
          <p>Základné školy • Stredné školy • Vysoke školy</p>
        </div>
      </div>
    </div>
  <z-carousel></z-carousel>
  
  <div class="container">
    <div class="row">
      <div class="col-4">
        <z-advancedImgCard></z-advancedImgCard>
      </div>
      <div class="col-4">
        <z-advancedImgCard></z-advancedImgCard>
      </div>
      <div class="col-4">
        <z-advancedImgCard></z-advancedImgCard>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <z-advancedImgCard></z-advancedImgCard>
      </div>
      <div class="col-4">
        <z-advancedImgCard></z-advancedImgCard>
      </div>
      <div class="col-4">
        <z-advancedImgCard></z-advancedImgCard>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  components: {
		"z-carousel": () => import("../home/z-carousel"),
    "z-advancedImgCard": () => import("../_components/card/z-advancedImgCard")
	}
}
</script>
<style lang = "scss" scoped>
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
</style>