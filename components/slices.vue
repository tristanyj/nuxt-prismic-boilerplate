<template>
    <section>
        <section v-for="(slice, index) in slices" :key="'slice-' + index">
            <template v-if="slice.slice_type === 'text'">
                <text-slice :slice="slice"></text-slice>
            </template>
            <template v-else-if="slice.slice_type === 'quote'">
                <quote-slice :slice="slice"></quote-slice>
            </template>
            <template v-else-if="slice.slice_type === 'image_with_caption'">
                <image-slice :slice="slice"></image-slice>
            </template>
        </section>
    </section>
</template>

<script>
	import textSlice from '@/components/slices/text-slice'
	import quoteSlice from '@/components/slices/quote-slice'
	import imageSlice from '@/components/slices/image-slice'

	export default {
		name: 'slices',
		props: ['slices'],
		components: {
			'text-slice': textSlice,
			'quote-slice': quoteSlice,
			'image-slice': imageSlice
		}
	}
</script>
