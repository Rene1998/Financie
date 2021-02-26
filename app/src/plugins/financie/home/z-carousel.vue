<template>
<div>
  <div class="slider-info" style="display: flex; justify-content: center;">
    <p>Vedeli ste, že.......</p>
  </div>
  <div style="display: flex; justify-content: center;">
    
    <carousel
    :autoplay="true"
    :autoplayTimeout="3000"
    :perPage="1"
    style="width: 400px">
      <slide class="slide" style="text-align: center">
        <h5>neokej</h5>
      </slide>
      <slide style="text-align: center">
        <h5>okej</h5>
      </slide>
      <slide style="text-align: center">
        <h5>ahoj</h5>
      </slide>
    </carousel>
  </div>
</div>
  
</template>
<script>
//docs => https://ssense.github.io/vue-carousel/api/
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  },
}
</script>
<style lang = "scss" scoped>

.slider-info{
  margin-top: 40px;
}

.VueCarousel-pagination{
  margin-top: -30px;
}

p{
  
font-family: Helvetica Neue;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;

text-align: center;

color: #192949;

}

</style>