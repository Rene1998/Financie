import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Financie',
		meta: { title: `${process.env.DOMAIN_TITLE} | home` },
		/*component: () =>
			import('./plugins/financie/_layout/.vue')*/
	},
	{
		path: '/pre-skoly',
		name: 'Pre Skoly',
		meta: { title: `${process.env.DOMAIN_TITLE} | Pre skoly` },
		component: () =>
			import('./plugins/financie/pre-skoly/pre-skoly.vue')
	},
	{
		path: '/osobne-financie',
		name: 'Osobne financie',
		meta: { title: `${process.env.DOMAIN_TITLE} | Osobne financie` },
		component: () =>
			import('./plugins/financie/pre-skoly/pre-skoly.vue')
	},
	{
		path: '/home',
		name: 'Homepage',
		meta: { title: `${process.env.DOMAIN_TITLE} | Homepage` },
		component: () =>
			import('./plugins/financie/home/home.vue')
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
