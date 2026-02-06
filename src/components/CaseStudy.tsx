'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Case {
	title: string;
	description: string;
	link: string;
	image: string;
}

const CaseStudy: React.FC = () => {
	const cases: Case[] = [
		{
			title: 'Healthcare Technology Transformation',
			description: 'Best is to your next web project',
			link: '/case-study/1',
			image: '/case/1.webp'
		},
		{
			title: 'Financial Services Innovation',
			description: 'Best is to your next web project',
			link: '/case-study/2',
			image: '/case/2.webp'
		},
		{
			title: 'Manufacturing Excellence',
			description: 'Best is to your next web project',
			link: '/case-study/3',
			image: '/case/3.webp'
		},
		{
			title: 'Tech Startup Scale-up',
			description: 'Best is to your next web project',
			link: '/case-study/4',
			image: '/case/4.webp'
		}
	];

	return (
		<div className="py-[8vh] bg-white px-[10vw]">
			<motion.h2
				className="text-[8vw] lg:text-[3vw] md:text-[2.5vw] font-normal text-center mb-[2vh] text-black"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				#PaaS - Practice as a Service
			</motion.h2>
			<motion.h3
				className="text-[8vw] lg:text-[3vw] md:text-[2.5vw] font-normal text-center mb-[8vh] text-black"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				Client Success Spotlights
			</motion.h3>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-[4vw]">
				{cases.map((caseStudy: Case, index: number) => (
					<motion.div
						key={index}
						className="bg-white rounded-xl  overflow-hidden group cursor-pointer"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<Link href={caseStudy.link} target="_blank" rel="noopener noreferrer" className="block">
							<div className="relative h-[30vh] w-full overflow-hidden">
								<Image
									src={caseStudy.image}
									alt={caseStudy.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
								<div className="absolute bottom-0 left-0 right-0 p-[2vw] text-white">
									<h3 className="text-[3vw] md:text-[1.5vw] font-semibold mb-[1vh]">
										{caseStudy.title}
									</h3>
									<p className="text-[2.5vw] md:text-[1.2vw] opacity-90">
										{caseStudy.description}
									</p>
								</div>
							</div>
						</Link>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default CaseStudy;