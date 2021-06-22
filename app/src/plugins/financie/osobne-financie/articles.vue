<template>
	<div>
		<b-container>
			<b-row class="d-flex justify-content-center flex-column p-3">
				<b-col cols="12">
					<router-link to="/home">
						<a class="mb-5 d-flex align-items-center">
							<b-icon class="mr-2" icon="arrow-left"/>
							Späť na hlavnú stránku
						</a>
					</router-link>
					<h1 class="mt-5">{{ title }}</h1>
					<p class="mt-5">{{ content }}</p>
					<img :src="image"/>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import articleContent from './clanky.js'
export default {
	watch: {
		'$route.params.slug': {
			immediate: true,
			handler (val) {
				this.changePageContent(val)
			}
		}
	},
	data () {
		return {
			title: null,
			content: null,
			image: null
		}
	},
	methods: {
		changePageContent (val) {
			this.title = articleContent[val].title
			this.content = articleContent[val].content
			this.image = articleContent[val].image
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
  	min-height: 100vh;

	h1 {
		margin-top: 30px;
		color: #192949;
		max-width: 800px;
		justify-content: center;
		font-family: Helvetica Neue;
		font-style: normal;
		font-weight: bold;
		font-size: 40px;
		line-height: 50px;
	}
	img {
		min-width: 50%;
	}

	p {
		font-family: Helvetica Neue;
		font-style: normal;
		color: #192949;
	}
	a {
		color: #1eaee1;
		text-decoration: none;
		font-family: Helvetica Neue;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 24px;
		cursor: pointer;
	}
}
</style>
