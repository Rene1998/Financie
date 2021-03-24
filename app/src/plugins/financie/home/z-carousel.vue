<template>
  <div class="mb-5">
    <hr />
    <div class="slider-info" style="display: flex; justify-content: center">
      <p>Vedeli ste, že...</p>
    </div>
    <div style="display: flex; justify-content: center">
      <carousel
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="5000"
        :perPage="1"
        style="width: 800px"
      >
        <slide
          class="slide"
          v-for="zslider in zsliders"
          :key="zslider.id"
          style="text-align: center"
        >
          <h5>{{ zslider.content }}</h5>
        </slide>
      </carousel>
    </div>
    <hr />
    <div class="text-center hardcore-text">
      <h5 class="text-center">
        Budeme pri vás, počas toho ako si plníte vaše sny a ciele
      </h5>
      <span class="text-center"
        >A preto sme učiteľom a ich žiakom na základných a stredných školách
        pripravili príručky, cvičenia a videá, ktoré vás <br />
        prevedú finančním vzdelaním.</span
      >
    </div>
  </div>
</template>

<script>
//docs => https://ssense.github.io/vue-carousel/api/
import apiService from "../common/apiService";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  name: "z-carousel",
  data() {
    return {
      zsliders: [],
    };
  },
  async mounted() {
    await this._loadSliders();
    console.log(this.zsliders);
  },
  methods: {
    async _loadSliders() {
      try {
        const zsliders = await apiService.get("zslider");
        this.zsliders = zsliders.data;
        console.log(zsliders.data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-info {
  margin-top: 40px;
}

.VueCarousel-dot-container {
  margin-top: -20px !important;
}

span {
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #192949;
  width: 951px;
}

h5 {
  font-family: HeadlandOne;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
}

.hardcore-text {
  margin-top: 60px;

  h5 {
    font-family: Helvetica Neue;
    font-weight: bold;
    color: #192949;
  }
}

hr {
  width: 1138px;
  height: 0px;
  border: 1px solid #f3f4f5;
}

/deep/ {
  &.VueCarousel-dot:focus {
    outline: none !important;
  }

  &.VueCarousel-dot--active {
    background-color: #1eaee1 !important;
  }

  &.VueCarousel-dot {
    width: 6px !important;
    height: 6px !important;
    width: 6px !important;
    height: 6px !important;
  }

  &.VueCarousel-pagination {
    margin-top: -45px;
  }
}
</style>
