import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import record from './record'
import category from './category'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		error: null,
	},
	mutations: {
		setError(state, error) {
			state.error = error
		},
		clearError(state) {
			state.error = null
		}
	},
	actions: {
		async fetchCurrency() {
			const key = process.env.VUE_APP_FIXER
			console.log("fixer - бесплатный тариф не поддерживает https, что бы работала эта страница нужно платный тариф")
			const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,UAH`)
			return await res.json()
		}
	},
	getters: {
		error(state) {
			return state.error
		}
	},
	modules: {
		auth,
		info,
		category,
		record
	}
})
