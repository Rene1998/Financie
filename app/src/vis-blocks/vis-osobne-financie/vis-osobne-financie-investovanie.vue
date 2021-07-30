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
                            Financujte svoje túžby
                        </h1>
						<p class="mt-4 content">
							Úrokové sadzby – p.a., p.m., p.s., Refinancovanie
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
                        <vc-mini-card title="Základy investovania" desc="Kedy začať investovať" img="Blue-home.svg" link="/osobne-financie-investovanie-zaklady-investovania-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Základné Investičné Príležitosti" desc="Investovanie do akcií" img="Blue-home.svg" link="/osobne-financie-investovanie-zakladne-investicne-prilezitosti-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Investičné princípy" desc="Rozdiel medzi investovaním a sporením" img="Blue-home.svg" link="/osobne-financie-investovanie-investicne-principy-clanok"/>
                    </div>
                    <div class="col-md-3">
                        <vc-mini-card title="Aktívne vs. pasívne investovanie" desc="Aké je to akívne investovanie -výhody anevýhody" img="Blue-home.svg" link="/osobne-financie-investovanie-aktivne-vs-pasivne-investovanie-clanok"/>
                    </div>
                </div>
            </div>
            <div class="d-block d-sm-block d-md-none">
                <div class="carousel-wrapper">
                    <vc-osobne-financie-carousel 
                        card1_title="Základy investovania"
                        card1_desc="Kedy začať investovať"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-investovanie-zaklady-investovania-clanok"

                        card2_title="Základné Investičné Príležitosti"
                        card2_desc="Investovanie do akcií"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-investovanie-zakladne-investicne-prilezitosti-clanok"

                        card3_title="Investičné princípy"
                        card3_desc="Rozdiel medzi investovaním a sporením"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-investovanie-investicne-principy-clanok"

                        card4_title="Aktívne vs. pasívne investovanie"
                        card4_desc="Aké je to akívne investovanie -výhody anevýhody"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-investovanie-aktivne-vs-pasivne-investovanie-clanok"/>
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