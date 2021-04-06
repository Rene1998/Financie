<template>
  <div>
    <div class="preskoly-wrapper">
      <div class="container d-flex align-items-center">
        <div class="preskoly-welcome-text">
          <h1>
            Prevedieme vás životnou
            <br />finančnou cestou.
          </h1>
          <p class="p-0 mt-4 mb-5">
            Získajte odborníka na kľúčové finančné momenty
            <br />vo vašom živote.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
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

    <div class="container text-center mt-5 mb-5 hardcode-text">
      <h4>Budeme pri vás, počas toho ako si plníťe vaše sny a ciele</h4>
      <p>
        Pripravili sme pre vás všetky možné finančné otázky a odpovede
        <br />na ktoré móžete naraziť vo vašom živote.
      </p>
    </div>

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
          icon: "Home.svg",
        },
        {
          title: "Rodina a deti",
          icon: "Family-group.svg",
        },
        {
          title: "Auto",
          icon: "Car.svg",
        },
        {
          title: "Dôchodok",
          icon: "OldFamily-group.svg",
        },
        {
          title: "Exekúcia",
          icon: "Execution.svg",
        },
        {
          title: "Práca a dane",
          icon: "Work.svg",
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
.preskoly-wrapper {
  background-image: url("/assets/Group 1.png");
  min-height: 600px;
  width: 100%;
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    align-items: center;
    min-height: 500px;

    h1 {
      font-weight: bold;
      font-size: 40px;
    }

    p {
      font-size: 18px;
    }
  }
}

.category-cards {
  margin-top: -250px;
}
</style>
