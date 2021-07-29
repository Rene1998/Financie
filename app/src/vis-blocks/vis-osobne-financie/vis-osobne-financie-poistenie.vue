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
                            Nenechaj všetko na náhodu
                        </h1>
						<p class="mt-4 content">
							Prečo si uzavrieť poistenie? Kedy možno vypovedať zmluvu?
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
                        <vc-mini-card title="Životné poistenie" desc="Hlavné parametre životného postenia" img="Blue-home.svg" link="/osobne-financie-poistenie-zivotne-poistenie-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Poistenie auta (neživotné poistenie)" desc="Prečo si uzavrieť havarijné poistenie keď mám PZP?" img="Blue-home.svg" link="/osobne-financie-poistenie-auta-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Poistenie nehnuteľnosti/domácnosti" desc="Na čo si dávať pozor pri uzatváraní poistenia na dom?" img="Blue-home.svg" link="/osobne-financie-poistenie-nehnutelnosti-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Cestovné poistenie" desc="Kedy a prečo sa oplatí?" img="Blue-home.svg" link="/osobne-financie-poistenie-cestovne-poistenie-clanok"/>
                    </div>
                </div>
            </div>
            <div class="d-block d-sm-block d-md-none">
                <div class="carousel-wrapper">
                    <vc-osobne-financie-carousel 
                        card1_title="Životné poistenie"
                        card1_desc="Hlavné parametre životného postenia"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-poistenie-zivotne-poistenie-clanok"

                        card2_title="Poistenie auta (neživotné poistenie)"
                        card2_desc="Prečo si uzavrieť havarijné poistenie keď mám PZP?"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-poistenie-auta-clanok"

                        card3_title="Poistenie nehnuteľnosti/domácnosti"
                        card3_desc="Na čo si dávať pozor pri uzatváraní poistenia na dom?"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-poistenie-nehnutelnosti-clanok"

                        card4_title="Cestovné poistenie"
                        card4_desc="Kedy a prečo sa oplatí?"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-poistenie-cestovne-poistenie-clanok"/>
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