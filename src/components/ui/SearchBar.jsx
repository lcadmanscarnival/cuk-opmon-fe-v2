'use client'

import { Icons } from 'icons'
import { AppContext } from 'providers/app-provider'
import { useContext, useRef, useState } from 'react'
import { useEffect } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useAnalytics } from '@repo/analytics'
import { fetchData } from '../../libs/api'
import { suggestedSearches } from '../../data/search'
import { useQueryState } from 'nuqs'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export async function SearchApi(query) {
	// console.log(query)
	const results = await fetchData({ endpoint: 'search', properties: { query } })
	return results.json()
}

export const SearchBar = () => {
	const { appState, updateAppState } = useContext(AppContext)
	const searchInputRef = useRef()
	const [focused, setFocused] = useState(false)
	const { track } = useAnalytics()

	const [searchResults, setSearchResults] = useState([])

	useEffect(() => {
		if (searchInputRef.current && !appState.refs.searchInputRef) updateAppState('refs', { searchInputRef: searchInputRef.current })
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

	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		if (appState.searchTerm.length > 1) router.push(pathname + '?' + createQueryString('sort', appState.searchTerm))
	}, [appState.searchTerm])

	// Get a new searchParams string by merging the current
	// searchParams with a provided key/value pair
	const createQueryString = useCallback(
		(name, value) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(name, value)

			return params.toString()
		},
		[searchParams]
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
							// router.push(pathname + '?' + createQueryString('sort', e.target.value), undefined, { shallow: true })
							track({ action: 'keydown', event: e, component: 'SearchBar', properties: { searchTerm: e.target.value } })
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
					{searchResults.length === 0 ? <div className='mb-6 pb-6 text-slate-600 animate-pulse text-sm border-b'>Keep Typing...</div> : <></>}
					{[{ displayName: 'Recent Searches' }, { displayName: 'Recently Viewed' }, { displayName: 'Suggested', entries: suggestedSearches }].map((item, index) => (
						<div key={index} className='item'>
							<div className='title uppercase text-xs text-slate-500'>{item.displayName}</div>
							<div className='entries h-12'>
								{item.entries &&
									item.entries.map((entry, index) => {
										return (
											<div key={index} className='entry my-4 px-2'>
												<div className='title'>{entry}</div>
											</div>
										)
									})}
							</div>
							<div className='item'></div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
