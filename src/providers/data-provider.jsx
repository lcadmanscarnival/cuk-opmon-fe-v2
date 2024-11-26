'use client'

import { useEffect } from 'react'
import { createContext, useState } from 'react'

export const DataContext = createContext({})

export const DataProvider = ({ data, children }) => {
	// const [appState, setAppState] = useState({ refs: {}, searchTerm: '', functions: {} })

	useEffect(() => {
		console.log(data)
	}, [data])

	return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
}
