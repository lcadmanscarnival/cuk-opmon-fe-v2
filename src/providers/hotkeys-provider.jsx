'use client'

import { useHotkeys } from 'react-hotkeys-hook'
import { AppContext } from 'providers/app-provider'
import { useContext } from 'react'

export function HotkeysProvider({ children }) {
	const appContext = useContext(AppContext)
	const { appState, updateAppState } = appContext

	// Define actions for hotkeys

	useHotkeys(
		'meta+k',
		() => {
			appState.refs.searchInputRef.focus()
		},
		{ enableOnTags: ['INPUT', 'TEXTAREA'] }
	)

	useHotkeys('ctrl+shift+l', () => console.log('Hotkey CTRL+SHIFT+L triggered!'))

	return <>{children}</>
}
