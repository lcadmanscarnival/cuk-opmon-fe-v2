'use client'

import Link from 'next/link'
import { useAnalytics } from '@repo/analytics'
import { Header, SearchBar } from 'components/ui'
import { Icons } from 'icons'
import { useRouter, usePathname } from 'next/navigation'

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

	return (
		<>
			<div className='body'>
				<div className='container mx-auto pt-24 '>
					<SearchBar />
					<Tiles />
				</div>
			</div>
		</>
	)
}

export const Tiles = () => {
	const analytics = useAnalytics()
	return (
		<>
			<div className='tiles-wrapper w-full pt-16'>
				<h2 className='title text-lg font-semibold w-full pb-4'>Quick Links</h2>
				<div className='tiles flex'>
					{[{ displayName: 'xDining' }, { displayName: 'xDining' }, { displayName: 'xDining' }, { displayName: 'xDining' }].map((item, index) => {
						return <Tile item={item} key={'tile-' + item.displayName + index} />
					})}
				</div>
				<h2 className='title text-lg font-semibold w-full pt-12 pb-4'>Applications</h2>
				<div className='tiles flex'>
					{[{ displayName: 'xDining' }, { displayName: 'xDining' }, { displayName: 'xDining' }, { displayName: 'xDining' }].map((item, index) => {
						return <Tile item={item} key={'tile-' + item.displayName + index} />
					})}
				</div>
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
			<Link href={pathname + '/' + displayName} className='tile w-full bg-gray-50 rounded-lg mr-2 p-5'>
				<Icons.fingerprint className='w-5 h-5' />
				<div className='title pt-2 text-slate-900 font-semibold text-md'>{displayName}</div>
			</Link>
		</>
	)
}
