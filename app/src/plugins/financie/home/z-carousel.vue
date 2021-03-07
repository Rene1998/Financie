<template>
<div>
  <hr>
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
        <h5>Ked si dam 2 kolesa som bicykel</h5>
      </slide>
      <slide style="text-align: center">
        <h5>Ked si dam 2 kolesa som motorka</h5>
      </slide>
      <slide style="text-align: center">
        <h5>Ked si dam 3 kolesa som trojkolka</h5>
      </slide>
    </carousel>
  </div>
  <hr>
  <div class="hardcore-text">
    <h5>Budeme pri vás, počas toho ako si plníte vaše sny a ciele</h5>
    <p>Pripravili sme si pre vás všetky finančne otázky a odpovede <br> na ktoré môžete naraziť vo vašom živote</p>
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
<style lang="scss" scoped>

.slider-info{
  margin-top: 40px;
}

.VueCarousel-dot-container{
  margin-top: -20px !important;
}

p{
font-weight: 400;
font-size: 18px;
line-height: 30px;
color: #192949; 
}

h5{
font-family: HeadlandOne;
font-size: 24px;
line-height: 30px;
color: #000000;
}

.hardcore-text{
  margin-top: 60px;

  h5{
    font-family: Helvetica Neue;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #192949;
  }

  p{
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #192949;
  }

}

hr{
width: 1138px;
height: 0px;
border: 1px solid #F3F4F5;
}

</style>


<style>
.VueCarousel-dot:focus {
  outline: none !important;
}

.VueCarousel-dot--active{
  background-color: #1EAEE1  !important;
}

.VueCarousel-dot{
width: 6px !important;
height: 6px !important;
}

.VueCarousel-pagination{
  margin-top: -45px;
}
</style>