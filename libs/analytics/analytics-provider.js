'use client'

import { useRouter, usePathname } from 'next/navigation'
import React, { useEffect, useMemo, useContext } from 'react'
import AnalyticsContext from './analytics-context'
import { globalVariables, analyticsPageConfig, dataLocations, destinationFeeds } from './config'
import { track, pageTrack } from '@repo/analytics/functions'
import { initializeAnalytics } from '@repo/analytics/lib'

export const useAnalytics = () => {
	return useContext(AnalyticsContext)
}

export const AnalyticsProvider = ({ children }) => {
	const pathName = usePathname()
	// const { trackPageView } = useAnalytics()

	useEffect(() => {
		// Initialize the analytics provider
		initializeAnalytics()

		// Track page views on route changes
		pageTrack()

		// trackPageView(url)
	}, [pathName])

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
