<template>
	<div>
		<div class="container-fluid preskoly-main">
			<div class="container">
				<div class="preskoly-welcome-text mb-5">
					<h1 class="title">
						{{ title }}
					</h1>
					<p class="content">
						{{ content }}
					</p>
					<p>
						<router-link
							:class="{ isActiveA: activePage == 'zakladna-skola-1.stupen' }"
							to="/pre-skoly/zakladna-skola-1.stupen">
							Základná škola 1. stupeň
						</router-link>
						•
						<router-link
							:class="{ isActiveA: activePage == 'zakladna-skola-2.stupen' }"
							to="/pre-skoly/zakladna-skola-2.stupen">
							Základná škola 2. stupeň
						</router-link>
						•
						<router-link
							:class="{ isActiveA: activePage == 'stredna-skola' }"
							to="/pre-skoly/stredna-skola">
							Stredná škola
						</router-link>
					</p>
				</div>
			</div>
		</div>
		<div class="d-block d-sm-block d-md-none">
			<carousel class="carousel-wrapper" :perPage="1">
				<slide class="slide"
					:title="card.title"
					:img="card.img"
					:link="card.link"
					v-for="card in skola" :key="card.id">
					<div class="col-10 offset-1"
						v-on:click="changeCardContent(card.link)">
						<vc-categoryCard
							:card="card"
							:activeCard="activeCard"/>
					</div>
				</slide>
			</carousel>
		</div>
		<div class="container carousel-wrapper">
			<div class="row">
				<div class="col-3 d-none d-md-block d-lg-block d-xl-block"
					:title="card.title"
					:img="card.img"
					:link="card.link"
					v-for="card in skola" :key="card.id">
					<div v-on:click="changeCardContent(card.link)">
						<vc-categoryCard
							:card="card"
							:activeCard="activeCard"/>
					</div>
				</div>
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
			<vc-advancedImgCards
				:cardContent="cardContent"
				:cardCategory="cardCategory"/>
		</div>
		<div class="container text-center mb-5">
			<button class="btn download-all mb-5">
				Stiahnuť všetky dokumenty
			</button>
		</div>
	</div>
</template>

<script>
// docs => https://ssense.github.io/vue-carousel/api/
import { Carousel, Slide } from 'vue-carousel'
export default {
	watch: {
		'$route.params.slug': {
			immediate: true,
			handler (val) {
				this.changePageContent(val)
			}
		}
	},
	data () {
		return {
			skola: null,
			title: null,
			content: null,
			cardContent: null,
			cardCategory: 'advancedImgCardLink',
			active: true,
			activeCard: null,
			activePage: null
		}
	},
	methods: {
		changePageContent (val) {
			this.skola = cardContent[val].category
			this.title = cardContent[val].title
			this.content = cardContent[val].content
			this.cardContent = cardContent[val].defaultLink
			this.activeCard = cardContent[val].defaultLink
			this.activePage = val
		},
		changeCardContent (val) {
			this.cardContent = val
			this.activeCard = val
		},
		changeCardCategory (val) {
			this.cardCategory = val
		}
	},
	components: {
		Carousel,
		Slide,
		'vc-advancedImgCards': () => import('@/vis-webcomponents/vc-advancedImgCards/vc-advancedImgCards.vue'),
		'vc-categoryCard': () => import('@/vis-webcomponents/vc-categoryCard/vc-categoryCard.vue'),
		'vc-imgCard': () => import('@/vis-webcomponents/vc-imgCard/vc-imgCard.vue'),
		'vc-textCard': () => import('@/vis-webcomponents/vc-textCard/vc-textCard.vue'),
		'vc-showArticles': () => import('@/vis-webcomponents/vc-showArticles/vc-showArticles.vue')
	}
}
</script>

<style lang="scss" scoped>
.carousel-wrapper {
	margin-top: -80px;
	margin-bottom: 80px;
}

.preskoly-main {
	background-image: url(./assets/group1.png);
	min-height: 500px;
	width: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	.container {
		display: flex;
		align-items: center;
		min-height: 500px;
	}
}

@media (max-width: 500px) {
	.preskoly-main {
		background-image: none;
		background-color: rgb(237, 239, 238);
	}
}

.download-all {
	width: 223px;
	height: 59.47px;
	background: #FFA800;
	border: none;
	border-radius: 5px !important;
	color: white;
	border: 1px solid #ffA800;

	&:hover{
		background-color: 	#ff9900;
		color: white;
		border: 1px solid #ffA800
	}

	&:focus{
		background: #FFA800;
		border: none;
		box-shadow: none;
		border: 1px solid #ff9900;
	}



}
a {
	color: rgba(25, 40, 59, 1);
	text-decoration: none;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;

	&:hover {
		color: #1eaee1;
	}
}

h5 {
	font-size: 24px;
	}
.content {
	max-width: 500px;
	font-weight: 400;
	font-size: 18px;
}

.title {
	font-weight: 700;
	font-size: 40px;
}

.switch-wrapper {
	margin: auto;

	max-width: 500px;

	.switch {
		background: rgba(118, 118, 128, 0.12);
		padding: 2px;
		border-radius: 8px;
		max-width: 498px;

		.switch-button {
		max-width: 249px;
		height: 28px;
		border: 0px;
		color: #192949;
		font-weight: 500;
		font-style: normal;

		&:hover {
			background: #ffffff;
			border: 0.5px solid rgba(0, 0, 0, 0.04);
			box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12),
			0px 3px 1px rgba(0, 0, 0, 0.04);
			border-radius: 6.93px;
		}
		}

		a{
			text-decoration: none;
		}

	}
}

.switchIsActive {
	background: #ffffff;
	border: 0.5px solid rgba(0, 0, 0, 0.04);
	box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
	border-radius: 6.93px;
}

.isActiveA {
  	color: #1eaee1;
}

hr {
	max-width: 73%;
	border: 1px solid #f3f4f5;
}

@media (max-width: 600px) {
	.divider {
		display: none;
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
.hardoce-text {
	color: #192949;
	font-weight: bold;
	font-style: normal;
}
</style>
