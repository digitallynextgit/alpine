'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WhyChoose = () => {
	const categories = [
		{
			title: 'Industry-Leading Expertise',
			points: [
				'Backed by AGS\'s 30+ years of staffing excellence',
				'NMSDC Certified operations',
				'HUB Zone Enterprise qualification'
			]
		},
		{
			title: 'Advanced Talent Acquisition',
			points: [
				'AI-powered candidate matching',
				'Comprehensive verification process',
				'Robust anti-ghosting measures'
			]
		},
		{
			title: 'Client-Centric Approach',
			points: [
				'Dedicated account managers',
				'Customized staffing solutions',
				'24/7 support system'
			]
		},
		{
			title: 'Quality Assurance',
			points: [
				'Rigorous screening process',
				'Thorough background checks',
				'Continuous performance monitoring'
			]
		}
	];

	return (
		<div className="lg:py-16 bg-white relative ">
			<Image
				src="/why.webp"
				alt="Why Choose Background"
				fill
				className="object-cover opacity-70 "
				priority
			/>
			<div className="relative z-10">
				<motion.h2 
					className="text-4xl font-normal text-center mb-12 text-black px-4"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Why Choose Alpine Talent ?
				</motion.h2>

				<div className="max-w-3xl mx-auto px-4 grid grid-cols-1 gap-8 lg:ml-[30vw]">
					{categories.map((category, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="bg-[#E4B402] text-black font-semibold text-xl px-6 py-3 rounded-full mb-4">
								{category.title}
							</div>
							<ul className="list-none pl-4 space-y-3">
								{category.points.map((point, pointIndex) => (
									<motion.li
										key={pointIndex}
										className="flex items-start space-x-2"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.3, delay: (index * 0.1) + (pointIndex * 0.1) }}
									>
										<span className="text-black mt-1">•</span>
										<span className="text-gray-700">{point}</span>
									</motion.li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhyChoose;