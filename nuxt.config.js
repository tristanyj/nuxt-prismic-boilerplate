require('dotenv').config()

const pkg = require('./package')
const logger = require('consola').withScope('nuxt')

module.exports = async () => {
	logger.info({ endpoint: process.env.API_ENDPOINT })

	return {
		mode: 'universal',
		head: {
			title: 'Nuxt Prismic Boilerplate',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: pkg.description }
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
				{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
				{ rel: 'manifest', href: '/favicon/site.webmanifest' },
				{ rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' }
			],
			script: [
				{ src: 'https://cdn.jsdelivr.net/npm/whatwg-fetch@3.0.0/dist/fetch.umd.min.js' },
				{ src: 'https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js' }
			]
		},

		/*
		** Customize the progress-bar color
		*/
		loading: { color: '#fff' },

		/*
		** Global CSS
		*/
		css: [
			'~/assets/styles/main.styl'
		],

		/*
		** Plugins to load before mounting the App
		*/
		plugins: [
			{ src: '~/plugins/vuex-persist', mode: 'client' }
		],

		/*
		** Nuxt.js modules
		*/
		modules: [
		],

		buildModules: [
			'@nuxtjs/style-resources',
			'@nuxtjs/gtm',
			'@/modules/static',
			'@/modules/crawler',
			// '@/modules/head',
			'@nuxtjs/prismic'
		],

		gtm: {
			id: 'GTM-XXXXXXX'
		},

		prismic: {
			endpoint: process.env.API_ENDPOINT,
			linkResolver: '@/plugins/link-resolver',
			htmlSerializer: '@/plugins/html-serializer',
		},

		styleResources: {
			stylus: [
				'./assets/styles/system.styl',
			]
		},

		srcDir: 'src/',
		router: {
			base: '/'
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
			fallback: true,
			// Netlify reads a 404.html, Nuxt will load as an SPA
			// fallback: '404.html'
		}
	}
}
