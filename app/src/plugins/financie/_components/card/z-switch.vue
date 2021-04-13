<template>
  <div class="background d-flex align-items-center justify-content-center">
    <b-button-group>
      <button class=" p-0 ">Učebné materiály</button>
      <button class=" p-0 ">Videá</button>
    </b-button-group>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
button {
  height: 28px;
  width: 287px;
  border: 0px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 500;
  

  &:hover {
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
    border-radius: 6.93px;
  }
}

.background{
   background: rgba(118, 118, 128, 0.12);
border-radius: 8.91px;
    height: 32px;
    width: 578px;
    
}
</style>