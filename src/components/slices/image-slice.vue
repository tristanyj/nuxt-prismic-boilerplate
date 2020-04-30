<template>
	<div class="image-slice-container">
		<prismic-image :field="slice.primary.image"/>
		<div class="caption" v-if="$prismic.asText(slice.primary.description) !== ''">
			<span>{{ $prismic.asText(slice.primary.description) }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'image-slice',
		props: ['slice']
	}
</script>
