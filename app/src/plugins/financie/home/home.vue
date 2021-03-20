<template>
  <div>
    <div class="container-fluid preskoly-main">
      <div class="container preskoly-container">
        <div class="preskoly-welcome-text">
          <h1>
            Prevedieme vás životnou <br />
            finančnou cestou.
          </h1>
          <p>
            Získajte odborníka na kľúčové finančné momenty vo vašom živote.
          </p>
        </div>
      </div>
    </div>

    <div class=" container">
      <div class="row category-cards">
        <div
          v-for="card in cards"
          :key="card.title"
          :title="card.title"
          :icon="card.icon"
          class="col-4 mb-3"
        >
          <z-homeCategoryCard class="mt-2" :card="card"></z-homeCategoryCard>
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
    "z-homeCategoryCard": () =>
      import("../_components/card/z-homeCategoryCard"),
    "z-carousel": () => import("./z-carousel"),
    "z-showArticles": () => import("../_components/z-showArticles"),
    "z-imgCard": () => import("../_components/card/z-imgCard"),
    "z-textCard": () => import("../_components/card/z-textCard"),
    "z-advancedImgHomeCards": () => import("./z-advancedImgHomeCards"),
  },
  data() {
    return {
      cards: [
        {
          title: "Bývanie",
          icon:"np_home_dark_blue.png",
        },
        {
          title: "Rodina a deti",
          icon:"np_family_dark_blue.png",
        },
        {
          title: "Auto",
          icon:"np_car_dark_blue.png",
        },
        {
          title: "Dôchodok",
          icon:"np_old_dark_blue.png",
        },
        {
          title: "Exekúcia",
          icon:"np_pay_dark_blue.png",
        },
        {
          title: "Práca a dane",
          icon:"np_work_dark_blue.png",
        },
      ],
    };
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
  background-image: url(/assets/family-img.jpg);
  min-height: 600px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.category-cards {
  margin-top: -250px;
}
</style>
