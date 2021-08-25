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
			import('./vis-blocks/vis-home/vis-home.vue')
	},
	{
		path: '/osobne-financie-auto',
		name: 'osobne-financie-auto',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/vis-osobne-financie-auto.vue')
	},
	{
		path: '/osobne-financie-byvanie',
		name: 'osobne-financie-byvanie',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/vis-osobne-financie-byvanie.vue')
	},
	{
		path: '/osobne-financie-dochodok',
		name: 'osobne-financie-dochodok',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/vis-osobne-financie-dochodok.vue')
	},
	{
		path: '/osobne-financie-exekucia',
		name: 'osobne-financie-exekucia',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/vis-osobne-financie-exekucia.vue')
	},
	{
		path: '/osobne-financie-fintech',
		name: 'osobne-financie-fintech',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/vis-osobne-financie-fintech.vue')
	},
	{
		path: '/osobne-financie-hypotekarny-uver',
		name: 'osobne-financie-hypotekarny-uver',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/vis-osobne-financie-hypotekarny-uver.vue')
	},
	{
		path: '/osobne-financie-investovanie',
		name: 'osobne-financie-investovanie',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/vis-osobne-financie-investovanie.vue')
	},
	{
		path: '/osobne-financie-poistenie',
		name: 'osobne-financie-poistenie',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/vis-osobne-financie-poistenie.vue')
	},
	{
		path: '/osobne-financie-praca-a-dane',
		name: 'osobne-financie-praca-a-dane',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/vis-osobne-financie-praca-a-dane.vue')
	},
	{
		path: '/osobne-financie-rodina-a-deti',
		name: 'osobne-financie-rodina-a-deti',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/vis-osobne-financie-rodina-a-deti.vue')
	},
	{
		path: '/osobne-financie-ucty-a-karty',
		name: 'osobne-financie-ucty-a-karty',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/vis-osobne-financie-ucty-a-karty.vue')
	},
	{
		path: '/osobne-financie-uver-na-spotrebu',
		name: 'osobne-financie-uver-na-spotrebu',
		component: () =>
			import('./vis-blocks/vis-osobne-financie/vis-osobne-financie-uver-na-spotrebu.vue')
	},
	{
		path: '/pre-skoly-stredna-skola-1-rocnik-ucebne-materialy',
		name: 'pre-skoly-stredna-skola-1-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-stredna-skola-1.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-stredna-skola-1-rocnik-videa',
		name: 'pre-skoly-stredna-skola-1-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-stredna-skola-1.rocnik-videa.vue')
	},
	{
		path: '/pre-skoly-stredna-skola-2-rocnik-ucebne-materialy',
		name: 'pre-skoly-stredna-skola-2-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-stredna-skola-2.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-stredna-skola-2-rocnik-videa',
		name: 'pre-skoly-stredna-skola-2-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-stredna-skola-2.rocnik-videa.vue')
	},
	{
		path: '/pre-skoly-stredna-skola-3-rocnik-ucebne-materialy',
		name: 'pre-skoly-stredna-skola-3-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-stredna-skola-3.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-stredna-skola-3-rocnik-videa',
		name: 'pre-skoly-stredna-skola-3-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-stredna-skola-3.rocnik-videa.vue')
	},
	{
		path: '/pre-skoly-stredna-skola-4-rocnik-ucebne-materialy',
		name: 'pre-skoly-stredna-skola-4-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-stredna-skola-4.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-stredna-skola-4-rocnik-videa',
		name: 'pre-skoly-stredna-skola-4-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-stredna-skola-4.rocnik-videa.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-1-stupen-1-rocnik-ucebne-materialy',
		name: 'pre-skoly-zakladna-skola-1-stupen-1-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-1.stupen-1.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-1-stupen-1-rocnik-videa',
		name: 'pre-skoly-zakladna-skola-1-stupen-1-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-1.stupen-1.rocnik-videa.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-1-stupen-2-rocnik-ucebne-materialy',
		name: 'pre-skoly-zakladna-skola-1-stupen-2-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-1.stupen-2.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-1-stupen-2-rocnik-videa',
		name: 'pre-skoly-zakladna-skola-1-stupen-2-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-1.stupen-2.rocnik-videa.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-1-stupen-3-rocnik-ucebne-materialy',
		name: 'pre-skoly-zakladna-skola-1-stupen-3-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-1.stupen-3.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-1-stupen-3-rocnik-videa',
		name: 'pre-skoly-zakladna-skola-1-stupen-3-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-1.stupen-3.rocnik-videa.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-1-stupen-4-rocnik-ucebne-materialy',
		name: 'pre-skoly-zakladna-skola-1-stupen-4-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-1.stupen-4.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-1-stupen-4-rocnik-videa',
		name: 'pre-skoly-zakladna-skola-1-stupen-4-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-1.stupen-4.rocnik-videa.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-2-stupen-5-rocnik-ucebne-materialy',
		name: 'pre-skoly-zakladna-skola-2-stupen-5-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-2.stupen-5.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-2-stupen-5-rocnik-videa',
		name: 'pre-skoly-zakladna-skola-2-stupen-5-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-2.stupen-5.rocnik-videa.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-2-stupen-6-rocnik-ucebne-materialy',
		name: 'pre-skoly-zakladna-skola-2-stupen-6-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-2.stupen-6.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-2-stupen-6-rocnik-videa',
		name: 'pre-skoly-zakladna-skola-2-stupen-6-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-2.stupen-6.rocnik-videa.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-2-stupen-7-rocnik-ucebne-materialy',
		name: 'pre-skoly-zakladna-skola-2-stupen-7-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-2.stupen-7.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-2-stupen-7-rocnik-videa',
		name: 'pre-skoly-zakladna-skola-2-stupen-7-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-2.stupen-7.rocnik-videa.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-2-stupen-8-rocnik-ucebne-materialy',
		name: 'pre-skoly-zakladna-skola-2-stupen-8-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-2.stupen-8.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-2-stupen-8-rocnik-videa',
		name: 'pre-skoly-zakladna-skola-2-stupen-8-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-2.stupen-8.rocnik-videa.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-2-stupen-9-rocnik-ucebne-materialy',
		name: 'pre-skoly-zakladna-skola-2-stupen-9-rocnik-ucebne-materialy',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-2.stupen-9.rocnik-ucebne-materialy.vue')
	},
	{
		path: '/pre-skoly-zakladna-skola-2-stupen-9-rocnik-videa',
		name: 'pre-skoly-zakladna-skola-2-stupen-9-rocnik-videa',
		component: () =>
			import('./vis-blocks/vis-pre-skoly/vis-pre-skoly-zakladna-skola-2.stupen-9.rocnik-videa.vue')
	},
	{
		path: '/o-nas',
		name: 'o-nas',
		component: () =>
			import('./vis-blocks/vis-about-us/vis-about-us.vue')
	},

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
