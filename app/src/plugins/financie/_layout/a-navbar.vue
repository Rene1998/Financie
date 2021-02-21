<template>
	<div>
  <b-navbar toggleable="lg" type="light" variant="light">
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mr-auto">

      <img class="financie" src="../../../assets/logo.png" alt="logo">

      </b-navbar-nav>

      
      <b-navbar-nav class="ml-auto">
          
          <b-nav-item-dropdown text="Osobné financie" right>
            <b-dropdown-item href="#"></b-dropdown-item>
            <b-dropdown-item href="#"></b-dropdown-item>
            <b-dropdown-item href="#"></b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Pre školy" right>
            <b-dropdown-item href="#">Základné školy</b-dropdown-item>
            <b-dropdown-item href="#">Stredné školy</b-dropdown-item>
            <b-dropdown-item href="#">Vysoké školy</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item>
              <b-icon icon="search"></b-icon>
          </b-nav-item>

        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style lang = "scss" scoped>
  .financie{
    width: 120px;
    min-height: 38px;
  }
  .navbar{
    height: 63px;
  }
  
</style>