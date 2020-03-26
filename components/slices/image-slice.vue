<template>
	<div>
		<template v-if="size === 'image-full-width'">
			<div :style="{ 'background-image': 'url(' + img.url + ')'}">
				<template v-if="$prismic.asText(caption) != ''">
					<div>
						<h1>{{ $prismic.asText(caption) }}</h1>
					</div>
				</template>
			</div>
		</template>
		<template v-else>
			<div>
				<p :class="size">
					<prismic-image :field="img"/>
				</p>
				<template v-if="$prismic.asText(caption) != ''">
					<p>
						<span>{{ $prismic.asText(caption) }}</span>
					</p>
				</template>
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'image-slice',
		props: ['slice'],
		data: function() {
			return {
				img: '',
				caption: '',
				size: '',
			}
		},
		created () {
			this.img = this.slice.primary.image
			this.caption = this.slice.primary.caption
			this.size = this.slice.slice_label
		}
	}
</script>
