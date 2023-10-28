import { AboutSection } from '@/components/home-page/about-section'
import { OurFavoritesSection } from '@/components/home-page/favorites-section'
import { HeroSection } from '@/components/home-page/hero-section'
import { ServicesSection } from '@/components/home-page/services-section'
import { TestimonialsSection } from '@/components/home-page/testimonials'

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection className="pt-32 lg:pt-40" />
			<div className="mt-40 bg-gray-700 py-48">
				<ServicesSection />
				<OurFavoritesSection className="mt-60" />
			</div>
			<TestimonialsSection className="py-32 lg:py-60" />
		</main>
	)
}
