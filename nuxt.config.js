require('dotenv').config()

const logger = require('consola').withScope('nuxt')

const config = async () => {
	logger.info({
		endpoint: process.env.API_ENDPOINT,
		name: process.env.SITE_NAME,
		description: process.env.SITE_DESCRIPTION
	})

	const links = []

	const scripts = [
		{ src: 'https://cdn.jsdelivr.net/npm/whatwg-fetch@3.0.0/dist/fetch.umd.min.js' },
		{ src: 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js' },
		{ src: 'https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js' }
	]

	return {
		mode: 'universal',

		/*
		 ** Customize the progress-bar color
		 */
		loading: { color: process.env.SITE_ACCENT_COLOR || '#111111' },

		/*
		 ** Global CSS
		 */
		css: ['~/assets/styles/main.styl'],

		/*
		 ** Plugins to load before mounting the App
		 */
		plugins: [{ src: '~/plugins/vuex-persist', mode: 'client' }],

		/*
		 ** Nuxt.js modules
		 */
		modules: [
			'@nuxtjs/robots',
			'@nuxtjs/prismic',
			'@nuxtjs/sentry',
			'@nuxtjs/device'
		],

		buildModules: [
			'@aceforth/nuxt-optimized-images',
			'@aceforth/nuxt-netlify',
			'@nuxtjs/sitemap',
			'@nuxtjs/style-resources',
			'@nuxtjs/global-components',
			'@nuxtjs/gtm',
			'@nuxtjs/pwa',
			'@/modules/static',
			'@/modules/crawler',
			['@/modules/head', {
				lang: process.env.SITE_LANG,
				name: process.env.SITE_NAME,
				description: process.env.SITE_DESCRIPTION,
				metaImage: {
					og: process.env.SITE_METAIMG_OG,
					tw: process.env.SITE_METAIMG_TW
				},
				twitterHandle: process.env.SITE_TWITTER_HANDLE,
				script: scripts,
				backgroundColor: process.env.SITE_BACKGROUND_COLOR || '#FEFEFE',
				accentColor: process.env.SITE_ACCENT_COLOR || '#111111',
				titleFormat: process.env.SITE_TITLE_FORMAT,
				url: process.env.NODE_ENV === 'development' ? 'localhost:3000' : process.env.SITE_URL
			}],
		],

		optimizedImages: {
			optimizeImages: true
		},

		sentry: {
			dsn: process.env.SENTRY_DSN
		},

		netlify: {
			header: {},
			redirects: []
		},

		gtm: {
			dev: process.env.NODE_ENV !== 'development',
			pageTracking: true,
			id: process.env.GTM_ID
		},

		pwa: {
			manifest: {
				lang: process.env.SITE_LANG,
				name: process.env.SITE_NAME,
				short_name: process.env.SITE_NAME,
				description: process.env.SITE_DESCRIPTION,
				background_color: process.env.SITE_BACKGROUND_COLOR || '#FEFEFE',
				theme_color: process.env.SITE_ACCENT_COLOR || '#111111'
		 	}
		},

		prismic: {
			endpoint: process.env.API_ENDPOINT,
			linkResolver: '@/plugins/link-resolver',
			htmlSerializer: '@/plugins/html-serializer'
		},

		styleResources: {
			stylus: ['./assets/styles/system.styl']
		},

		srcDir: 'src/',

		router: {
			base: '/'
		},

		sitemap: {
			hostname: process.env.SITE_URL,
			gzip: true
		},

		/*
		 ** Build configuration
		 */
		build: {
			/*
			 ** You can extend webpack config here
			 */
			extend(config, ctx) {
				config.resolve.alias['vue'] = 'vue/dist/vue.common'
			}
		},

		generate: {
			fallback: true
			// Netlify reads a 404.html, Nuxt will load as an SPA
			// fallback: '404.html'
		}
	}
}

export default config
