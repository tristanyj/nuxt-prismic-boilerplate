<template>
	<div class="page index">
		<container>
			<h1 class="text-grey-700">
				{{ $prismic.asText(content.title) }}
			</h1>
		</container>
	</div>
</template>

<style lang="stylus" scoped>
	.page.index {

	}
</style>

<script>
import { TimelineLite } from 'gsap'

export default {
	async asyncData({ $prismic, store, app, error }) {
		try {
			const page = await $prismic.api.getSingle('home_page')

			return {
				content: page.data,
			}
		} catch (e) {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	mounted() {
		console.log({ page: this.$route.name, content: this.content })
	},
	head() {
		const { meta_title, meta_description, meta_image } = this.content

		return this.$buildHead({
			title: meta_title,
			description: meta_description,
			metaImage: {
				og: meta_image.url,
				tw: meta_image.twitter_variant.url
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

