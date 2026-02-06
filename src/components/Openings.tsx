'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const jobListings = [
	{
		title: "Executive Assistants",
		location: ""
	},
	{
		title: "Office Managers",
		location: ""
	},
	{
		title: "Data Entry Specialists",
		location: ""
	},
    {
		title: "Customer Service Representatives",
		location: ""
	}
];

const Openings = () => {
	const [activeTab, setActiveTab] = useState('india');

	return (
		<div className="bg-[#001F4D] py-[8vh]">
			<div className="w-[90vw] max-w-[1200px] mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col items-center gap-8"
				>
					<h2 className="text-[8vw] md:text-[3.5vw] font-normal text-white text-center">
                    Turn Your Passion into a Paycheck- The Future You Deserve Starts Here!
					</h2>
					
					<div className="flex flex-wrap justify-center gap-4 w-full">
						<button
							onClick={() => setActiveTab('india')}
							className={`px-6 py-2 rounded-md text-[3vw] md:text-[1.2vw] transition-colors
								${activeTab === 'india' ? 'bg-[#FFD700] text-[#001F4D]' : 'bg-transparent text-white border border-white'}`}
						>
							Our Specialized Divisions
						</button>

					</div>

					<div className="flex flex-wrap justify-center gap-4 w-full mt-4">
						<button className="px-6 py-2 rounded-md text-[2.8vw] md:text-[1.1vw] bg-[#FFD700] text-[#001F4D]">
                        Administrative & Clerical
						</button>
						<button className="px-6 py-2 rounded-md text-[2.8vw] md:text-[1.1vw] border border-white text-white">
                        Accounting & Finance
						</button>
                        <button className="px-6 py-2 rounded-md text-[2.8vw] md:text-[1.1vw] border border-white text-white">
                        Healthcare
						</button>
                        <button className="px-6 py-2 rounded-md text-[2.8vw] md:text-[1.1vw] border border-white text-white">
                        Industrial & Professional
						</button>
					</div>
                    
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-8">
						{jobListings.map((job, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-white/10 p-6 rounded-lg text-white hover:bg-white/20 transition-colors cursor-pointer"
							>
								<h3 className="text-[3.5vw] md:text-[1.0vw] font-medium mb-2">{job.title}</h3>
								{/* <p className="text-[3vw] md:text-[1.1vw] text-white/80">{job.location}</p> */}
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Openings;