const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			indigo: colors.indigo,
			rose: colors.rose,
			transparent: 'transparent',
			yellow: colors.amber,
			warning: colors.red
		},
		borderWidth: {
			'1': '1px',
			'2': '2px',
			'3': '3px',
			'4': '4px',
			'6': '6px',
			'8': '8px'
		},
		backgroundSize: {
			auto: 'auto',
			cover: 'cover',
			contain: 'contain',
			'50%': '50%',
			'16': '4rem'
		},
		screens: {
			xs: '500px',
			...defaultTheme.screens
		},
		extend: {
			fontFamily: {
				sans: [ 'Helvetica', 'Arial', 'sans-serif' ],
				logo: [ 'FREESCPT' ],
				text: [ 'Poppins' ]
			},
			fontSize: {
				xl: '1.34rem',
				'9xl': '7rem'
			},
			spacing: {
				'1': '8px',
				'2': '12px',
				'3': '16px',
				'4': '24px',
				'5': '32px',
				'6': '48px'
			},
			colors: {
				red: {
					DEFAULT: '#FF0513'
				},
				gray: {
					DEFAULT: '#707070'
				},
				blue: {
					dark: '#0E0C38'
				}
			},
			borderColor: {
				red: '#FF0513'
			},
			backgroundColor: {
				red: '#FF0513',
				darkBlue: '#040221',
				navyBlue: '#050435'
			},
			keyframes: {
				wiggle: {
					'0%': { transform: 'scale(1.25)' },
					'25%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				}
			},
			animation: {
				wiggle: 'wiggle .5s ease-in-out 1'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
