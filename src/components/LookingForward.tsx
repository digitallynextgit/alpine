'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import JoinOurJourney from './JoinOurJourney';

const features = [
	{
		icon: "/look/4.webp",
		title: "Advanced AI-driven recruitment tools",
		delay: 0.2
	},
	{
		icon: "/look/3.webp",
		title: "Expanded industry specializations",
		delay: 0.3
	},
	{
		icon: "/look/2.webp",
		title: "Enhanced candidate experience platforms",
		delay: 0.4
	},
	{
		icon: "/look/1.webp",
		title: "Innovative workforce solutions",
		delay: 0.5
	}
];

const LookingForward = () => {
	return (
		<>
		<div className="bg-[#f8f9fa] py-[8vh]">
			<div className="w-[80vw] max-w-[1200px] mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-[6vh]"
				>
					<h2 className="text-[8vw] md:text-[3vw] font-normal text-[#022866] mb-[2vh]">Looking Forward</h2>
					<p className="text-[4vw] md:text-[1.35vw] text-[#022866]">
						The future of work is evolving, and so are we. We&apos;re investing in:
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4vw]">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className="bg-white p-[4vh] rounded-lg shadow-lg flex flex-col items-center text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: feature.delay }}
						>
							<div className="w-[12vw] h-[12vw] md:w-[6vw] md:h-[6vw] bg-[#001F4D] rounded-full flex items-center justify-center mb-[2vh]">
								<div className="relative w-[10vw] h-[10vw] md:w-[6vw] md:h-[6vw]">
									<Image
										src={feature.icon}
										alt={feature.title}
										fill
										className="object-contain "
									/>
								</div>
							</div>
							<p className="text-[3vw] md:text-[1.25vw] text-[#022866] font-medium">
								{feature.title}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
		<JoinOurJourney />
		</>
	);
};

export default LookingForward;