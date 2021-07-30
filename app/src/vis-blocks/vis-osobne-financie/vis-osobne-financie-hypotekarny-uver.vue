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
                            Bývajte vo vlastnom
                        </h1>
						<p class="mt-4 content">
							Variabilná úroková sadzba, Fixácia, Americká hypotéka
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
                        <vc-mini-card title="Hypotekárny úver - nadobudnutie bývania" desc="Zabezpečenie hypotéky (zábezpeka, ručiteľ)" img="Blue-home.svg" link="/osobne-financie-hypotekarny-uver-nadobudnutie-byvania-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Americká hypotéka" desc="Čo je americká hypotéka ako funguje" img="Blue-home.svg" link="/osobne-financie-hypotekarny-uver-americka-hypoteka-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Žiadosť o úver" desc="Ako dostať najlacnejšiu hypotéku?" img="Blue-home.svg" link="/osobne-financie-hypotekarny-uver-ziadost-o-uver-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Splácanie úveru" desc="Refinancovanie (ako prebieha, kedy refinancovať)" img="Blue-home.svg" link="/osobne-financie-hypotekarny-uver-splacanie-uveru-clanok"/>
                    </div>
                </div>
            </div>
            <div class="d-block d-sm-block d-md-none">
                <div class="carousel-wrapper">
                    <vc-osobne-financie-carousel 
                        card1_title="Hypotekárny úver - nadobudnutie bývania"
                        card1_desc="Zabezpečenie hypotéky (zábezpeka, ručiteľ)"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-hypotekarny-uver-nadobudnutie-byvania-clanok"

                        card2_title="Americká hypotéka"
                        card2_desc="Čo je americká hypotéka ako funguje"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-hypotekarny-uver-americka-hypoteka-clanok"

                        card3_title="Žiadosť o úver"
                        card3_desc="Ako dostať najlacnejšiu hypotéku?"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-hypotekarny-uver-ziadost-o-uver-clanok"

                        card4_title="Splácanie úveru"
                        card4_desc="Refinancovanie (ako prebieha, kedy refinancovať)"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-hypotekarny-uver-splacanie-uveru-clanok"/>
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