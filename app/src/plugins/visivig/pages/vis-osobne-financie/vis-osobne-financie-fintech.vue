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
                           Technológie a peniaze
                        </h1>
						<p class="mt-4 content">
                            Neobanka, Peer-to-peer lending, Crowdfunding, Kryptomeny
						</p>
						<div class="mb-5">

						</div>
					</div>
				</div>
            </div>
        </div>
        <div id="progressBar">
		    <wc-progress-bar/>
        </div>
        <div id="vedeliSte">
            <wc-carousel/>
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
                        <wc-mini-card title="Internet a Mobile Banking" desc="Peer-to-peer lending" img="Blue-home.svg" link="/osobne-financie-fintech-internet-a-mobile-banking-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <wc-mini-card title="Neobanky (N26, 365.)" desc="ApplePay, VIAMO" img="Blue-home.svg" link="/osobne-financie-fintech-Neobanky-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <wc-mini-card title="Finančné platformy" desc="Rozdiely oproti tradičným bankám" img="Blue-home.svg" link="/osobne-financie-fintech-financne-platformy-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <wc-mini-card title="Tu nieco pojde" desc="Plus 500, eToro, Finax" img="Blue-home.svg" link="/osobne-financie-fintech-zatial-nic-clanok"/>
                    </div>
                </div>
            </div>
            <div class="d-block d-sm-block d-md-none">
                <div class="carousel-wrapper">
                    <wc-osobne-financie-carousel 
                        card1_title="Internet a Mobile Banking"
                        card1_desc="Peer-to-peer lending"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-fintech-internet-a-mobile-banking-clanok"

                        card2_title="Neobanky (N26, 365.)"
                        card2_desc="ApplePay, VIAMO"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-fintech-Neobanky-clanok"

                        card3_title="Finančné platformy"
                        card3_desc="Rozdiely oproti tradičným bankám"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-fintech-financne-platformy-clanok"

                        card4_title="Tu nieco pojde"
                        card4_desc="Plus 500, eToro, Finax"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-fintech-zatial-nic-clanok"/>
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
                    <wc-link-cards/>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	components: {
		'wc-progress-bar': () => import('@/plugins/wordpress/web-components/wc-progressBar/wc-progressBar.vue'),
		'wc-carousel': () => import('@/plugins/wordpress/web-components/wc-carousel/wc-carousel.vue'),
		'wc-mini-card': () => import('@/plugins/wordpress/web-components/wc-miniCards/wc-miniCards.vue'),
		'wc-link-cards': () => import('@/plugins/wordpress/web-components/wc-linkCards/wc-linkCards.vue'),
        'wc-osobne-financie-carousel': () => import('@/plugins/wordpress/web-components/wc-osobneFinancieCarousel/wc-osobneFinancieCarousel.vue')
	}
}
</script>

