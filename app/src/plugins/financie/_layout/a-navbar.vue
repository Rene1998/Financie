<template>
  <div>
    <b-navbar type="light">
      <b-navbar-nav class="mr-auto d-flex aling-items-center">
        <b-navbar-nav class="d-none align-items-center">
          <b-nav-item>
            <b-icon icon="list"></b-icon>
          </b-nav-item>
        </b-navbar-nav>

        <router-link to="/">
          <img class="logo" src="./assets/logo.svg" alt="logo" />
        </router-link>
      </b-navbar-nav>

      <b-navbar-nav class="d-flex align-items-center">
        <b-navbar-nav>
          <b-nav-item
            to="/home"
            href="#"
            class="btn osobne-financie z-btn bp-3 d-flex align-items-center"
            :class="{ isActive: page == 'home' || page == 'osobne-financie' }"
            >Osobné financie</b-nav-item>
        </b-navbar-nav>
        <hr />
        <b-navbar-nav>
          <b-nav-dropdown
            text="Pre školy"
            right
            class="btn z-btn pre-skoly bp-3 d-flex align-items-center text-center justify-content-center"
            :class="{ isActive: page == 'pre-skoly' }">
            <b-dropdown-item to="/pre-skoly/zakladne-skoly"
              >Základné školy</b-dropdown-item>
            <b-dropdown-item to="/pre-skoly/stredne-skoly"
              >Stredné školy</b-dropdown-item>
            <b-dropdown-item to="/pre-skoly/vysoke-skoly"
              >Vysoké školy</b-dropdown-item>
          </b-nav-dropdown>
        </b-navbar-nav>
        <hr />
        <b-navbar-nav>
          <b-nav-item>
            <b-icon icon="search"></b-icon>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: "home",
      active: true,
    };
  },
  watch: {
    "$route.name": {
      immediate: true,
      handler(val) {
        this.actualPage(val);

      },
    },
  },
  methods: {
    actualPage(page) {
      this.page = page;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 63px;

  .nav-link:hover {
    color: #1eaee1 !important;
  }

  a {
    color: #192949 !important;
  }

  hr {
    width: 30px;
    height: 0px;

    border: 0, 5px solid #f3f4f5;
    transform: rotate(90deg);
  }
}

/deep/ {
  &a {
    font-weight: 400 !important;
  }

  &.isActive {
    border-radius: 0px;
    padding: 10px 15px;
    border-bottom: 3px solid transparent;
    border-bottom: 3px solid #1eaee1;
    border-radius: 0px;

    a {
      color: #1eaee1 !important;
    }

    .dropdown-item {
      color: #192949 !important;
      &:hover {
        color: #1eaee1 !important;
      }
    }
  }

  &a {
    color: #192949 !important;
  }

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
}

@media only screen and (max-width: 420px) {
  .navbar {
    max-width: 420px;
  }

  .osobne-financie {
    display: none !important;
  }

  .pre-skoly {
    max-width: 92px;
  }

  .logo {
    width: 102px;
    height: 27px;
  }
}

@media only screen and (max-width: 350px) {
  .navbar {
    max-width: 350;
  }

  .osobne-financie {
    display: none !important;
  }

  .pre-skoly {
    max-width: 92px;
  }

  .logo {
    width: 102px;
    height: 27px;
  }
}
</style>
