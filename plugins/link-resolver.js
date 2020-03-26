/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function(doc) {
	if (doc.isBroken) {
		return '/not-found'
	}

	if (doc.type === 'home_page') {
		return '/'
	}

	if (doc.type === 'contact_page') {
		return '/contact'
	}

	if (doc.type === 'article') {
		const category = doc.data.category.uid
		const slug = doc.slugs[0]

		return `/${ category }/${ slug }`
	}

	return '/not-found'
}
