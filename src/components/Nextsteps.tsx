import Link from 'next/link';

const NextSteps = () => {
	return (
		<div className="bg-[#001F4D] text-white py-12 px-4 text-center">
			<h2 className="text-4xl lg:text-6xl mb-8">Ready to Take the Next Step?</h2>
			
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8 text-left">
				<div>• 24/7 Support Line</div>
				<div>• Schedule a Career Consultation</div>
				<div>• Email: careers@alpinetalent.com</div>
				<div>• Upload Your Resume</div>
			</div>

			<Link href="/contact" className="bg-yellow-500 text-black px-8 py-3 rounded-md font-medium mb-8">
				Contact Us Today
			</Link>

			<p className="text-lg">
				Climb Higher in Your Career with Alpine Talent—Find Your Perfect Job Today!
			</p>
		</div>
	);
};

export default NextSteps;
