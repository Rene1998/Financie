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
                            Exekúcia
                        </h1>
						<p class="mt-4 content">
							Exekúcia, nevymožiteľná čiastka, osobný bankrot, exekučná zrážka
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
                        <vc-mini-card title="Exekúcia" desc="Na čo sa vzťahuje exekúcia? Na čo sa nevzťahuje exekúcia?" img="Blue-home.svg" link="/osobne-financie-exekucia-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Pred Exekúciou" desc="Čo robiť ak mi hrozí exekúcia? Je možné dostať úver, keď som v exekúcií?" img="Blue-home.svg" link="/osobne-financie-exekucia-pred-exekuciou-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Počas exekúcie" desc="Aké druhy oddlženia existujú? Aký druh mám vybrať ak nechcem prísť o majetok?" img="Blue-home.svg" link="/osobne-financie-exekucia-pocas-exekucie-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Právo a financie" desc="Orientujte sa vo finančno-právnom svete" img="Blue-home.svg" link="/osobne-financie-exekucia-pravo-a-financie-clanok"/>
                    </div>
                </div>
            </div>
            <div class="d-block d-sm-block d-md-none">
                <div class="carousel-wrapper">
                    <vc-osobne-financie-carousel 
                        card1_title="Exekúcia"
                        card1_desc="Na čo sa vzťahuje exekúcia? Na čo sa nevzťahuje exekúcia?"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-exekucia-clanok"

                        card2_title="Pred Exekúciou"
                        card2_desc="Čo robiť ak mi hrozí exekúcia? Je možné dostať úver, keď som v exekúcií?"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-exekucia-pred-exekuciou-clanok"

                        card3_title="Počas exekúcie"
                        card3_desc="Aké druhy oddlženia existujú? Aký druh mám vybrať ak nechcem prísť o majetok?"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-exekucia-pocas-exekucie-clanok"

                        card4_title="Právo a financie"
                        card4_desc="Orientujte sa vo finančno-právnom svete"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-exekucia-pravo-a-financie-clanok"/>
                </div>
            </div>
        </div>
        <div id="najnovsieClanky">
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4>
                    Najnovšie články o exekúcií
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