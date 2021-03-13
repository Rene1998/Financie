<template>
  <div>
    <div class="card d-flex align-items-center flex-column text-center">
      <div class="card-body d-flex align-items-center flex-column">
        <img class="category-card" src="/assets/rocnik1.png" alt="" />
        <h6 class="card-title">1 - 2 Ročník</h6>
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
  bottom: 80px;
  border: none;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(177, 177, 177, 0.15);
  border-radius: 4px;

  border-bottom: 5px solid transparent;
  &:hover {
    border-bottom: 5px solid #1eaee1;
    border-radius: 5px;
  }
  &:focus {
    border-bottom: 5px solid #1eaee1;
  }
}
</style>
