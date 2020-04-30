export const state = () => ({
	data: null,
	header: null,
	footer: null
})

export const getters = {
	GET_HEADER(state) {
		return state.header
	},
	GET_FOOTER(state) {
		return state.footer
	},
	GET_DATA(state) {
		return state.data
	}
}

export const mutations = {
	SET_DATA(state, payload) {
		state.data = payload
	}
}

export const actions = {
	async getData({ getters, commit }) {

	},
	async getHeader({ getters, commit }) {

	},
	async getFooter({ getters, commit }) {

	},
	async nuxtServerInit ({ dispatch }) {
		await dispatch('getData')
		await dispatch('getHeader')
		await dispatch('getFooter')
	}
}
