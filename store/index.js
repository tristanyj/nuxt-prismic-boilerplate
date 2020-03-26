export const state = () => ({
	data: {
		title: 'Nuxt Boilerplate',
		loaded: true
	}
})

export const getters = {
	GET_STATE(state) {
		return state.data
	}
}

export const mutations = { }
export const actions = { }
