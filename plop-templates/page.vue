<template>
	<div class="container-page container-{{ dashCase name }}">

	</div>
</template>

<style lang="stylus" scoped>
	.container-{{ dashCase name }} {

	}
</style>

<script>
	export default {
		name: '{{ dashCase name }}',
		head () {
			return {
				title: 'Page — Title'
			}
		},
		components: {

		},
		mounted () {

		}
	}
</script>
