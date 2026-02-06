'use client';
import { motion } from 'framer-motion';

const Disclaimer = () => {
    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h1
                    className="text-4xl md:text-5xl font-normal text-[#022866] mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Disclaimer
                </motion.h1>
                
                <motion.div
                    className="space-y-6 text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p>
                        The information provided on Alpine Talent&apos;s website is for general informational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on our website.
                    </p>
                    
                    <h2 className="text-2xl text-[#022866] mt-8 mb-4">No Professional Advice</h2>
                    <p>
                        The information on our website should not be construed as professional advice. You should not take action or avoid taking action based on the content on this website without first seeking appropriate professional advice.
                    </p>
                    
                    <h2 className="text-2xl text-[#022866] mt-8 mb-4">External Links</h2>
                    <p>
                        Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                    </p>
                    
                    <h2 className="text-2xl text-[#022866] mt-8 mb-4">Changes and Updates</h2>
                    <p>
                        We reserve the right to modify this disclaimer at any time without prior notice. By using our website, you agree to be bound by the current version of this disclaimer.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Disclaimer;