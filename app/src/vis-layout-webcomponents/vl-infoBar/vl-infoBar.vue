<template>
	<div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<div class="container-fluid d-flex justify-content-center text-center">
			<div class="row d-flex flex-sm-col" :class="{PreSkolyBar:preSkoly}">
				<p class="d-flex align-items-center justify-content-center mt-0 mb-0">
					Informácie ktoré vám pomôžu k správnemu investovaniu.
					<a class="d-flex justify-content-center" target="blank" href="">
						Sledujte naše video podcasty
					</a>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		preSkoly: String
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
