<template>
	<nuxt-link :to="link">
		<div class="component post">
			<h2>
				{{ $prismic.asText(post.data.title) }}
			</h2>
		</div>
	</nuxt-link>
</template>

<script>
import LinkResolver from '~/plugins/link-resolver.js'

export default {
	props: {
		post: {
			type: Object,
			default: null
		}
	},
	data() {
		return {
			link: ''
		}
	},
	created() {
		this.link = LinkResolver(this.post)
	}
}
</script>
