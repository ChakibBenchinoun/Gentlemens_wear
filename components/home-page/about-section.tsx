'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'framer-motion'

import { cn } from '@/lib/utils'
import image1 from '../../assets/1.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'
import { AnimatedDiv } from '../animated-div'
import Container from '../layout/container'

export function AboutSection({ className }: { className?: string }) {
	const ref = React.useRef(null)
	const isInView = useInView(ref)
	return (
		<div
			ref={ref}
			className={cn('relative overflow-hidden bg-white', className)}
		>
			<Container className="lg:flex">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
					<div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
						<h2 className="font-primery text-3xl text-yellow-700 sm:text-4xl">
							Algerien Gentleman Clothing assistentcy
						</h2>
						<p className="mt-6 text-xl leading-8 text-yellow-600">
							Quasi est quaerat. Sit molestiae et. Provident ad dolorem
							occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
							error quod. Excepturi quidem expedita molestias quas.
						</p>
						<p className="mt-6 text-base leading-7 text-gray-600">
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
							lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
							fugiat. Quasi aperiam sit non sit neque reprehenderit.
						</p>
						<div className="mt-10 flex">
							<Link
								href="/about"
								className="group text-sm font-semibold leading-6 text-gray-900"
							>
								Read More
								<span aria-hidden="true" className="ml-2 text-yellow-500">
									→
								</span>
								<div className="h-0.5 origin-left scale-x-0 bg-yellow-500 transition-all group-hover:scale-x-100" />
							</Link>
						</div>
					</div>
					<div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
						<AnimatedDiv
							initial={{ x: '100vw' }}
							animate={{ x: isInView ? 0 : '100vw' }}
							transition={{
								type: 'spring',
								bounce: 0.2,
								duration: 1,
								delay: 0.2,
							}}
							className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
						>
							<Image
								src={image1}
								alt=""
								width={500}
								height={500}
								className="aspect-[7/5] w-[37rem] max-w-none rounded bg-gray-50 object-cover object-bottom"
							/>
						</AnimatedDiv>
						<div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
							<AnimatedDiv
								initial={{ x: '200vw' }}
								animate={{ x: isInView ? 0 : '200vw' }}
								transition={{
									type: 'spring',
									bounce: 0.2,
									duration: 1,
									delay: 0.3,
								}}
								className="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
							>
								<Image
									src={image3}
									alt=""
									width={500}
									height={500}
									className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded bg-gray-50 object-cover object-top"
								/>
							</AnimatedDiv>
							<AnimatedDiv
								initial={{ x: '100vw' }}
								animate={{ x: isInView ? 0 : '100vw' }}
								transition={{
									type: 'spring',
									bounce: 0.2,
									duration: 1,
									delay: 0.6,
								}}
								className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none"
							>
								<Image
									src={image4}
									alt=""
									width={500}
									height={500}
									className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded bg-gray-50 object-cover"
								/>
							</AnimatedDiv>
							<AnimatedDiv
								initial={{ x: '100vw' }}
								animate={{ x: isInView ? 0 : '100vw' }}
								transition={{
									type: 'spring',
									bounce: 0.2,
									duration: 1,
									delay: 0.9,
								}}
								className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
							>
								<Image
									src={image5}
									alt=""
									width={500}
									height={500}
									className="aspect-[4/3] w-[24rem] max-w-none rounded bg-gray-50 object-cover"
								/>
							</AnimatedDiv>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
