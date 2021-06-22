<template>
		<b-container>
			<b-row class="d-flex m-auto">
				<h1 class="mt-5">
					{{ blog.title }}
				</h1>
				<div class="blog" v-html="blog.content" />
			</b-row>
		</b-container>
</template>

<script>
import apiService from '@/plugins/financie/common/apiService'
export default {
	data () {
		return {
			blog: [],
			rightBlog: null
		}
	},
	watch: {
		'$route.params.slug': {
			immediate: true,
			handler (val) {
				this.changeRightBlog(val)
			}
		}
	},
	async mounted () {
		await this._loadBlogs()
	},
	methods: {
		async _loadBlogs () {
			try {
				const blogs = await apiService.get('blog')
				this.blog = blogs.data.find((e) => e.slug == this.rightBlog)
			} catch (e) {
				console.error(e)
			}
		},
		changeRightBlog (blog) {
			this.rightBlog = blog
		}
	},
	components: {
		'z-imgCard': () => import('../_components/card/z-imgCard')
	}
}
</script>

<style lang="scss" scoped>
.blog {
	font-family: Helvetica Neue;
	font-style: normal;
	color: #192949;
}
h1 {
	color: #192949;
	font-family: Helvetica Neue;
	font-style: normal;
	font-weight: bold;
	font-size: 40px;
}
.b-icon {
	cursor: pointer;
	width: 28px;
	height: 28px;
  	&:hover {
    	color: #1eaee1;
  	}
}
.row {
  	width: 100%;
}
</style>
