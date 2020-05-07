<template>
	<footer>
		<div class="left">
			<nuxt-link to="/">
				<!-- <img src="" alt=""> -->
			</nuxt-link>
		</div>
		<div v-if="menu" class="right">
			<div class="links">
				<prismic-link
					v-for="(item, i) in menu.group"
					:key="i" exact
					:field="item.link">
					<span>
						{{ $prismic.asText(item.label) }}
					</span>
				</prismic-link>
			</div>
		</div>
	</footer>
</template>

<style lang="stylus" scoped>
footer {

}
</style>

<script>
export default {
	props: {
		menu: {
			type: Object,
			default: null
		}
	},
	mounted() {
		console.log(this.menu)
	}
}
</script>
