import { fetchData } from '.'

export async function searchApi() {
	let searchData = await fetchData({ endpoint: 'search', properties: { query: 'dashboard' } })

	return searchData
}
