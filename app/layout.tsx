import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Footer } from '@/components/layout/footer'
import { Navigation } from '@/components/layout/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Moulay Menswear',
	description: 'Company Description',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="h-full scroll-smooth">
			<body className={cn(inter.className, 'flex h-full flex-col')}>
				<Navigation />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
