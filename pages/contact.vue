<template>
	<div class="container-page container-contact">
		<h1>{{ $prismic.asText(content.title) }}</h1>
	</div>
</template>

<style lang="stylus" scoped>
	.container-contact {

	}
</style>

<script>
	import { TimelineLite } from 'gsap'

	export default {
		name: 'contact',
		head() {
			return {
				title: 'Contact | Nuxt Prismic Boilerplate',
			}
		},
		async asyncData({ $prismic, error }) {
			try {
				const page = await $prismic.api.getSingle('contact_page')

				return {
					content: page.data,
				}
			} catch (e) {
				error({ statusCode: 404, message: 'Page not found' })
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

