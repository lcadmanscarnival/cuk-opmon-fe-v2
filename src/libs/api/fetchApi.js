import { API_ENDPOINTS } from './'

export const fetchData = async props => {
	const { endpoint } = props

	console.log('>> Fetch API')
	// console.log(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS[endpoint]}`)

	// const ship_id = '123'
	console.log(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS[endpoint](null)}`)

	const response = await fetch(process.env.NEXT_PUBLIC_API_URL + API_ENDPOINTS[endpoint](null))
	return response.json()

	// return response
}

export const fetchApi = async (endpoint, context) => {
	console.log('>> Fetch API')
	console.log(`${process.env}/${API_ENDPOINTS[endpoint]}`)
	// const response = await fetch(process.env + endpoint, options)
	// return response.json()
}
