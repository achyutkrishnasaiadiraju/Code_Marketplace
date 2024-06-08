/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#be2bbb',
					dark: '#942292',
				},
				background: '#ffffff',
				secondary: '#333333',
				lightText: '#666666',
				border: '#dddddd',
			},
		},
	},
	plugins: [],
}
