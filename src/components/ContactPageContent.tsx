'use client';

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/Map'), {
	ssr: false,
	loading: () => <div style={{ height: '400px', width: '100%' }} />
})

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
	ssr: false,
	loading: () => <div className="bg-[#001F4D] p-8 text-white rounded-2xl animate-pulse h-96" />
})

const JoinOurJourney = dynamic(() => import('@/components/JoinOurJourney'), {
	ssr: false,
	loading: () => <div className="bg-[#001F4D] py-[8vh] animate-pulse" />
})

const ContactPageContent = () => {
	return (
		<div className="w-full">
			<div className="bg-[#001F4D] text-white py-32 text-center">
				<h1 className="text-4xl lg:text-6xl mb-4">Contact Us</h1>
				<p className="max-w-2xl mx-auto px-4">
					Let Alpine Talent help you find the right talent to drive your business forward.
				</p>
			</div>

			<Map />

			<div className="py-16 px-4 bg-white">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
					<div>
						<div className="mb-8 text-black">
							<h2 className="text-3xl mb-4">Contact Us</h2>
							<p className="text-gray-600 mb-8">
								Ready to take the next step? Get in touch with us today and let&apos;s discuss how we can help you achieve your goals.
							</p>
						</div>
						
						<div className="space-y-4">
							{/* <div className="flex items-start gap-4">
								<div className="w-6">📍</div>
								<div>
									<h3 className="font-semibold text-black">Headquarter</h3>
									<p className="text-gray-600">12777 Jones Road, Suite 445 Houston,
									TX 77070</p>
								</div>
							</div> */}
							
							<div className="flex items-start gap-4">
								<div className="w-6">📞</div>
								<div>
									<h3 className="font-semibold text-black">Call</h3>
									<p className="text-gray-600">+1-281-970-3000</p>
								</div>
							</div>
							
							<div className="flex items-start gap-4">
								<div className="w-6">✉️</div>
								<div>
									<h3 className="font-semibold text-black">Mail</h3>
									<p className="text-gray-600">info@alpinetalent.ai</p>
								</div>
							</div>
						</div>
					</div>

					<ContactForm />
				</div>
			</div>

			<JoinOurJourney />
		</div>
	)
}

export default ContactPageContent