<template>
	<div class="row">
		<div class="col-12 col-lg-4 col-md-6"
			v-for="advancedImgCard in advancedImgCards" :key="advancedImgCard.id">
			<div class="card mb-2 border border-0">	
				<div>
					<img class="card-img-top" :src="advancedImgCard.image.path" alt="Image" tag="article">
					<h4 class="card-title d-flex align-items-center">
						{{ advancedImgCard.title }}
					</h4>
					<p class="card-text d-flex mb-5">
						{{ advancedImgCard.content }}
					</p>
					<div class="hb">	
						<div class="card-body ">
							<div class="hb d-flex justify-content-between align-items-center mr-2"
								v-if="advancedImgCard.doc1_link != ''">
								<div>
									<h6 class="mb-0">
										{{ advancedImgCard.doc1_link }}
									</h6>
								</div>
								<div>
									<a class="card-link" :href="advancedImgCard.doc1_link_download">
										<i class="bi bi-download"/>
									</a>
									<a class="card-link" target="_blank" :href="advancedImgCard.doc1_link_show">
										<i class="bi bi-eye"/>
									</a>
								</div>
							</div>
						</div>
					</div>
					<hr class="hb m-0" v-if="advancedImgCard.doc2_link != ''"/>
					<div class="hb">
						<div class="card-body">
							<div class="hb d-flex justify-content-between align-items-center mr-2"
								v-if="advancedImgCard.doc2_link != ''">
								<div class="m-0">
									<h6 class="m-0 mb-0">
										{{ advancedImgCard.doc2_link }}
									</h6>
								</div>
								<div>
									<a class="card-link" :href="advancedImgCard.doc1_link_download">
										<i class="bi bi-download"/>
									</a>
									<a class="card-link" target="_blank" :href="advancedImgCard.doc1_link_show">
										<i class="bi bi-eye"/>
									</a>
								</div>
							</div>
						</div>
					</div>
					<hr class="hb m-0"/>
					<div class="card-body">
						<div class="hb d-flex justify-content-between align-items-center mr-2">
							<div>
								<h6 class="mb-0">
									{{ advancedImgCard.video_link }}
								</h6>
							</div>
							<div>
								<a class="card-link" target="_blank" :href="advancedImgCard.video_show">
									<i class="bi bi-play-circle"/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import apiService from '@/plugins/financie/common/apiService'
export default {
	props: {
		cardCategory: {
			type: String,
			required: true
		},
		cardContent: {
			type: String,
			required: true
		}
	},
	watch: {
		'$route.params.slug': {
			immediate: true,
			handler (val) {
				this._actualPage(val)
			}
		},
		cardContent: {
			immediate: true,
			handler (val) {
				this._loadCards(val, this.page, this.cardCategory)
			}
		},
		cardCategory: {
			handler (val) {
				this._loadCards(this.cardContent, this.page, val)
			}
		}
	},
	data () {
		return {
			advancedImgCards: [],
			page: null
		}
	},
	methods: {
		async _loadCards (year, page, category) {
			try {
				const cards = await apiService.get(`categories/slug/${page}`)
				this.advancedImgCards = cards.year_category
					.find((e) => e.slug == year)
					.advanced_img_cards.filter((e) => e.type == category)
			} catch (e) {
				console.error(e)
			}
		},
		_actualPage (page) {
			this.page = page
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
	img {
		max-height: 210px;
	}
	.card-body {
	padding: 10px;
	padding-left: 0px !important;
	padding-right: 0px !important;
	.hb:hover {
		color: #1eaee1 !important;
		a {
			color: #1eaee1;
		}

		hr {
			border-top: 1px solid #1eaee1 !important;
		}
	}
}
  	.card-title {
		min-height: 100px;
		color: #192949;
		font-weight: bold;
		font-style: normal;
  	}
	.card-text {
		min-height: 5vw;
	}
}
p {
	font-size: 14px;
	color: #192949;
}
.card-img-top {
  	border-radius: 4px;
}
h6 {
	font-size: 16px;
	line-height: 30px color #192949;
	font-weight: 400;
}
a {
  	color: #d1d4d8;

	&:hover {
		color: #1eaee1;
	}
}
</style>
