<template>
	<div class="mt-2">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<div class="row">
			<div class="col-12 col-lg-4 col-md-6 shad mt-2 "
				v-for="advancedImgHomeCard in advancedImgHomeCards" :key="advancedImgHomeCard.id">
				<div class="card mb-2 border border-0 m-2" tag="article">
					<a :href="advancedImgHomeCard.link">
						<img class="card-img-top " :src="cardImg(advancedImgHomeCard)" alt="Image"/>
						<h4 class="card-title d-flex align-items-center hb">
							{{ advancedImgHomeCard.title }}
						</h4>
						<p class="card-text d-flex mb-5 hb">
							{{ advancedImgHomeCard.content }}
						</p>
					</a>
					<div class="hb">
						<a class="card-body hb d-flex justify-content-between mr-2" 
						   :href="advancedImgHomeCard.link1"> 
							<div>
								<h6 class="mb-0">
									{{ advancedImgHomeCard.titulok1 }}
								</h6>
							</div>
							<div>
								<a class="blue card-link">
									<i class="bi bi-arrow-right"/>
								</a>
							</div>
						</a>
						<hr class="hb m-0"/>
					</div>
					<div class="hb">
						<a class="card-body hb d-flex justify-content-between mr-2" 
						   :href="advancedImgHomeCard.link2"> 
							<div>
								<h6 class="mb-0">
									{{ advancedImgHomeCard.titulok2 }}
								</h6>
							</div>
							<div>
								<a class="blue card-link">
									<i class="bi bi-arrow-right"/>
								</a>
							</div>
						</a>
						<hr class="hb m-0"/>
					</div>
					<div class="hb">
						<a class="card-body hb d-flex justify-content-between mr-2" 
						   :href="advancedImgHomeCard.link3"> 
							<div>
								<h6 class="mb-0">
									{{ advancedImgHomeCard.titulok3 }}
								</h6>
							</div>
							<div>
								<a class="blue card-link">
									<i class="bi bi-arrow-right"/>
								</a>
							</div>
						</a>
						<hr class="hb m-0"/>
					</div>
					<div class="hb">
						<a class="card-body hb d-flex justify-content-between mr-2" 
						   :href="advancedImgHomeCard.link4"> 
							<div>
								<h6 class="mb-0">
									{{ advancedImgHomeCard.titulok4 }}
								</h6>
							</div>
							<div>
								<a class="blue card-link">
									<i class="bi bi-arrow-right"/>
								</a>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import pageContent from '@/vis-blocks/vis-home/osobne-financie_content_linky'
export default {
	data () {
		return {
			advancedImgHomeCards: pageContent
		}
	},
	methods: {
		cardImg (card) {
			return require(`./assets/${card.image}`)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../plugins/financie/_theme/index.scss';
.card {
	img {
		min-height: 210px;
	}

	.card-title {
		min-height: 80px;
		color: #192949;
		font-weight: bold;
		font-style: normal;
	}


}
.card-text {
	text-decoration: none;
	color: #192949;
	min-height: 3vw;
}
.card-body {
	cursor: pointer;
	padding: 10px;
	padding-left: 0px !important;
	padding-right: 0px !important;
	line-height: 24px;

	h6 {
		font-size: 16px;
		line-height: 30px;
		font-weight: 400;
	}
}

a {
	color: #192949;

	&:hover {
		color: #1eaee1;
		text-decoration: none !important;
	}
}

.hb:hover {
	color: #1eaee1 !important;

	a {
		color: #1eaee1;
	}

	hr {
		border-top: 1px solid #1eaee1 !important;
	}
}


hr{
	max-width: 500px;
	border: 1px solid #E7E7E7;
}

</style>
