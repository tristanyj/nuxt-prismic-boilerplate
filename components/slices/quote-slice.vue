<template>
	<div>
		<blockquote>
			{{ $prismic.asText(slice.primary.quote) }}
		</blockquote>
	</div>
</template>

<script>
	export default {
		name: 'quote-slice',
		props: ['slice']
	}
</script>
