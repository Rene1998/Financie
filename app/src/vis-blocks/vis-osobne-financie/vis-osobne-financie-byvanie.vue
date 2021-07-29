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
                            Bývanie
                        </h1>
						<p class="mt-4 content">
							Hypotéka, refinancovanie, dofinancovanie
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
                        <vc-mini-card title="Kúpa alebo prenájom" desc="Je lepšie kúpiť alebo prenajať?" img="Blue-home.svg" link="/osobne-financie-byvanie-kupa-alebo-prenajom-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Financovanie kúpy" desc="Ako dofinancovať úver?" img="Blue-home.svg" link="/osobne-financie-byvanie-financovanie-kupy-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Poistenie" desc="Ako zabezpečiť dom?" img="Blue-home.svg" link="/osobne-financie-byvanie-poistenie-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Technológie čo vedia ušetriť" desc="Presvedčte sa ako môžete ušetri’t využívaním moderných technológii" img="Blue-home.svg" link="/osobne-financie-byvanie-technologie-clanok"/>
                    </div>
                </div>
            </div>
            <div class="d-block d-sm-block d-md-none">
                <div class="carousel-wrapper">
                    <vc-osobne-financie-carousel 
                        card1_title="Kúpa alebo prenájom"
                        card1_desc="Je lepšie kúpiť alebo prenajať?"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-byvanie-kupa-alebo-prenajom-clanok"

                        card2_title="Financovanie kúpy"
                        card2_desc="Ako dofinancovať úver?"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-byvanie-financovanie-kupy-clanok"

                        card3_title="Poistenie"
                        card3_desc="Ako zabezpečiť dom?"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-byvanie-poistenie-clanok"

                        card4_title="Technológie čo vedia ušetriť"
                        card4_desc="Presvedčte sa ako môžete ušetri’t využívaním moderných technológii"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-byvanie-technologie-clanok"/>
                </div>
            </div>
        </div>
        <div id="najnovsieClanky">
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4>
                    Najnovšie články o bývaní
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