<template>
    <div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <div>
			<div class="d-flex justify-content-center">
				<carousel
                    class="carousel-wrapper"
					style="width: 100%"
					:perPage="1">
					<slide class="slide text-center">
						<h5>
							<vc-mini-card :title="card1_title" :desc="card1_desc" :img="card1_img" :link="card1_link"/>
						</h5>
					</slide>
					<slide class="slide text-center">
						<h5>
							<vc-mini-card :title="card2_title" :desc="card2_desc" :img="card2_img" :link="card2_link"/>
						</h5>
					</slide>
					<slide class="slide text-center">
						<h5>
							<vc-mini-card :title="card3_title" :desc="card3_desc" :img="card3_img" :link="card3_link"/>
						</h5>
					</slide>
					<slide class="slide text-center">
						<h5>
							<vc-mini-card :title="card4_title" :desc="card4_desc" :img="card4_img" :link="card4_link"/>
						</h5>
					</slide>
				</carousel>
			</div>
		</div>
</div>
    
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
    components: {
		Carousel,
        Slide,

	},
	props: {
		card1_title: String,
        card1_desc: String,
        card1_img: String,
        card1_link: String,
        card2_title: String,
        card2_desc: String,
        card2_img: String,
        card2_link: String,
        card3_title: String,
        card3_desc: String,
        card3_img: String,
        card3_link: String,
        card4_title: String,
        card4_desc: String,
        card4_img: String,
        card4_link: String
	}
}
</script>
<style lang="scss" scoped>
@import '../../../plugins/financie/_theme/index.scss';
.slider-info {
  margin-top: 40px;
}

.VueCarousel-dot-container {
  margin-top: -20px !important;
}

span {
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #192949;
  width: 951px;
}

h5 {
  font-weight: 400;
  font-family: HeadlandOne;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
}

hr {
  max-width: 73%;
  border: 1px solid #f3f4f5;
}

/deep/ {
  &.VueCarousel-dot:focus {
    outline: none !important;
  }

  &.VueCarousel-dot--active {
    background-color: #1eaee1 !important;
  }

  &.VueCarousel-dot {
    width: 6px !important;
    height: 6px !important;
    width: 6px !important;
    height: 6px !important;
  }

  &.VueCarousel-pagination {
    margin-top: -45px;
  }

	&.VueCarousel-pagination {
		width: 100%;
		text-align: center;
	}
	&.VueCarousel-pagination--top-overlay {
		position: absolute;
		top: 0;
	}
	&.VueCarousel-pagination--bottom-overlay {
		position: absolute;
		bottom: 0;
	}
	&.VueCarousel-dot-container {
		display: inline-block;
		margin: 0 auto;
		padding: 0;
	}
	&.VueCarousel-dot {
		display: inline-block;
		cursor: pointer;
		appearance: none;
		border: none;
		background-clip: content-box;
		box-sizing: content-box;
		padding: 0;
		border-radius: 100%;
		outline: none;
		margin-top: 40px!important;
	}
	&.VueCarousel-dot:focus {
		outline: 1px solid lightblue;
	}
	&.VueCarousel {
		display: flex;
		flex-direction: column;
		position: relative;
	}
	&.VueCarousel--reverse {
		flex-direction: column-reverse;
	}
	&.VueCarousel-wrapper {
		width: 100%;
		position: relative;
		overflow: hidden;
		margin-top: 100px;
	}
	&.VueCarousel-inner {
		display: flex;
		flex-direction: row;
		backface-visibility: hidden;
	}
	&.VueCarousel-inner--center {
		justify-content: center;
	}
	&.VueCarousel-slide {
		flex-basis: inherit;
		flex-grow: 0;
		flex-shrink: 0;
		user-select: none;
		backface-visibility: hidden;
		-webkit-touch-callout: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		outline: none;
    visibility: visible;
    flex-basis: 100%;
    width: 100%;
	}
	&.VueCarousel-slide-adjustableHeight {
		display: table;
		flex-basis: auto;
		width: 100%;
	}
}
</style>