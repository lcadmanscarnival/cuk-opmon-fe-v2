import { AnalyticsProvider } from '@repo/analytics'
import { DataProvider } from '../../providers/data-provider'
import { fetchData } from '../../libs/api'

export default async function Layout({ children }) {
	let appsData = await fetchData({ endpoint: 'apps' })
	let problemsData = await fetchData({ endpoint: 'problems' })
	let hostsData = await fetchData({ endpoint: 'hosts' })

	// console.log(appsData)

	return (
		<>
			<DataProvider data={{ appsData, problemsData, hostsData }}>{children}</DataProvider>
		</>
	)
}
