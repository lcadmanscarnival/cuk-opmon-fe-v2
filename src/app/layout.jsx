// import type { Metadata } from 'next'
import { ThemeProvider } from 'providers/theme-provider'
import { Providers } from 'providers'

import localFont from 'next/font/local'
import '../styles/globals.css'

const geistSans = localFont({
	src: '../fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
})
const geistMono = localFont({
	src: '../fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})

export const metadata = {
	title: 'CUK - Operational Monitoring',
	description: 'Carnival UK Operational Monitoring Home'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning className='light'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen min-w-screen`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
