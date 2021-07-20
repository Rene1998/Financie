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
                           Orientujte sa v bankách
                        </h1>
						<p class="mt-4 content">
                            IBAN, SEPA, SWIFT-BIC, Embosovaná platobná karta
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
                    <vc-mini-card title="Bežný Účet" desc="Ako mať bankový účet zadarmo" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Sporiaci Účet" desc="Ako sa odlišuje sporiaci účet od bežného účtu" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Kreditná Karta" desc="Čo je kreditná karta?" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
                <div class="col-md-3">
                    <vc-mini-card title="Debetná Karta" desc="Čo je debetná karta?" img="Blue-home.svg" link="https://financie.hybridlab.dev/pre-skoly/zakladna-skola-1.stupen"/>
                </div>
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