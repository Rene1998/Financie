<template>
	<div class="row">
		<div class="card d-flex align-items-center flex-column text-center">
			<div class="card-body d-flex align-items-center flex-column">
				<img class="category-card mt-4" :src="cardIcon"/>
				<h6 class="card-title m-2">
					{{ card.title }}
				</h6>
				<p class="mt-4 height">
					{{ card.text }}
				</p>
				<router-link :to="'/osobne-financie/clanky/' + card.link"><p class="mt-4">Prečítať viac</p></router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		card: {
			type: Object,
			required: true
		}
	},
	computed: {
		cardIcon () {
			return require(`./assets/${this.card.icon}`)
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
  width: 270px;
  height: 282px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(177, 177, 177, 0.15);
  border-radius: 4px;

  &:hover{
      background: #FFFFFF;
      box-shadow: 0px 4px 40px rgba(177, 177, 177, 0.5);
      border-radius: 4px;
      border-bottom: 6px solid #1eaee1;
  }

  .category-card{
    width: 35.75px;
    height: 48px;
}

h6{
font-size: 18px;
font-weight: 700;
}

p{
    font-weight: 400;
    font-size: 14px;
}

a{
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    color: #1EAEE1;
}
}

.height{
  min-height: 50px;
}

.card-title {
  min-height: 30px;
}

@media (max-width:800px) {
  .card {
    max-width: 17rem !important;
    margin: auto;

  }
}

</style>
