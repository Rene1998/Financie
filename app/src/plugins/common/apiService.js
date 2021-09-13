import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { API_URL } from './config'

const apiService = {
	init () {
		Vue.use(VueAxios, axios)
		Vue.axios.defaults.baseURL = API_URL
	},

	query (resource, params) {
		return Vue.axios.get(resource, params).catch(e => {
			throw new Error(e)
		})
	},

	get (resource, property_key = '') {
		let url = window.ocmsHost || ''
		url += resource
		return axios.get(url)
			.then(response => {
				return property_key ? response.data[property_key] : response.data
			})
			.catch(e => {
		  		throw new Error(e)
			})
	},

	post (resource, params) {
		return Vue.axios.post(`${resource}`, params)
	}
}

export default apiService

/* export const zaicard = {
	get() {
		return apiService.get('zaicard');
	}
}

export const zaihcard = {
	get() {
		return apiService.get('zaihcard');
	}
}

export const zicard = {
	get() {
		return apiService.get('zicard');
	}
}

export const ztcard = {
	get() {
		return apiService.get('ztcard');
	}
} */
