'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AIHiring = () => {
	const stats = [
		{ text: '15-minute initial candidate matching' },
		{ text: '60% reduction in time-to-hire' },
		{ text: '95% successful placement rate' },
		{ text: '90% first-year retention rate' }
	];

	return (
		<div className="relative py-16 bg-white">
			<Image
				src="/aibg.webp"
				alt="AI Background"
				fill
				className="object-cover "
				priority
			/>
			<div className="relative z-10 max-w-5xl mx-auto px-4 ">
				<motion.div
					className="bg-blue-100/40 backdrop-blur-sm rounded-3xl shadow-lg p-12 border-[1px] border-black"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
                    <div className='flex justify-end'>
					<motion.h2 
						className="lg:text-3xl text-xl font-normal text-white text-left mb-8 bg-blue-900 max-w-xl p-4 rounded-3xl "
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
					How does Alpine Talent use AI to revolutionize hiring?
					</motion.h2>
                    </div>

					<motion.p 
						className="lg:text-lg text-gray-700 mb-8 text-left"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
					>
						Our AI-powered platform transforms hiring, analyzing 50+ data points for perfect talent matching, resulting in:
					</motion.p>

					<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								className="flex items-center space-x-4"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4 + index * 0.1 }}
							>
								<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
								<p className="text-gray-700">{stat.text}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default AIHiring;