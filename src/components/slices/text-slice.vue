<template>
	<div class="text-slice-container">
		<div v-if="slice.primary.heading" class="heading-container">
			<prismic-rich-text :field="slice.primary.heading"/>
		</div>
		<div class="paragraphs">
			<div v-for="(item, i) in slice.items" :key="i + Math.random()" class="paragraph">
				<prismic-rich-text :field="item.text"/>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.text-slice-container {
		.heading-container {
			margin-bottom 30px
		}

		.paragraphs {
			padding-bottom 60px

			.paragraph {
				margin-bottom: 20px

				&:last-child {
					margin-bottom 0
				}
			}
		}
	}
</style>

<script>
	export default {
		name: 'text-slice',
		props: ['slice']
	}
</script>
