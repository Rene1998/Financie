<template>
  <div class="container">
    <div id="carouselContent" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active text-center p-4">
                 <h5>Vedeli ste, že...</h5>
                 <h1>Vstúpiť do II. piliera je možné len do dovŕšenia 35 rokov.</h1>
            </div>
            <div class="carousel-item text-center p-4">
                
                <p>Jokadej babka</p>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselContent" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselContent" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang = "scss" scoped>
  .carousel-control-prev-icon {
    background-color: #19283B;
  }
  .carousel-control-next-icon{
    background-color: #19283B;
  }
  .carousel-item h1{
    font-size: 30px;
    color: #19283B;
  }
  .carousel-item h5{
    font-size: 20px;
    color: #19283B;
  }
</style>