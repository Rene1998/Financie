<template>
	<div>
        <div class="container-fluid byvanie-main">
			<div class="container">
				<div class="byvanie-welcome-text">
					<div class="col d-flex flex-column mb-5 b-arrow">
						<a href="./home" class="mb-5 d-flex align-items-center">
                            <i class="bi bi-arrow-left mr-2"></i>
                            Späť na hlavnú stránku
                        </a>
						<h1 mt-5>
                           Orientujte sa v bankách
                        </h1>
						<p class="mt-4 content">
                            IBAN, SEPA, SWIFT-BIC, Embosovaná platobná karta
						</p>
						<div class="mb-5">

						</div>
					</div>
				</div>
            </div>
        </div>
        <div id="progressBar">
		    <vc-progress-bar/>
        </div>
        <div id="vedeliSte">
            <vc-carousel/>
        </div>
        <div id="zakladneInformacie">
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4>
                    Základné články
                </h4>
                <p>
                    Pripravili sme pre vás všetky možné finančné otázky a odpovede <br />
                    na ktoré môžete naraziť vo vašom živote.
                </p>
            </div>
            <div class="container mt-5 mb-5 d-none d-md-block d-lg-block d-xl-block">
                <div class="row">
                    <div class="col-md-3">
                        <vc-mini-card title="Bežný Účet" desc="Ako mať bankový účet zadarmo" img="Blue-home.svg" link="/osobne-financie-ucty-a-karty-bezny-ucet-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Sporiaci Účet" desc="Ako sa odlišuje sporiaci účet od bežného účtu" img="Blue-home.svg" link="/osobne-financie-ucty-a-karty-sporiaci-ucet-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Kreditná Karta" desc="Čo je kreditná karta?" img="Blue-home.svg" link="/osobne-financie-ucty-a-karty-kreditna-karta-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Debetná Karta" desc="Čo je debetná karta?" img="Blue-home.svg" link="/osobne-financie-ucty-a-karty-debetna-karta-clano"/>
                    </div>
                </div>
            </div>
            <div class="d-block d-sm-block d-md-none">
                <div class="carousel-wrapper">
                    <vc-osobne-financie-carousel 
                        card1_title="Bežný Účet"
                        card1_desc="Ako mať bankový účet zadarmo"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-ucty-a-karty-bezny-ucet-clanok"

                        card2_title="Sporiaci Účet"
                        card2_desc="Ako sa odlišuje sporiaci účet od bežného účtu"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-ucty-a-karty-sporiaci-ucet-clanok"

                        card3_title="Kreditná Karta"
                        card3_desc="Čo je kreditná karta?"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-ucty-a-karty-kreditna-karta-clanok"

                        card4_title="Debetná Karta"
                        card4_desc="Čo je debetná karta?"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-ucty-a-karty-debetna-karta-clanok"/>
                </div>
            </div>
        </div>
        <div id="najnovsieClanky">
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4>
                    Najnovšie články o praci a danich
                </h4>
                <p>
                    Pripravili sme pre vás všetky možné finančné otázky a odpovede <br />
                    na ktoré môžete naraziť vo vašom živote.
                </p>
            </div>
        </div>
        <div id="najnovsieProdukty">
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4>
                    Najlepšie produkty na našom trhu
                </h4>
                <p>
                    Pripravili sme pre vás tie najlepšie produkty v ramci bývania...
                </p>
            </div>
        </div>
        <div id="uzitocneLinky">
            <div class="container">
                <div class="row border-center mb-5">
                    <vc-link-cards/>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	components: {
		'vc-progress-bar': () => import('@/vis-webcomponents/vc-progressBar/vc-progressBar.vue'),
		'vc-carousel': () => import('@/vis-webcomponents/vc-carousel/vc-carousel.vue'),
		'vc-mini-card': () => import('@/vis-webcomponents/vc-miniCards/vc-miniCards.vue'),
		'vc-link-cards': () => import('@/vis-webcomponents/vc-linkCards/vc-linkCards.vue'),
        'vc-osobne-financie-carousel': () => import('@/vis-webcomponents/vc-osobneFinancieCarousel/vc-osobneFinancieCarousel.vue')
	}
}
</script>