'use client'

import { useAnalytics } from '@repo/analytics'
import { Header, SearchBar, Tiles } from 'components/ui'
import { useContext } from 'react'
import { AppContext, DataContext } from 'providers'
import { Suspense } from 'react'

export default function Home() {
	return (
		<div className='main w-screen h-screen'>
			<Header />

			<Suspense fallback={<p>Loading...</p>}>
				{/* <PostFeed /> */}
				<Body />
			</Suspense>
		</div>
	)
}

export function Body() {
	const analytics = useAnalytics()
	const dataContext = useContext(DataContext)
	const { appsData, problemsData, hostsData } = dataContext.data
	const { appState, updateAppState } = useContext(AppContext)

	// console.log(problemsData)
	// console.log(hostsData)

	return (
		<>
			<div className='body'>
				<div className='container mx-auto pt-24 '>
					<SearchBar />
					{appState.currentView === 'apps' ? (
						<>
							<Tiles title={'Applications'} data={appsData.entities} search={true} keys={{ title: 'displayName' }} />
							<Tiles title={'Problems'} data={problemsData.problems} keys={{ title: 'title' }} />
							<Tiles title={'Hosts'} data={hostsData.entities} keys={{ title: 'displayName' }} />
						</>
					) : (
						<Application />
					)}
				</div>
			</div>
		</>
	)
}
export const Application = props => {
	const { appState, updateAppState } = useContext(AppContext)
	const { currentView } = appState
	return (
		<div className='tiles-wrapper w-full pt-16'>
			<div
				className='uppercase text-xs cursor-pointer'
				onClick={() => {
					updateAppState('currentView', 'apps')
				}}
			>{`< back`}</div>
			<div className='title flex'>
				<h2 className='title text-xl font-bold w-full'>{currentView}</h2>
				<div className='shipname'>Arvia </div>
			</div>
		</div>
	)
}
