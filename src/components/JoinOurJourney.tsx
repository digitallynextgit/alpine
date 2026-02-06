'use client';
import { motion } from 'framer-motion';

const JoinOurJourney = () => {
	return (
		<div className="bg-[#001F4D] py-[8vh]">
			<div className="w-[80vw] max-w-[1200px] mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col items-center gap-[4vh]"
				>
					<h2 className="text-[8vw] md:text-[3.5vw] font-normal text-white">
						Join Our Journey
					</h2>
					<p className="text-[3vw] md:text-[1.35vw] text-white/90 max-w-[60vw]">
						Whether you&apos;re a business looking to grow or a professional seeking your next challenge, Alpine Talent is your partner in success. Let&apos;s build something extraordinary together.
					</p>
					<p className="text-[3vw] md:text-[1.25vw] text-white/80 mt-[2vh]">
						Part of Advent Global Solutions | Transforming Talent Acquisition for 3 Decades
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default JoinOurJourney;