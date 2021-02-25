<template>
  <div style="display: flex; justify-content: center;">
    <carousel
    :autoplay="true"
    :autoplayTimeout="3000"
    :perPage="1"
    style="width: 400px">
      <slide style="text-align: center">
        maro je kokot
      </slide>
      <slide style="text-align: center">
        sdfsdfsdf
      </slide>
      <slide style="text-align: center">
        sdfsdf
      </slide>
    </carousel>
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

</style>