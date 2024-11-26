'use client'

import { AnalyticsProvider } from '@repo/analytics'
import { AppProvider, HotkeysProvider, Nuqs, ThemeProvider } from './'

export function Providers({ children, ...props }) {
	return (
		<>
			<Nuqs>
				<AppProvider>
					<ThemeProvider>
						<HotkeysProvider>
							<AnalyticsProvider>{children}</AnalyticsProvider>
						</HotkeysProvider>
					</ThemeProvider>
				</AppProvider>
			</Nuqs>
		</>
	)
}
