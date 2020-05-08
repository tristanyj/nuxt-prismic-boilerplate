/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
	theme: {
		screens: {
			// xs: '472px',
			s: '640px',
			m: '768px',
			l: '1024px',
			xl: '1280px',
			xxl: '1536px'
		},
		colors: {
			none: 'transparent',
			transparent: 'transparent',
			current: 'currentColor',
        	inherit: 'inherit',

			black: '#000000',
			white: '#ffffff',

			grey: {
				100: '#f7fafc',
				200: '#edf2f7',
				300: '#e2e8f0',
				400: '#cbd5e0',
				500: '#a0aec0',
				600: '#718096',
				700: '#4a5568',
				800: '#2d3748',
				900: '#1a202c'
			}
		},
		opacity: {
			inherit: 'inherit',
			'0': '0',
			'10': '0.1',
			'20': '0.2',
			'30': '0.3',
			'40': '0.4',
			'50': '0.5',
			'60': '0.6',
			'70': '0.7',
			'80': '0.8',
			'90': '0.9',
			'100': '0.99'
		},
		spacing: {
			px: '1px',
			// 0px
			'0': '0',
			// 4px
			'1': '0.25rem',
			// 8px
			'2': '0.5rem',
			// 12px
			'3': '0.75rem',
			// 16px
			'4': '1rem',
			// 20px
			'5': '1.25rem',
			// 24px
			'6': '1.5rem',
			// 32px
			'8': '2rem',
			// 40px
			'10': '2.5rem',
			// 48px
			'12': '3rem',
			// 64px
			'16': '4rem',
			// 80px
			'20': '5rem',
			// 96px
			'24': '6rem',
			// 128px
			'32': '8rem',
			// 160px
			'40': '10rem',
			// 192px
			'48': '12rem',
			// 224px
			'56': '14rem',
			// 256px
			'64': '16rem'
		},
		space: (theme, { negative }) => ({
			...theme('spacing'),
			...negative(theme('spacing'))
		}),
		fontFamily: {
			circular: ['Circular', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'sans-serif'],
			sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'sans-serif'],
			serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
		},
		fontSize: {
			// 12px
			xs: '0.75rem',
			// 14px
			s: '0.875rem',
			// 16px
			m: '1rem',
			// 18px
			l: '1.125rem',
			// 20px
			xl: '1.25rem',
			// 24px
			'2xl': '1.5rem',
			// 30px
			'3xl': '1.875rem',
			// 36px
			'4xl': '2.25rem',
			// 48px
			'5xl': '3rem',
			// 64px
			'6xl': '4rem'
		},
		fontWeight: {
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900'
		},
		letterSpacing: {
			// -0.8px
			xs: '-0.05em',
			// -0.4px
			s: '-0.025em',
			// 0px
			m: '0',
			// 0.4px
			l: '0.025em',
			// 0.8px
			xl: '0.05em',
			// 1.6px
			'2xl': '0.1em',
		},
		lineHeight: {
			none: '1',
			tight: '1.25',
			snug: '1.375',
			normal: '1.5',
			relaxed: '1.625',
			loose: '2',
			// 12px
			'3': '.75rem',
			// 16px
			'4': '1rem',
			// 20px
			'5': '1.25rem',
			// 24px
			'6': '1.5rem',
			// 28px
			'7': '1.75rem',
			// 32px
			'8': '2rem',
			// 36px
			'9': '2.25rem',
			// 40px
			'10': '2.5rem',
		},
		borderColor: theme => ({
			...theme('colors'),
			default: theme('colors.black', 'currentColor')
		}),
		borderRadius: {
			// 0px
			none: '0',
			// 2px
			s: '0.125rem',
			// 4px
			m: '0.25rem',
			// 6px
			l: '0.375rem',
			// 8px
			xl: '0.5rem',
			// 12px
			'2xl': '0.75rem',
			// 16px
			'3xl': '1rem',
			// 20px
			'3xl': '1.25rem',
			// 100%
			full: '9999px'
		},
		borderWidth: {
			default: '1px',
			'0': '0',
			'2': '2px',
			'4': '4px',
			'8': '8px'
		},
		boxShadow: {
			xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
			s: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			m: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			l: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			xl: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			'2xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'3xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
			none: 'none'
		},
		minWidth: {
			'0': '0',
			full: '100%'
		},
		width: theme => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vw'
		}),
		maxWidth: (theme, { breakpoints }) => ({
			none: 'none',
			// 320px
			xs: '20rem',
			// 384px
			s: '24rem',
			// 448px
			m: '28rem',
			// 512px
			l: '32rem',
			// 576px
			xl: '36rem',
			// 672px
			'2xl': '42rem',
			// 768px
			'3xl': '48rem',
			// 896px
			'4xl': '56rem',
			// 1 024px
			'5xl': '64rem',
			// 1 152px
			'6xl': '72rem',
			full: '100%',
			...breakpoints(theme('screens'))
		}),
		minHeight: {
			'0': '0',
			full: '100%',
			screen: '100vh'
		},
		height: theme => ({
			auto: 'auto',
			...theme('spacing'),
			full: '100%',
			screen: '100vh'
		}),
		maxHeight: {
			full: '100%',
			screen: '100vh'
		},
		padding: theme => theme('spacing'),
		margin: (theme, { negative }) => ({
			auto: 'auto',
			...theme('spacing'),
			...negative(theme('spacing'))
		}),
		zIndex: {
			auto: 'auto',
			'-1': '-1',
			'0': '0',
			'10': '10',
			'20': '20',
			'30': '30',
			'40': '40',
			'50': '50',
			'60': '60',
			'70': '70',
			'80': '80',
			'90': '90',
			'100': '100'
		},
		scale: {
			'0': '0',
			'50': '.5',
			'75': '.75',
			'90': '.9',
			'95': '.95',
			'100': '1',
			'105': '1.05',
			'110': '1.1',
			'125': '1.25',
			'150': '1.5'
		},
		rotate: {
			'-180': '-180deg',
			'-90': '-90deg',
			'-45': '-45deg',
			'0': '0',
			'45': '45deg',
			'90': '90deg',
			'180': '180deg'
		},
		skew: {
			'-12': '-12deg',
			'-6': '-6deg',
			'-3': '-3deg',
			'0': '0',
			'3': '3deg',
			'6': '6deg',
			'12': '12deg'
		},
		translate: (theme, { negative }) => ({
			...theme('spacing'),
			...negative(theme('spacing')),
			'-full': '-100%',
			'-1/2': '-50%',
			'1/2': '50%',
			full: '100%'
		}),
		transitionProperty: {
			none: 'none',
			all: 'all',
			default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
			colors: 'background-color, border-color, color, fill, stroke',
			width: 'width',
			height: 'height',
			size: 'width, height',
			opacity: 'opacity',
			transform: 'transform',
			paint: 'opacity, transform'
		},
		transitionTimingFunction: {
			linear: 'linear',
			ease: 'cubic-bezier(.54, .1, 0, .99)',
			in: 'cubic-bezier(0.4, 0, 1, 1)',
			out: 'cubic-bezier(0, 0, 0.2, 1)',
			// Functions from https://easings.net
			'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
			'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
			'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
			'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
			'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
			'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
			'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
			'in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
			'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
			'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
			'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
			'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
			'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
			'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
			'out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
			'in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
			'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
			'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
			'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
			'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
			'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
			'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
			'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
		},
		transitionDuration: {
			'75': '75ms',
			'100': '100ms',
			'150': '150ms',
			'200': '200ms',
			'300': '300ms',
			'500': '500ms',
			'700': '700ms',
			'1000': '1000ms',
			'2000': '2000ms'
		},
		darkSelector: '.dark-mode'
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
		borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus', 'dark-focus-within'],
		textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-active', 'dark-placeholder']
	},
	plugins: [
		require('tailwindcss-dark-mode')()
	],
	purge: {
		// Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'./src/components/**/*.vue',
			'./src/layouts/**/*.vue',
			'./src/pages/**/*.vue',
			'./src/plugins/**/*.js',
			'nuxt.config.js'
		],
		options: {
			whitelist: ['dark-mode']
		}
	}
}
