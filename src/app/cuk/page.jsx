'use client'

import { useAnalytics } from '@repo/analytics'
import { Header, SearchBar } from 'components/ui'

export default function Home() {
	return (
		<div className='main bg-slate-100 w-screen h-screen'>
			<Header />
			<Body />
		</div>
	)
}

export function Body() {
	const analytics = useAnalytics()

	console.log('analytics')
	console.log(analytics.globalConfig)
	return (
		<>
			<div className='body'>
				<div className='container mx-auto pt-24 '>
					<SearchBar />
				</div>
			</div>
		</>
	)
}
