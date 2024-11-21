import { AdobeAnalyticsPlugin, Payload } from '@repo/analytics/types'

export const adobeLaunchPlugin: AdobeAnalyticsPlugin = {
	name: 'adobe-launch',

	// Reset user/session data
	reset: () => {
		if (typeof window !== 'undefined' && window.dtm_digitalData?.general) {
			window.dtm_digitalData.general = {} // Clear general data
			console.log('Adobe Launch: Reset general data.')
		}
	},

	page: (payload: Payload) => {
		// Track a page view
		if (typeof window !== 'undefined' && window._satellite) {
			window._satellite.track('page')
			console.log('Adobe Launch: Page tracked', payload)
		}
	},

	// Track custom events (including user interactions)
	track: (event: string, payload: Payload) => {
		if (typeof window !== 'undefined' && window._satellite) {
			const userInteractionObj = {
				[event]: payload
			}

			// Update Data Layer for user interaction
			if (!window.dtm_digitalData?.general?.componentInteraction) {
				window.dtm_digitalData!.general!.componentInteraction = userInteractionObj
			} else {
				Object.assign(window.dtm_digitalData!.general!.componentInteraction, userInteractionObj)
			}

			// Trigger tracking event
			window._satellite.track('linkTrack')
			console.log('Adobe Launch: Event tracked', { event, payload })
		}
	},

	// Track page load events
	pageTrack: () => {
		if (typeof window !== 'undefined' && typeof window._satellite === 'object' && typeof window.configs !== 'undefined' && window.dtm_digitalData?.general) {
			window.dtm_digitalData.general.customCurrencyCode = getCurrencyData()?.currencyCode?.toUpperCase() ?? ''
			window.dtm_digitalData.general.lastVisit = lastVisitTime()
			window.dtm_digitalData.general = getFormattedAttributes(window.dtm_digitalData.general)
			Object.assign(window.dtm_digitalData.general, {
				localDayTime: new Date().toString()
			})

			setTimeout(() => {
				window._satellite?.track(window.configs?.template || '')
			}, 2500)
		}
	},

	// Push data to Adobe Data Layer
	dataLayerTrack: (obj: Payload) => {
		if (typeof window !== 'undefined' && typeof window._satellite === 'object' && typeof window.configs !== 'undefined') {
			window.adobeDataLayer?.push(obj)
			window._satellite.track('screenLoad')
			console.log('Adobe Launch: Data Layer Track', obj)
		}
	},

	// Push objects or arrays to the data layer
	dataLayerPush: (location: string, obj: Payload, isObjectMergingRequired: boolean = true) => {
		if (typeof window !== 'undefined' && typeof window._satellite === 'object' && typeof window.configs !== 'undefined' && window.dtm_digitalData?.general) {
			const processedObj = runExclusions(location, obj)

			if (typeof window.dtm_digitalData.general[location] === 'undefined' || !isObjectMergingRequired) {
				window.dtm_digitalData.general[location] = processedObj
			} else {
				Object.assign(window.dtm_digitalData.general[location], processedObj)
			}

			console.log('Adobe Launch: Data Layer Push', location, processedObj)
		}
	}
}

export default adobeLaunchPlugin

/**
 * Helper Methods (Stub implementations)
 * These methods should be implemented based on your application's logic.
 */
function getCurrencyData(): { currencyCode?: string } {
	return { currencyCode: 'USD' }
}

function lastVisitTime(): string {
	return new Date().toISOString()
}

function getFormattedAttributes(data: Record<string, any>): Record<string, any> {
	return { ...data, formatted: true }
}

function runExclusions(location: string, obj: Payload): Payload {
	return { ...obj, excluded: false }
}
