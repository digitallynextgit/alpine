'use client';
import { motion } from 'framer-motion';
import LookingForward from './LookingForward';

const ClientSuccess = () => {
	return (
		<>
			<div className="bg-white py-[8vh]">
			<div className="w-[80vw] max-w-[1200px] mx-auto">
				<motion.h2 
					className="text-[8vw] md:text-[3vw] font-normal text-[#022866] text-center mb-[8vh]"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Client Success Stories
				</motion.h2>

				<div className="grid md:grid-cols-2 gap-[4vw]">
					{/* First Testimonial */}
					<motion.div 
						className="bg-white p-[4vh] rounded-lg shadow-lg relative flex flex-col justify-center items-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className="w-[5vw] h-[5vw] bg-[#E4B503]  "
							style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
						/>
						<p className="text-[3vw] md:text-[1.25vw] text-[#022866] text-center mb-[2vh] mt-[4vh]">
							&ldquo;Alpine Talent revolutionized our recruitment strategy, turning a complex process into a smooth, efficient experience. They didn&apos;t just fill roles—they brought in skilled professionals who are now essential to our team&apos;s growth and success.&rdquo;
						</p>

						<div className="text-center">
							<p className="text-[4vw] md:text-[1.1vw] font-bold text-[#022866]">James Taylor, CEO,</p>
							<p className="text-[3vw] md:text-[1.1vw] text-[#022866] italic">InnovateX Technologies</p>
						</div>
					</motion.div>

					{/* Second Testimonial */}
					<motion.div 
						className="bg-white p-[4vh] rounded-lg shadow-lg relative flex flex-col justify-center items-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<div className="w-[5vw] h-[5vw] bg-[#E4B503] "
							style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
						/>
						<p className="text-[3vw] md:text-[1.25vw] text-[#022866] text-center mb-[2vh] mt-[4vh]">
							&ldquo;What sets Alpine apart is their <span className="italic">understanding of our industry</span>. They speak our language and consistently deliver candidates who not only have the skills but also fit our culture perfectly.&rdquo;
						</p>
						<div className="text-center">
							<p className="text-[4vw] md:text-[1.1vw] font-bold text-[#022866]">Marcus Rodriguez, HR Director,</p>
							<p className="text-[3vw] md:text-[1.1vw] text-[#022866] italic">HealthCare Innovation</p>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
		<LookingForward />
		</>
	);
};

export default ClientSuccess;