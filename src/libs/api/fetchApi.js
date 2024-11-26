import { API_ENDPOINTS } from './'
import { mockData } from '../../data/mock'

export const fetchData = async props => {
	const { endpoint, properties } = props
	let response
	// console.log(properties)
	let apiAvailable = true

	if (apiAvailable) {
		try {
			console.log('>> Fetch API')
			console.log(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS[endpoint](properties)}`)
			response = await fetch(process.env.NEXT_PUBLIC_API_URL + API_ENDPOINTS[endpoint](properties))
		} catch (e) {
			console.log('error')
			console.log(e)
		}
	} else {
		return mockData[endpoint]
	}
	return response.json()
}
