<template>
	<div class="container-page container-index">
		<h1>
			{{ $prismic.asText(content.title) }}
		</h1>

		<div v-if="posts.length !== 0">
			<section v-for="post in posts" :key="post.id">
				<post :post="post" />
			</section>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.container-index {

	}
</style>

<script>
import { TimelineLite } from 'gsap'

import post from '@/components/post'

export default {
	name: 'Home',
	components: {
		post
	},
	async asyncData({ $prismic, error }) {
		try {
			const page = await $prismic.api.getSingle('home_page')

			const posts = await $prismic.api.query(
				$prismic.predicates.at('document.type', 'post'),
				{ orderings : '[document.last_publication_date desc]' }
			)

			return {
				content: page.data,
				posts: posts.results
			}
		} catch (e) {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	head() {
		return {
			title: 'Home | Nuxt Prismic Boilerplate',
		}
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

