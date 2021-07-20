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
                            Auto
                        </h1>
						<p class="mt-4 content">
							Leasing, finančný lízing, operatívny lízing, akontácia, amortizácia
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
        <div class="container mt-5 mb-5">
            <div class="row">
                <div class="col-md-3">
                    <vc-mini-card title="Financovanie auta" desc="Ako financovať kúpu auta? Leasing/Úver (pôžička)? Ktoré sa oplatí viac?" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Poistenie Auta" desc="Prečo si kedy si uzavrieť havarijné poistenie keď mám PZP?" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Kúpa a predaj" desc="Na čo myslieť pri predaji auta? Ktoré dane súvisia s vlastníctvom motorového vozidla?" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Údržba auta" desc="Nerobte si starosti súdržbou vášho auta" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
            </div>
        </div>
        <div class="container text-center mt-5 mb-5 hardcode-text">
            <h4>
                Najnovšie články o autách
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