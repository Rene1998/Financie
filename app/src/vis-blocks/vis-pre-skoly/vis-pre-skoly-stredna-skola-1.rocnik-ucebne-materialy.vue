<template>
	<div>
        <div>
			<div class="container-fluid preskoly-main">
				<div class="container">
					<div class="preskoly-welcome-text mb-5">
						<h1 class="title">
							Stredná škola
						</h1>
						<p class="content">
							Pripravili sme pre vás materiály pre učiteľov zo stredných škôl.
						</p>
						<p>
							<a class="pr-2" href="./pre-skoly-zakladna-skola-1-stupen-1-rocnik-ucebne-materialy">
								Základná škola 1. stupeň
							</a>
							•
							<a class="p-2" href="./pre-skoly-zakladna-skola-2-stupen-5-rocnik-ucebne-materialy">
								Základná škola 2. stupeň
							</a>
							•
							<a class="p-2 isActiveA" href="./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy">
								Stredná škola
							</a>
						</p>
					</div>
				</div>
		</div>
		</div>
		<div class="container carousel-wrapper d-none d-md-block d-lg-block d-xl-block">
			<div class="row">
				<div class="col-3">
					<vc-category-card title="1. Ročník" img="rocnik1.svg" link="./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy" isactive="true"></vc-category-card>
				</div>
				<div class="col-3">
					<vc-category-card title="2. Ročník" img="rocnik2.svg" link="./pre-skoly-stredna-skola-2-rocnik-ucebne-materialy"></vc-category-card>
				</div>
				<div class="col-3">
					<vc-category-card title="3. Ročník" img="rocnik3.svg" link="./pre-skoly-stredna-skola-3-rocnik-ucebne-materialy"></vc-category-card>
				</div>
				<div class="col-3">
					<vc-category-card title="4. Ročník" img="rocnik4.svg" link="./pre-skoly-stredna-skola-4-rocnik-ucebne-materialy"></vc-category-card>
				</div>
			</div>
		</div>
		<div class="d-block d-sm-block d-md-none">
			<div class="carousel-wrapper">
				<vc-pre-skoly-carousel
					isactive="card1"
					card1_title="1. Ročník"
					card1_img="rocnik1.svg"
					card1_link="./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy"

					card2_title="2. Ročník"
					card2_img="rocnik2.svg"
					card2_link="./pre-skoly-stredna-skola-2-rocnik-ucebne-materialy"

					card3_title="3. Ročník"
					card3_img="rocnik3.svg"
					card3_link="./pre-skoly-stredna-skola-3-rocnik-ucebne-materialy"

					card4_title="4. Ročník"
					card4_img="rocnik4.svg"
					card4_link="./pre-skoly-stredna-skola-4-rocnik-ucebne-materialy"
				/>
			</div>
		</div>
		<div class="container text-center mt-5 mb-5 hardcode-text">
			<h4>
				Boli by sme radi, aby už na základnej škole mali deti finančné
				vzdelávanie.
			</h4>
			<p>
				A preto sme učiteľom a ich žiakom na základných a stredných školách
				pripravili príručky, cvičenia a videá, ktoré vás
				<br />prevedú finančným vzdelaním.
			</p>
		</div>
		<div class="container">
			<div class="switch-wrapper mb-5">
				<div class="row switch d-flex justify-content-center align-items-center text-center">
					<a 
						class="switch-button p-0 switchIsActive col-6 d-flex justify-content-center align-items-center text-center"
						href="./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy">Učebné materiály
					</a>
				
					<a 
						class="switch-button p-0 col-6 d-flex justify-content-center align-items-center text-center"
						href="./pre-skoly-stredna-skola-1-rocnik-videa">Videá
					</a>
				</div>
			</div>
		</div>
		<div class="container">
			<vc-advanced-img-cards page="stredna-skola" year="1-rocnik" category="advancedImgCardLink"/>
		</div>
		<div class="container text-center mb-5">
			<button class="btn-primary download-all mb-5">
				Stiahnuť všetky dokumenty
			</button>
		</div>
		<div class="container text-center mt-5 mb-5 hardcode-text">
			<h4>
				Informácie ktoré vám pomôžu k správnemu investovaniu.
			</h4>
			<p>
				Pripravili sme pre vás všetky možné finančné otázky a odpovede <br> na ktoré móžete naraziť vo vašom živote.
			</p>
			<a class="fake" href="">Zobraziť všetky články</a>
		</div>
	</div>
</template>