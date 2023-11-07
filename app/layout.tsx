import '@/styles/globals.css'

import type { Metadata } from 'next'
import { DM_Serif_Display, Quattrocento } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Footer } from '@/components/layout/footer'
import { Navigation } from '@/components/layout/navigation'

const dmSerif = DM_Serif_Display({
	subsets: ['latin', 'latin-ext'],
	weight: ['400'],
	variable: '--font-dm-serif-display',
})
const quattrocento = Quattrocento({
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '700'],
	variable: '--font-quattrocento',
})

export const metadata: Metadata = {
	title: "GentleMen's wear",
	description: 'Company Description',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="h-full scroll-smooth">
			<body
				className={cn(
					dmSerif.variable,
					quattrocento.variable,
					'flex h-full flex-col font-body',
				)}
			>
				<Navigation />
				<main className="mt-20 flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
