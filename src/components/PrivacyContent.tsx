'use client';
import { motion } from 'framer-motion';

const PrivacyContent = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 py-16 text-black">
			<div className="space-y-16">
				{/* Information We Collect */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-2xl font-bold mb-6">1. Information We Collect</h2>
					<p className="text-gray-600 mb-4">We may collect and process the following data about you:</p>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="font-semibold mb-3">Personal Identification Information</h3>
							<p className="text-gray-600">We collect personal information such as your name, email address, phone number, and professional background when you submit them through our forms or apply for positions.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="font-semibold mb-3">Non-personal Identification Information</h3>
							<p className="text-gray-600">We may collect non-personal information about users whenever they interact with our site, including browser name, device type, and technical information about users&apos; connection methods.</p>
						</div>
					</div>
				</motion.section>

				{/* How We Use Your Information */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-2xl font-bold mb-6">2. How We Use Your Information</h2>
					<p className="text-gray-600 mb-4">We use the information we collect in the following ways:</p>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="font-semibold mb-3">To Provide Customer Service</h3>
							<p className="text-gray-600">To respond to your inquiries and provide support for our services.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="font-semibold mb-3">To Personalize User Experience</h3>
							<p className="text-gray-600">To understand how our users as a group use the services and resources we provide.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="font-semibold mb-3">To Process Transactions</h3>
							<p className="text-gray-600">To properly process your recruitment and placement services.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="font-semibold mb-3">To Send Periodic Emails</h3>
							<p className="text-gray-600">To send updates, job alerts, and respond to inquiries and requests.</p>
						</div>
					</div>
				</motion.section>

				{/* How We Protect Your Information */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-2xl font-bold mb-6">3. How We Protect Your Information</h2>
					<div className="bg-white p-6 rounded-lg shadow">
						<p className="text-gray-600">
							We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
						</p>
					</div>
				</motion.section>

				{/* Sharing Your Personal Information */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-2xl font-bold mb-6">4. Sharing Your Personal Information</h2>
					<div className="bg-white p-6 rounded-lg shadow">
						<p className="text-gray-600">
							We do not sell, trade, or rent Users personal identification information to others.
						</p>
					</div>
				</motion.section>

				{/* Changes to This Privacy Policy */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-2xl font-bold mb-6">5. Changes to This Privacy Policy</h2>
					<div className="bg-white p-6 rounded-lg shadow">
						<p className="text-gray-600">
							Alpine Talent has the discretion to update this privacy policy at any time. We encourage Users to frequently check this page for any changes.
						</p>
					</div>
				</motion.section>
			</div>
		</div>
	);
};

export default PrivacyContent;