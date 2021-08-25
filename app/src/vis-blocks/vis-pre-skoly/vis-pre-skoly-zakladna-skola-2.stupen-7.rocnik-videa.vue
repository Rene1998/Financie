<template>
	<div>
        <div>
			<div class="container-fluid preskoly-main">
				<div class="container">
					<div class="preskoly-welcome-text mb-5">
						<h1 class="title">
							Základná škola 2. stupeň
						</h1>
						<p class="content">
							Pripravili sme pre vás materiály pre učiteľov z druhého stupňa <br> základných škôl.
						</p>
						<p>
							<a class="pr-2" href="./pre-skoly-zakladna-skola-1-stupen-1-rocnik-ucebne-materialy">
								Základná škola 1. stupeň
							</a>
							•
							<a class="p-2 isActiveA" href="./pre-skoly-zakladna-skola-2-stupen-5-rocnik-ucebne-materialy">
								Základná škola 2. stupeň
							</a>
							•
							<a class="p-2" href="./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy">
								Stredná škola
							</a>
						</p>
					</div>
				</div>
		</div>
		</div>
		<div class="container carousel-wrapper d-none d-md-block d-lg-block d-xl-block">
			<div class="row">
				<div class="col-2">
					<vc-category-card title="5. Ročník" img="rocnik5.svg" link="./pre-skoly-zakladna-skola-2-stupen-5-rocnik-ucebne-materialy"></vc-category-card>
				</div>
				<div class="col-2">
					<vc-category-card title="6. Ročník" img="rocnik6.svg" link="./pre-skoly-zakladna-skola-2-stupen-6-rocnik-ucebne-materialy"></vc-category-card>
				</div>
				<div class="col-2">
					<vc-category-card title="7. Ročník" img="rocnik7.svg" link="./pre-skoly-zakladna-skola-2-stupen-7-rocnik-ucebne-materialy" isactive="true"></vc-category-card>
				</div>
				<div class="col-2">
					<vc-category-card title="8. Ročník" img="rocnik8.svg" link="./pre-skoly-zakladna-skola-2-stupen-8-rocnik-ucebne-materialy"></vc-category-card>
				</div>
				<div class="col-2">
					<vc-category-card title="9. Ročník" img="rocnik9.svg" link="./pre-skoly-zakladna-skola-2-stupen-9-rocnik-ucebne-materialy"></vc-category-card>
				</div>
			</div>
		</div>
        <div class="d-block d-sm-block d-md-none">
			<div class="carousel-wrapper">
				<vc-pre-skoly-advanced-carousel 
					isactive="card3" 
					card1_title="5. Ročník" 
					card1_img="rocnik5.svg" 
					card1_link="./pre-skoly-zakladna-skola-2-stupen-5-rocnik-ucebne-materialy" 
					
					card2_title="6. Ročník" 
					card2_img="rocnik6.svg" 
					card2_link="./pre-skoly-zakladna-skola-2-stupen-6-rocnik-ucebne-materialy" 
					
					card3_title="7. Ročník" 
					card3_img="rocnik7.svg" 
					card3_link="./pre-skoly-zakladna-skola-2-stupen-7-rocnik-ucebne-materialy" 
					
					card4_title="8. Ročník" 
					card4_img="rocnik8.svg" 
					card4_link="./pre-skoly-zakladna-skola-2-stupen-8-rocnik-ucebne-materialy" 
					
					card5_title="9. Ročník" 
					card5_img="rocnik9.svg" 
					card5_link="./pre-skoly-zakladna-skola-2-stupen-9-rocnik-ucebne-materialy"
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
						class="switch-button p-0 col-6 d-flex justify-content-center align-items-center text-center"
						href="./pre-skoly-zakladna-skola-2-stupen-7-rocnik-ucebne-materialy">Učebné materiály
					</a>
				
					<a 
						class="switch-button p-0 switchIsActive col-6 d-flex justify-content-center align-items-center text-center"
						href="./pre-skoly-zakladna-skola-2-stupen-7-rocnik-videa">Videá
					</a>
				</div>
			</div>
		</div>
		<div class="container">
			<vc-advanced-img-cards page="zakladna-skola-2.stupen" year="7-rocnik" category="advancedImgCardVideo"/>
		</div>
		<div class="container text-center mb-5">
			<button class="btn-primary download-all mb-5">
				Stiahnuť všetky dokumenty
			</button>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		'vc-advanced-img-cards': () => import('@/vis-webcomponents/vc-advancedImgCards/vc-advancedImgCards.vue'),
		'vc-category-card': () => import('@/vis-webcomponents/vc-categoryCard/vc-categoryCard.vue'),
		'vc-pre-skoly-advanced-carousel' : () => import('@/vis-webcomponents/vc-preSkolyAdvancedCarousel/vc-preSkolyAdvancedCarousel.vue')
	}
}
</script>