<template>
	<div class="__layout-wrapper">
		<div class="__content-wrapper">
			<nav-header :data="header"/>
			<nuxt/>
			<nav-footer :data="footer"/>
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
	import navFooter from '@/components/navigation/footer'

	export default {
		components: {
			navHeader,
			navFooter
		},
		computed: {
			...mapGetters({
				header: 'GET_HEADER',
				footer: 'GET_FOOTER',
			})
		}
	}
</script>
