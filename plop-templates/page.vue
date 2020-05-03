<template>
	<div class="page {{ dashCase name }}">
		<!-- content -->
	</div>
</template>

<style lang="stylus" scoped>
.page.{{ dashCase name }} {

}
</style>

<script>
import { TimelineLite } from 'gsap'

export default {
	components: {

	},
	async asyncData({ $prismic, params, error }) {
		try {
			const page = await $prismic.api.getSingle('home_page')
			// const page = await $prismic.api.getByUID('post', params.post)

			// const posts = await $prismic.api.query(
			// 	$prismic.predicates.at('document.type', 'post'),
			// 	{ orderings : '[document.last_publication_date desc]' }
			// )

			return {
				content: page.data,
				// posts: posts.results
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
