<template>
	<div class="container-fluid d-flex justify-content-center text-center" :class="{'pre-skoly': page}">
		<div class="row d-flex flex-sm-col">
			<p class="d-flex align-items-center justify-content-center mt-0 mb-0">
				Informácie ktoré vám pomôžu k správnemu investovaniu.
				<a class="d-flex justify-content-center" target="blank" href=""
				>Sledujte naše video podcasty</a>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	watch: {
		'$route.name': {
			immediate: true,
			handler (val) {
				this.page = val == 'pre-skoly'
			}
		}
	},

	data () {
		return {
			page: false
		}
	}
}
</script>
<style lang="scss" scoped>
.pre-skoly {
	background-color: #ffa800 !important;
  a {
    color: #3a4757!important;
  }
}
.container-fluid {
  color: white;
  font-style: normal;
  min-height: 35px;
  background-color: #19283B;
  a {
    color: #1EAEE1;

    margin-left: 6px;
  }

	@media (max-width: 600px) {
		p {
			font-size: 12px;
			display: block !important;
		}

		a {
			margin: 0;
		}
		.row{
			height: 65px;
			align-items: center;
		}
	}

}
</style>
