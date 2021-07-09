import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apiService from './plugins/financie/common/apiService'
import wrap from '@vue/web-component-wrapper'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './plugins/financie/_theme/index.scss'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

apiService.init()

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

const advancedImgHomeCards = wrap(Vue, advancedImgHomeCards)
window.customElements.define('vc-advanced-img-home-cards', advancedImgHomeCards)

const carousel = wrap(Vue, carousel)
window.customElements.define('vc-carousel-slide', carousel)

const categoryCard = wrap(Vue, categoryCard)
window.customElements.define('vc-catregory-card', categoryCard)

const textCard  = wrap(Vue, textCard)
window.customElements.define('vc-text-card', textCard)

const showArticles  = wrap(Vue, showArticles)
window.customElements.define('vc-show-articles', showArticles)

const progressBar  = wrap(Vue, progressBar)
window.customElements.define('vc-progress-bar', progressBar)

const miniCards  = wrap(Vue, miniCards)
window.customElements.define('vc-mini-cards', miniCards)

const imgCard  = wrap(Vue, imgCard)
window.customElements.define('vc-img-card', imgCard)

//layout webcomponents

const footer  = wrap(Vue, footer)
window.customElements.define('vl-footer', footer)
