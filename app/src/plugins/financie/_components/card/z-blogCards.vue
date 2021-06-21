<template>
	<b-row>
		<b-card no-body class="mb-5 col-12 col-lg-4 col-md-6 col-sm-6" style="min-width: 18.7rem;"
			v-for="blog in blogCards" :key="blog.id">
			<b-img class="card-img-top pb-4" :src="blog.thumbnail_image.path"/>
			<b-card-text class="timestamp mt-0">
				{{posted_at}} • zaberie to iba {{blog.time}} min 
			</b-card-text>
			<b-card-title class="mb-3">
				{{blog.title}}
			</b-card-title>
			<b-card-text class="blog mt-0 mb-4" v-html="blog.short_content"/>
			<router-link class="link" :to="rightPage + '/' + blog.slug">
				Prečítať viac
			</router-link>
		</b-card>
	</b-row>
</template>

<script>
import apiService from '@/plugins/financie/common/apiService'
import moment from 'moment'
export default {
	data () {
		return {
			blogCards: [],
			rightPage: null
		}
	},
	watch: {
		'$route.params.slug': {
			immediate: true,
			handler (val) {
				this._changeRightPage(val)
			}
		}
	},
	async mounted () {
		await this._loadCards(this.rightPage)
	},
	computed: {
		posted_at () {
			return moment(this.blogCards.created_at).lang('sk').format('LL')
		}
	},
	methods: {
		_changeRightPage (page) {
			this.rightPage = page
		},
		async _loadCards (rightPage) {
			try {
				const cards = await apiService.get(`blog/categories/slug/${rightPage}`)
				this.blogCards = cards.blog
			} catch (e) {
				console.error(e)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
	img {
		max-height: 250px;
	}
}
.blog {
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 24px;
	color: #192949;
}
.card-title {
	min-height: 90px;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 30px;
	color: #192949;
}
.link {
	text-decoration: none;
	color: #1EAEE1;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 24px;
}
</style>
