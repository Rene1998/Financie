<template>
  <div class="container-fluid d-flex justify-content-center text-center">
    <div class="row d-flex flex-sm-col">
      <p class="d-flex align-items-center justify-content-center mt-0 mb-0">
        Informácie ktoré vám pomôžu k správnemu investovaniu.
        <a class="d-flex justify-content-center" href=""
          >Sledujte naše video podcasty</a
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  color: white;
  font-style: normal;
  min-height: 35px;
  background-color: #ffa800;
  a {
    color: #3a4757;
    margin-left: 6px;
  }

  @media (max-width: 600px) {
    p {
      font-size: 12px;
      display: block !important;
    }

    a {
      margin: 0;
    }
    .row{
      height: 65px;
      align-items: center;
    }
  }
}
</style>
