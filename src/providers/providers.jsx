'use client'

import { ThemeProvider } from './theme-provider'
import { HotkeysProvider } from './hotkeys-provider'
import { AppProvider } from './app-provider'

import { AnalyticsProvider } from '@repo/analytics'

export function Providers({ children, ...props }) {
	return (
		<>
			<AppProvider>
				<ThemeProvider>
					<HotkeysProvider>
						<AnalyticsProvider>{children}</AnalyticsProvider>
					</HotkeysProvider>
				</ThemeProvider>
			</AppProvider>
		</>
	)
}
