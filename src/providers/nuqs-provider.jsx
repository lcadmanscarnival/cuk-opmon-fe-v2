import { NuqsAdapter } from 'nuqs/adapters/next/app'

export function Nuqs({ children }) {
	return <NuqsAdapter>{children}</NuqsAdapter>
}
