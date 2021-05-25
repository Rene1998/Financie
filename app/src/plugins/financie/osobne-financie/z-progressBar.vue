<template>
  <div class="container-fluid progressBar isSticky">
    <div class="container">
      <div class="row progressBar-row d-flex m-0">
        <a
          href=""
          class="z-btn btn rounded-0"
          :class="{
            isActive:
              0 <= pageScrollPositon && pageScrollPositon < zakladneInformacie,
          }"
          >Vedeli ste, že...</a
        >
        <a
          href=""
          class="z-btn btn rounded-0"
          :class="{
            isActive:
              zakladneInformacie <= pageScrollPositon &&
              pageScrollPositon < najnovsieClanky,
          }"
          >Základné informácie</a
        >
        <a
          href=""
          class="z-btn btn rounded-0"
          :class="{
            isActive:
              najnovsieClanky <= pageScrollPositon &&
              pageScrollPositon < najnovsieProdukty,
          }"
          >Najnovšie články</a
        >
        <a
          href=""
          class="z-btn btn rounded-0"
          :class="{
            isActive:
              najnovsieProdukty <= pageScrollPositon &&
              pageScrollPositon < uzitocneLinky,
          }"
          >Najnovšie produkty a služby</a
        >
        <a
          href=""
          class="z-btn btn rounded-0"
          :class="{ isActive: uzitocneLinky <= pageScrollPositon }"
          >Užitočné linky a zaujímavosti</a
        >
        <a href="" class="z-btn btn rounded-0">Kvíz</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  watch: {
    scrollHeight(val) {
      console.log(val);
    },
  },
  data() {
    return {
      pageScrollPositon: null,
      vedeliSte: null,
      zakladneInformacie: null,
      najnovsieClanky: null,
      najnovsieProdukty: null,
      uzitocneLinky: null,
      kviz: null,
    };
  },
  computed: {
    scrollHeight() {
      return window.scrollHeight;
    },
  },
  mounted() {
    this.setScrollPosition()
    window.addEventListener("scroll", this.setScrollPosition)

  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.setScrollPosition)
  },
  methods: {
    setScrollPosition() {
      (this.pageScrollPositon = window.scrollY + window.outerHeight / 2),
      (this.vedeliSte = document.querySelector("#vedeliSte").offsetTop),
      (this.zakladneInformacie = document.querySelector("#zakladneInformacie").offsetTop),
      (this.najnovsieClanky = document.querySelector("#najnovsieClanky").offsetTop),
      (this.najnovsieProdukty = document.querySelector("#najnovsieProdukty").offsetTop),
      (this.uzitocneLinky = document.querySelector("#uzitocneLinky").offsetTop)
    },
  },
};
</script>

<style lang="scss" scoped>
.progressBar {
  background-color: #fbfbfc;
  min-height: 70px;
  a:hover {
    color: #1eaee1;
  }
  a {
    font-weight: 700;
  }
}
.btn {
  min-height: 70px;
  display: flex;
  align-items: center;
}
.isActive {
  color: #1eaee1;
}
.isSticky {
  z-index: 999;
  position: sticky;
  top: 0;
}

@media (max-width: 1231px) {
  .progressBar {
    padding-right: 0;
    padding-left: 0;
  }
  .progressBar-row {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    padding-right: 0;
  }

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  .btn {
    min-width: 200px;
  }
}
</style>
