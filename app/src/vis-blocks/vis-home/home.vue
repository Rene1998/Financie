<template>
	<div>
		<div class="preskoly-wrapper">
			<div class="container home-main d-flex align-items-center">
				<div>
					<h1>
						Prevedieme vás životnou
						<br />finančnou cestou.
					</h1>
					<p class="p-0 mt-4 mb-5">
						Získajte odborníka na kľúčové finančné momenty
						<br />vo vašom živote.
					</p>
				</div>
			</div>
		</div>
		<div class="d-block d-sm-block d-md-none">
			<div class="carousel-wrapper">
				<vc-home-carousel/>
			</div>
		</div>
		<div class="d-none d-md-block d-lg-block d-xl-block">
			<div class="container carousel-wrapper">
				<div class="row category-cards">
					<div class="col-md-4  mb-3">
						<vc-home-category-card title="Bývanie" img="Home.svg" link="./osobne-financie/byvanie"/>
					</div>
					<div class="col-md-4 mb-3">
						<vc-home-category-card title="Rodina a deti" img="Family-group.svg" link="./osobne-financie/rodina-deti"/>
					</div>
					<div class="col-md-4 mb-3">
						<vc-home-category-card title="Auto" img="Car.svg" link="./osobne-financie/auto"/>
					</div>
					<div class="col-md-4">
						<vc-home-category-card title="Dôchodok" img="OldFamily-group.svg" link="./osobne-financie/dochodok"/>
					</div>
					<div class="col-md-4">
						<vc-home-category-card title="Exekúcia" img="Execution.svg" link="./osobne-financie/exekucia"/>
					</div>
					<div class="col-md-4">
						<vc-home-category-card title="Práca a dane" img="Work.svg" link="./osobne-financie/praca-dane"/>
					</div>
				</div>
			</div>
		</div>
		<hr />

		<vc-carousel/>

		<div class="container text-center mt-5 mb-5 hardcode-text">
			<h4>
				Budeme pri vás, počas toho ako si plníte vaše sny a ciele
			</h4>
			<p>
				Pripravili sme pre vás všetky možné finančné otázky a odpovede
				<br />na ktoré móžete naraziť vo vašom živote.
			</p>
		</div>

		<div class="container">
			<vc-advancedImgHomeCards/>
		</div>
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
	components: {
		Carousel,
		Slide,
		'vc-carousel': () => import('@/vis-webcomponents/vc-carousel/vc-carousel.vue'),
		'vc-home-carousel': () => import('@/vis-webcomponents/vc-homeCarousel/vc-homeCarousel.vue'),
		'vc-home-category-card': () => import('@/vis-webcomponents/vc-homeCategoryCard/vc-homeCategoryCard.vue'),
		'vc-advancedImgHomeCards': () => import('@/vis-webcomponents/vc-advancedImgHomeCards/vc-advancedImgHomeCards.vue')
	}
}
</script>

