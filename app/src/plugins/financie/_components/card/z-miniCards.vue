<template>
  <div>
    <div class="card d-flex align-items-center flex-column text-center">
      <div class="card-body d-flex align-items-center flex-column">
        <img class="category-card mt-4" src="https://cdn.discordapp.com/attachments/695278638609727553/825344099917758464/np_home_3367736_000000_1.png" alt="" />
        <h6 class="card-title m-2">Maďarská hypotéka</h6>
        <p class="mt-4">Môžete refinancovať vašu hypotéku bez problémov.</p>
        <a class="mt-4">Prečítať viac</a>
      </div>
    </div>
  </div>
</template>
<script></script>

<style lang="scss" scoped>
.card {
  width: 270px;
  height: 282px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(177, 177, 177, 0.15);
  border-radius: 4px;

  &:hover{
      background: #FFFFFF;
      box-shadow: 0px 4px 40px rgba(177, 177, 177, 0.5);
      border-radius: 4px;
      border-bottom: 6px solid #1eaee1;
  }



  .category-card{
    width: 35.75px;
    height: 48px;
}

h6{
font-size: 18px;
font-weight: 700;
}

p{
    font-weight: 400;
    font-size: 14px;
}

a{
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
}
}


</style>
