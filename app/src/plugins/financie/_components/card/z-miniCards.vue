<template>
  <div>
    <div class="card d-flex align-items-center flex-column text-center">
      <div class="card-body d-flex align-items-center flex-column">
        <img class="category-card mt-4" src="https://i1.wp.com/www.busybuddiesng.com/wp-content/uploads/2020/01/Hazard.jpg?fit=1024%2C1016&ssl=1" alt="" />
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
    height: 40px;
    width: 40px;
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
