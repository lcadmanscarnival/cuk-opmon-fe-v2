import { useContext } from 'react'
import AnalyticsContext from './AnalyticsContext'

// Hook to use the analytics context
export const useAnalytics = () => {
	const context = useContext(AnalyticsContext)
	if (!context) {
		throw new Error('useAnalytics must be used within an AnalyticsProvider')
	}
	return context
}
