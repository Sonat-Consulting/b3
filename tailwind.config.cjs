const colors = require('tailwindcss/colors');

const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
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
				136: '34rem',
				144: '36rem',
				152: '38rem',
				160: '40rem',
				168: '42rem',
				176: '44rem',
				184: '46rem',
				192: '48rem',
				256: '64rem'
			}
		}
	},
	daisyui: {
		themes: [
			{
				b3: {
					primary: '#56ccf2',
					secondary: '#d1d1d1',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#ffffff'
				}
			}
		]
	}
};

module.exports = config;
