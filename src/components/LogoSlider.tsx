'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LogoSlider = () => {
	const topLogos = ['/1/11.png', '/1/12.png', '/1/13.png', '/1/14.png', '/1/15.png', '/1/20.png', '/1/21.png'];
	const bottomLogos = ['/2/1.png', '/2/2.png', '/2/3.png', '/2/4.png', '/2/5.png', '/2/6.png', '/2/7.png', '/2/8.png', '/2/9.png', '/2/10.png'];

	return (
		<div className="lg:py-16 bg-white overflow-hidden">
			<motion.h2 
				className="text-4xl font-normal text-center mb-12 text-black"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Our Partners
			</motion.h2>
			
			<div className="max-w-7xl mx-auto relative">
				<div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
				<div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

				<div className="relative lg:mb-12 mb-6 h-[100px] overflow-hidden">
					<motion.div
						className="flex space-x-16 absolute"
						animate={{
							x: [0, -3000]
						}}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 50,
								ease: "linear"
							}
						}}
					>
						{[...topLogos, ...topLogos, ...topLogos, ...topLogos].map((logo, index) => (
							<div key={index} className="flex-shrink-0 w-[180px] h-[90px] relative">
								<Image
									src={logo}
									alt={`Partner Logo ${index + 1}`}
									fill
									className="object-contain hover:scale-110 transition-transform duration-300"
								/>
							</div>
						))}
					</motion.div>
				</div>

				<div className="relative h-[100px] overflow-hidden">
					<motion.div
						className="flex space-x-16 absolute"
						animate={{
							x: [-3000, 0]
						}}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 50,
								ease: "linear"
							}
						}}
					>
						{[...bottomLogos, ...bottomLogos, ...bottomLogos, ...bottomLogos].map((logo, index) => (
							<div key={index} className="flex-shrink-0 w-[180px] h-[90px] relative">
								<Image
									src={logo}
									alt={`Partner Logo ${index + 1}`}
									fill
									className="object-contain hover:scale-110 transition-transform duration-300"
								/>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default LogoSlider;