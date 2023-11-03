import Image from 'next/image'

import { cn } from '@/lib/utils'
import image6 from '../../assets/6.jpg'
import image7 from '../../assets/7.jpg'
import { AnimatedDiv } from '../animated-div'
import Container from '../layout/container'

const posts = [
	{
		id: 1,
		title: 'Choose the right outfit for your occasion',
		imageUrl: image6,
	},
	{
		id: 2,
		title: 'Rearrange your closet with the best style',
		imageUrl: image7,
	},
	{
		id: 3,
		title: 'Delivery service',
		imageUrl:
			'https://images.unsplash.com/photo-1561494270-744b7f2ff037?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
	},
]

export function ServicesSection({ className }: { className?: string }) {
	return (
		<div className={cn(className, 'scroll-mt-48')} id="services">
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-serif text-3xl font-bold tracking-tight text-yellow-200 sm:text-4xl">
						Our Sevices
					</h2>
					<p className="mt-2 text-lg leading-8 text-yellow-100">
						Explore our services toget to know us better.
					</p>
				</div>
				<div className="mx-auto my-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:my-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post) => (
						<AnimatedDiv
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.5 }}
							key={post.id}
							className="duration-600 relative isolate flex flex-col items-center justify-center overflow-hidden rounded-xl border border-yellow-200 bg-gray-900 px-8 pb-8 pt-80 transition-all hover:scale-105 sm:pt-48 lg:pt-80"
						>
							<h3 className="mt-3 text-center font-serif text-lg font-semibold leading-6 text-white">
								{post.title}
							</h3>
							<Image
								src={post.imageUrl}
								alt=""
								className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
								width={500}
								height={500}
							/>
							<div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
							<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
						</AnimatedDiv>
					))}
				</div>
			</Container>
		</div>
	)
}
