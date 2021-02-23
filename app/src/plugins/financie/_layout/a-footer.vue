<template>
	<footer>
		<div class="container">
		<div class="row footer-row">

			<div class="col-3">
				<h5>Životné situácie</h5>
				<ul>
            <li class="footer-li"><a href="#!">Auto</a></li>
            <li class="footer-li"><a href="#!">Práce a dane</a></li>
            <li class="footer-li"><a href="#!">Rodina a deti</a></li>
            <li class="footer-li"><a href="#!">Bývanie</a></li>
			<li class="footer-li"><a href="#!">Dôchodok</a></li>
            <li class="footer-li"><a href="#!">Exekúcia</a></li>	
                </ul>
			</div>

			<div class="col-3">
				<h5>Finančné produkty</h5>
				<ul>
            <li class="footer-li"><a href="#!">Poistenie</a></li>
            <li class="footer-li"><a href="#!">Hypotekárny úver</a></li>
            <li class="footer-li"><a href="#!">Úver na spotrebu</a></li>
            <li class="footer-li"><a href="#!">Investovanie</a></li>
			<li class="footer-li"><a href="#!">Účty a karty</a></li>
            <li class="footer-li"><a href="#!">Fintech</a></li>
                </ul>
			</div>

			<div class="col-3">
				<h5>Pomôcky</h5>
				<ul>
            <li class="footer-li"><a href="#!">Porovnania</a></li>
            <li class="footer-li"><a href="#!">Nástrahy</a></li>
            <li class="footer-li"><a href="#!">Kalkulačky</a></li>
            <li class="footer-li"><a href="#!">Slovník </a></li>
                </ul>
			</div>

			<div class="col-3">
				<h5>Životné situácie</h5>
				<ul>
            <li class="footer-li"><a href="#!">O nás</a></li>
            <li class="footer-li"><a href="#!">Kontakt</a></li>
                </ul>
			</div>

		</div>

		<div class="row copyright-row">
			<div class="col-lg-12 offset-1 copyright-col">
						<img  class="mr-3" src="assets/logodark.png" alt="logo">
						<p class="copy m-0">© 2021 www.financie.sk Všetky práva vyhradené.</p>
						<div class="ml-auto ">
							<button type="button" class="btn pb-3">Osobné financie</button>
							<button type="button" class="btn pb-3">Pre školy</button>
						</div>
							
			</div>
		</div>

		</div>
	</footer>
</template>
<script>
export default {
	
}
</script>

<style lang="scss" scoped>

	footer { 
		background: #FBFBFC;
	}

	.footer-row {
		min-height: 310px;
		///border: 1px solid lightcoral;
		display: flex;
		align-content: center;
		
	}

	a {
		text-decoration: none;
		font-style: normal;
		font-size: 14px;
		line-height: 30px;
		color: #19283B;
	}

	ul {
		padding-left: 0;
		list-style: none;
	}

	h5 {
		text-align: left;
		font-size: 15px;
		color: #19283B;
	}
	///
	.copyright-row { 
		///border: 1px solid lightgreen;
		background: #FBFBFC;
		min-height: 90px;
		display: flex;
		align-content: center;
	}

	.copyright-col { 
		display: flex;
		flex-direction: row;
		align-items: center;
	}


	.btn { 
		border-radius: 0px;
	}

	.btn:hover{ 
		border-bottom: 3px solid #1EAEE1;
		border-radius: 0px;
	}
	
	.btn:focus { 
		box-shadow: none;
		border-bottom: 3px solid #1EAEE1;
	}

</style>