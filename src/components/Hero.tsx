import Link from "next/link";
const Hero = () => {
	return (
		<div className="relative lg:min-h-[100vh] min-h-[60vh] overflow-hidden">
			<div className="max-w-[90vw] mx-auto">
				{/* Background Video */}
				<video
					autoPlay
					loop
					muted
					playsInline
					className="absolute inset-0 z-0 mt-[30vw] md:mt-[6vw] lg:mt-[12vw] w-[100%] h-full object-cover"
				>
					<source src="/hike.mp4" type="video/mp4" />
				</video>

				
				{/* Content */}
				<div className="relative z-20 ">
					<div className="px-[4vw] lg:py-[10vh] py-[2vh] ">
						<div className="text-center">
							<h2 className="text-[8vw] md:text-[4vw] lg:text-[3vw] font-normal text-blue-900">
								Transform Your Workforce with
							</h2>
							<h2 className="text-[5vw] md:text-[4vw] lg:text-[3vw] font-normal mb-[3vh] text-white">
								Strategic Staffing Solutions
							</h2>
						</div>
						<div className="bg-blue-200/50 backdrop-blur-sm rounded-3xl p-[4vw] md:p-[2vw] shadow-xl max-w-[90vw] md:max-w-[70vw] lg:max-w-[70vw] mx-auto border border-black lg:translate-y-[15vw] translate-y-[30vw] lg:mt-[-8vw]">
							<h2 className="text-[4vw] md:text-[3vw] lg:text-[2vw] font-semibold text-blue-900 mb-[2vh]">
							Great Teams Don’t Happen by Chance.
							</h2>
							<p className="text-[3vw] md:text-[2vw] lg:text-[1.25vw] text-gray-700 mb-[5vh]">
							Struggling with hiring gaps? At Alpine Talent, we bridge the gap between businesses and exceptional professionals— because the right workforce builds the right future.
							</p>
							<Link href="/contact" className="bg-yellow-500 text-blue-900 px-[4vw] py-[2vh] rounded-full font-semibold hover:bg-yellow-400 transition-colors text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] shadow-lg">
								CONTACT US
							</Link >
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
