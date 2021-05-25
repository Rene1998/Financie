<template>
  <footer>
    <div class="container">
      <div class="row footer-row d-flex align-content-center pt-3 ml-3">
        <div class="col-lg-3 col-sm-6">
          <h5 class="text-left">Životné situácie</h5>
          <ul class="pl-0 list-unstyled">
            <li class="footer-li"><router-link to="/osobne-financie/auto">Auto</router-link></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Práce a dane</router-link><a href="#!">Práce a dane</a></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Rodina a deti</router-link><a href="#!">Rodina a deti</a></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Bývanie</router-link><a href="#!">Bývanie</a></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Dôchodok</router-link><a href="#!">Dôchodok</a></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Exekúcia</router-link><a href="#!">Exekúcia</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-sm-6">
          <h5 class="text-left">Finančné produkty</h5>
          <ul class="pl-0 list-unstyled">
            <li class="footer-li"><router-link to="/osobne-financie/auto">Bývanie</router-link><a href="#!">Poistenie</a></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Bývanie</router-link><a href="#!">Hypotekárny úver</a></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Bývanie</router-link><a href="#!">Úver na spotrebu</a></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Bývanie</router-link><a href="#!">Investovanie</a></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Bývanie</router-link><a href="#!">Účty a karty</a></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Bývanie</router-link><a href="#!">Fintech</a></li>
          </ul>
        </div>

        <div class="col-3 d-none d-lg-block">
          <h5 class="text-left">Pomôcky</h5>
          <ul class="pl-0 list-unstyled ">
            <li class="footer-li"><router-link to="/osobne-financie/auto">Bývanie</router-link></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Bývanie</router-link></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Bývanie</router-link></li>
            <li class="footer-li"><router-link to="/osobne-financie/auto">Bývanie</router-link></li>
          </ul>
        </div>

        <div class="col-3 d-none d-lg-block">
          <h5 class="text-left">Životné situácie</h5>
          <ul class="pl-0 list-unstyled">
            <li class="footer-li"><a href="#!">O nás</a></li>
            <li class="footer-li"><a href="#!">Kontakt</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container-fluid copyright-main">
      <div class="container copyright-container">
        <div class="row copyright-row d-sm-flex align-items-center ml-3">
        
            <router-link to="/">
            <img class="mr-3" src="./assets/logodark.svg" alt="logo" />
            </router-link>
            <p class="copy m-0">
              © 2021 <a class="financie-link">www.financie.sk</a> Všetky práva vyhradené.
            </p>
            <div class="ml-auto d-none d-lg-block">
              <a href="" class="btn z-btn rounded-0">Osobné financie</a>
              <a href="" class="btn z-btn rounded-0">Pre školy</a>
            </div>
        
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  watch: {
    "$route.name": {
      immediate: true,
      handler(val) {
        console.log(val);
      },
    },
  },
  data() {
    return {
      link: null,
    }
    
  },
  methods: {
    ugabuga(val) {
      if(val != 'osobne-financie'){
        link = 'osobne-financie/'
      } else {
        link = ''
      }
    }
  },
};
</script>

<style lang="scss" scoped>
footer {
  background: #fcfcfb;
  .footer-row {
    min-height: 310px;
  }
  a {
    text-decoration: none;
    font-size: 14px;
    line-height: 30px;
    color: #19283b;
  }

  h5 {
    font-size: 15px;
    color: #19283b;
  }

  .copyright-row {
    background: #fbfbfc;
    min-height: 80px;

  .financie-link {
    color: #1EAEE1;
  }
    @media (max-width:500px) {
      .copy {
        font-size: 13px;
      }
    }
    .btn {
      padding: 21.5px 15px;
      &a:hover {
        color: #1eaee1 !important;
      }
    }
  }
}
</style>
