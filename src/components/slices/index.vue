<template>
	<section>
		<section v-for="(slice, index) in slices" :key="'slice-' + index">
			<template v-if="slice.slice_type === 'text'">
				<text-slice :slice="slice" />
			</template>
			<template v-else-if="slice.slice_type === 'image_with_caption'">
				<image-slice :slice="slice" />
			</template>
		</section>
	</section>
</template>

<script>
import textSlice from '@/components/slices/text-slice'
import imageSlice from '@/components/slices/image-slice'

export default {
	name: 'slices',
	components: {
		textSlice,
		imageSlice
	},
	props: {
		slices: {
			type: Array,
			default: null
		}
	}
}
</script>
