import Image from 'next/image'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/ui/dropdown-menu'

import logo from '../../assets/logo.jpeg'

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Products', href: '/products' },
	{ name: 'Info', href: '/info' },
]
export function Navigation() {
	return (
		<header className="sticky inset-x-0 top-0 z-50 border-b border-gray-300 bg-white">
			<nav
				className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-8"
				aria-label="Global"
			>
				<a href="/" className="-m-1.5 flex items-center justify-center p-1.5">
					<span className="sr-only">Moulay Menswear</span>
					<Image
						className="h-14 w-auto rounded-full"
						src={logo}
						alt=""
						width={500}
						height={500}
					/>
					<span className="ml-5 font-serif text-xl uppercase tracking-wider">
						Moulay Menswear
					</span>
				</a>

				<div className="lg:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 font-serif text-gray-700"
							>
								Menu
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className="absolute inset-y-0 -right-11 flex h-screen w-60 flex-col bg-white px-0 py-4 lg:hidden"
							sideOffset={22}
						>
							{navigation.map((item) => (
								<DropdownMenuItem key={item.name} className="mx-4 my-2" asChild>
									<div className="group flex w-full">
										<a
											key={item.name}
											href={item.href}
											className="text-md w-full py-2 font-serif font-semibold leading-6 text-gray-900"
										>
											{item.name}
										</a>
										<div className="h-0.5 origin-left scale-x-0 bg-yellow-500 transition-all group-hover:scale-x-100" />
									</div>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="group font-serif text-sm font-semibold leading-6 text-gray-900"
						>
							{item.name}
							<div className="h-0.5 origin-left scale-x-0 bg-yellow-500 transition-all group-hover:scale-x-100" />
						</a>
					))}
				</div>
			</nav>
		</header>
	)
}
