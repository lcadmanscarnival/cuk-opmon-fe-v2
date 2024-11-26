import { analyticsDebugLog } from '@repo/analytics'

export const track = props => {
	const { action, event, component, properties } = props
	analyticsDebugLog({ details: { action: action, event: event, component: component, properties: properties, method: 'track' }, conditionFn: true })

	// READ FROM JSON AND DECIDE WHAT DESTINATIONS TO SEND TO
	const destinations = []

	// SEND TO ALL DESTINATIONS
	destinations.forEach(destination => {
		destination.track(event, properties)
	})

	try {
	} catch (e) {
		// Handle Errors
	}

	return true
}
