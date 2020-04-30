<template>
	<header v-if="data">
		<div v-if="data" class="links">
			<div
				v-for="(item, i) in data.links" :key="i"
				class="link">
				<prismic-link :field="item.link">
					{{ $prismic.asText(item.label) }}
				</prismic-link>
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
	name: 'NavHeader',
	props: {
		data: {
			type: Object,
			default: null
		}
	}
}
</script>
