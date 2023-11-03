'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/ui/dropdown-menu'

import { cn } from '@/lib/utils'
import logo from '../../assets/logo.jpeg'
import Container from './container'

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Products', href: '/products' },
	{ name: 'Info', href: '/info' },
]
export function Navigation() {
	const [menuOpen, setMenuOpen] = React.useState(false)
	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-gray-300 bg-white">
			<Container className="py-4">
				<nav className="flex items-center justify-between" aria-label="Global">
					<Link
						href="/"
						className="-m-1.5 flex items-center justify-center p-1.5"
					>
						<span className="sr-only">Moulay Menswear</span>
						<Image
							className="h-14 w-auto rounded-full"
							src={logo}
							alt=""
							width={500}
							height={500}
						/>
						<span className="ml-5 font-primery text-xl font-bold uppercase tracking-wide">
							Moulay Menswear
						</span>
					</Link>

					<div className="lg:hidden">
						<DropdownMenu
							onOpenChange={() => setMenuOpen(!menuOpen)}
							open={menuOpen}
						>
							<DropdownMenuTrigger asChild>
								<button
									onClick={() => setMenuOpen(!menuOpen)}
									type="button"
									className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 font-primery  text-gray-700 outline-none ring-inset"
								>
									Menu
								</button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className="absolute inset-y-0 -right-11 flex h-screen w-60 flex-col bg-white px-0 py-4 lg:hidden"
								sideOffset={22}
							>
								{navigation.map((item) => (
									<DropdownMenuItem key={item.name} className="w-full">
										<MobileNavLink
											label={item.name}
											href={item.href}
											key={item.name}
											className="mx-1 mt-2"
										/>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<NavLink
								href={item.href}
								key={item.name}
								label={item.name}
								className="font-primery font-bold tracking-wider"
							/>
						))}
					</div>
				</nav>
			</Container>
		</header>
	)
}

export function NavLink({
	className,
	label,
	href,
}: {
	className?: string
	label: string
	href: string
}) {
	const pathname = usePathname()
	const isActive = pathname === href
	return (
		<Link
			key={label}
			href={href}
			className={cn(
				'group  text-sm font-semibold leading-6 text-gray-900',
				className,
			)}
		>
			{label}
			{isActive ? (
				<div className="h-0.5 bg-yellow-500" />
			) : (
				<div className="h-0.5 origin-left scale-x-0 bg-yellow-500 transition-all group-hover:scale-x-100" />
			)}
		</Link>
	)
}

export function MobileNavLink({
	className,
	label,
	href,
}: {
	className?: string
	label: string
	href: string
}) {
	const pathname = usePathname()
	const isActive = pathname === href
	return (
		<Link
			key={label}
			href={href}
			className={cn(
				'w-full rounded-lg px-4 py-2  text-sm font-semibold leading-6 text-gray-900 outline-none ring-inset',
				isActive ? 'bg-yellow-300' : 'hover:bg-yellow-300',
				className,
			)}
		>
			{label}
		</Link>
	)
}
