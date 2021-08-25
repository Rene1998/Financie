import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apiService from './plugins/financie/common/apiService'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './plugins/financie/_theme/index.scss'
import './vis-blocks/vis-home/assets/css/home.scss'
import './vis-blocks/vis-osobne-financie/assets/css/osobne-financie.scss'
import './vis-blocks/vis-pre-skoly/assets/css/pre-skoly.scss'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

apiService.init()

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')


