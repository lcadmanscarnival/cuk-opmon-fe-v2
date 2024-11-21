// Interface for GeneralData
export interface GeneralData {
	customCurrencyCode?: string
	lastVisit?: string
	localDayTime?: string
	componentInteraction?: Record<string, any>
	[key: string]: any // Allow additional dynamic keys
}

// Interface for processed object
export interface ProcessedObject {
	[key: string]: any // Allow dynamic key-value pairs
}

export interface AnalyticsParams {
	linkText: string
	componentName: string
	linkTrackType?: string
}

export interface AdobeAnalyticsPlugin {
	name: string
	page?: (payload: Payload) => void
	reset?: () => void
	track?: (event: string, payload: Payload) => void
	pageTrack?: () => void
	dataLayerTrack?: (obj: Payload) => void
	dataLayerPush?: (location: string, obj: Payload, isObjectMergingRequired?: boolean) => void
}

export type Payload = Record<string, any>
