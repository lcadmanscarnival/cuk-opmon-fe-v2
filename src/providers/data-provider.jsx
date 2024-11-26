'use client'

import { useEffect } from 'react'
import { createContext, useState } from 'react'

export const DataContext = createContext({})

export const DataProvider = ({ data, children }) => {
	const [appState, setAppState] = useState({ currentView: 'apps' })

	useEffect(() => {
		console.log('appState')
		console.log(appState)
	}, [appState])

	return <DataContext.Provider value={{ data, useAppState: [appState, setAppState] }}>{children}</DataContext.Provider>
}
