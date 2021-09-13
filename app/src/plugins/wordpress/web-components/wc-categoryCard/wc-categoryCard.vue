<template>
	<div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<a class="text-decoration-none" :href="link">
			<div class="card d-flex align-items-center flex-column text-center" :class="{isActive:isactive}">
				<div class="card-body d-flex align-items-center flex-column">
					<img class="category-card" :src="require(`./assets/${img}`)"/>
					<h4 class="card-title mt-3">
						{{ title }}
					</h4>	
				</div>
			</div>	
		</a>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		img: String,
		link: String,
		isactive: String
	}
}
</script>

<style lang="scss" scoped>
@import '../../../_theme/index.scss';
.card {
	cursor: pointer;
	border: none;
	background: #ffffff;
	box-shadow: 0px 4px 20px rgba(177, 177, 177, 0.15);
	border-bottom: 5px solid transparent;

	&:hover {
		border-bottom: 5px solid #FFA800;
		border-radius: 5px;
	}
	&:focus {
		border-bottom: 5px solid #FFA800;
	}
}
.card-title {
	font-size: 18px;
	font-weight: 400;
}
.isActive {
	border-bottom: 5px solid #FFA800;
	border-radius: 5px;
}
@media (max-width:500px) {
	.card {
		margin: auto;
		max-width: 18rem;
	}
}
a {
	color: #19283b;
	&:hover {
		color: #19283b;
	}
}
</style>
