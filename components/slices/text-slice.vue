<template>
	<div>
		<prismic-rich-text :field="slice.primary.text"/>
	</div>
</template>

<script>
	export default {
		name: 'text-slice',
		props: ['slice']
	}
</script>
