export const state = () => ({
	data: null
})

export const getters = {
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
	async nuxtServerInit ({ dispatch }) {
		await dispatch('getData')
	}
}
