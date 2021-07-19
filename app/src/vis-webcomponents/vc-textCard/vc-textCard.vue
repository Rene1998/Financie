<template>
	<div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<div class="row">
			<div class="col-12">
				<div class="card mb-5"
					v-for="textCard in textCards" :key="textCard.id">
					<div class="card-body p-2">
						<p class="card-text timestamp mb-4">
							{{posted_at}} • zaberie to iba {{textCard.time}} min
						</p>
						<h4 class="card-title mb-4">
							{{textCard.content}}
						</h4>
						<p class="card-text">
							<a href="#">
								Prečítať viac
							</a>
						</p>
					</div>
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
			textCards: []
		}
	},
	computed: {
		posted_at () {
			return moment(this.textCards.created_at).lang('sk').format('LL')
		}
	},
	async mounted () {
		await this._loadCards()
	},
	methods: {
		async _loadCards () {
			try {
				const cards = await apiService.get('textCard')
				this.textCards = cards
			} catch (e) {
				console.error(e)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../plugins/financie/_theme/index.scss';
.card-title {
	font-size: 18px;
	color: #192949;
	font-weight: bold;
	font-style: normal;
}
a {
  	color: #1eaee1 !important;
	text-decoration: none !important;
}

.card {
  	&:not(:last-of-type){
   		border-bottom: 1px solid rgba(137, 137, 137, 0.2);
	}

	.card-text {
  		max-width: 523px;
	}
}
</style>
