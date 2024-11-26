'use client'

import Link from 'next/link'
import { useAnalytics } from '@repo/analytics'
import { Header, SearchBar } from 'components/ui'
import { Icons } from 'icons'
import { useRouter, usePathname } from 'next/navigation'
import { DataContext } from '../../providers/data-provider'
import { useContext } from 'react'
import { Tiles } from 'components/ui'

export default function Home() {
	return (
		<div className='main w-screen h-screen'>
			<Header />
			<Body />
		</div>
	)
}

export function Body() {
	const analytics = useAnalytics()
	const dataContext = useContext(DataContext)
	const { appsData, problemsData, hostsData } = dataContext.data
	const [appState, setAppState] = dataContext.useAppState

	console.log(problemsData)
	console.log(hostsData)

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
						<Application useAppState={[appState, setAppState]} />
					)}
				</div>
			</div>
		</>
	)
}
export const Application = props => {
	const { useAppState } = props
	const [appState, setAppState] = useAppState
	const { currentView } = appState
	return (
		<div className='tiles-wrapper w-full pt-16'>
			<div
				className='uppercase text-xs cursor-pointer'
				onClick={() => {
					setAppState({ ...appState, currentView: 'apps' })
				}}
			>{`< back`}</div>
			<div className='title flex'>
				<h2 className='title text-xl font-bold w-full'>{currentView}</h2>
				<div className='shipname'>Arvia </div>
			</div>
		</div>
	)
}
