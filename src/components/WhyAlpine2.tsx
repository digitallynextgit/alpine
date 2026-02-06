'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WhyAlpine = () => {
	const categories = [
		{
			title: 'Industry Connections',
			points: [
				'Access to leading employers across multiple industries',
				'Exclusive job opportunities',
				'Strong relationships with Fortune 500 companies',
				'Inside track to growing organizations'
			]
		},
		{
			title: 'Career Development',
			points: [
				'Professional skills workshops',
				'Resume optimization',
				'Interview coaching',
				'Industry insights and trends',
			]
		},
		{
			title: 'Success Metrics',
			points: [
				'95% placement success rate',
				'24/7 support availability',
				'Rapid response to your queries',
				'Long-term career guidance'
			]
		},
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
					Why Choose Alpine Talent for Your Job Search?
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

export default WhyAlpine;