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

	if (doc.type === 'post') {
		return `/${ doc.uid }`
	}

	return '/not-found'
}
