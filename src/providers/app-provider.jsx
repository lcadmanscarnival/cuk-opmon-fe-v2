'use client'

import { createContext, useState } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
	const [appState, setAppState] = useState({ refs: {}, searchTerm: '', functions: {}, currentView: 'apps' })

	// useEffect(() => {
	// 	console.log('appState')
	// 	console.log(appState)
	// }, [appState])

	const updateAppState = (type, value) => {
		if (typeof appState[type] === 'object') {
			setAppState({ ...appState, [type]: { ...appState[type], ...value } })
		} else {
			setAppState({ ...appState, [type]: value })
		}
	}

	return <AppContext.Provider value={{ init: true, refs: {}, appState, updateAppState, currentView: 'apps' }}>{children}</AppContext.Provider>
}
