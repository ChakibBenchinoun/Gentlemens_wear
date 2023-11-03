import { cn } from '@/lib/utils'

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
	const { children, className } = { ...props }
	return (
		<div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', className)}>
			{children}
		</div>
	)
}
