'use client'

import React from 'react'
import Image from 'next/image'
import { useInView } from 'framer-motion'

import { AnimatedDiv } from '../animated-div'

const people = [
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
]

export default function Team() {
	const ref = React.useRef(null)
	const isInView = useInView(ref)
	return (
		<div className="relative py-24 sm:py-32">
			<div
				ref={ref}
				className="container mx-auto grid items-center gap-x-20 gap-y-20 px-6 lg:grid-cols-4 lg:px-8"
			>
				<AnimatedDiv
					initial={{ x: '-100vw' }}
					animate={{ x: isInView ? 0 : '-100vw' }}
					transition={{ type: 'spring', bounce: 0.2, duration: 1 }}
					className="max-w-xl lg:col-span-2"
				>
					<h1 className="font-serif text-4xl font-bold tracking-tight text-yellow-700 sm:text-6xl">
						Our Team.
					</h1>
					<p className="relative mt-6 font-serif text-lg leading-8 text-yellow-900 lg:max-w-none">
						Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
						cupidatat mollit aute velit. Et labore commodo nulla aliqua proident
						mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
						mollit id pariatur in voluptate cillum. Eu voluptate tempor esse
						minim amet fugiat veniam occaecat aliqua.
					</p>
				</AnimatedDiv>
				<ul
					role="list"
					className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:col-span-2"
				>
					{people.map((person) => (
						<li key={person.name}>
							<div className="flex items-center gap-x-6">
								<Image
									className="h-16 w-16 rounded-xl"
									src={person.imageUrl}
									alt=""
									width={500}
									height={500}
								/>
								<div>
									<h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
										{person.name}
									</h3>
									<p className="text-sm font-semibold leading-6 text-indigo-600">
										{person.role}
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
