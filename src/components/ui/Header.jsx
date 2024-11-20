import { Icons } from 'icons'

export const Header = () => {
	return (
		<>
			<header className={'w-full border-b py-4 '}>
				<div className='container mx-auto '>
					<div className='flex justify-between items-center h-full'>
						<div className='left flex items-center'>
							<div className='hamburger pr-4 cursor-pointer hover:opacity-80'>
								<Icons.hamburger className='w-6 h-6' />
							</div>
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
