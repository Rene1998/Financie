<template>
<div class="container d-block align-items-center justify-content-center text-center">
        <wpH1></wpH1>
        <wpP></wpP>
          <wpHr/>
        <wpIMG/>
          <wpHr/>
        <wpLink/>
        <wpP></wpP>
        <wpP></wpP>
        <wpP></wpP>
    
    
    


    
</div>
</template>




<script>
import wpH1 from './headings/wp-h1.vue'
import wpLink from './wp-link.vue'
import wpP from './headings/wp-p.vue'
import wpIMG from './wp-image.vue'
import wpHr from './wp-hr.vue'


export default {
  components: { wpH1, wpLink, wpP, wpIMG, wpHr },
  
    
}
</script>

<style lang="scss" scoped>

 
</style>

