<template>
	<div class="header-container">
		<div class="links">
			<div class="link" v-for="(item, i) in data.menu_links" :key="i">
				<prismic-link :field="item.link">{{ $prismic.asText(item.label) }}</prismic-link>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.header-container {

	}
</style>

<script>
	export default {
		name: 'nav-header',
		props: ['data']
	}
</script>
