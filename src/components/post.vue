<template>
	<nuxt-link :to="link">
		<div class="post">
			<h2>
				{{ $prismic.asText(post.data.title) }}
			</h2>
		</div>
	</nuxt-link>
</template>

<script>
import LinkResolver from '~/plugins/link-resolver.js'

export default {
	name: 'PostWidget',
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
