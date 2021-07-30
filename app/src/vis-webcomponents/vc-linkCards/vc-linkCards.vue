<template>
	<div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<div class="container">
			<div class="row mb-5 fake">
				<div class="col">
					<div class="d-flex align-items-center mb-5">
						<i class="bi bi-link-45deg icon"/>
						<h6 class="m-0">Užitočné linky</h6>
					</div>
					<div class="card" 
						v-for="link1Card in link1Cards" :key="link1Card.id">
						<p class="timestamp mt-4">
							{{posted_at}} • zaberie to iba {{link1Card.time}} min
						</p>
						<h5>
							{{ link1Card.content }}
						</h5>
					</div>
				</div>
				<div class="col">
					<div class="d-flex align-items-center mb-5">
						<i class="bi bi-question-circle-fill icon"/>
						<h6 class="m-0 ml-1">Mohlo by vás zaujímať</h6>
					</div>
					<div class="card" 
						v-for="link2Card in link2Cards" :key="link2Card.id">
						<p class="timestamp mt-4">
							{{posted_at}} • zaberie to iba {{link2Card.time}} min
						</p>
						<h5>
							{{ link2Card.content }}
						</h5>
					</div>
				</div>
				<div class="col">
					<div class="d-flex align-items-center mb-5">
						<i class="bi bi-calculator-fill icon"/>
						<h6 class="m-0">Kalkulačky a návody</h6>
					</div>
					<div class="card" 
						v-for="link3Card in link3Cards" :key="link3Card.id">
						<p class="timestamp mt-4">
							{{posted_at}} • zaberie to iba {{link3Card.time}} min
						</p>
						<h5>
							{{ link3Card.content }}
						</h5>
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
@import '../../plugins/financie/_theme/index.scss';
.card {
	min-height: 175px;

	&:not(:last-of-type) {
		border-bottom: 1px solid rgba(137, 137, 137, 0.2);
	}

	h5 {
		font-size: 18px;
		font-weight: 700;

		&:hover {
			cursor: pointer;
			color: #1eaee1;
		}
	}
}
.icon {
	cursor: pointer;
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
