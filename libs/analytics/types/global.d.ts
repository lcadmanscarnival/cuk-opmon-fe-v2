import { GeneralData } from '.'

export declare global {
	interface Window {
		dtm_digitalData?: {
			general?: GeneralData
			adobeDataLayer?: Record<string, any>[]
			_satellite?: {
				track: (template: string) => void
			}
			configs?: {
				template: string
			}
		}
		adobeDataLayer?: Record<string, any>[]
		_satellite?: {
			track: (event: string) => void
		}
		configs?: Record<string, any>
	}
}
