<template>
	<div v-if="slice" class="component text-slice">
		<div v-if="slice.primary.heading" class="heading">
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
.component.text-slice {

}
</style>

<script>
export default {
	props: {
		slice: {
			type: Object,
			default: null
		}
	}
}
</script>
