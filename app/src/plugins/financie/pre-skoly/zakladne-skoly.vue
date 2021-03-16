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
        <div
          v-for="card in cards"
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
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "1 - 2 Ročník",
          img:"rocnik1.png",
        },
        {
          id: 2,
          title: "3 - 4 Ročník",
          img:"rocnik2.png",
        },
        {
          id: 3,
          title: "5 - 6 Ročník",
          img:"rocnik3.png",
        },
        {
          id: 4,
          title: "7 - 9 Ročník",
          img:"rocnik4.png",
        },
      ],
    };
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
