<template>
	<div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<footer  :class="{'PreSkolyFooter': page}">
			<div class="container">
				<div class="row footer-row d-flex align-content-center pt-3 ml-0">
					<div class="col-12 col-lg-3 col-sm-6 main-footer">
						<h5 class="text-left">
							Životné situácie
						</h5>
						<ul class="pl-0 list-unstyled">
							<li class="footer-li">
								<a href="/osobne-financie-auto">Auto</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie-praca-a-dane">Práce a dane</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie-rodina-a-deti">Rodina a deti</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie-byvanie">Bývanie</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie-dochodok">Dôchodok</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie-exekucia">Exekúcia</a>
							</li>
						</ul>
					</div>
					<div class="col-12 col-lg-3 col-sm-6">
						<h5 class="text-left">Finančné produkty</h5>
						<ul class="pl-0 list-unstyled">
							<li class="footer-li">
								<a href="/osobne-financie-poistenie">Poistenie</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie-hypotekarny-uver">Hypotekárny úver</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie-uver-na-spotrebu">Úver na spotrebu</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie-investovanie">Investovanie</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie-ucty-a-karty">Účty a karty</a>
							</li>
							<li class="footer-li">
								<a href="/osobne-financie-fintech">Fintech</a>
							</li>
						</ul>
					</div>
					<div class="col-3 d-none d-lg-block">
						<h5 class="text-left">Pomôcky</h5>
						<ul class="pl-0 list-unstyled">
							<li class="footer-li fake">
								<a href="#!">Porovnania</a>
							</li>
							<li class="footer-li fake">
								<a href="#!">Nástrahy</a>
							</li>
							<li class="footer-li fake">
								<a href="#!">Kalkulačky</a>
							</li>
							<li class="footer-li fake">
								<a href="#!">Slovník </a>
							</li>
						</ul>
					</div>
					<div class="col-3">
						<ul class="pl-0 list-unstyled">
							<li class="footer-li">
								<a href="o-nas/#dozvite-sa-o-nas-viac">
									<h5>
										O nás
									</h5>
								</a>
							</li>
							<li class="footer-li">
								<a href="o-nas/#kontaktujte-nas">
									<h5>
										Kontakt
									</h5>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="container-fluid copyright-main p-0">
				<div class="container copyright-container">
					<div class="row copyright-row d-sm-flex align-items-center ml-3">
						<a href="./home">
							<img v-if="page" :src="require('./assets/logodark.svg')" class="mr-3" alt="logo"/>
							<img v-else :src="require('./assets/logo-osobne-financie.svg')" class="mr-3" alt="logo"/>
						</a>
						<p class="copy m-0">
							© 2021 <a href="#" class="financie-link">www.financie.sk</a>
							Všetky práva vyhradené.
						</p>
						<div class="ml-auto d-none d-lg-block">
							<a href="./home">
								<a class="btn footer-navigation-osobne-financie rounded-0">Osobné financie</a></a>
							<a href="./pre-skoly-zakladna-skola-1-stupen-1-rocnik">
								<a class="btn footer-navigation-pre-skoly rounded-0">Pre školy</a>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			page: false
		}
	},
	mounted() {
    this.page = window.location.pathname.startsWith('/pre-skoly')
    console.log(this.page, window.location.pathname)
	}
}
</script>

<style lang="scss" scoped>
@import '../../plugins/financie/_theme/index.scss';
footer {
  background: #19283b;
  .footer-row {
    min-height: 310px;
  }

  @media (max-width: 575px) {
		.main-footer {
	  		padding-top: 10px;
  		}
  }

  a {
    text-decoration: none;
    font-size: 14px;
    line-height: 30px;
    color: #FFFFFF;
  }

  a:hover {
	  color: #FFFFFF;
  }

  h5 {
    font-size: 15px;
    color: #FFFFFF;
	font-weight: bold;
  }

  .footer-navigation-osobne-financie, .footer-navigation-pre-skoly {
	font-family: Helvetica Neue,sans-serif!important;
	color: #FFFFFF;
	font-weight: 400;
	border-radius: 0px;
	padding: 10px 15px;
	border-bottom: 3px solid transparent;
  }
  
  .footer-navigation-osobne-financie:hover {
	border-bottom: 3px solid #1eaee1;
  	border-radius: 0px;
  }

  .footer-navigation-pre-skoly:hover {
	border-bottom: 3px solid #FFA800;
  	border-radius: 0px;
  }

  p {
	  font-size: 14px;
	  color: #FFFFFF;
  }

  .copyright-row {
    background: #19283b;
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

.PreSkolyFooter {
  background: #FFA800;
  .footer-row {
    min-height: 310px;
  }

  @media (max-width: 575px) {
		.main-footer {
	  		padding-top: 10px;
  		}
  }
  
  a {
    text-decoration: none;
    font-size: 14px;
    line-height: 30px;
    color: #19283b;
  }

  a:hover {
	  color: #19283b;
  }

  h5 {
    font-size: 15px;
    color: #19283b;
	font-weight: bold;
  }

  .footer-navigation {
	font-family: Helvetica Neue,sans-serif!important;
	color: #19283b;
	font-weight: 400;
	border-radius: 0px;
	padding: 10px 15px;
	border-bottom: 3px solid transparent;
  }
  
  .footer-navigation:hover {
	border-bottom: 3px solid #19283b;
  	border-radius: 0px;
  }

  p {
	  font-size: 14px;
  }

  .copyright-row {
    background: #FFA800;
    min-height: 80px;

	img {
		vertical-align:baseline;
	}
    .financie-link {
      color: #19283b;
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
