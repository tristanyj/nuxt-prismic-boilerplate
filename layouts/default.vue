<template>
	<div class="__layout-wrapper">
		<div class="__content-wrapper" data-scroll-container>
			<nav-header :data="headerData"/>
			<nuxt/>
			<!-- <nav-footer/> -->
		</div>
	</div>
</template>

<style lang="stylus">
	.__layout-wrapper {
		font-size 1.6rem

		.__content-wrapper {

		}
	}
</style>

<script>
	import { mapGetters } from 'vuex'

	import navHeader from '@/components/navigation/header'

	export default {
		components: {
			'nav-header': navHeader
		},
		computed: {
			...mapGetters({
				header: 'GET_HEADER'
			}),
			headerData() {
				return this.header ? this.header.data : null
			}
		},
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
