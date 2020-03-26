export const state = () => ({
	header: null
})

export const getters = {
	GET_HEADER(state) {
		return state.header
	}
}

export const mutations = {
	SET_HEADER(state, payload) {
		state.header = payload
	}
}

export const actions = {
	async getHeader({ getters, commit }) {
		if(getters.GET_HEADER) {
			return getters.GET_HEADER
		} else {
			const data = await this.$prismic.api.getSingle('menu')
			commit('SET_HEADER', data)
			return data
		}
	},
	async nuxtServerInit ({ dispatch }) {
		await dispatch('getHeader')
	}
}
