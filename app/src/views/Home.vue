<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <b-button variant="primary">eskere</b-button>



    <div>
  <b-card
    title="card"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    >
    <p>asokaoskaoskaoskaoskaoskaoksaoksaoskaoskaoskaskoksoaska</p>

    <b-button href="#" variant="primary">button</b-button>
    </b-card>
  </div>







  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
