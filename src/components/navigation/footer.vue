<template>
	<footer>
		<div v-if="data" class="links">
			<div
				v-for="(item, i) in data.links" :key="i"
				class="link">
				<prismic-link :field="item.link">
					{{ $prismic.asText(item.label) }}
				</prismic-link>
			</div>
		</div>
	</footer>
</template>

<style lang="stylus" scoped>
footer {

}
</style>

<script>
export default {
	name: 'nav-footer',
	props: {
		data: {
			type: Object,
			default: null
		}
	}
}
</script>
