const colors = require('tailwindcss/colors');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('daisyui')],
	theme: {
		extend: {
			colors: {
				sky: colors.sky
			},
			height: {
				104: '26rem',
				112: '28rem',
				120: '30rem',
				128: '32rem',
				192: '48rem',
				256: '64rem'
			}
		}
	},
	daisyui: {
		styled: true,
		themes: false,
		base: true,
		utils: true,
		logs: false,
		rtl: false,
		prefix: '',
		darkTheme: 'dark'
	}
};

module.exports = config;
