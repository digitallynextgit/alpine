'use client';
import { motion } from 'framer-motion';
import { MdComputer, MdBusinessCenter, MdHandshake } from 'react-icons/md';
import AlpineDifference from './AlpineDifference';

const WhyAbout = () => {
	return (
        <>
		<div className="bg-white py-20">
			<div className="max-w-7xl mx-auto px-4">
				<motion.div 
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-4xl md:text-5xl font-normal text-[#022866] mb-6 text-left">Why Alpine Talent?</h2>
					<p className="text-gray-600 text-lg text-left w-[90%]">
						The hiring landscape is complex. Finding that perfect match between talent and opportunity can feel like searching for a needle in a haystack. That&apos;s where we come in.
					</p>
				</motion.div>

				<motion.h3 
					className="text-4xl md:text-5xl font-normal text-[#022866] mb-6 text-left"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Alpine Talent – Elevating Your Workforce
				</motion.h3>

				<div className="grid md:grid-cols-3 gap-8">
					<motion.div 
						className="py-10 rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<div className="flex items-start flex-col gap-3 mb-4">
							<MdComputer className="text-4xl text-[#022866]" />
							<h4 className="text-xl font-bold text-[#022866]">Industry-Leading Technology</h4>
						</div>
						<p className="text-gray-600">
							Our AI-powered recruitment platform doesn&apos;t just scan resumes - it understands potential. By combining cutting-edge technology with human insight, we&apos;re revolutionizing how companies find their next star performer.
						</p>
					</motion.div>

					<motion.div 
						className="py-10 rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<div className="flex items-start flex-col gap-3 mb-4">
							<MdBusinessCenter className="text-4xl text-[#022866]" />
							<h4 className="text-xl font-bold text-[#022866]">Deep Industry Expertise</h4>
						</div>
						<p className="text-gray-600">
							From IT innovators to healthcare heroes, financial wizards to engineering pioneers - our specialized recruiters speak your language. With dedicated teams across multiple sectors, we understand the nuanced requirements that make each industry unique.
						</p>
					</motion.div>

					<motion.div 
						className="py-10 rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						<div className="flex items-start flex-col gap-3 mb-4">
							<MdHandshake className="text-4xl text-[#022866]" />
							<h4 className="text-xl font-bold text-[#022866]">Partnership, Not Just Placement</h4>
						</div>
						<p className="text-gray-600">
							We don&apos;t disappear after the hire. Your success is our success, which is why we build lasting partnerships that evolve with your business needs. Think of us as your talent strategy team, always ready to support your growth.
						</p>
					</motion.div>
				</div>

				
			</div>
<div className="bg-[#022866] mt-20 py-16">
	<motion.h3 
		className="text-4xl md:text-6xl font-normal text-white mb-20 text-center max-w-2xl mx-auto"
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		Our Impact in Numbers
	</motion.h3>

	<div className="max-w-6xl mx-auto px-4">
		<div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
			<motion.div 
				className="text-center bg-blue-900 p-4 rounded-xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<h4 className="text-4xl font-bold text-white mb-2">30+ years</h4>
				<p className="text-white/80 text-sm">of staffing excellence</p>
			</motion.div>

			<motion.div 
				className="text-center bg-blue-900 p-4 rounded-xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				<h4 className="text-4xl font-bold text-white mb-2 flex ">Thousands</h4>
				<p className="text-white/80 text-sm">of successful placements</p>
			</motion.div>

			<motion.div 
				className="text-center bg-blue-900 p-4 rounded-xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				<h4 className="text-4xl font-bold text-white mb-2 flex ">Global</h4>
				<p className="text-white/80 text-sm">reach</p>
			</motion.div>
			<motion.div 
				className="text-center bg-blue-900 p-4 rounded-xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				<h4 className="text-4xl font-bold text-white mb-2 flex "> Multiple industry</h4>
				<p className="text-white/80 text-sm">specializations</p>
			</motion.div>

			<motion.div 
				className="text-center bg-blue-900 p-4 rounded-xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.6 }}
			>
				<h4 className="text-4xl font-bold text-white mb-2 flex ">90%+</h4>
				<p className="text-white/80 text-sm">client satisfaction rate</p>
			</motion.div>
		</div>

		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
			
		</div>
	</div>
</div>
		</div>
		<AlpineDifference />
    </>
	);
};

export default WhyAbout;