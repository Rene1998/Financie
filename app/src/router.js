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
			import('./vis-blocks/vis-home/home.vue')
	},
	{
		path: '/pre-skoly/:slug',
		name: 'pre-skoly',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/pre-skoly.vue')
	},
	{
		path: '/osobne-financie/:slug',
		name: 'osobne-financie',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/osobne-financie.vue')
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
