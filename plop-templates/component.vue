<template>
	<div class="component {{ dashCase name }}" />
</template>

<style lang="stylus" scoped>
.component.{{ dashCase name }} {

}
</style>

<script>
export default {
	props: {
		prop: {
			type: String,
			default: null
		}
	}
}
</script>
