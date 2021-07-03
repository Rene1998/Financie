<template>
	<footer>
		<b-container>
			<b-row class="footer-row d-flex align-content-center pt-3 ml-3">
				<b-col cols="12" lg="3" sm="6">
					<h5 class="text-left">
						Životné situácie
					</h5>
					<ul class="pl-0 list-unstyled">
						<li class="footer-li">
							<router-link to="/osobne-financie/auto">Auto</router-link>
						</li>
						<li class="footer-li">
							<router-link to="/osobne-financie/praca-dane">Práce a dane</router-link>
						</li>
						<li class="footer-li">
							<router-link to="/osobne-financie/rodina-deti">Rodina a deti</router-link>
						</li>
						<li class="footer-li">
							<router-link to="/osobne-financie/byvanie">Bývanie</router-link>
						</li>
						<li class="footer-li">
							<router-link to="/osobne-financie/dochodok">Dôchodok</router-link>
						</li>
						<li class="footer-li">
							<router-link to="/osobne-financie/exekucia">Exekúcia</router-link>
						</li>
					</ul>
				</b-col>
				<b-col cols="12" lg="3" sm="6">
					<h5 class="text-left">Finančné produkty</h5>
					<ul class="pl-0 list-unstyled">
						<li class="footer-li">
							<router-link to="/osobne-financie/poistenie">Poistenie</router-link>
						</li>
						<li class="footer-li">
							<router-link to="/osobne-financie/hypotekarny-uver">Hypotekárny úver</router-link>
						</li>
						<li class="footer-li">
							<router-link to="/osobne-financie/uver-na-spotrebu">Úver na spotrebu</router-link>
						</li>
						<li class="footer-li">
							<router-link to="/osobne-financie/investovanie">Investovanie</router-link>
						</li>
						<li class="footer-li">
							<router-link to="/osobne-financie/bankove-ucty-a-platobne-karty">Účty a karty</router-link>
						</li>
						<li class="footer-li">
							<router-link to="/osobne-financie/fintech">Fintech</router-link>
						</li>
					</ul>
				</b-col>
				<b-col cols="3" class="d-none d-lg-block">
					<h5 class="text-left">Pomôcky</h5>
					<ul class="pl-0 list-unstyled">
						<li class="footer-li">
							<a href="#!">Porovnania</a>
						</li>
						<li class="footer-li">
							<a href="#!">Nástrahy</a>
						</li>
						<li class="footer-li">
							<a href="#!">Kalkulačky</a>
						</li>
						<li class="footer-li">
							<a href="#!">Slovník </a>
						</li>
					</ul>
				</b-col>
				<b-col cols="3" class="d-none d-lg-block">
					<h5 class="text-left">Životné situácie</h5>
					<ul class="pl-0 list-unstyled">
						<li class="footer-li">
							<a href="#!">O nás</a>
						</li>
						<li class="footer-li">
							<a href="#!">Kontakt</a>
						</li>
					</ul>
				</b-col>
			</b-row>
		</b-container>

		<b-container fluid class="copyright-main">
			<b-container class="copyright-container">
				<b-row class="copyright-row d-sm-flex align-items-center ml-3">
					<router-link to="/">
						<b-img :src="require('./assets/logodark.svg')" class="mr-3" alt="logo"/>
					</router-link>
					<p class="copy m-0">
						© 2021 <a href="#" class="financie-link">www.financie.sk</a>
						Všetky práva vyhradené.
					</p>
					<div class="ml-auto d-none d-lg-block">
						<router-link to="/home">
							<a href="" class="btn z-btn rounded-0">Osobné financie</a></router-link>
						<router-link to="/pre-skoly/zakladna-skola-1.stupen">
							<a class="btn z-btn rounded-0">Pre školy</a>
						</router-link>
					</div>
				</b-row>
			</b-container>
		</b-container>
	</footer>
</template>

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

  p {
	  font-size: 14px;
  }

  .copyright-row {
    background: #fbfbfc;
    min-height: 80px;

	img {
		vertical-align:baseline;
	}
    .financie-link {
      color: #1eaee1;
	  font-size: 14px;
    }
    @media (max-width: 500px) {
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
