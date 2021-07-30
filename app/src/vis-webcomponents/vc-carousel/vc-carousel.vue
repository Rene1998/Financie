<template>
	<div v-if="sliders">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
		<div class="mb-5">
			<div class="slider-info d-flex justify-content-center">
				<p>
					Vedeli ste, že...
				</p>
			</div>
			<div class="d-flex justify-content-center">
				<carousel
					style="width: 800px"
					:loop="true"
					:autoplay="true"
					:autoplayTimeout="5000"
					:perPage="1">
					<slide class="slide text-center"
						v-for="slider in sliders"
						:key="slider.id">
						<h5>
							{{ slider.content }}
						</h5>
					</slide>
				</carousel>
			</div>
			<hr />
		</div>
	</div>
</template>

<script>
// docs => https://ssense.github.io/vue-carousel/api/
import apiService from '@/plugins/financie/common/apiService'
import { Carousel, Slide } from 'vue-carousel'
export default {
	components: {
		Carousel,
		Slide
	},
	name: 'z-carousel',
	data () {
		return {
			sliders: []
		}
	},
	async mounted () {
		await this._loadSliders()
	},
	methods: {
		async _loadSliders () {
			try {
				const sliders = await apiService.get('slider')
				this.sliders = sliders
			} catch (e) {
				console.error(e)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../plugins/financie/_theme/index.scss';
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
	}
	&.VueCarousel-slide-adjustableHeight {
		display: table;
		flex-basis: auto;
		width: 100%;
	}
}
</style>
