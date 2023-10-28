import Image from 'next/image'

import heroSectionImage from '../../assets/hero-image.jpg'
import { AnimatedDiv } from '../animated-div'

export function HeroSection() {
	return (
		<div className="relative bg-gray-700">
			<div className="container mx-auto flex h-screen justify-center px-6 lg:grid lg:grid-cols-12 lg:px-8">
				<div className="z-40 flex items-center bg-black/50 py-24 sm:py-10 lg:z-10 lg:col-span-7 lg:-mt-20 lg:mr-4 lg:bg-inherit lg:px-0 xl:col-span-6">
					<AnimatedDiv
						initial={{
							x: 'var(--x-from)',
							opacity: 'var(--opacity-from)',
							scale: 'var(--scale-from)',
						}}
						animate={{ x: 0, opacity: 1, scale: 1 }}
						transition={{ type: 'spring', bounce: 0.2 }}
						className="mx-auto max-w-2xl [--opacity-from:0%] [--scale-from:0%] lg:mx-0 lg:[--x-from:-100vw]"
					>
						<h1 className="text-center font-serif text-4xl font-bold tracking-tight text-yellow-200 sm:text-6xl lg:text-left">
							Dress & feel like the gentleman you are.
						</h1>
						<p className="mt-6 text-center text-lg leading-8 text-yellow-100 lg:text-left">
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
							lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
							fugiat aliqua.
						</p>
						<div className="mx-auto mt-10 flex w-fit items-center gap-x-6 lg:ml-0">
							<a
								href="#services"
								className="rounded bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-gray-100 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
							>
								Our Services
							</a>
							<a
								href="/products"
								className="group text-sm font-semibold leading-6 text-gray-100"
							>
								See Our Products
								<span
									aria-hidden="true"
									className="ml-2 hidden origin-left text-yellow-500 transition-all group-hover:inline-block"
								>
									→
								</span>
								<div className="h-0.5 origin-left scale-x-0 bg-yellow-500 transition-all group-hover:scale-x-100" />
							</a>
						</div>
					</AnimatedDiv>
				</div>
				<div className="absolute inset-0 lg:relative lg:col-span-5 lg:-mr-8 xl:absolute xl:left-1/2 xl:mr-0">
					<Image
						className="aspect-[3/2] h-full w-full bg-gray-50 object-cover object-top lg:absolute lg:inset-0 lg:aspect-auto"
						src={heroSectionImage}
						alt=""
						width={500}
						height={500}
					/>
				</div>
			</div>
		</div>
	)
}
