<template>
	<div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<div class="container-fluid d-flex justify-content-center text-center" :class="{'PreSkolyBar': page}">
			<div class="row d-flex flex-sm-col align-items-center justify-content-center">
				<p class="info mb-0 pr-1">
					Informácie ktoré vám pomôžu k správnemu investovaniu.
				</p>
				<p class="coming-soon mb-0">
					Podcasty a videá už čoskoro
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			page: false
		}
	},
	mounted() {
    this.page = window.location.pathname.startsWith('/pre-skoly')
	}
}
</script>
<style lang="scss" scoped>
@import '../../plugins/financie/_theme/index.scss';
.container-fluid {
  color: white;
  font-style: normal;
  min-height: 35px;
  background-color: #19283B;
  .coming-soon {
    color: #1EAEE1;
  }

	@media (max-width: 480px) {
		.info {
			padding-top: 10px;
			font-size: 12px;
			display: block !important;
		}
		.coming-soon {
			font-size: 12px;
			padding-bottom: 10px;
		}

		.row{
			height: 65px;
			align-items: center;
		}
	}
}
.PreSkolyBar {
  background-color: #ffa800 !important;
}
.PreSkolyBar .coming-soon {
  color: #3a4757!important;
}

</style>
