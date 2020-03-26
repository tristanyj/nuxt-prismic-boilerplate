<template>
	<div class="container-page container-index">
		home
	</div>
</template>

<style lang="stylus" scoped>
	.container-index {
	}
</style>

<script>
	import { TimelineLite } from 'gsap'

	export default {
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
