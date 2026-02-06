'use client';
import { motion } from 'framer-motion';

const PrivacyHero = () => {
	return (
		<div className="bg-yellow-500 text-white py-20">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div className="space-y-6 text-black font-normal ">
						<motion.h1 
							className="text-4xl md:text-5xl"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							Transforming Careers, Powering Business Growth
						</motion.h1>
						

						<motion.h2 className='lg:text-7xl text-5xl text-white'>Privacy Policy</motion.h2>
						
					</div>

					{/* Right Content */}
					<motion.div 
						className="relative h-full "
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<motion.p 
							className="text-lg md:text-base text-black mb-10"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							Welcome to Alpine Talent. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website AlpineTalent.com. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
						</motion.p>
						<motion.p 
							className="text-lg md:text-base text-black"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							For over three decades, we&apos;ve been the bridge between exceptional talent and visionary companies. But we&apos;re more than just matchmakers<br/> — we&apos;	re career architects and business catalysts.
						</motion.p>
						<motion.div 
							className="flex gap-4 mt-10"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<button className="bg-[#022866] text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors">
								Contact Us
							</button>
							<button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#00205B] transition-colors">
								Our Works
							</button>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default PrivacyHero;