import { AnalyticsProvider } from '@repo/analytics'
import { DataProvider } from '../../providers/data-provider'
import { fetchData } from '../../libs/api'

export default async function Layout({ children }) {
	let appsData = await fetchData({ endpoint: 'apps' })

	return (
		<>
			<DataProvider data={{ appsData }}>{children}</DataProvider>
		</>
	)
}
