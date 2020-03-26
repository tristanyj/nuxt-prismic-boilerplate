<template>
	<div class="__layout-wrapper">
		<div class="__content-wrapper" data-scroll-container>
			<nuxt/>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.$nuxt.$nextTick(() => {
				this.scroll = new LocomotiveScroll({
					el: document.querySelector('[data-scroll-container]'),
					smooth: true,
					getSpeed: true
				})


				this.scroll.on('scroll', (e) => {  })
			})
		}
	}
</script>

<style lang="stylus">
	.__layout-wrapper {
		font-size 1.6rem

		.__content-wrapper {

		}
	}
</style>
