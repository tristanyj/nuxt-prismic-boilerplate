<template>
	<header>
		<div v-if="data" class="links">
			<div class="link" v-for="(item, i) in data.links" :key="i">
				<prismic-link :field="item.link">{{ $prismic.asText(item.label) }}</prismic-link>
			</div>
		</div>
	</header>
</template>

<style lang="stylus" scoped>
	header {

	}
</style>

<script>
	export default {
		name: 'nav-header',
		props: ['data']
	}
</script>
