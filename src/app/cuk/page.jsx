'use client'

import Link from 'next/link'
import { useAnalytics } from '@repo/analytics'
import { Header, SearchBar } from 'components/ui'
import { Icons } from 'icons'
import { useRouter, usePathname } from 'next/navigation'
import { DataContext } from '../../providers/data-provider'
import { useContext } from 'react'

export default function Home() {
	return (
		<div className='main bg-gray-100 w-screen h-screen'>
			<Header />
			<Body />
		</div>
	)
}

export function Body() {
	const analytics = useAnalytics()
	const appData = useContext(DataContext)
	const { appsData } = appData.data

	return (
		<>
			<div className='body'>
				<div className='container mx-auto pt-24 '>
					<SearchBar />
					{/* APPS TILES */}
					<Tiles appsData={appsData} />
				</div>
			</div>
		</>
	)
}

export const Tiles = props => {
	const { appsData } = props

	const analytics = useAnalytics()
	return (
		<>
			<div className='tiles-wrapper w-full pt-16'>
				<div className='title flex'>
					<h2 className='title text-lg font-semibold w-full pb-4'>Applications</h2>
					<div className='shipname'>Arvia </div>
				</div>
				<div className='tiles flex flex-wrap gap-4'>
					{appsData.entities.map((item, index) => {
						return (
							<>
								<Tile item={item} key={'tile-' + item.displayName + index} />
							</>
						)
					})}
				</div>
				<h2 className='title text-lg font-semibold w-full pt-12 pb-4'>Dashboards</h2>
				<div className='tiles flex'></div>
				<h2 className='title text-lg font-semibold w-full pt-12 pb-4'>Problems</h2>
				<div className='tiles flex'></div>
			</div>
		</>
	)
}

export const Tile = props => {
	const { item } = props
	const { displayName } = item
	const pathname = usePathname()

	return (
		<>
			<Link href={pathname + '/' + displayName} className='tile w-[32%] bg-gray-50 rounded-lg mr-2 p-5'>
				<Icons.fingerprint className='w-5 h-5' />
				<div className='title pt-2 text-slate-900 font-semibold text-md'>{displayName}</div>
			</Link>
		</>
	)
}
