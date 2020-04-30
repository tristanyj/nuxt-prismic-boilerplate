<template>
	<div class="container-page container-post">
		<h1>
			{{ $prismic.asText(content.title) }}
		</h1>
	</div>
</template>

<style lang="stylus" scoped>
	.container-post {

	}
</style>

<script>
export default {
	name: 'Post',
	async asyncData({ $prismic, params, error }) {
		try {
			const page = await $prismic.api.getByUID('post', params.post)

			return {
				content: page.data
			}
		} catch (e) {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	head() {
		return {
			title: 'Post | Nuxt Prismic Boilerplate',
		}
	},
}
</script>
