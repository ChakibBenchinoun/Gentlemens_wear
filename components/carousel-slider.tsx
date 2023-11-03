'use client'

import * as React from 'react'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'
import { motion, useInView, wrap } from 'framer-motion'

import { cn } from '@/lib/utils'
import { AnimatedDiv } from './animated-div'

export function CarouselSlider({
	images = [],
	className,
}: {
	images: {
		product_image: StaticImageData
		product_name: string
		price: string
	}[]
	className?: string
	autoPlay?: boolean
}) {
	const ref = React.useRef<HTMLDivElement>(null)
	const isInView = useInView(ref)

	return (
		<div ref={ref}>
			<CarouselProvider images={images} autoPlay={isInView}>
				<div className={cn('', className)}>
					<CarouselSliderImage isInView={isInView} />
					<div className="mt-8 flex w-full justify-center">
						<ImagesTicker />
					</div>
				</div>
			</CarouselProvider>
		</div>
	)
}

function ImagesTicker() {
	const { images, paginate, currentImageIndex } = useCarouselContext()
	const AnimatedButton = motion.button
	return (
		<nav className="flex gap-4">
			{images.map((_, idx) => {
				return (
					<AnimatedButton
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5, delay: idx * 0.2 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						key={`image-${idx + 1}`}
						onClick={() => paginate(idx - currentImageIndex)}
					>
						<div
							className={clsx(
								'm-1 h-2 w-2 shrink-0 rounded-full transition-all duration-500',
								idx !== currentImageIndex
									? 'bg-yellow-400'
									: 'scale-125 bg-yellow-600',
							)}
						/>
						<span className="sr-only">Select Image {idx + 1}</span>
					</AnimatedButton>
				)
			})}
		</nav>
	)
}

function CarouselSliderImage({ isInView = true }: { isInView?: boolean }) {
	const { images, currentImageIndex } = useCarouselContext()
	const Img = motion(Image)

	const refs = images.map(() => React.createRef<HTMLDivElement>())

	const scrollToImage = React.useCallback(
		(index: number) => {
			refs[index].current?.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'end',
			})
		},
		[refs],
	)

	React.useEffect(() => {
		if (isInView) {
			scrollToImage(currentImageIndex)
		}
	}, [currentImageIndex, isInView, scrollToImage])

	return (
		<AnimatedDiv
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="no-scrollbar flex w-full snap-x snap-mandatory scroll-px-10 gap-x-10 overflow-x-scroll scroll-smooth px-5 py-5"
		>
			{images.map(({ product_image, product_name, price }, index) => {
				return (
					<div
						key={index}
						ref={refs[index]}
						className={cn(
							'aspect-[11/12] w-full flex-shrink-0  rounded-xl border border-yellow-200 sm:w-1/2 lg:aspect-[7/8] lg:w-1/4',
							currentImageIndex === index
								? 'duration-800 scale-105 transition-all ease-in-out'
								: 'duration-800 transition-all ease-in-out hover:scale-105',
						)}
					>
						<div className="flex h-full">
							<Img
								alt={product_name}
								src={product_image}
								width={500}
								height={500}
								whileHover={{ scale: 1.05 }}
								onClick={() => scrollToImage(index)}
								className="h-full object-contain object-center px-1 pt-4"
							/>
						</div>
						<div className="ml-7 py-6">
							<h1>
								<span className="line-clamp-1 font-primery text-yellow-300">
									{product_name}
								</span>
							</h1>
							<p className="mt-1 text-gray-300">{price} DA</p>
						</div>
					</div>
				)
			})}
		</AnimatedDiv>
	)
}

const CarouselContext = React.createContext<{
	page: number
	paginate: (newDirection: number) => void
	images: {
		product_image: StaticImageData
		product_name: string
		price: string
	}[]
	currentImageIndex: number
} | null>(null)

function CarouselProvider({
	children,
	images = [],
	autoPlay = false,
}: {
	children: React.ReactNode
	images: {
		product_image: StaticImageData
		product_name: string
		price: string
	}[]
	autoPlay?: boolean
}) {
	const [page, setPage] = React.useState(0)

	const paginate = React.useCallback((newDirection: number) => {
		setPage((prev) => prev + newDirection)
	}, [])

	const imageIndex = wrap(0, images.length, page)

	React.useEffect(() => {
		if (!autoPlay) return
		const interval = setInterval(() => {
			paginate(1)
		}, 2000)

		return () => clearInterval(interval)
	}, [page, paginate, autoPlay])

	return (
		<CarouselContext.Provider
			value={{
				page,
				paginate,
				images,
				currentImageIndex: imageIndex,
			}}
		>
			{children}
		</CarouselContext.Provider>
	)
}

function useCarouselContext() {
	const context = React.useContext(CarouselContext)
	if (!context) {
		throw new Error('useCarouselContext must be used within a CarouselProvider')
	}
	return context
}
