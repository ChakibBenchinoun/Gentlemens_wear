import Link from 'next/link'

import { CarouselSlider } from '../carousel-slider'
import Container from '../layout/container'
import product1 from '/assets/products/product1.jpg'
import product2 from '/assets/products/product2.jpg'
import product3 from '/assets/products/product3.jpg'
import product4 from '/assets/products/product4.jpg'
import product5 from '/assets/products/product5.jpg'

const favorites = [
	{
		product_name: 'Black Basic Tee',
		price: '22000',
		product_image: product1,
		imageAlt: "Model wearing women's black cotton crewneck tee.",
	},
	{
		product_name: 'Off-White Basic Tee',
		price: '32000',
		product_image: product2,
		imageAlt: "Model wearing women's off-white cotton crewneck tee.",
	},
	{
		product_name: 'Mountains Artwork Tee',
		price: '16000',
		product_image: product3,
		imageAlt:
			"Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
	},
	{
		product_name: 'Mountains Artwork Tee',
		price: '19500',
		product_image: product4,
		imageAlt:
			"Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
	},
	{
		product_name: 'Mountains Artwork Tee',
		price: '13000',
		product_image: product5,
		imageAlt:
			"Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
	},
	{
		product_name: 'Mountains Artwork Tee',
		price: '35000',
		product_image: product5,
		imageAlt:
			"Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
	},
	{
		product_name: 'Mountains Artwork Tee',
		price: '19500',
		product_image: product5,
		imageAlt:
			"Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
	},
]

export function OurFavoritesSection({ className }: { className?: string }) {
	return (
		<section aria-labelledby="favorites-heading">
			<div className={className}>
				<Container>
					<div className="sm:flex sm:items-baseline sm:justify-between">
						<h2
							id="favorites-heading"
							className="font-primery text-2xl tracking-tight text-yellow-200"
						>
							Our Favorites
						</h2>
						<Link
							href="/products"
							className="group hidden text-sm font-semibold text-yellow-100 sm:block"
						>
							Browse all favorites
							<span aria-hidden="true"> &rarr;</span>
							<div className="h-0.5 origin-left scale-x-0 bg-yellow-500 transition-all group-hover:scale-x-100" />
						</Link>
					</div>
					<div className="my-5">
						<CarouselSlider images={favorites} />
					</div>
					<div className="mt-6 sm:hidden">
						<Link
							href="/products"
							className="block text-sm font-semibold text-yellow-100"
						>
							Browse all favorites
							<span aria-hidden="true"> &rarr;</span>
						</Link>
					</div>
				</Container>
			</div>
		</section>
	)
}
