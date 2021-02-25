<template>
  <div>
    <div class="container preskoly-container">
    <div>
      <h1>Základná škola</h1>
      <p>Pripravili sme pre vás materiály pre učiteľov zo základných škol.</p>
      <p>Základné školy • Stredné školy • Vysoke školy</p>
    </div>

  </div>

  <z-carousel></z-carousel>
  </div>
</template>
<script>
export default {
  components: {
		"z-carousel": () => import("../home/z-carousel")

	}
}
</script>
<style lang = "scss" scoped>
  .preskoly-container {
    background-image: url(/assets/group1.png);
    min-height: 500px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
  }

  .preskoly-welcome {
    display: flex;
    flex-direction: column;
  }
</style>