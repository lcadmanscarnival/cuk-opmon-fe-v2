import { Icons } from 'icons'
import { Input } from '@/components/shadcn/ui/input'

export const SearchBar = () => {
	return (
		<div className='flex items-center w-full  space-x-2 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-900 px-3.5 py-2'>
			<Icons.search className='w-5 h-5' />
			<Input type='search' placeholder='Search' className='w-full border-0 h-8 font-semibold bg-transparent' />
		</div>
	)
}
