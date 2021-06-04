<template>
  <div class="mb-5">
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
          v-for="slider in sliders"
          :key="slider.id"
          style="text-align: center"
        >
          <h5>{{ slider.content }}</h5>
        </slide>
      </carousel>
    </div>
    <hr />
    
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
      sliders: [],
    };
  },
  async mounted() {
    await this._loadSliders();
  },
  methods: {
    async _loadSliders() {
      try {
        const sliders = await apiService.get("slider");
        this.sliders = sliders.data;
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
  font-weight: 400;
  font-family: HeadlandOne;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
}

hr {
  max-width: 73%;
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
