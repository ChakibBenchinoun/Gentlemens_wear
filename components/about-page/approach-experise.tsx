'use client'

import React from 'react'
import Image from 'next/image'
import { useInView } from 'framer-motion'

import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'
import { AnimatedDiv } from '../animated-div'

export default function ApproachAndExpertise() {
	const ref = React.useRef(null)
	const isInView = useInView(ref)
	return (
		<div className="relative overflow-hidden py-24 sm:py-32">
			<div
				ref={ref}
				className="container mx-auto flex flex-col justify-between gap-x-8 gap-y-20 lg:flex-row lg:items-center"
			>
				<AnimatedDiv
					initial={{ x: 'var(--x-to)' }}
					animate={{ x: isInView ? 0 : 'var(--x-to)' }}
					transition={{ type: 'spring', bounce: 0.2, duration: 1 }}
					className="order-1 w-full [--x-to:-100vw] lg:max-w-xl lg:shrink-0 xl:order-2 xl:col-span-2 xl:max-w-2xl xl:[--x-to:100vw]"
				>
					<h1 className="font-serif text-4xl font-bold tracking-tight text-yellow-700 sm:text-6xl">
						Approach and Expertise.
					</h1>
					<p className="relative mt-6 font-serif text-lg leading-8 text-yellow-900 lg:max-w-none">
						Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
						cupidatat mollit aute velit. Et labore commodo nulla aliqua proident
						mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
						mollit id pariatur in voluptate cillum. Eu voluptate tempor esse
						minim amet fugiat veniam occaecat aliqua.
					</p>
				</AnimatedDiv>
				<div className="relative order-2 hidden max-w-xl grid-cols-3 grid-rows-3 lg:grid xl:order-1 xl:col-span-2">
					<div className="col-span-2 col-start-2 row-span-2 max-w-xs lg:col-start-1">
						<Image src={image4} alt="" className="rounded-xl" />
					</div>
					<div className="absolute col-span-2 row-span-2 row-start-2 max-w-xs lg:col-start-2">
						<Image src={image5} alt="" className="rounded-xl" />
					</div>
				</div>
			</div>
		</div>
	)
}
