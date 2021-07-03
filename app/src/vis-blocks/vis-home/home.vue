<template>
	<div>
		<div class="preskoly-wrapper">
			<b-container class="home-main d-flex align-items-center">
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
			</b-container>
		</div>
		<div class="d-sm-block d-md-none">
			<carousel class="carousel-wrapper" :perPage="1">
				<slide
					class="slide"
					:title="card.title"
					:icon="card.icon"
					:link="card.link"
					v-for="card in cards"
					:key="card.title">
					<p>
						<router-link :to="'/osobne-financie/' + card.link">
							<z-homeCategoryCard
								class="mt-2"
								:card="card"
							></z-homeCategoryCard>
						</router-link>
					</p>
				</slide>
			</carousel>
		</div>
		<div class="d-none d-md-block d-lg-block d-xl-block">
			<b-container class="carousel-wrapper">
				<b-row class="category-cards">
					<div
						class="col-4 mb-3"
						:title="card.title"
						:icon="card.icon"
						:link="card.link"
						v-for="card in cards"
						:key="card.title">
						<p>
							<router-link :to="'/osobne-financie/' + card.link">
								<z-homeCategoryCard
									class="mt-2"
									:card="card"
								></z-homeCategoryCard>
							</router-link>
						</p>
					</div>
				</b-row>
			</b-container>
		</div>
		<hr />

		<z-carousel/>

		<b-container class="text-center mt-5 mb-5 hardcode-text">
			<h4>
				Budeme pri vás, počas toho ako si plníte vaše sny a ciele
			</h4>
			<p>
				Pripravili sme pre vás všetky možné finančné otázky a odpovede
				<br />na ktoré móžete naraziť vo vašom živote.
			</p>
		</b-container>

		<b-container>
			<z-advancedImgHomeCards/>
		</b-container>

		<b-container>
			<b-row>
				<b-col>
					<z-showArticles/>
				</b-col>
			</b-row>
		</b-container>

		<b-container>
			<b-row class="mb-5">
				<b-col cols="12" md="6">
					<z-imgCard :single='true'/>
				</b-col>
				<span class="divider border-left"></span>
				<b-col class="pl-2 pl-md-5 d-flex align-items-end">
					<z-textCard/>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
	components: {
		Carousel,
		Slide,
		'z-homeCategoryCard': () => import('@/vis-webcomponents/vis-homeCategoryCard/z-homeCategoryCard.vue'),
		'z-carousel': () => import('@/vis-webcomponents/vis-carousel/z-carousel.vue'),
		'z-showArticles': () => import('@/vis-webcomponents/vis-showArticles/z-showArticles.vue'),
		'z-imgCard': () => import('@/vis-webcomponents/vis-imgCard/z-imgCard.vue'),
		'z-textCard': () => import('@/vis-webcomponents/vis-textCard/z-textCard.vue'),
		'z-advancedImgHomeCards': () => import('@/vis-webcomponents/vis-advancedImgHomeCards/z-advancedImgHomeCards.vue')
	},
	data () {
		return {
			cards: [
				{
					title: 'Bývanie',
					icon: 'Home.svg',
					link: 'byvanie'
				},
				{
					title: 'Rodina a deti',
					icon: 'Family-group.svg',
					link: 'rodina-deti'
				},
				{
					title: 'Auto',
					icon: 'Car.svg',
					link: 'auto'
				},
				{
					title: 'Dôchodok',
					icon: 'OldFamily-group.svg',
					link: 'dochodok'
				},
				{
					title: 'Exekúcia',
					icon: 'Execution.svg',
					link: 'exekucia'
				},
				{
					title: 'Práca a dane',
					icon: 'Work.svg',
					link: 'praca-dane'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.carousel-wrapper {
	margin-top: -80px;
	margin-bottom: 80px;
}
.preskoly-wrapper {
	background-image: url("/assets/Group 1.png");
	min-height: 600px;
	width: 100%;
	background-position: top right;
	background-repeat: no-repeat;
	background-size: cover;

	.container {
		display: flex;
		align-items: center;
		min-height: 500px;

		h1 {
			font-weight: bold;
			font-size: 40px;
		}

		p {
			font-size: 18px;
		}
	}
}

a {
	color: rgba(25, 40, 59, 1);
	text-decoration: none;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
}

.category-cards {
  	margin-top: -250px;
}

@media (max-width: 800px) {
  	.preskoly-wrapper {
		background-image: none;
		background-color: rgb(237, 239, 238);
  	}
}

/deep/ {
	&.VueCarousel-dot:focus {
		outline: none !important;
	}

	&.VueCarousel-dot--active {
		background-color: #1eaee1 !important;
	}

	&.VueCarousel-dot {
		width: 6px !important;
		height: 6px !important;
		width: 6px !important;
		height: 6px !important;
	}
}

hr {
	max-width: 73%;
	border: 1px solid #f3f4f5;
}
</style>
