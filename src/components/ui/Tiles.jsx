import { useAnalytics } from '@repo/analytics'
import { DataContext } from 'providers/data-provider'
import { useContext } from 'react'
import { Icons } from 'icons'
import { AppContext } from 'providers'
import { useQueryState } from 'nuqs'

export const Tiles = props => {
	const { data, title, keys, search } = props
	const analytics = useAnalytics()

	// console.log(keys.title)

	return (
		<>
			<div className='tiles-wrapper w-full pt-16'>
				<div className='title flex'>
					<h2 className='title text-lg font-semibold w-full pb-4'>{title}</h2>
				</div>
				<div className='tiles flex flex-wrap gap-4'>
					{data.map((item, index) => {
						return <Tile item={item} title={item[keys.title]} key={'tile-' + item[keys.title] + index} search={search} />
					})}
				</div>
			</div>
		</>
	)
}

export const Tile = props => {
	const { item, title, search } = props
	const displayName = title
	const { appState, updateAppState } = useContext(AppContext)
	const [searchTerm, setSearchTerm] = useQueryState('query')
	const [view, setView] = useQueryState('view')

	return (
		<>
			<div
				className='tile w-[32%] bg-gray-50 rounded-lg mr-2 p-5 cursor-pointer'
				onClick={e => {
					updateAppState('currentView', displayName)
					setView(displayName)
				}}
			>
				<Icons.fingerprint className='w-5 h-5' />
				<div className='title pt-2 text-slate-900 font-semibold text-md'>{displayName}</div>
				<div className='inner-tiles pt-2 z-[100] relative'>
					{search ? (
						<>
							<Icons.search
								className='search border w-8 h-8 p-1 rounded-full cursor-pointer hover:opacity-70 z-[90]'
								onClick={e => {
									e.stopPropagation()
									appState.refs.searchInputRef.focus()
									setSearchTerm(displayName + ' ')
								}}
							/>
						</>
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	)
}
