<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-auto d-flex aling-items-center">
          <b-navbar-nav class="d-flex align-items-center ">
            <b-nav-item>
              <b-icon icon="list"></b-icon>
            </b-nav-item>
          </b-navbar-nav>

          <hr />
          <router-link to="/"><img class="logo" src="./assets/logo.png" alt="logo" /></router-link>
        </b-navbar-nav>

        <b-navbar-nav class="d-flex align-items-center">
          <b-navbar-nav>
            <b-nav-item href="#" class="btn btn-nav-foot bp-3 d-flex align-items-center "
              >Osobné financie</b-nav-item
            >
          </b-navbar-nav>
          <hr />
          <b-navbar-nav>
            <b-nav-dropdown
              text="Pre školy"
              right
              class="btn btn-nav-foot bp-3 d-flex align-items-center "

            >
              <b-dropdown-item to="/pre-skoly/zakladne-skoly">Základné školy</b-dropdown-item>
              <b-dropdown-item to="/pre-skoly/stredne-skoly">Stredné školy</b-dropdown-item>
              <b-dropdown-item to="/pre-skoly/vysoke-skoly">Vysoké školy</b-dropdown-item>
            </b-nav-dropdown>
          </b-navbar-nav>
          <hr />
          <b-navbar-nav>
            <b-nav-item>
              <b-icon icon="search"></b-icon>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.navbar {
  height: 63px;

.logo {
  width: 120px;
  height: 30px;
}

.nav-link:hover {
  color: #1eaee1 !important;
}
}



/deep/ {
  &.dropdown-toggle::after {
    display: none;
  }

  &.dropdown-menu {
    width: 285px;
    height: 138px;
    border: none;
    border-radius: 0px;
  }

  &a:hover {
    color: #1eaee1 !important;
    background-color: #ffffff !important;
  }

  &.dropdown-item {
    margin-top: 6px;
  }

  &.nav-link:focus {
    outline: none !important;
  }
  
  .dropdown-toggle:hover,
  .nav-item:hover /deep/ a[role="button"] {
    color: #1eaee1 !important;
  }
}

hr {
  width: 30px;
  height: 0px;

  border: 0, 5px solid #f3f4f5;
  transform: rotate(90deg);
}
</style>
