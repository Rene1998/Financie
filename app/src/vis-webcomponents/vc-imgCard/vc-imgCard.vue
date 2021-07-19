<template>
	<div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<div class="row">
			<div class="col-12 p-0"
				v-for="imgCard in imgCards"
				:class="'col-md-6'" :key="imgCard.id">
				<div class="card mb-2 border-0 p-4">
					<img class="card-img-top pb-3" :src="imgCard.image.path"/>
					<p class="card-text d-flex align-items-center timestamp">
						{{ posted_at }} • zaberie to iba {{ imgCard.time }} min
					</p>
					<h4 class="card-title">
						{{ imgCard.title }}
					</h4>
					<p class="card-text content">
						{{ imgCard.content }}
					</p>
					<p class="card-text pt-3">
						<a href="#">Prečítať viac</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import apiService from '@/plugins/financie/common/apiService'
import moment from 'moment'
export default {
	data () {
		return {
			imgCards: []
		}
	},
	async mounted () {
		await this._loadCards()
	},
	computed: {
		posted_at () {
			return moment(this.imgCards.created_at)
				.lang('sk')
				.format('LL')
		}
	},
	methods: {
		async _loadCards () {
			try {
				const cards = await apiService.get('imgCard')
				this.imgCards = cards
			} catch (e) {
				console.error(e)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../plugins/financie/_theme/index.scss';
img {
	height: 290px;
}
.card-title{
	font-size: 18px;
	color: #192949;
	font-weight: bold;
	font-style: normal;
	min-height: 3vw;
}
.content {
	min-height: 6vw;
}
a {
	color: #1eaee1;
	text-decoration: none;
}
.timestamp {
	min-height: 50px;
}
</style>
