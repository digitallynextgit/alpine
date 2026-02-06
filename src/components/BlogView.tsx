'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const BlogView = () => {
	const blogs = [
		{
			title: 'How Digital Transformation is Revolutionizing Staffing',
			date: '12 July, 2024',
			link: 'https://adventglobal.com/2024/07/12/how-digital-transformation-is-revolutionizing-staffing/',
			image: '/blog/blog1.webp' // Using existing image as placeholder
		},
		{
			title: 'Ghosting in Modern Recruitment: What it Means for Employers and How to Handle it',
			date: '30 July, 2024',
			link: 'https://adventglobal.com/2024/07/30/ghosting-in-modern-recruitment-what-it-means-for-employers-and-how-to-handle-it/',
			image: '/blog/blog2.webp' // Using existing image as placeholder
		},
		{
			title: 'Beyond Cost Savings: Discover the Hidden Superpowers of Contract Staffing',
			date: '15 October, 2024',
			link: 'https://adventglobal.com/2024/10/15/beyond-cost-savings-discover-the-hidden-superpowers-of-contract-staffing/',
			image: '/blog/blog3.webp' // Using existing image as placeholder
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
				Alpine Talent Talks - Insights & Trends in Staffing
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4vw]">
				{blogs.map((blog, index) => (
					<motion.div
						key={index}
						className="bg-white rounded-xl shadow-lg overflow-hidden group"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<Link href={blog.link} target="_blank" rel="noopener noreferrer" className="block">
							<div className="relative h-[30vh] w-full overflow-hidden">
								<Image
									src={blog.image}
									alt={blog.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-[3vw] bg-white">
								<h3 className="text-[2.5vw] md:text-[1.2vw] font-semibold text-gray-800 mb-[2vh] line-clamp-2 group-hover:text-[#00205B] transition-colors">
									{blog.title}
								</h3>
								<p className="text-[2vw] md:text-[1vw] text-gray-600">
									{blog.date}
								</p>
							</div>
						</Link>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default BlogView;