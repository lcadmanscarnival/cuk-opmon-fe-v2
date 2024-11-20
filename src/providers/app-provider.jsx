'use client'

import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
	const [appState, setAppState] = useState({ refs: {}, searchTerm: '', functions: {} })

	useEffect(() => {
		console.log('appState')
		console.log(appState)
	}, [appState])

	const updateAppState = (type, value) => {
		if (typeof appState[type] === 'object') {
			setAppState({ ...appState, [type]: { ...appState[type], ...value } })
		} else {
			setAppState({ ...appState, [type]: value })
		}
	}

	return <AppContext.Provider value={{ init: true, refs: {}, appState, updateAppState }}>{children}</AppContext.Provider>
}
