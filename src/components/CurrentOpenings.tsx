'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Region = 'india' | 'usa';
type IndiaCategory = 'technical' | 'business';
type USACategory = 'recruitment' | 'strategic';
type Category = IndiaCategory | USACategory;

interface Job {
	title: string;
	location: string;
	description: string;
}

type RegionJobListings = {
	india: {
		technical: Job[];
		business: Job[];
	};
	usa: {
		recruitment: Job[];
		strategic: Job[];
	};
};

type RegionCategories = {
	india: Array<{
		id: IndiaCategory;
		label: string;
	}>;
	usa: Array<{
		id: USACategory;
		label: string;
	}>;
};

const jobListings: RegionJobListings = {
	india: {
		technical: [
			{
				title: "AWS Cloud Engineering",
				location: "Trainee (AGS, Anantapur)",
				description: "Join our cloud engineering team and work on cutting-edge AWS solutions."
			},
			{
				title: "Java & Azure Data Engineering",
				location: "Specialist (AGS, Hyderabad)",
				description: "Lead data engineering initiatives using Java and Azure cloud services."
			},
			{
				title: "Senior Java Architect",
				location: "(AGS, Hyderabad)",
				description: "Design and implement enterprise-level Java solutions."
			}
		],
		business: [
			{
				title: "Technical Recruiter",
				location: "Hyderabad",
				description: "Drive technical talent acquisition for leading tech companies."
			},
			{
				title: "Business Development Manager",
				location: "Bangalore",
				description: "Expand our business presence in the Southern India region."
			}
		]
	},
	usa: {
		recruitment: [
			{
				title: "Non-IT Recruiter",
				location: "",
				description: ""
			},
			{
				title: "Technical Recruiter",
				location: "",
				description: ""
			},
			{
				title: "Pharmaceutical Industry Recruiter",
				location: "",
				description: ""
			},
			{
				title: "HR Onboarding Specialist",
				location: "",
				description: ""
			}
		],
		strategic: [
			{
				title: "Business Development Manager (USA & Global)",
				location: "",
				description: ""
			}
		]
	}
};

const categories: RegionCategories = {
	india: [
		{ id: 'technical', label: 'Technical Tracks' },
		{ id: 'business', label: 'Business & Recruitment Roles' }
	],
	usa: [
		{ id: 'recruitment', label: 'Recruitment Specialists' },
		{ id: 'strategic', label: 'Strategic Roles' }
	]
};

const CurrentOpenings = () => {
	const [activeRegion, setActiveRegion] = useState<Region>('india');
	const [activeCategory, setActiveCategory] = useState<Category>('technical');

	const handleRegionChange = (region: Region) => {
		setActiveRegion(region);
		// Set default category based on region
		if (region === 'india') {
			setActiveCategory('technical');
		} else {
			setActiveCategory('recruitment');
		}
	};

	// Get the current jobs based on active region and category
	const getCurrentJobs = (): Job[] => {
		if (activeRegion === 'india') {
			if (activeCategory === 'technical' || activeCategory === 'business') {
				return jobListings.india[activeCategory];
			}
			return [];
		} else {
			if (activeCategory === 'recruitment' || activeCategory === 'strategic') {
				return jobListings.usa[activeCategory];
			}
			return [];
		}
	};

	const currentJobs = getCurrentJobs();

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
						Current Openings
					</h2>

					<div className="flex flex-wrap justify-center gap-4 w-full">
						<button
							onClick={() => handleRegionChange('india')}
							className={`px-6 py-2 rounded-md text-[3vw] md:text-[1.2vw] transition-colors
                ${activeRegion === 'india' ? 'bg-[#FFD700] text-[#001F4D]' : 'bg-transparent text-white border border-white'}`}
						>
							India Opportunities
						</button>
						<button
							onClick={() => handleRegionChange('usa')}
							className={`px-6 py-2 rounded-md text-[3vw] md:text-[1.2vw] transition-colors
                ${activeRegion === 'usa' ? 'bg-[#FFD700] text-[#001F4D]' : 'bg-transparent text-white border border-white'}`}
						>
							USA Opportunities
						</button>
					</div>

					<div className="flex flex-wrap justify-center gap-4 w-full lg:mt-4">
						{categories[activeRegion].map((category) => (
							<button
								key={category.id}
								onClick={() => setActiveCategory(category.id)}
								className={`px-6 py-2 rounded-md text-[2.8vw] md:text-[1.1vw] transition-colors ${activeCategory === category.id ? 'bg-[#FFD700] text-[#001F4D]' : 'border border-white text-white'}`}
							>
								{category.label}
							</button>
						))}
					</div>

					<div className="flex justify-between gap-10 flex-col lg:flex-row">
						{currentJobs.map((job, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-white/10 p-6 rounded-lg text-white hover:bg-white/20 transition-colors cursor-pointer"
							>
								<h3 className="text-[3.5vw] md:text-[1.3vw] font-medium mb-2">{job.title}</h3>
								<p className="text-[3vw] md:text-[1.1vw] text-white/80 mb-2">{job.location}</p>
								<p className="text-[2.8vw] md:text-[1vw] text-white/60">{job.description}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default CurrentOpenings;