export function analyticsDebugLog(props: any) {
	const { details, conditionFn } = props
	const { event, component, properties, method } = details
	try {
		console.log('🚀 Track |', `method:${method} |`, `event:${event} |`, `component:${component} |`, `properties:`, properties)

		// Check if the condition is true using the provided function
		if (typeof conditionFn === 'function' && conditionFn()) {
			// console.log(message)
		}
	} catch (error) {
		console.warn('Error in conditionalLog:', error)
	}
}
