<template>
	<b-container>
		<b-row class="mb-5">
			<b-col>
				<div class="d-flex align-items-center mb-5">
					<b-icon icon="link45deg"/>
					<h6 class="m-0">Užitočné linky</h6>
				</div>
				<b-card no-body
					v-for="link1Card in link1Cards" :key="link1Card.id">
					<b-card-text class="timestamp mt-4">
						{{posted_at}} • zaberie to iba {{link1Card.time}} min
					</b-card-text>
					<b-card-title>
						{{ link1Card.content }}
					</b-card-title>
				</b-card>
			</b-col>
			<b-col>
				<div class="d-flex align-items-center mb-5">
					<b-icon icon="question-circle-fill"></b-icon>
					<h6 class="m-0 ml-1">Mohlo by vás zaujímať</h6>
				</div>
				<b-card no-body
					v-for="link2Card in link2Cards" :key="link2Card.id">
					<b-card-text class="timestamp mt-4">
						{{posted_at}} • zaberie to iba {{link2Card.time}} min
					</b-card-text>
					<b-card-title>
						{{ link2Card.content }}
					</b-card-title>
				</b-card>
			</b-col>
			<b-col>
				<div class="d-flex align-items-center mb-5">
					<b-icon icon="calculator-fill"></b-icon>
					<h6 class="m-0">Kalkulačky a návody</h6>
				</div>
				<b-card no-body
					v-for="link3Card in link3Cards" :key="link3Card.id">
					<b-card-text class="timestamp mt-4">
						{{posted_at}} • zaberie to iba {{link3Card.time}} min
					</b-card-text>
					<b-card-title>
						{{ link3Card.content }}
					</b-card-title>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import apiService from '@/plugins/financie/common/apiService'
import moment from 'moment'

export default {
	data () {
		return {
			linkCards: [],
			link1Cards: [],
			link2Cards: [],
			link3Cards: []
		}
	},
	computed: {
		posted_at () {
			return moment(this.linkCards.created_at).lang('sk').format('LL')
		}
	},
	async mounted () {
		await this._loadCards()
	},
	methods: {
		async _loadCards () {
			try {
				this.linkCards = await apiService.get('linkCard')
				this.link1Cards = await apiService.get('linkCard/categories/slug/uzitocne-linky', 'link_cards')
				this.link2Cards = await apiService.get('linkCard/categories/slug/mohlo-vas-zaujimat', 'link_cards')
				this.link3Cards = await apiService.get('linkCard/categories/slug/kalkulacky-navody', 'link_cards')
			} catch (e) {
				console.error(e)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
	min-height: 175px;

	&:not(:last-of-type) {
		border-bottom: 1px solid rgba(137, 137, 137, 0.2);
	}

	.card-title {
		font-size: 18px;
		font-weight: 700;

		&:hover {
			cursor: pointer;
			color: #1eaee1;
		}
	}
}
.b-icon {
	cursor: pointer;
	min-width: 28px;
	min-height: 28px;

	&:hover {
		color: #1eaee1;
	}
}
.border {
	border-top: none !important ;
	border-bottom: none !important ;
}
h6 {
	font-size: 24px;
	font-weight: bold;
	width: 280px;
}
</style>
