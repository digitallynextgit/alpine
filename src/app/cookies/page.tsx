'use client';
import { motion } from 'framer-motion';

const CookiesPolicy = () => {
    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h1
                    className="text-4xl md:text-5xl font-normal text-[#022866] mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Cookies Policy
                </motion.h1>
                
                <motion.div
                    className="space-y-6 text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p>
                        This Cookies Policy explains how Alpine Talent uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                    </p>
                    
                    <h2 className="text-2xl text-[#022866] mt-8 mb-4">What are cookies?</h2>
                    <p>
                        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                    </p>
                    
                    <h2 className="text-2xl text-[#022866] mt-8 mb-4">How do we use cookies?</h2>
                    <p>
                        We use cookies for several purposes, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To provide essential website functionality</li>
                        <li>To analyze website traffic and performance</li>
                        <li>To enhance your browsing experience</li>
                        <li>To personalize content and advertisements</li>
                    </ul>
                    
                    <h2 className="text-2xl text-[#022866] mt-8 mb-4">Your cookie choices</h2>
                    <p>
                        You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default CookiesPolicy;