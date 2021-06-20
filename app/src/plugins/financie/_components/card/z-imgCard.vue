<template>
	<b-row>
		<b-col class="p-0" cols="12" 
			v-for="imgCard in imgCards"
			:class="{'col-md-6':!single}" :key="imgCard.id">
				<b-card no-body class="mb-2 border-0 p-4">
						<b-img class="card-img-top pb-3" :src="imgCard.image.path"/>
						<b-card-text class="timestamp">
							{{ posted_at }} • zaberie to iba {{ imgCard.time }} min
						</b-card-text>
						<b-card-title>
							{{ imgCard.title }}
						</b-card-title>
						<b-card-text class="content">
							{{ imgCard.content }}
						</b-card-text>
						<b-card-text class="pt-3">
							<a href="#">Prečítať viac</a>
						</b-card-text>
				</b-card>
		</b-col>
	</b-row>
</template>

<script>
import apiService from '@/plugins/financie/common/apiService'
import moment from 'moment'
export default {
	props: {
		single: {
			type: Boolean
		}
	},
	data () {
		return {
			imgCards: [],
			rightPage: null
		}
	},
	watch: {
		'$route.name': {
			immediate: true,
			handler (val) {
				this._actualPage(val)
			}
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
				this.imgCards = cards.data.filter((x) =>
					x.category.filter((y) => y.slug == this.rightPage).length
				)
			} catch (e) {
				console.error(e)
			}
		},
		_actualPage (page) {
			this.rightPage = page
		}
	}
}
</script>

<style lang="scss" scoped>
img {
	max-height: 285px !important;
}
.card-title{
	font-size: 18px;
	color: #192949;
	font-weight: bold;
	font-style: normal;
	min-height: 2.5vw;
}
.content {
	min-height: 5.5vw;
}
a {
	color: #1eaee1;
	text-decoration: none;
}
</style>
