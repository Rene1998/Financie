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
                            Práca a dane
                        </h1>
						<p class="mt-4 content">
							Nezdaniteľné minimum (NČZD)
						</p>
						<div class="m-5">

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
                        <vc-mini-card title="Dane" desc="Za akých podmienok musím zdaniť príjem z predaja bytu?" img="Blue-home.svg" link="/osobne-financie-praca-a-dane-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Samostatná zárobková činnosť" desc="Aké sú lehoty na podanie daňového priznania pre SZČO?" img="Blue-home.svg" link="/osobne-financie-praca-a-dane-samostatna-zarobkova-cinnost-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Ako si zvýšiť príjem?" desc="Ako si privyrábať?" img="Blue-home.svg" link="/osobne-financie-praca-a-dane-zvysenie-prijmu-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Pracujem" desc="Začínam pracovať po škole. Na čo myslieť?" img="Blue-home.svg" link="/osobne-financie-praca-a-dane-pracujem-clanok"/>
                    </div>
                </div>
            </div>
            <div class="d-block d-sm-block d-md-none">
                <div class="carousel-wrapper">
                    <vc-osobne-financie-carousel 
                        card1_title="Dane"
                        card1_desc="Za akých podmienok musím zdaniť príjem z predaja bytu?"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-praca-a-dane-clanok"

                        card2_title="Samostatná zárobková činnosť"
                        card2_desc="Aké sú lehoty na podanie daňového priznania pre SZČO?"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-praca-a-dane-samostatna-zarobkova-cinnost-clanok"

                        card3_title="Ako si zvýšiť príjem?"
                        card3_desc="Ako si privyrábať?"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-praca-a-dane-zvysenie-prijmu-clanok"

                        card4_title="Pracujem"
                        card4_desc="Začínam pracovať po škole. Na čo myslieť?"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-praca-a-dane-pracujem-clanok"/>
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