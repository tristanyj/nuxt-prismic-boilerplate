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
import { TimelineLite } from 'gsap'

export default {
	name: 'post',
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
	mounted() {
		console.log({ page: this.$route.name })
	},
	head() {
		const { meta_title, meta_description, meta_image } = this.content

		return this.$buildHead({
			title: meta_title,
			description: meta_description,
			metaImage: {
				og: undefined /* meta_image.url */,
				tw: undefined /* meta_image.twitter_variant.url */
			},
			path: this.$route.path
		})
	},
	transition: {
		mode: 'out-in',
		css: false,
		appear: true,
		enter (el, done) {
			let tl = new TimelineLite({ onComplete: done })

			tl.add('start')
		},
		leave (el, done) {
			let tl = new TimelineLite({ onComplete: done })

			tl.add('start')
		}
	}
}
</script>
