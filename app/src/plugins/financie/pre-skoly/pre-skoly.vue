<template>
  <div>
    <div class="container-fluid preskoly-main">
      <div class="container preskoly-container">
        <div class="preskoly-welcome-text">
          <h1>Základná škola</h1>
          <p>
            Pripravili sme pre vás materiály pre učiteľov zo základných škol.
          </p>
          <p>Základné školy • Stredné školy • Vysoke školy</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-3">
          <z-categoryCard></z-categoryCard>
        </div>

        <div class="col-3">
          <z-categoryCard></z-categoryCard>
        </div>

        <div class="col-3">
          <z-categoryCard></z-categoryCard>
        </div>

        <div class="col-3">
          <z-categoryCard></z-categoryCard>
        </div>
      </div>
    </div>

    <z-carousel></z-carousel>

    <div class="container remove-padding">
      <div class="row mb-4">
        <div class="col-12">
          <z-advancedImgCard></z-advancedImgCard>
        </div>
      </div>

    </div>
    <div class="container text-center mb-5 hardcore-text-button">
     <b-button variant="primary" class="download-all mb-5">Stiahnuť všetky dokumenty</b-button>
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
    "z-carousel": () => import("../home/z-carousel"),
    "z-advancedImgCard": () => import("../_components/card/z-advancedImgCard"),
    "z-categoryCard": () => import("../_components/card/z-categoryCard"),
    "z-imgCard": () => import("../_components/card/z-imgCard"),
    "z-textCard": () => import("../_components/card/z-textCard"),
    "z-showArticles": () => import("../_components/z-showArticles"),
  },

    /*mounted: function(){
        axios.get('http://localhost:8081/api/zaicard').then(function(response){
            this.zaicard = response.data;
        })
    }*/
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


.remove-padding{
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.download-all{
  width: 223px;
  height: 59.47px;
  background: #1EAEE1;
  border: none;
  border-radius: 5px !important;


}
  a{
  color:#1EAEE1;
  text-decoration: none;
  font-size: 14px;
  &:hover{
   color:   #136685;
  }
  }

  h5{
    font-size: 24px;
  }

  .size{
    font-size: 18px;
  }

</style>