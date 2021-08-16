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

<style lang="scss">
.carousel-wrapper {
  margin-top: -80px;
  margin-bottom: 80px;
}

.preskoly-wrapper {
  background-image: url("./assets/Group 1.png");
  min-height: 600px;
  width: 100%;
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;
}

.preskoly-wrapper .container {
  display: flex;
  align-items: center;
  min-height: 500px;
}

.preskoly-wrapper .container h1 {
  font-weight: bold;
  font-size: 40px;
}

.preskoly-wrapper .container p {
  font-size: 18px;
}

a {
  color: #19283b;
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;cursor: pointer;
}

.category-cards {
  margin-top: -250px;
}

@media (max-width: 800px) {
  .preskoly-wrapper {
    background-image: none;
    background-color: #edefee;
  }
}

hr {
  max-width: 73%;
  border: 1px solid #f3f4f5;
}

.hardcode-text h4 {
  font-size: 24px !important;
  font-weight: 700 !important;
}

.hardcode-text p {
  font-size: 18px;
  font-weight: 400;
}

.isActive {
  border-bottom: 5px solid #ffa800;
  border-radius: 5px;
}

.line-height {
  line-height: normal;
}
.timestamp {
  color: #898989 !important;
  font-family: "Helvetica Neue" sans-serif !important;
  font-size: 14px !important;
}
.blog-title {
  font-size: 18px !important;
  color: #192949 !important;
  font-weight: 700 !important;
  font-style: normal!important;
}
.blog-title:hover {
  color: #1eaee1!important;
}

.card-content {
  color: #19283b;
  text-decoration: none;
  font-style: normal;
  font-size: 14px;
  font-weight: normal!important;
}

.card-content:hover {
  color: #1eaee1!important;
}


.hardcode-text h4 {
  font-size: 24px;
  font-weight: 700;
}

.hardcode-text p {
  font-size: 18px;
  font-weight: 400;
}

.fake {
	opacity: 0.2 !important;
}
</style>

