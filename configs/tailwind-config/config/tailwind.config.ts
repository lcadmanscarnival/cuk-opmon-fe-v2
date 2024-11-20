import { baseTheme } from '../themes'

const content = ['./packages/ui/src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './apps/**/*.{js,ts,jsx,tsx,mdx}']

export const tailwindConfig = {
	darkMode: ['class', '[data-mode="dark"]'],
	content,
	theme: {
		...baseTheme,
		extend: {
			colors: {
				neutral: {
					0: '#ffffff',
					200: '#cccccc',
					500: '#666666',
					600: '#333333',
					800: '#000000'
				},
				test: {
					200: '#000000'
				},
				brand: {
					primary: {
						800: '#002776'
					},
					secondary: {
						400: '#e30613',
						800: '#b10f26'
					}
				}
			}
		}
	},
	plugins: []
}
