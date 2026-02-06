'use client';

import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('@/components/Hero'), {
	ssr: false,
	loading: () => <div className="animate-pulse bg-[#E4B402] h-screen" />
})

const Services = dynamic(() => import('@/components/Services'), {
	ssr: false,
	loading: () => <div className="animate-pulse bg-white h-96" />
})

const Solutions = dynamic(() => import('@/components/Solutions'), {
	ssr: false,
	loading: () => <div className="animate-pulse bg-[#E4B402] h-96" />
})

const AIHiring = dynamic(() => import('@/components/AIHiring'), {
	ssr: false,
	loading: () => <div className="animate-pulse bg-white h-96" />
})

const WhyChoose = dynamic(() => import('@/components/WhyChoose'), {
	ssr: false,
	loading: () => <div className="animate-pulse bg-[#E4B402] h-96" />
})

// const Testimonials = dynamic(() => import('@/components/Testimonials'), {
// 	ssr: false,
// 	loading: () => <div className="animate-pulse bg-white h-96" />
// })

const LogoSlider = dynamic(() => import('@/components/LogoSlider'), {
	ssr: false,
	loading: () => <div className="animate-pulse bg-white h-48" />
})

const IndustryChallenges = dynamic(() => import('@/components/IndustryChallenges'), {
	ssr: false,
	loading: () => <div className="animate-pulse bg-[#E4B402] h-96" />
})

const BlogView = dynamic(() => import('@/components/BlogView'), {
	ssr: false,
	loading: () => <div className="animate-pulse bg-white h-96" />
})

const CaseStudy = dynamic(() => import('@/components/CaseStudy'), {
	ssr: false,
	loading: () => <div className="animate-pulse bg-[#E4B402] h-96" />
})

const HomePageContent = () => {
	return (
		<main className="bg-[#E4B402]">
			<Hero />
			<Services />
			<Solutions />
			<AIHiring />
			<WhyChoose />
			{/* <Testimonials /> */}
			<LogoSlider />
			<IndustryChallenges />
			<BlogView />
			<CaseStudy />
		</main>
	)
}

export default HomePageContent