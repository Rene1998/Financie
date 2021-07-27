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
						<div class="m-5">

						</div>
					</div>
				</div>
            </div>
        </div>
        <vc-progress-bar/>

        <vc-carousel/>

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
                    <vc-mini-card title="Internet a Mobile Banking" desc="Peer-to-peer lending" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Neobanky (N26, 365.)" desc="ApplePay, VIAMO" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Finančné platformy" desc="Rozdiely oproti tradičným bankám" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Tu nieco pojde" desc="Plus 500, eToro, Finax" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
            </div>
        </div>
        <div class="d-block d-sm-block d-md-none">
			<div class="carousel-wrapper">
				<vc-osobne-financie-carousel 
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
        <div class="container text-center mt-5 mb-5 hardcode-text">
            <h4>
                Najnovšie články o praci a danich
            </h4>
            <p>
                Pripravili sme pre vás všetky možné finančné otázky a odpovede <br />
                na ktoré môžete naraziť vo vašom živote.
            </p>
        </div>
        <div class="container text-center mt-5 mb-5 hardcode-text">
            <h4>
                Najlepšie produkty na našom trhu
            </h4>
            <p>
                Pripravili sme pre vás tie najlepšie produkty v ramci bývania...
            </p>
        </div>
        <div class="container mb-5">
            <vc-img-card/>
        </div>
        <div class="container">
            <div class="row border-center mb-5">
                <vc-link-cards/>
            </div>
        </div>
	</div>
</template>