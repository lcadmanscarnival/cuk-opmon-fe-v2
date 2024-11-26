import { Icons } from 'icons'

import { useAnalytics } from '@repo/analytics'
import { OrganizeImportsMode } from 'typescript'

export const Button = props => {
	return (
		<div
			className='hamburger pr-4 cursor-pointer hover:opacity-80'
			onClick={e => {
				track({ action: 'click', event: e, component: 'header', properties: { type: 'hamburger' } })
			}}
		>
			<Icons.hamburger className='w-6 h-6' />
		</div>
	)
}

export const Header = () => {
	const { track } = useAnalytics()
	return (
		<>
			<header className={'w-full border-b py-4 '}>
				<div className='container mx-auto '>
					<div className='flex justify-between items-center h-full'>
						<div className='left flex items-center'>
							<Button properties={{ organismId: 'header' }} />
							<div className='icon'>
								<Icons.logo className='w-12 h-12' />
							</div>
						</div>
						<div className='right'>
							<div className='w-6 h-6 bg-green-400 rounded-full cursor-pointer hover:opactiy-80'></div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
