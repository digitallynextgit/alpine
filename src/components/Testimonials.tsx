'use client';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
	const testimonials = [
		{
			quote: "Alpine Talent revolutionized our recruitment strategy, turning a complex process into a smooth, efficient experience. They didn't just fill roles—they brought in skilled professionals who are now essential to our team's growth and success.",
			author: ""
		},
		{
			quote: "What sets Alpine apart is their understanding of our industry. They speak our language and consistently deliver candidates who not only have the skills but also fit our culture perfectly.",
			author: "— Marcus Rodriguez, HR Director, HealthCare Innovation"
		},
		{
			quote: "Their dedication to understanding our needs and providing tailored solutions is unmatched. We've seen a significant improvement in our hiring process thanks to Alpine Talent.",
			author: "— Jane Doe, CEO, Tech Solutions Inc."
		},
		{
			quote: "The quality of candidates and the speed of placement have exceeded our expectations. Alpine Talent has become an invaluable partner in our growth.",
			author: "— Michael Chen, COO, Digital Innovations"
		},
		{
			quote: "Their AI-powered matching system has revolutionized how we find talent. The candidates are consistently high-quality and well-matched to our needs.",
			author: "— Sarah Williams, Head of HR, Future Tech"
		},
		{
			quote: "We've worked with many staffing agencies, but Alpine Talent stands out for their personalized service and understanding of our industry needs.",
			author: "— Robert Johnson, Director, Healthcare Solutions"
		}
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<div className="py-16 bg-white">
			<motion.h2 
				className="text-4xl font-normal text-center mb-12 text-black"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Our Happy Clients
			</motion.h2>

			<div className="max-w-7xl mx-auto px-4 py-10">
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<div key={index} className="px-4 py-6">
							<div className="bg-white p-8 rounded-lg shadow-lg relative max-w-xl">
								<div className="mb-6">
									<div className="w-24 h-24 mx-auto">
										<div className="w-full h-full bg-[#E4B402]" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
									</div>
								</div>
								<p className="text-gray-700 text-center mb-4">{testimonial.quote}</p>
								<p className="text-gray-900 font-semibold text-center">{testimonial.author}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Testimonials;