'use client'

import { useAnalytics } from '@repo/analytics'
import { Icons } from 'icons'
import { useQueryState } from 'nuqs'
import { AppContext } from 'providers'
import { useContext, useEffect, useRef, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { suggestedSearches } from '../../data/search'

import { searchApi } from '../../libs/api'

export const SearchEntry = props => {
	const { entry, index } = props
	return (
		<div key={index} className='entry my-4 px-2 flex'>
			<Icons.history className={'w-6 h-6 mr-2 text-gray-600'} /> <div className='title'>{entry}</div>
		</div>
	)
}
export const SearchBar = () => {
	const { appState, updateAppState } = useContext(AppContext)
	const searchInputRef = useRef()
	const [focused, setFocused] = useState(false)
	const { track } = useAnalytics()
	const [searchTerm, setSearchTerm] = useQueryState('query')
	const [searchResults, setSearchResults] = useState([])

	useEffect(() => {
		if (searchInputRef.current) updateAppState('refs', { searchInputRef: searchInputRef.current })
	}, [searchInputRef, updateAppState])

	useEffect(() => {
		searchApi().then(data => {
			console.log(data)
		})
	}, [])

	// useEffect(() => {
	// 	console.log(process.env.NEXT_PUBLIC_API_URL + `/api/search?q=dashboard`)
	// 	fetch(process.env.NEXT_PUBLIC_API_URL + `/api/search?q=dashboard`)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			console.log(data)
	// 		})
	// }, [])

	useHotkeys('return', () => {}, { enableOnTags: ['INPUT', 'TEXTAREA'], enableOnFormTags: true })
	useHotkeys(
		'esc',
		() => {
			setFocused(false)
			updateAppState('searchTerm', '')
			searchInputRef.current.blur()
		},
		{ enableOnTags: ['INPUT', 'TEXTAREA'], enableOnFormTags: true }
	)

	useEffect(() => {
		setSearchTerm('')
	}, [setSearchTerm])

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
						value={searchTerm}
						onChange={e => {
							setSearchTerm(e.target.value)
							track({ action: 'keydown', event: e, component: 'SearchBar', properties: { searchTerm: e.target.value } })
						}}
					/>
				</div>
				<div className='flex right items-center px-4'>
					{!focused && <div className='flex flex-shrink-0 p-2 bg-gray-100 rounded-lg mr-4'>⌘ K</div>}
					{focused && <div className='flex flex-shrink-0 p-2 bg-gray-100 rounded-lg mr-4'>↵</div>}
					<div className='info 4'>
						<Icons.info className={'w-4 h-4'} />
					</div>
				</div>
			</div>
			<div className={`searchbar-results relative z-[99] -top-1 w-full bg-white h-24 border border-gray-300  rounded-b-xl ${focused ? 'active' : ''}`}>
				<div className='inner p-4 pt-6'>
					{searchResults.length === 0 ? <div className='mb-6 pb-6 text-slate-600 animate-pulse text-sm border-b'>↵ Search for {searchTerm}</div> : <></>}
					{[{ displayName: 'Recent Searches' }, { displayName: 'Recently Viewed' }, { displayName: 'Suggested', entries: suggestedSearches }].map((item, index) => (
						<div key={index} className='item'>
							<div className='title uppercase text-xs text-slate-500'>{item.displayName}</div>
							<div className='entries h-12'>
								{item.entries &&
									item.entries.map((entry, index) => {
										return <SearchEntry key={index} entry={entry} index={index} />
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
