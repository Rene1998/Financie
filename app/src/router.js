import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Financie',
	},
	{
		path: '/pre-skoly',
		name: 'Pre Skoly',
		component: () =>
			import('./plugins/financie/pre-skoly/pre-skoly.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
