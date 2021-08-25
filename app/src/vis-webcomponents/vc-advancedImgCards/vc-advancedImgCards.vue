<template>
	<div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
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
							<div class="card-body">
								<div class="d-flex justify-content-between align-items-center mr-2"
									v-if="advancedImgCard.doc1_link != ''">
									<div>
										<h6 class="mb-0">
											{{ advancedImgCard.doc1_link }}
										</h6>
									</div>
									<div>
										<a @click="download(advancedImgCard.doc1_link_download.id, advancedImgCard.doc1_link_download.file_name)" class="card-link">
											<i class="bi bi-download"/>
										</a>
										<a class="card-link" target="_blank" :href="advancedImgCard.doc1_link_show.path">
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
										<a @click="download(advancedImgCard.doc2_link_download.id, advancedImgCard.doc2_link_download.file_name)" class="card-link">
											<i class="bi bi-download"/>
										</a>
										<a class="card-link" target="_blank" :href="advancedImgCard.doc2_link_show.path">
											<i class="bi bi-eye"/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<hr class="hb m-0" v-if="advancedImgCard.video_link != ''"/>
						<div class="card-body">
							<div class="hb d-flex justify-content-between align-items-center mr-2" 
								v-if="advancedImgCard.video_link != ''">
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
	</div>
</template>

<script>
import axios from 'axios'
import apiService from '@/plugins/financie/common/apiService'
export default {
	props: {
		year: '',
		page: '',
		category: ''
	},
	data () {
		return {
			advancedImgCards: []
		}
	},
	mounted() {
		this._loadCards(this.year, this.page, this.category)
	},
	methods: {
		async download (id, filename) {
			try {
				const pdfDownloadLink = await apiService.get(`${id}`)
				const link = document.createElement('a')
				link.style.display = 'none'
				link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(pdfDownloadLink))
				link.setAttribute('download', filename)
				link.click()
				document.body.removeChild(link)
			} catch (e) {
				console.error(e)
			}
		},
		async _loadCards (year, page, category) {
			console.log(year, category)
			try {
				const cards = await apiService.get(`categories/slug/${page}`)
				this.advancedImgCards = cards.year_category
					.find((e) => e.slug == year)
					.advanced_img_cards.filter((e) => e.type == category)
			} catch (e) {
				console.error(e)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../plugins/financie/_theme/index.scss';
.card {
	img {
		max-height: 210px;
	}
	.card-body {
	padding: 10px;
	padding-left: 0px !important;
	padding-right: 0px !important;
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
	color:#192949;
	font-size: 16px;
	line-height: 30px;
	font-weight: 400;
}
a {
  	color: #d1d4d8;

	&:hover {
		color: #1eaee1;
	}
}
</style>
