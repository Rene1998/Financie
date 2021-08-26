<template>
	<div>
		<div class="preskoly-wrapper">
			<div class="container home-main d-flex align-items-center">
				<div>
					<h1>
						Prevedieme vás životnou
						<br />finančnou cestou.
					</h1>
					<p class="p-0 mt-4 mb-5">
						Získajte odborníka na kľúčové finančné momenty
						<br />vo vašom živote.
					</p>
				</div>
			</div>
		</div>
		<div class="d-block d-sm-block d-md-none">
			<div class="carousel-wrapper">
				<vc-home-carousel/>
			</div>
		</div>
		<div class="d-none d-md-block d-lg-block d-xl-block">
			<div class="container carousel-wrapper">
				<div class="row category-cards">
					<div class="col-md-4  mb-3">
						<vc-home-category-card title="Bývanie" img="Home.svg" link="./osobne-financie-byvanie"/>
					</div>
					<div class="col-md-4 mb-3">
						<vc-home-category-card title="Rodina a deti" img="Family-group.svg" link="./osobne-financie-rodina-a-deti"/>
					</div>
					<div class="col-md-4 mb-3">
						<vc-home-category-card title="Auto" img="Car.svg" link="./osobne-financie-auto"/>
					</div>
					<div class="col-md-4">
						<vc-home-category-card title="Dôchodok" img="OldFamily-group.svg" link="./osobne-financie-dochodok"/>
					</div>
					<div class="col-md-4">
						<vc-home-category-card title="Exekúcia" img="Execution.svg" link="./osobne-financie-exekucia"/>
					</div>
					<div class="col-md-4">
						<vc-home-category-card title="Práca a dane" img="Work.svg" link="./osobne-financie-praca-dane"/>
					</div>
				</div>
			</div>
		</div>
		<hr />

		<vc-carousel/>

		<div class="container text-center mt-5 mb-5 hardcode-text">
			<h4>
				Budeme pri vás, počas toho ako si plníte vaše sny a ciele
			</h4>
			<p>
				Pripravili sme pre vás všetky možné finančné otázky a odpovede
				<br />na ktoré móžete naraziť vo vašom živote.
			</p>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-4">
					<vc-advanced-img-home-cards 
						title="Nenechaj všetko na náhodu" 
						content="Prečo si uzavrieť poistenie? Kedy možno vypovedať zmluvu?" 
						img="image1.png"
						link="./osobne-financie-poistenie"
						link1="Životné poistenie"
						link1_redirect="./osobne-financie-poistenie-zivotne-poistenie-clanok"
						link2="Poistenie auta (neživotné poistenie)"
						link2_redirect="./osobne-financie-poistenie-auta-clanok"
						link3="Poistenie nehnuteľnosti/domácnosti"
						link3_redirect="./osobne-financie-poistenie-nehnutelnosti-clanok"
						link4="Cestovné poistenie"
						link4_redirect="./osobne-financie-poistenie-cestovne-poistenie-clanok"/>
				</div>
				<div class="col-4">
					<vc-advanced-img-home-cards 
						title="Bývajte vo vlastnom" 
						content="Variabilná úroková  sadzba, Fixácia, Americká hypotéka" 
						img="image2.png"
						link="./osobne-financie-hypotekarny-uver"
						link1="Hypotekárny úver - nadobudnutie bývania"
						link1_redirect="./osobne-financie-hypotekarny-uver-nadobudnutie-byvania-clanok"
						link2="Americká hypotéka"
						link2_redirect="./osobne-financie-hypotekarny-uver-americka-hypoteka-clanok"
						link3="Žiadosť o úver"
						link3_redirect="./osobne-financie-hypotekarny-uver-ziadost-o-uver-clanok"
						link4="Splácanie úveru"
						link4_redirect="./osobne-financie-hypotekarny-uver-splacanie-uveru-clanok"/>
				</div>
				<div class="col-4">
					<vc-advanced-img-home-cards 
						title="Financujte svoje túžby" 
						content="Úrokové sadzby – p.a., p.m., p.s., Refinancovanie" 
						img="image3.png"
						link="./osobne-financie-uver-na-spotrebu"
						link1="Spotrebný úver"
						link1_redirect="./osobne-financie-uver-na-spotrebu-spotrebny-uver-clanok"
						link2="Krátkodobé úvery"
						link2_redirect="./osobne-financie-uver-na-spotrebu-kratkodobe-uvery-clanok"
						link3="Čerpanie a splácanie"
						link3_redirect="./osobne-financie-uver-na-spotrebu-cerpanie-a-splacanie-clanok"
						link4="Nebankové úvery a pôžičky"
						link4_redirect="./osobne-financie-uver-na-spotrebu-nebankove-uvery-a-pozicky-clanok"/>
				</div>
			</div>
			<div class="row">
				<div class="col-4">
					<vc-advanced-img-home-cards 
						title="Cesta k prvej investícií" 
						content="Čo sú dividendy? Akcia? Dlhopis?" 
						img="image4.png"
						link="./osobne-financie-investovanie"
						link1="Základy investovania"
						link1_redirect="./osobne-financie-investovanie-zaklady-investovania-clanok"
						link2="Základné Investičné Príležitosti"
						link2_redirect="./osobne-financie-investovanie-zakladne-investicne-prilezitosti-clanok"
						link3="Investičné princípy"
						link3_redirect="./osobne-financie-investovanie-investicne-principy-clanok"
						link4="Aktívne vs. pasívne investovanie"
						link4_redirect="./osobne-financie-investovanie-aktivne-vs-pasivne-investovanie-clanok"/>
				</div>
				<div class="col-4">
					<vc-advanced-img-home-cards 
						title="Orientujte sa v bankách" 
						content="IBAN, SEPA, SWIFT-BIC, Embosovaná platobná karta" 
						img="image5.png"
						link="./osobne-financie-ucty-a-karty"
						link1="Bežný Účet"
						link1_redirect="./osobne-financie-ucty-a-karty-bezny-ucet-clanok"
						link2="Sporiaci Účet"
						link2_redirect="./osobne-financie-ucty-a-karty-sporiaci-ucet-clanok"
						link3="Kreditná Karta"
						link3_redirect="./osobne-financie-ucty-a-karty-kreditna-karta-clanok"
						link4="Debetná Karta"
						link4_redirect="./osobne-financie-ucty-a-karty-debetna-karta-clanok"/>
				</div>
				<div class="col-4">
					<vc-advanced-img-home-cards 
						title="Technológie a peniaze" 
						content="Neobanka, Peer-to-peer lending, Crowdfunding, Kryptomeny" 
						img="image6.png"
						link="./osobne-financie-fintech"
						link1="Internet a Mobile Banking"
						link1_redirect="./osobne-financie-fintech-internet-a-mobile-banking-clanok"
						link2="Neobanky (N26, 365.)"
						link2_redirect="./osobne-financie-fintech-Neobanky-clanok"
						link3="Finančné platformy"
						link3_redirect="./osobne-financie-fintech-financne-platformy-clanok"
						link4="Tu nieco pojde"
						link4_redirect="./osobne-financie-fintech-zatial-nic-clanok"/>
				</div>
			</div>
		</div>

		<div>
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4 style="text-align: center">
                    Informácie ktoré vám pomôžu k správnemu investovaniu.
                </h4>
                <p style="text-align: center">
                    Pripravili sme pre vás všetky možné finančné otázky a odpovede<br>
                    na ktoré móžete naraziť vo vašom živote.
                </p>
                <p style="text-align: center">
                    <a class="fake">
                        Zobraziť všetky články
                    </a>
                </p>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	components: {
		'vc-carousel': () => import('@/vis-webcomponents/vc-carousel/vc-carousel.vue'),
		'vc-home-carousel': () => import('@/vis-webcomponents/vc-homeCarousel/vc-homeCarousel.vue'),
		'vc-home-category-card': () => import('@/vis-webcomponents/vc-homeCategoryCard/vc-homeCategoryCard.vue'),
		'vc-advanced-img-home-cards': () => import('@/vis-webcomponents/vc-advancedImgHomeCards/vc-advancedImgHomeCards.vue')
	}
}
</script>

