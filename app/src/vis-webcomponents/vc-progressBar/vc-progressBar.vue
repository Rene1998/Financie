<template>
	<div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<div class=" container-fluid progressBar" :class="{isSticky: pageScrollBarPositon > progressBar}" >
			<div class="container ">
				<div class="progressBar-row row d-flex m-0">
					<a class="z-btn btn rounded-0 sm"
						@click="scrollTo(vedeliSte)"
						:class="{
							isActive:
								0 <= pageScrollPositon && pageScrollPositon < zakladneInformacie,
						}">
						Vedeli ste, že...
					</a>
					<a class="z-btn btn rounded-0 md"
						@click="scrollTo(zakladneInformacie)"
						:class="{
							isActive:
								zakladneInformacie <= pageScrollPositon &&
								pageScrollPositon < najnovsieClanky,
						}">
						Základné informácie
					</a>
					<a class="z-btn btn rounded-0 md"
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
					<a class="z-btn btn rounded-0 md"
						@click="scrollTo(uzitocneLinky)"
						:class="{ isActive: uzitocneLinky <= pageScrollPositon }">
						Užitočné linky a zaujímavosti
					</a>
					<a href="" class="z-btn btn rounded-0 fake xs">
						Kvíz
					</a>
				</div>
			</div>
		</div>
	</div>
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
		document.onreadystatechange = () => {
			if (document.readyState === 'complete') {
				this.setScrollPosition()
				window.addEventListener('scroll', this.setScrollPosition)
			}
		}
	},
	beforeDestroy () {
		window.removeEventListener('scroll', this.setScrollPosition)
	},
	methods: {
		scrollTo (val) {
			window.scrollTo(0, val - window.outerHeight / 2)
		},
		setScrollPosition () {
			this.pageScrollPositon = window.scrollY + window.outerHeight / 2
			this.pageScrollBarPositon = window.scrollY
			this.progressBar = document.querySelector('#progressBar').offsetTop
			this.vedeliSte = document.querySelector('#vedeliSte').offsetTop
			this.zakladneInformacie = document.querySelector('#zakladneInformacie').offsetTop
			this.najnovsieClanky = document.querySelector('#najnovsieClanky').offsetTop
			this.najnovsieProdukty = document.querySelector('#najnovsieProdukty').offsetTop
			this.uzitocneLinky = document.querySelector('#uzitocneLinky').offsetTop
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../plugins/financie/_theme/index.scss';
.progressBar {
	background-color: #fbfbfc;
	min-height: 70px;
	
	a {
		color:#192949;
		font-weight: 700;
	}

	a:hover {
		color: #1eaee1;
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
	.progressBar, .container {
		padding-right: 0;
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
		min-width:200px ;
		display: flex;
		justify-content: center;
	}

	.sm{
		min-width: 150px !important;
	}

	.md{
		min-width: 190px !important;
	}

	.xs{
		min-width: 100px !important;
	}
}
</style>
