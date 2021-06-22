<template>
	<b-container fluid class="progressBar" :class="{isSticky: pageScrollBarPositon > progressBar}" >
		<b-container>
			<b-row class="progressBar-row d-flex m-0">
				<a class="z-btn btn rounded-0"
					@click="scrollTo(vedeliSte)"
					:class="{
						isActive:
							0 <= pageScrollPositon && pageScrollPositon < zakladneInformacie,
					}">
					Vedeli ste, že...
				</a>
				<a class="z-btn btn rounded-0"
					@click="scrollTo(zakladneInformacie)"
					:class="{
						isActive:
							zakladneInformacie <= pageScrollPositon &&
							pageScrollPositon < najnovsieClanky,
					}">
					Základné informácie
				</a>
				<a class="z-btn btn rounded-0"
					@click="scrollTo(najnovsieClanky)"
					:class="{
						isActive:
							najnovsieClanky <= pageScrollPositon &&
							pageScrollPositon < najnovsieProdukty,
					}">
					Najnovšie články
				</a>
				<a class="z-btn btn rounded-0"
					@click="scrollTo(najnovsieProdukty)"
					:class="{
						isActive:
							najnovsieProdukty <= pageScrollPositon &&
							pageScrollPositon < uzitocneLinky,
					}">
					Najnovšie produkty a služby
				</a>
				<a class="z-btn btn rounded-0"
					@click="scrollTo(uzitocneLinky)"
					:class="{ isActive: uzitocneLinky <= pageScrollPositon }">
					Užitočné linky a zaujímavosti
				</a>
				<a href="" class="z-btn btn rounded-0">
					Kvíz
				</a>
			</b-row>
		</b-container>
	</b-container>
</template>

<script>
export default {
	watch: {
		scrollHeight (val) {
		}
	},
	data () {
		return {
			progressBar: null,
			pageScrollBarPositon: null,
			pageScrollPositon: null,
			vedeliSte: null,
			zakladneInformacie: null,
			najnovsieClanky: null,
			najnovsieProdukty: null,
			uzitocneLinky: null,
			kviz: null
		}
	},
	computed: {
		scrollHeight () {
			return window.scrollHeight
		}
	},
	mounted () {
		this.setScrollPosition()
		window.addEventListener('scroll', this.setScrollPosition)
	},
	beforeDestroy () {
		window.removeEventListener('scroll', this.setScrollPosition)
	},
	methods: {
		scrollTo (val) {
			window.scrollTo(0, val - window.outerHeight / 2)
		},
		setScrollPosition () {
			(this.pageScrollPositon = window.scrollY + window.outerHeight / 2),
			(this.pageScrollBarPositon = window.scrollY),
			(this.progressBar = document.querySelector('#progressBar').offsetTop),
			(this.vedeliSte = document.querySelector('#vedeliSte').offsetTop),
			(this.zakladneInformacie = document.querySelector('#zakladneInformacie').offsetTop),
			(this.najnovsieClanky = document.querySelector('#najnovsieClanky').offsetTop),
			(this.najnovsieProdukty = document.querySelector('#najnovsieProdukty').offsetTop),
			(this.uzitocneLinky = document.querySelector('#uzitocneLinky').offsetTop)
		}
	}
}
</script>

<style lang="scss" scoped>
.progressBar {
	background-color: #fbfbfc;
	min-height: 70px;
	a:hover {
		color: #1eaee1;
	}
	a {
		font-weight: 700;
	}
}
.btn {
	min-height: 70px;
	display: flex;
	align-items: center;
}
.isActive {
  	color: #1eaee1;
}
.isSticky {
	z-index: 999;
	position: fixed;
	top: 0;
}

@media (max-width: 1231px) {
	.progressBar {
		padding-right: 0;
		padding-left: 0;
	}
	.progressBar-row {
		display: flex;
		flex-wrap: nowrap;
		overflow-x: scroll;
		padding-right: 0;
	}

	::-webkit-scrollbar {
		height: 0;
		width: 0;
		background: transparent;
	}
	.btn {
		min-width: 200px;
	}
}
</style>
