<template>
	<div class="mt-2">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<div class="mt-2">
			<div class="card mb-2 border border-0 m-2" tag="article">
				<a :href="link">
					<img class="card-img-top" alt="Image" :src="require(`./assets/${img}`)"/>
					<h4 class="card-title d-flex align-items-center hb">
						{{ title }}
					</h4>
					<p class="card-text d-flex mb-5 hb">
						{{ content }}
					</p>
				</a>
				<div class="hb">
					<a class="card-body hb d-flex justify-content-between mr-2" 
						:href="link1_redirect"> 
						<div>
							<h6 class="mb-0">
								{{ link1 }}
							</h6>
						</div>
						<div>
							<a class="blue card-link">
								<i class="bi bi-arrow-right"/>
							</a>
						</div>
					</a>
					<hr class="hb m-0"/>
				</div>
				<div class="hb">
					<a class="card-body hb d-flex justify-content-between mr-2" 
						:href="link2_redirect"> 
						<div>
							<h6 class="mb-0">
								{{ link2 }}
							</h6>
						</div>
						<div>
							<a class="blue card-link">
								<i class="bi bi-arrow-right"/>
							</a>
						</div>
					</a>
					<hr class="hb m-0"/>
				</div>
				<div class="hb">
					<a class="card-body hb d-flex justify-content-between mr-2" 
						:href="link3_redirect"> 
						<div>
							<h6 class="mb-0">
								{{ link3 }}
							</h6>
						</div>
						<div>
							<a class="blue card-link">
								<i class="bi bi-arrow-right"/>
							</a>
						</div>
					</a>
					<hr class="hb m-0"/>
				</div>
				<div class="hb">
					<a class="card-body hb d-flex justify-content-between mr-2" 
						:href="link4_redirect"> 
						<div>
							<h6 class="mb-0">
								{{ link4 }}
							</h6>
						</div>
						<div>
							<a class="blue card-link">
								<i class="bi bi-arrow-right"/>
							</a>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		content: String,
		img: String,
		link: String,
		link1: String,
		link1_redirect: String,
		link2: String,
		link2_redirect: String,
		link3: String,
		link3_redirect: String,
		link4: String,
		link4_redirect: String,
	}
}
</script>

<style lang="scss" scoped>
@import '../../../_theme/index.scss';
.card {
	img {
		min-height: 210px;
	}

	.card-title {
		min-height: 80px;
		color: #192949;
		font-weight: bold;
		font-style: normal;
	}

}
.card-text {
	text-decoration: none;
	color: #192949;
	min-height: 4vw;
}
.card-body {
	cursor: pointer;
	padding: 10px;
	padding-left: 0px !important;
	padding-right: 0px !important;
	line-height: 24px;

	h6 {
		font-size: 16px;
		line-height: 30px;
		font-weight: 400;
	}
}

a {
	color: #192949;

	&:hover {
		color: #1eaee1;
		text-decoration: none !important;
	}
}

.hb:hover {
	color: #1eaee1 !important;

	a {
		color: #1eaee1;
	}

	hr {
		border-top: 1px solid #1eaee1 !important;
	}
}


hr{
	max-width: 500px;
	border: 1px solid #E7E7E7;
}

</style>
