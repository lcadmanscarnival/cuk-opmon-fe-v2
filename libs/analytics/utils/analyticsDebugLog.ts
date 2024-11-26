export function analyticsDebugLog(props: any) {
	const { details, conditionFn } = props
	const { action, event, component, properties, method } = details
	try {
		console.log('🚀 Track |', `method:${method} |`, `action:${action} |`, `component:${component} |`, `event:`, { target: event?.target || null }, `| properties:`, properties)

		// Check if the condition is true using the provided function
		if (typeof conditionFn === 'function' && conditionFn()) {
			// console.log(message)
		}
	} catch (error) {
		console.warn('Error in conditionalLog:', error)
	}
}
