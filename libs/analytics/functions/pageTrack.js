import { analyticsDebugLog } from '@repo/analytics'

export const pageTrack = props => {
	analyticsDebugLog({ details: { method: 'pageTrack', event: event, component: 'null', properties: { pageTrack: true } }, conditionFn: true })

	try {
	} catch (e) {
		// Handle Errors
	}

	return true
}
