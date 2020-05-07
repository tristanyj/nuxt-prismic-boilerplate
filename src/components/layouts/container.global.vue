<template>
	<div class="component container">
		<slot />
	</div>
</template>

<style lang="stylus" scoped>
.component.container {
	max-width $layout-max-width
	margin 0 auto
	padding	0 $layout-gutter
}
</style>

<script>
export default {
}
</script>
