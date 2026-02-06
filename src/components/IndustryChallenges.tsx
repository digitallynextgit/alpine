'use client';
import { motion } from 'framer-motion';

const IndustryChallenges = () => {
	const challenges = [
		{
			challenge: 'Talent Shortage',
			solution: 'AI-Powered Talent Pool'
		},
		{
			challenge: 'Candidate Ghosting',
			solution: 'Advanced Verification System'
		},
		{
			challenge: 'Rapid Tech Evolution',
			solution: 'Continuous Skill Assessment'
		},
		{
			challenge: 'Changing Work Models',
			solution: 'Flexible Staffing Models'
		},
		{
			challenge: 'Compliance Requirements',
			solution: 'Compliance Management'
		}
	];

	return (
		<div className="py-[8vh] bg-white px-[8vw]">
			<motion.h2
				className="text-[8vw] lg:text-[3vw] md:text-[2.5vw] font-normal text-center mb-[8vh] text-black"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Industry Challenges & Our Solutions
			</motion.h2>

			<div className="max-w-[90vw] mx-auto px-[4vw] md:px-[2vw]">
				<div className="flex flex-col md:flex-row justify-between items-start gap-[6vh] md:gap-[2vw]">
					<div className="w-full md:w-[28vw]">
						<motion.div
							className="bg-[#E4B402] text-white text-[4vw] lg:text-[1.75vw] md:text-[1.2vw] font-normal px-[4vw] md:px-[2vw] py-[2vh] rounded-full mb-[6vh] text-center"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							Challenges:
						</motion.div>
						<div className="space-y-[5vh] md:space-y-[4vh]">
							{challenges.map((item, index) => (
								<motion.div
									key={index}
									className="flex items-center justify-center"
									initial={{ opacity: 0, x: -50 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<span className="text-black text-[3.8vw] lg:text-[1.4vw] md:text-[1.1vw] text-center">{item.challenge}</span>
								</motion.div>
							))}
						</div>
					</div>

					<div className="hidden md:flex flex-col justify-center space-y-[8vh] mt-[18vh] flex-shrink-0 mr-[5vw]">
						{challenges.map((_, index) => (
							<motion.div
								key={index}
								className="relative"
								initial={{ width: 0 }}
								whileInView={{ width: '20vw' }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="h-[1px] bg-gray-700 w-[20vw]"></div>
								<div
									className="absolute right-0 top-1/2 w-0 h-0 border-l-[0.6vw] border-l-transparent border-t-[0.6vw] border-t-[#00205B] border-r-[0.6vw] border-r-transparent"
									style={{ transform: 'translate(25%, 50%)', rotate: '270deg' }}
								></div>
							</motion.div>
						))}
					</div>


					<div className="w-full md:w-[28vw]">
						<motion.div
							className="bg-[#00205B] text-white text-[4vw] lg:text-[1.75vw] md:text-[1.2vw] font-normal px-[4vw] md:px-[2vw] py-[2vh] rounded-full mb-[6vh] text-center"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							Our Solutions:
						</motion.div>
						<div className="space-y-[5vh] md:space-y-[4vh]">
							{challenges.map((item, index) => (
								<motion.div
									key={index}
									className="flex items-center justify-center"
									initial={{ opacity: 0, x: 50 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<span className="text-black text-[3.8vw] lg:text-[1.4vw] md:text-[1.1vw] text-center">{item.solution}</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IndustryChallenges;