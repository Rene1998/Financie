<template>
  <div>
    <div class="container-fluid preskoly-main">
      <div class="container preskoly-container">
        <div class="preskoly-welcome-text">
          <h1>Prevedieme vás životnou <br> finančnou cestou.</h1>
          <p>
            Získajte odborníka na kľúčové finančné momenty vo vašom živote.
          </p>
        </div>
      </div>
    </div>
    <z-carousel></z-carousel>

    <div class="container">
      <div class="row mb-4">
        <z-advancedImgHomeCards></z-advancedImgHomeCards>
      </div>
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
        <div class="col pr-5">
          <z-imgCard></z-imgCard>
        </div>
        <span class="divider border-left"></span>
        <div class="col pl-5">
          <z-textCard></z-textCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    "z-carousel": () => import("./z-carousel"),
    "z-showArticles": () => import("../_components/z-showArticles"),
    "z-imgCard": () => import("../_components/card/z-imgCard"),
    "z-textCard": () => import("../_components/card/z-textCard"),
    "z-advancedImgHomeCards": () => import("./z-advancedImgHomeCards"),
  },

    /*mounted: function(){
        axios.get('http://localhost:8081/api/zaicard').then(function(response){
            this.zaicard = response.data;
        })
    }*/
};
</script>
<style lang = "scss" scoped>
.preskoly-container {
  display: flex;
  align-items: center;
  min-height: 500px;
}

.preskoly-main {
  background-image: url(/assets/group1.png);
  min-height: 600px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>