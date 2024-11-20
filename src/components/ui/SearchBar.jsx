import { Icons } from 'icons'
import { AppContext } from 'providers/app-provider'
import { useContext, useRef, useState } from 'react'
import { useEffect } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useAnalytics } from '@repo/analytics'

export const SearchBar = () => {
	const { appState, updateAppState } = useContext(AppContext)
	const searchInputRef = useRef()
	const [focused, setFocused] = useState(false)

	const { track } = useAnalytics()

	useEffect(() => {
		if (searchInputRef.current) updateAppState('refs', { searchInputRef: searchInputRef.current })
	}, [searchInputRef])

	useHotkeys(
		'esc',
		() => {
			setFocused(false)
			updateAppState('searchTerm', '')
			searchInputRef.current.blur()
		},
		{ enableOnTags: ['INPUT', 'TEXTAREA'], enableOnFormTags: true }
	)

	return (
		<>
			{focused && (
				<div
					className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 z-10'
					onClick={() => {
						setFocused(false)
						updateAppState('searchTerm', '')
					}}
				></div>
			)}
			<div className={`flex items-center justify-between  w-full  space-x-2 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-900 px-3.5 py-2 z-[100] relative ${focused ? 'rounded-b-none' : ''}`}>
				<div className='search flex items-center w-full space-x-2'>
					<Icons.search className='w-5 h-5' />
					<input
						ref={searchInputRef}
						type='search'
						placeholder='Search'
						className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 font-light  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:ring-0 focus:border-none focus-visible:ring-0 focus-visible:border-none border-none '
						onFocus={() => {
							setFocused(true)
						}}
						value={appState.searchTerm}
						onChange={e => {
							updateAppState('searchTerm', e.target.value)
							track('change', 'SearchBar', { searchTerm: e.target.value })
						}}
					/>
				</div>
				<div className='flex right items-center px-4'>
					<div className='flex flex-shrink-0 p-2 bg-slate-100 rounded-lg mr-4'>⌘ K</div>
					<div className='info 4'>
						<Icons.info className={'w-4 h-4'} />
					</div>
				</div>
			</div>
			<div className={`searchbar-results relative z-[99] -top-1 w-full bg-white h-24 border border-gray-300  rounded-b-xl ${focused ? 'active' : ''}`}>
				<div className='inner p-4 pt-6'>
					{['Narrow Your Searches', 'Recent Searches', 'Recently Viewed', 'Suggested'].map((item, index) => (
						<div key={index} className='item'>
							<div className='title uppercase text-xs text-slate-500'>{item}</div>
							<div className='entries h-12'></div>
							<div className='item'></div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
