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
                            Dôchodok
                        </h1>
						<p class="mt-4 content">
							Kedy začať sporiť na dôchodok? Ako sporiť na dôchodok? Koľko si odkladať na dôchodok?
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
                    <vc-mini-card title="1. pilier" desc="K čomu je? Ako funguje? Ako si z neho vybrať peniaze?" img="Blue-home.svg" link="/osobne-financie-dochodok-1-pilier-clanok"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="2. pilier" desc="K čomu je? Ako funguje? Ako si z neho vybrať peniaze?" img="Blue-home.svg" link="/osobne-financie-dochodok-2-pilier-clanok"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="3. pilier" desc="K čomu je? Ako funguje? Ako si z neho vybrať peniaze?" img="Blue-home.svg" link="/osobne-financie-dochodok-3-pilier-clanok"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Súkromne Sporenie" desc="Nespoliahjte sa na štát avytvorte si vlastný zdroj dôchodku" img="Blue-home.svg" link="/osobne-financie-dochodok-sukromne-sporenie-clanok"/>
                </div>
            </div>
        </div>
        <div class="d-block d-sm-block d-md-none">
			<div class="carousel-wrapper">
				<vc-osobne-financie-carousel 
                    card1_title="1. pilier"
                    card1_desc="K čomu je? Ako funguje? Ako si z neho vybrať peniaze?"
                    card1_img="Blue-home.svg"
                    card1_link="/osobne-financie-dochodok-1-pilier-clanok"

                    card2_title="2. pilier"
                    card2_desc="K čomu je? Ako funguje? Ako si z neho vybrať peniaze?"
                    card2_img="Blue-home.svg"
                    card2_link="/osobne-financie-dochodok-2-pilier-clanok"

                    card3_title="3. pilier"
                    card3_desc="K čomu je? Ako funguje? Ako si z neho vybrať peniaze?"
                    card3_img="Blue-home.svg"
                    card3_link="/osobne-financie-dochodok-3-pilier-clanok"

                    card4_title="Súkromne Sporenie"
                    card4_desc="Nespoliahjte sa na štát avytvorte si vlastný zdroj dôchodku"
                    card4_img="Blue-home.svg"
                    card4_link="/osobne-financie-dochodok-sukromne-sporenie-clanok"/>
			</div>
		</div>
        <div class="container text-center mt-5 mb-5 hardcode-text">
            <h4>
                Najnovšie články o dôchodku
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