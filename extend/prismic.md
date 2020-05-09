# Extend | Prismic

This config is supposed to be quite minimalistic, and therefore purposefully lacks somes features. Follow this guide to add some Prismic helpers.

## Dynamic route

Here is an example of how to retrieve content from Prismic based on a route param.

In the `asyncData` hook of a `page` component, add :

```js
async asyncData({ $prismic, app, params, error }) {
	const article = await $prismic.api.getByUID('article', params.slug)

	return {
		article: article.data
	}
}
```

## Fetch links

Here is an example of how to retrieve a document linked content from Prismic.

In the `asyncData` hook of a `page` component, add :

```js
async asyncData({ $prismic, app, error }) {
	let articles = await $prismic.api.query([
		$prismic.predicates.at('document.type', 'article'),
		$prismic.predicates.at('my.article.categories.category', category.id)
	], {
		orderings: '[document.last_publication_date desc]',
		fetchLinks: ['category.name', 'category.color', 'author.name', 'author.photo']
	})

	return {
		articles: articles.results
	}
}
```

## Slices

Here is how you can display slices from a Prismic document :

In a `.vue` component, after fetching your data, you can pass the slices to a `slices` component :

```html
<template>
	<div class="article">
		<slices :data="article.data.body"/>
	</div>
</template>
```

Create a `slices` component in `src/components/dislay` and add to the `script` and `template` :

```js
import textSlice from '~/components/partials/slices/text-slice'
import imageSlice from '~/components/partials/slices/image-slice'

export default {
	props: {
		slices: {
			type: Array,
			default: null
		}
	},
	components: {
		textSlice, imageSlice
	}
}
```

```html
<template>
    <div class="slices">
        <div class="slice" v-for="(slice, i) in slices" :key="'slice-' + i">
            <template v-if="slice.slice_type === 'text'">
                <text-slice :slice="slice"/>
            </template>
            <template v-else-if="slice.slice_type === 'image'">
                <image-slice :slice="slice"/>
            </template>
        </div>
    </div>
</template>
```

Finally, create a `text-slice` and an `image-slice` component in `src/components/partials/slices` and add to display the data :

```html
<template>
	<div class="text-slice">
		<div v-if="slice.primary.heading" class="heading">
			<prismic-rich-text :field="slice.primary.heading"/>
		</div>
		<div class="paragraphs">
			<div class="paragraph" v-for="(item, i) in slice.items" :key="i + Math.random()">
				<prismic-rich-text :field="item.text"/>
			</div>
		</div>
	</div>
</template>
```

```html
<template>
	<div class="image-slice">
		<prismic-image :field="slice.primary.image"/>
		<div class="caption" v-if="slice.primary.caption">
			<span>{{ $prismic.asText(slice.primary.caption) }}</span>
		</div>
	</div>
</template>
```

## Menu

Here is an example of how to add a menu from Prismic.

In Prismic, create a singleton type document named `Menu` and add the following data :

```json
{
  	"Main" : {
		"group" : {
			"type" : "Group",
			"config" : {
				"fields" : {
					"label" : {
						"type" : "StructuredText",
						"config" : {
							"single" : "paragraph",
							"label" : "Label",
							"placeholder" : "Link label"
						}
					},
					"link" : {
						"type" : "Link",
						"config" : {
							"label" : "Link",
							"placeholder" : "Link to other document"
						}
					}
				},
				"label" : "Group"
			}
		}
	}
}
```

In a `.vue` page, fetch the menu inside the `asyncData` hook :

```js
async asyncData({ $prismic, app, error }) {
	const menu = await $prismic.api.getSingle('menu')

	return {
		menu: menu.data
	}
}
```

You can pass the data to a global header component in the `template` :

```html
<nav-header :menu="menu" />
```

In a file called `nav-header.global.vue`, you can get and use the data passed :

```js
export default {
	props: {
		menu: {
			type: Object,
			default: null
		}
	}
}
```

```html
<template>
	<header>
		<div class="left">
			<nuxt-link
				:to="/">
				<span>Home</span>
			</nuxt-link>
		</div>

		<div v-if="menu" class="right">
			<div class="links">
				<nuxt-link
					v-for="(item, i) in menu.group" :key="Math.random() + i"
					exact
					class="link" :to="item.link">
					<span>{{ item.label }}</span>
				</nuxt-link>
			</div>
		</div>
	</header>
</template>
```

## Link resolver

Here is an example of how to use the link resolver, to create a link to a document like a post or an article.

In a `.vue` component, you can get a document as prop and call the Link Resolver method on it :

```js
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
```

You can display the link in the `template` :

```html
<template>
	<nuxt-link :to="link">
		<div class="component post">
			<h2>
				{{ $prismic.asText(post.data.title) }}
			</h2>
		</div>
	</nuxt-link>
</template>
```

Finally, decide how to handle link creation in `src/plugins/link-resolver.js` :

```js
export default function(doc) {
	if (doc.isBroken) {
		return '/not-found'
	}

	if (doc.type === 'home_page') {
		return '/'
	}

	if (doc.type === 'post') {
		return `/${ doc.uid }`
	}

	return '/not-found'
}
```
