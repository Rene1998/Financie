<template>
	<div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<footer>
			<div class="container">
				<div class="row footer-row d-flex align-content-center pt-3 ml-3">
					<div class="col-12 col-lg-3 col-sm-6">
						<h5 class="text-left">
							Životné situácie
						</h5>
						<ul class="pl-0 list-unstyled">
							<li class="footer-li">
								<a href="/osobne-financie/auto">Auto</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie/praca-dane">Práce a dane</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie/rodina-deti">Rodina a deti</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie/byvanie">Bývanie</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie/dochodok">Dôchodok</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie/exekucia">Exekúcia</a>
							</li>
						</ul>
					</div>
					<div class="col-12 col-lg-3 col-sm-6">
						<h5 class="text-left">Finančné produkty</h5>
						<ul class="pl-0 list-unstyled">
							<li class="footer-li">
								<a href="/osobne-financie/poistenie">Poistenie</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie/hypotekarny-uver">Hypotekárny úver</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie/uver-na-spotrebu">Úver na spotrebu</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie/inveshrefvanie">Inveshrefvanie</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie/bankove-ucty-a-plahrefbne-karty">Účty a karty</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie/fintech">Fintech</a>
							</li>
						</ul>
					</div>
					<div class="col-3 d-none d-lg-block">
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
					</div>
					<div class="col-3 d-none d-lg-block">
						<h5 class="text-left">Životné situácie</h5>
						<ul class="pl-0 list-unstyled">
							<li class="footer-li">
								<a href="#!">O nás</a>
							</li>
							<li class="footer-li">
								<a href="#!">Kontakt</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="container-fluid copyright-main">
				<div class="container copyright-container">
					<div class="row copyright-row d-sm-flex align-items-center ml-3">
						<a href="/">
							<img :src="require('./assets/logodark.svg')" class="mr-3" alt="logo"/>
						</a>
						<p class="copy m-0">
							© 2021 <a href="#" class="financie-link">www.financie.sk</a>
							Všetky práva vyhradené.
						</p>
						<div class="ml-auto d-none d-lg-block">
							<a href="/home">
								<a href="" class="btn z-btn rounded-0">Osobné financie</a></a>
							<a href="/pre-skoly/zakladna-skola-1.stupen">
								<a class="btn z-btn rounded-0">Pre školy</a>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<style lang="scss" scoped>
@import '../../plugins/financie/_theme/index.scss';
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
