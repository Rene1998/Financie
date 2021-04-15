<template>
  <footer>
    <div class="container">
      <div class="row footer-row d-flex align-content-center">
        <div class="col-3">
          <h5 class="text-left">Životné situácie</h5>
          <ul class="pl-0 list-unstyled">
            <li class="footer-li"><a href="#!">Auto</a></li>
            <li class="footer-li"><a href="#!">Práce a dane</a></li>
            <li class="footer-li"><a href="#!">Rodina a deti</a></li>
            <li class="footer-li"><a href="#!">Bývanie</a></li>
            <li class="footer-li"><a href="#!">Dôchodok</a></li>
            <li class="footer-li"><a href="#!">Exekúcia</a></li>
          </ul>
        </div>

        <div class="col-3">
          <h5 class="text-left">Finančné produkty</h5>
          <ul class="pl-0 list-unstyled">
            <li class="footer-li"><a href="#!">Poistenie</a></li>
            <li class="footer-li"><a href="#!">Hypotekárny úver</a></li>
            <li class="footer-li"><a href="#!">Úver na spotrebu</a></li>
            <li class="footer-li"><a href="#!">Investovanie</a></li>
            <li class="footer-li"><a href="#!">Účty a karty</a></li>
            <li class="footer-li"><a href="#!">Fintech</a></li>
          </ul>
        </div>

        <div class="col-3">
          <h5 class="text-left">Pomôcky</h5>
          <ul class="pl-0 list-unstyled">
            <li class="footer-li"><a href="#!">Porovnania</a></li>
            <li class="footer-li"><a href="#!">Nástrahy</a></li>
            <li class="footer-li"><a href="#!">Kalkulačky</a></li>
            <li class="footer-li"><a href="#!">Slovník </a></li>
          </ul>
        </div>

        <div class="col-3">
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
        <div class="row copyright-row d-flex align-content-center">
          <div
            class="col-lg-12 copyright-col d-flex flex-row align-items-center"
          >
            <img class="mr-3" src="./assets/logodark.png" alt="logo" />
            <p class="copy m-0">
              © 2021 www.financie.sk Všetky práva vyhradené.
            </p>
            <div class="ml-auto ">
              <a href="" class="btn z-btn rounded-0">Osobné financie</a>a
              <a href="zakladne-skoly" class="btn z-btn rounded-0"
                >Pre školy</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
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

    .btn {
      padding: 21.5px 15px;
      &a:hover {
        color: #1eaee1 !important;
      }
    }
  }
}
</style>
