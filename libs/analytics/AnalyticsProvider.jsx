'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useMemo } from 'react'
import AnalyticsContext from './AnalyticsContext'
import { globalVariables, analyticsPageConfig, dataLocations, destinationFeeds } from './config'

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

	return <AnalyticsContext.Provider value={{ globalConfig }}>{children}</AnalyticsContext.Provider>
}
