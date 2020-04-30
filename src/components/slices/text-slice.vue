<template>
	<div v-if="slice" class="text-slice-container">
		<div v-if="slice.primary.heading" class="heading-container">
			<prismic-rich-text :field="slice.primary.heading" />
		</div>
		<div class="paragraphs">
			<div
				v-for="(item, i) in slice.items" :key="i"
				class="paragraph">
				<prismic-rich-text :field="item.text" />
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
.text-slice-container {

}
</style>

<script>
export default {
	name: 'TextSlice',
	props: {
		slice: {
			type: Object,
			default: null
		}
	}
}
</script>
