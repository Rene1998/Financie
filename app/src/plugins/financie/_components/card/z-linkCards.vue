<template>
  <div class="card ">
    <div class="body">
      <p class="mt-4">31. júl 2020 • 4 min prečítanie</p>
      <div class="pointer">
         <a>
        Bankové poplatky - <br />
        zoznam banových <br />
        poplatkov
      </a>  
      </div>
     
    </div>
  </div>
</template>
<script></script>

<style lang="scss" scoped>
.card {
  border: none;
  width: 307px;
  height: 175px;

  p {
    font-size: 14px;

    color: #898989;
  }

  .pointer{
      cursor: pointer;
     
     &:hover{
         color: #1eaee1;
     }
      a{
          font-size: 18px;
          font-weight: 700; 
      }
  }  


  
}
</style>
