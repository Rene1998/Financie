<template>
	<footer>
		<div class="container-fluid">
		<div class="row footer-row">

			<div class="col-2 offset-1">
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

			<div class="col-2">
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

			<div class="col-2">
				<h5>Pomôcky</h5>
				<ul>
            <li class="footer-li"><a href="#!">Porovnania</a></li>
            <li class="footer-li"><a href="#!">Nástrahy</a></li>
            <li class="footer-li"><a href="#!">Kalkulačky</a></li>
            <li class="footer-li"><a href="#!">Slovník </a></li>
                </ul>
			</div>

			<div class="col-2">
				<h5>Životné situácie</h5>
				<ul>
            <li class="footer-li"><a href="#!">O nás</a></li>
            <li class="footer-li"><a href="#!">Kontakt</a></li>
                </ul>
			</div>

		</div>

		<div class="row copyright-row">
			<div class="col-lg-10 offset-1">
				<div class="row">
					<img src="logodark.png" alt="logo">
				<p>© 2021 www.financie.sk Všetky práva vyhradené.</p>
				</div>
			</div>
		</div>

		</div>
	</footer>
</template>
<style lang="scss" scoped>
	.footer-row {
		background: rgba(226, 227, 232, 0.15);
		min-height: 350px;
		border: 1px solid lightcoral;
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
		border: 1px solid lightgreen;
		background: rgba(226, 227, 232, 0.15);
		min-height: 100px;
		display: flex;
		align-content: center;
	}


	
</style>