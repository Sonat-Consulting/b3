const colors = require('tailwindcss/colors');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

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
	}
};

module.exports = config;
