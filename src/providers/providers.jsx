'use client'

import { ThemeProvider } from './theme-provider'
import { HotkeysProvider } from './hotkeys-provider'
import { AppProvider } from './app-provider'

export function Providers({ children, ...props }) {
	return (
		<>
			<AppProvider>
				<ThemeProvider>
					<HotkeysProvider>{children}</HotkeysProvider>
				</ThemeProvider>
			</AppProvider>
		</>
	)
}
