<template>
	<div v-if="slice" class="component image-slice">
		<prismic-image :field="slice.primary.image" />
		<div v-if="$prismic.asText(slice.primary.description)" class="caption">
			<span>{{ $prismic.asText(slice.primary.description) }}</span>
		</div>
	</div>
</template>

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
