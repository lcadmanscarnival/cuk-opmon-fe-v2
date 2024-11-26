// src/lib/api/apiUtils.ts
export const handleResponse = async response => {
	if (!response.ok) {
		const error = await response.json()
		throw new Error(error.message || 'An error occurred')
	}
	return response.json()
}

export const handleError = error => {
	console.error('API Error:', error)
	throw error
}
