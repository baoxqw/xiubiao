import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const key = 'user'
const store = () => new Vuex.Store({
	state () {
		return {
			// host: "http://47.92.155.8:8080/backstage",
			// ws: "ws://47.92.155.8:8080/backstage",
			host: "http://47.92.155.8:8080/backstage",
			ws: "ws://47.92.155.8:8080/backstage",
			keyword: '',
			user: null,
		}
	},
	getters: {
		getStorage: function(state) {
			if (state.user === null) {
				state.user = JSON.parse(localStorage.getItem(key))
			}
			return state.user
		}
	},
	mutations: {
		$_setStorage(state, value) {
			state.user = value
			localStorage.setItem(key, JSON.stringify(value))
		},
		$_removeStorage(state) {
			state.user = null
			localStorage.removeItem(key)
		},
	}
})
export default store
