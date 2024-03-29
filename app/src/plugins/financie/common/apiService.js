import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

//import { API_URL } from "./config"

const apiService = {
	init() {
		Vue.use(VueAxios, axios);
		Vue.axios.defaults.baseURL = 'https://financie.hybridlab.dev/ocms/api/';
	},

	query(resource, params) {
		return Vue.axios.get(resource, params).catch(e => {
			throw new Error(e);
		});
	},

	get(resource, slug = "") {
		return Vue.axios.get(`${resource}/${slug}`).catch(e => {
		  throw new Error(e);
		});
	},

	post(resource, params) {
		return Vue.axios.post(`${resource}`, params);
	},
};

export default apiService;

/*export const zaicard = {
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
}*/