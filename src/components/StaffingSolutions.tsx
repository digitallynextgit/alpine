'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const StaffingSolutions = () => {
	return (
		<>
			<div className="max-w-7xl mx-auto px-4 py-16">
				<div className="space-y-16">
					{/* Administrative & Clerical Staffing */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="bg-white p-8 rounded-lg shadow-lg"
					>
						<h2 className="text-2xl font-bold mb-4">1. Administrative & Clerical Staffing</h2>
						<p className="text-gray-600 mb-6">
							Administrative & Clerical Excellence Finding exceptional administrative talent shouldn&apos;t be a challenge. Our Administrative & Clerical division specializes in connecting organizations with highly-skilled professionals who keep operations running smoothly.
						</p>
						<p className="text-gray-600 mb-4">Our administrative professionals excel in:</p>
						<div className="flex lg:flex-wrap flex-col lg:flex-row gap-4">
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Advanced Microsoft Office Suite expertise</span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Customer relationship management</span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Document control and processing</span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Office administration tools</span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Project coordination</span>
						</div>
						<p className='mt-10'>Whether you need an Executive Assistant who can manage complex calendars and confidential information, or a Customer Service Representative who can handle highvolume client interactions, our talent pool is carefully vetted to meet your specific requirements.</p>
					</motion.section>

					{/* Healthcare Staffing */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="bg-white p-8 rounded-lg shadow-lg"
					>
						<h2 className="text-2xl font-bold mb-4">2. Healthcare Staffing & Pharmaceutical Staffing</h2>
						<p className="text-gray-600 mb-6">
							The healthcare and pharmaceutical industries demand precision, compliance, and expertise. Our specialized healthcare division understands these unique challenges and provides staffing solutions that ensure quality patient care and research integrity.

							Our healthcare professionals are:
						</p>
						<p className="text-gray-600 mb-4">Our healthcare professionals are:</p>
						<div className="flex lg:flex-wrap flex-col lg:flex-row gap-4">
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full"> Fully credentialed and verified </span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Compliance-trained and certified </span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Experienced in major EMR systems </span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">HIPAA-compliant and safety-trained </span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Ready for immediate placement </span>
						</div>
						<p className='mt-10'>From Clinical Research Associates to Medical Assistants, we maintain a robust network of healthcare professionals ready to support your organization&apos;s mission-critical operations. </p>
					</motion.section>

					{/* Accounting & Finance */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="bg-white p-8 rounded-lg shadow-lg"
					>
						<h2 className="text-2xl font-bold mb-4">3. Accounting & Finance Staffing</h2>
						<p className="text-gray-600 mb-6">
							Finding top-tier accounting and finance professionals is crucial for maintaining compliance, optimizing financial performance, and ensuring strategic growth. Our Accounting & Finance division specializes in connecting organizations with highly skilled professionals who bring precision, analytical expertise, and financial acumen to the table.

							Our accounting and finance professionals excel in:
						</p>
						<div className="flex lg:flex-wrap flex-col lg:flex-row gap-4">
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Financial reporting & analysis</span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Tax preparation & return prep</span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Budgeting & forecasting</span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">ERP & accounting software expertise</span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Audit & risk management</span>
						</div>
						<p className='mt-10'>Whether you need a Senior Accountant to navigate complex financial statements or a Financial Analyst to provide data-driven insights, our talent pool is carefully vetted to meet your specific business needs.</p>
					</motion.section>

					{/* Light Industrial */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="bg-white p-8 rounded-lg shadow-lg"
					>
						<h2 className="text-2xl font-bold mb-4">4. Light Industrial Staffing</h2>
						<p className="text-gray-600 mb-6">
							Finding reliable and skilled light industrial workers is essential for maintaining productivity and meeting production demands. Our Light Industrial Staffing division specializes in connecting organizations with experienced professionals who ensure efficiency, safety, and quality in every operation.
						</p>
						<div className="flex lg:flex-wrap flex-col lg:flex-row gap-4">
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Warehouse operations & logistics</span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Assembly line & production support</span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Inventory management & quality control</span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Forklift operation & material handling</span>
							<span className="bg-yellow-500 text-white px-4 py-2 rounded-full">Safety compliance & OSHA standards</span>
						</div>
						<p className='mt-10'>Whether you need a Machine Operator to streamline production or a Warehouse Associate to manage inventory with precision, our carefully vetted talent pool is ready to meet your business needs.</p>
					</motion.section>
				</div>

			</div>
			<div className='bg-[#002865] px-10 py-10'>
				{/* This is Stats section */}
				<Image
					src="/tri.webp"
					alt="image "
					width={1600}
					height={1000}
					className="lg:w-full w-[100vw]"
				/>
			</div>
		</>

	);
};

export default StaffingSolutions;