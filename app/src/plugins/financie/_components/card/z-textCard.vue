<template>
	<b-row>
		<b-col 
			cols="12">
			<b-card
				class="mb-3 d-flex" 
				v-for="textCard in textCards" :key="textCard.id">
					<b-card-body class="p-2">
						<b-card-text class="timestamp mb-4">
							{{posted_at}} • zaberie to iba {{textCard.time}} min
						</b-card-text>
						<b-card-title class="mb-4">
							{{textCard.content}}
						</b-card-title>
						<b-card-text>
							<a href="#">
								Prečítať viac
							</a>
						</b-card-text>
					</b-card-body>
			</b-card>
		</b-col>
	</b-row>
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
				this.textCards = cards.data
			} catch (e) {
				console.error(e)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.card-title {
	font-size: 18px;
	color: #192949;
	font-weight: bold;
	font-style: normal;
}
a {
  	color: #1eaee1;
}

.card {
  	border: 0px;
  	border-radius: 0px;

  	&:not(:last-of-type){
   		border-bottom: 1px solid rgba(137, 137, 137, 0.2);
	}

	.card-text {
  		max-width: 523px;
	}
}
</style>
