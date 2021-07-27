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
                            Rodina a deti
                        </h1>
						<p class="mt-4 content">
							Finančná rezerva, rodinný rozpočet, príjmy, výdavky, dedičstvo
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
                    <vc-mini-card title="Rozpočet domácnosti" desc="Aké sú základné princípy pre hospodárenie domácnosti?" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Deti" desc="Ako je najvýhodnejšie sporiť deťom?" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Manželstvo" desc="Ako sa finančne pripraviť na svadbu? Na čo myslieť z finančného hľadiska?" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Ako financovať vzdelanie?" desc="" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
            </div>
        </div>
        <div class="d-block d-sm-block d-md-none">
			<div class="carousel-wrapper">
				<vc-osobne-financie-carousel 
                    card1_title="Rozpočet domácnosti"
                    card1_desc="Aké sú základné princípy pre hospodárenie domácnosti?"
                    card1_img="Blue-home.svg"
                    card1_link="/osobne-financie-rodina-a-deti-rozpocet-domacnosti-clanok"

                    card2_title="Deti"
                    card2_desc="Ako je najvýhodnejšie sporiť deťom?"
                    card2_img="Blue-home.svg"
                    card2_link="/osobne-financie-rodina-a-deti-clanok"

                    card3_title="Manželstvo"
                    card3_desc="Ako sa finančne pripraviť na svadbu? Na čo myslieť z finančného hľadiska?"
                    card3_img="Blue-home.svg"
                    card3_link="/osobne-financie-rodina-a-deti-manzelstvo-clanok"

                    card4_title="Ako financovať vzdelanie?"
                    card4_desc="Ako financovať vzdelanie?"
                    card4_img="Blue-home.svg"
                    card4_link="/osobne-financie-rodina-a-deti-financovanie-vzdelania-clanok"/>
			</div>
		</div>
        <div class="container text-center mt-5 mb-5 hardcode-text">
            <h4>
                Najnovšie články o rodine
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