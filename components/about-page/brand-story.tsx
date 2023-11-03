'use client'

import React from 'react'
import Image from 'next/image'
import { useInView } from 'framer-motion'

import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'
import image6 from '../../assets/6.jpg'
import image7 from '../../assets/7.jpg'
import { AnimatedDiv } from '../animated-div'
import Container from '../layout/container'

export default function BrandStory() {
	const ref = React.useRef(null)
	const isInView = useInView(ref)
	return (
		<div className="relative isolate -z-10 pb-8 pt-16 sm:pb-10 sm:pt-24">
			<div
				className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
				aria-hidden="true"
			>
				<div
					className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-yellow-300 to-yellow-500 opacity-30"
					style={{
						clipPath:
							'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
					}}
				/>
			</div>
			<div className="overflow-hidden">
				<Container>
					<div className="gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
						<div ref={ref}>
							<AnimatedDiv
								initial={{ x: '-100vw' }}
								animate={{ x: isInView ? 0 : '-100vw' }}
								transition={{
									type: 'spring',
									bounce: 0.2,
									duration: 1,
									delay: 0.2,
								}}
								className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl"
							>
								<h1 className="font-primery text-4xl tracking-tight text-yellow-700 sm:text-6xl">
									We’re changing the way people Dress.
								</h1>
								<p className="relative mt-6  text-lg leading-8 text-yellow-900 sm:max-w-md lg:max-w-none">
									Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
									quis cupidatat mollit aute velit. Et labore commodo nulla
									aliqua proident mollit ullamco exercitation tempor. Sint
									aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
									Eu voluptate tempor esse minim amet fugiat veniam occaecat
									aliqua.
								</p>
							</AnimatedDiv>
						</div>
						<div className="mr-0 mt-14 flex justify-end gap-8 sm:-mt-44 sm:pl-20 lg:mt-0 lg:pl-0">
							<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
								<div className="relative">
									<Image
										src={image3}
										alt=""
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										width={500}
										height={500}
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
							<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
								<div className="relative">
									<Image
										width={500}
										height={500}
										src={image4}
										alt=""
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div className="relative">
									<Image
										width={500}
										height={500}
										src={image5}
										alt=""
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
							<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
								<div className="relative">
									<Image
										width={500}
										height={500}
										src={image6}
										alt=""
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div className="relative">
									<Image
										width={500}
										height={500}
										src={image7}
										alt=""
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	)
}
