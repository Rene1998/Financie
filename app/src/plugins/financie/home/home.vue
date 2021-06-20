<template>
	<div>
		<div class="preskoly-wrapper">
			<div class="container home-main d-flex align-items-center">
				<div class="preskoly-welcome-text">
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
					v-for="card in cards"
					:key="card.title"
					:title="card.title"
					:icon="card.icon"
					:link="card.link"
					class="slide">
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
			<div class="container carousel-wrapper">
				<div class="row category-cards">
					<div
						v-for="card in cards"
						:key="card.title"
						:title="card.title"
						:icon="card.icon"
						:link="card.link"
						class="col-4 mb-3">
						<p>
							<router-link :to="'/osobne-financie/' + card.link">
								<z-homeCategoryCard
									class="mt-2"
									:card="card"
								></z-homeCategoryCard>
							</router-link>
						</p>
					</div>
				</div>
			</div>
		</div>
		<hr />
		<z-carousel></z-carousel>

		<div class="container text-center mt-5 mb-5 hardcode-text">
			<h4>Budeme pri vás, počas toho ako si plníte vaše sny a ciele</h4>
			<p>
				Pripravili sme pre vás všetky možné finančné otázky a odpovede
				<br />na ktoré móžete naraziť vo vašom živote.
			</p>
		</div>

		<div class="container">
			<z-advancedImgHomeCards></z-advancedImgHomeCards>
		</div>
		<div class="container">
			<div class="row">
				<div class="col">
					<z-showArticles></z-showArticles>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row mb-5">
				<div class="col-12 col-md-6">
					<z-imgCard :single='true'></z-imgCard>
				</div>
				<span class="divider border-left"></span>
				<div class="col pl-2 pl-md-5 d-flex align-items-end">
					<z-textCard></z-textCard>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
	components: {
		Carousel,
		Slide,
		'z-homeCategoryCard': () =>
			import('../_components/card/z-homeCategoryCard'),
		'z-carousel': () => import('./z-carousel'),
		'z-showArticles': () => import('../_components/z-showArticles'),
		'z-imgCard': () => import('../_components/card/z-imgCard'),
		'z-textCard': () => import('../_components/card/z-textCard'),
		'z-advancedImgHomeCards': () => import('./z-advancedImgHomeCards')
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

	/* mounted: function(){
        axios.get('http://localhost:8081/api/zaicard').then(function(response){
            this.zaicard = response.data;
        })
    } */
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
