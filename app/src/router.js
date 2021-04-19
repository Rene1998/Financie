import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'Homepage',
		component: () =>
			import('./plugins/financie/home/home.vue'),
	},
	{
		path: '/pre-skoly/:slug',
		name: 'Pre skoly',
		component: () =>
			import('./plugins/financie/pre-skoly/pre-skoly.vue')
	},
	{
		path: '/osobne-financie/:slug',
		name: 'Osobne financie',
		component: () =>
			import('./plugins/financie/osobne-financie/osobne-financie.vue')
	},
	{
		path: '/osobne-financie/:slug/:slug',
		name: 'Osobne financie',
		component: () =>
			import('./plugins/financie/osobne-financie/blog.vue')
	},

	/*{
		path: '/byvanie',
		name: 'byvanie',
		component: () =>
			import('./plugins/financie/osobne-financie/byvanie.vue')
	},*/
	{
		path: '/blog',
		name: 'blog-page',
		component: () =>
			import('./plugins/financie/osobne-financie/blog.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
