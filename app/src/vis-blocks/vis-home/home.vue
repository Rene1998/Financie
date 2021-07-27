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
							<vc-homeCategoryCard
								class="mt-2"
								:card="card"/>
						</router-link>
					</p>
				</slide>
			</carousel>
		</div>
		<div class="d-none d-md-block d-lg-block d-xl-block">
			<div class="container carousel-wrapper">
				<div class="row category-cards">
					<div
						class="col-4 mb-3"
						:title="card.title"
						:icon="card.icon"
						:link="card.link"
						v-for="card in cards"
						:key="card.title">
						<p>
							<router-link :to="'/osobne-financie/' + card.link">
								<vc-homeCategoryCard
									class="mt-2"
									:card="card"/>
							</router-link>
						</p>
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

		<div class="container">
			<div class="row">
				<div class="col">
					<vc-showArticles/>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row mb-5">
				<div class="col-12 col-md-6">
					<vc-imgCard :single='true'/>
				</div>
				<span class="divider border-left"></span>
				<div class="col pl-2 pl-md-5 d-flex align-items-end">
					<vc-textCard/>
				</div>
			</div>
		</div>
		<custom-tags-blog></custom-tags-blog>
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
	components: {
		Carousel,
		Slide,
		'custom-tags-blog': () => import('../../native-components/custom-tags-blog.vue'),
		'vc-homeCategoryCard': () => import('@/vis-webcomponents/vc-homeCategoryCard/vc-homeCategoryCard.vue'),
		'vc-carousel': () => import('@/vis-webcomponents/vc-carousel/vc-carousel.vue'),
		'vc-showArticles': () => import('@/vis-webcomponents/vc-showArticles/vc-showArticles.vue'),
		'vc-imgCard': () => import('@/vis-webcomponents/vc-imgCard/vc-imgCard.vue'),
		'vc-textCard': () => import('@/vis-webcomponents/vc-textCard/vc-textCard.vue'),
		'vc-advancedImgHomeCards': () => import('@/vis-webcomponents/vc-advancedImgHomeCards/vc-advancedImgHomeCards.vue')
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

