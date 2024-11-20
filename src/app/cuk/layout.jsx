import { AnalyticsProvider } from '@repo/analytics'

export default function Layout({ children }) {
	return (
		<>
			<AnalyticsProvider>{children}</AnalyticsProvider>
		</>
	)
}
