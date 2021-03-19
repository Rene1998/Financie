<template>
<div>
    <div class="card d-flex align-items-center flex-column text-center">
      <div class="card-body d-flex align-items-center flex-column mt-3">
        <b-icon class="mt-4" icon="house-door-fill"></b-icon>
        <h6 class="card-title m-0 mt-2 d-flex align-items-end">Domov</h6>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.category-card {
  height: 75px;
  width: 75px;
}
.card {
    cursor: pointer;
    height: 168px;
    width: 350px;
  border: none;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(177, 177, 177, 0.15);
  border-radius: 4px;

  border-bottom: 6px solid transparent;
  &:hover {
    border-bottom: 6px solid #1eaee1;
    border-radius: 4px;
    .b-icon{
        color: #1eaee1;
    }
  }
  &:focus {
    border-bottom: 6px solid #1eaee1;
    border-radius: 4px;
    .b-icon{
        color: #1eaee1;
    }
  }
  
}

.b-icon{
Width:32px;
Height:34px;
}

h6{
    font-size: 18px;
    font-weight: 400;
}
</style>