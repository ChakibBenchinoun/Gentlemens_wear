import Image from 'next/image'
import Link from 'next/link'

import Container from '@/components/layout/container'

export default function Info() {
	return (
		<div className="relative py-24 sm:py-32">
			<Theme />
			<Container>
				<div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
					<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
						<div>
							<h2 className="font-primery text-3xl tracking-tight text-gray-900">
								Get in touch
							</h2>
							<p className="mt-4 leading-7 text-gray-600">
								Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac
								pellentesque.
							</p>
						</div>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
							<div className="rounded-2xl bg-gray-50 p-10">
								<h3 className="font-primery text-base font-semibold leading-7 text-gray-900">
									Email
								</h3>
								<dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
									<div>
										<dt className="sr-only">Email</dt>
										<dd>
											<Link
												className="font-semibold text-indigo-600"
												href="mailto:collaborate@example.com"
											>
												collaborate@example.com
											</Link>
										</dd>
									</div>
									<div className="mt-1">
										<dt className="sr-only">Phone number</dt>
										<dd>+1 (555) 905-2345</dd>
									</div>
								</dl>
							</div>
							<div className="rounded-2xl bg-gray-50 p-10">
								<h3 className="font-primery text-base font-semibold leading-7 text-gray-900">
									Instagram
								</h3>
								<dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
									<div>
										<dt className="sr-only">Email</dt>
										<dd>
											<Link
												className="font-semibold text-indigo-600"
												href="mailto:press@example.com"
											>
												press@example.com
											</Link>
										</dd>
									</div>
									<div className="mt-1">
										<dt className="sr-only">Phone number</dt>
										<dd>+1 (555) 905-3456</dd>
									</div>
								</dl>
							</div>
							<div className="rounded-2xl bg-gray-50 p-10">
								<h3 className="font-primery text-base font-semibold leading-7 text-gray-900">
									Facebook
								</h3>
								<dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
									<div>
										<dt className="sr-only">Email</dt>
										<dd>
											<Link
												className="font-semibold text-indigo-600"
												href="mailto:careers@example.com"
											>
												careers@example.com
											</Link>
										</dd>
									</div>
									<div className="mt-1">
										<dt className="sr-only">Phone number</dt>
										<dd>+1 (555) 905-4567</dd>
									</div>
								</dl>
							</div>
							<div className="rounded-2xl bg-gray-50 p-10 font-primery">
								<h3 className="text-base font-semibold leading-7 text-gray-900">
									WhatsApp
								</h3>
								<dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
									<div>
										<dt className="sr-only">Email</dt>
										<dd>
											<Link
												className="font-semibold text-indigo-600"
												href="mailto:hello@example.com"
											>
												hello@example.com
											</Link>
										</dd>
									</div>
									<div className="mt-1">
										<dt className="sr-only">Phone number</dt>
										<dd>+1 (555) 905-5678</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
						<div>
							<h2 className="font-primery text-3xl tracking-tight text-gray-900">
								Locations
							</h2>
							<p className="mt-4 leading-7 text-gray-600">
								Consequat sunt cillum cillum elit sint. Qui occaecat nisi in
								ipsum commodo.
							</p>
						</div>
						<div className="col-span-2 h-full w-full">
							<Image
								className="w-full"
								src="https://nucloud.com/wp-content/uploads/2015/01/google-map-embed-600.jpg"
								alt=""
								width={500}
								height={500}
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

function Theme() {
	return (
		<div
			className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
			aria-hidden="true"
		>
			<div
				className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-300 to-yellow-500 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
				style={{
					clipPath:
						'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
				}}
			/>
		</div>
	)
}
