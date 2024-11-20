'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useMemo, useContext } from 'react'
import AnalyticsContext from './analytics-context'
import { globalVariables, analyticsPageConfig, dataLocations, destinationFeeds } from './config'
import { track } from './functions'

export const useAnalytics = () => {
	return useContext(AnalyticsContext)
}

export const AnalyticsProvider = ({ children }) => {
	const router = useRouter()

	useEffect(() => {
		// Initialize analytics once on the client side
		// initializeAnalytics()
		console.log('🚀 Init Analytics')

		// Track page views on route changes
		// const handleRouteChange = url => {
		// 	trackPageView(url)
		// }

		// router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			// router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	const globalConfig = useMemo(() => {
		return {
			globalVariables,
			analyticsPageConfig,
			dataLocations,
			destinationFeeds
		}
	}, [])

	return <AnalyticsContext.Provider value={{ globalConfig, track }}>{children}</AnalyticsContext.Provider>
}
