<template>
	<b-row>
		<div class="col-12 col-lg-4 col-md-6"
			v-for="advancedImgCard in advancedImgCards" :key="advancedImgCard.id">
			<b-card class="mb-2 border border-0"
				img-alt="Image"
				tag="article"
				:title="advancedImgCard.title"
				:img-src="advancedImgCard.image.path">
				<div>
					<b-card-text class="d-flex mb-5">
						{{ advancedImgCard.content }}
					</b-card-text>
					<div class="hb">	
						<b-card-body class="hb d-flex justify-content-between mr-2"
							v-if="advancedImgCard.doc1_link != ''">
							<div>
								<h6 class="mb-0">{{ advancedImgCard.doc1_link }}</h6>
							</div>
							<div>
								<a class="card-link" :href="advancedImgCard.doc1_link_download" >
									<b-icon icon="download"></b-icon>
								</a>
								<a class="card-link" target="_blank" :href="advancedImgCard.doc1_link_show">
									<b-icon icon="eye"> </b-icon>
								</a>
							</div>
						</b-card-body>
						<hr class="hb m-0" />
					</div>
						<div class="hb">
							<b-card-body
								class="d-flex justify-content-between mr-2"
								v-if="advancedImgCard.doc2_link != ''">
								<div class="m-0">
									<h6 class="m-0 mb-0">{{ advancedImgCard.doc2_link }}</h6>
								</div>
								<div>
									<a class="card-link" :href="advancedImgCard.doc1_link_download">
										<b-icon icon="download"></b-icon>
									</a>
									<a class="card-link" target="_blank" :href="advancedImgCard.doc1_link_show">
										<b-icon icon="eye"></b-icon>
									</a>
								</div>
							</b-card-body>
							<hr class="hb m-0" />
						</div>
							<b-card-body class="hb d-flex justify-content-between mr-2">
								<div>
									<h6 class="mb-0">{{ advancedImgCard.video_link }}</h6>
								</div>
								<div>
									<a class="card-link" target="_blank" :href="advancedImgCard.video_show">
										<b-icon icon="play-circle"></b-icon>
									</a>
								</div>
							</b-card-body>
				</div>
			</b-card>
		</div>
	</b-row>
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
		async _loadCards (rocnik, page, kategoria) {
			try {
				const cards = await apiService.get(`categories/slug/${page}`)
				this.advancedImgCards = cards.year_category
					.find((e) => e.slug == rocnik)
					.advanced_img_cards.filter((e) => e.type == kategoria)
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
		min-height: 210px;
	}

  	.card-title {
		margin-top: 17.5px;
		min-height: 4vw;
		color: #192949;
		font-weight: bold;
		font-style: normal;
  	}
	.card-text {
		min-height: 4vw;
	}
}
p {
	font-size: 14px;
	color: #192949;
}
.card-img-top {
  	border-radius: 4px;
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
