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
			backgroundImage: (theme) => ({
				elipse: "url('/src/img/ellipse.png')"
			}),
			borderColor: {
				red: '#FF0513'
			},
			backgroundColor: {
				red: '#FF0513',
				darkBlue: '#040221',
				navyBlue: '#0E0C38'
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
