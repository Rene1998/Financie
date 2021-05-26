<template>
  <div>
    <z-blog></z-blog>

    <div class="container text-center mt-5 mb-5 hardcode-text">
      <h4>Najlepšie produkty na našom trhu</h4>
      <p>Pripravili sme pre vás tie najlepšie produkty v ramci hypotek...</p>
    </div>

    <div class="container mb-5">
      <z-imgCard></z-imgCard>
    </div>

    <div class="container">
      <div class="row border-center mb-5">
        <z-linkCards></z-linkCards>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    "z-blog": () => import("../_components/z-blog"),
    "z-imgCard": () => import("../_components/card/z-imgCard"),
    "z-linkCards": () => import("../_components/card/z-linkCards"),
  },
};
</script>
<style lang="scss" scoped>

</style>