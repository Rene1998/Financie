import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: () =>
			import('./plugins/financie/home/home.vue')
	},
	{
		path: '/pre-skoly/:slug',
		name: 'pre-skoly',
		component: () =>
			import('./plugins/financie/pre-skoly/pre-skoly.vue')
	},
	{
		path: '/osobne-financie/:slug',
		name: 'osobne-financie',
		component: () =>
			import('./plugins/financie/osobne-financie/osobne-financie.vue')
	},
	{
		path: '/osobne-financie/clanky/:slug',
		name: 'clanky',
		component: () =>
			import('./plugins/financie/osobne-financie/articles.vue')
	},
	{
		path: '/osobne-financie/:slug/:slug',
		name: 'osobne-financie',
		component: () =>
			import('./plugins/financie/osobne-financie/blog.vue')
	},
	{
		path: '/blog',
		name: 'blog-page',
		component: () =>
			import('./plugins/financie/osobne-financie/blog.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

export default router
