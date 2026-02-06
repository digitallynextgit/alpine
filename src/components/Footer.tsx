'use client';
import { motion } from 'framer-motion';
// import Link from 'next/link';

const Footer = () => {
    // const socialLinks = [
    //     { href: 'https://facebook.com', icon: 'facebook', label: 'Facebook' },
    //     { href: 'https://instagram.com', icon: 'instagram', label: 'Instagram' },
    //     { href: 'https://twitter.com', icon: 'twitter', label: 'Twitter' },
    //     { href: 'https://youtube.com', icon: 'youtube', label: 'YouTube' }
    // ];

    return (
        <>
            {/* Mobile and Tablet View */}
            <div className="md:hidden relative w-full h-[60vh] bg-white overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full aspect-[8/10] rotate-180 ">
                        <div
                            className="absolute inset-0 bg-black"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                        />
                        <div
                            className="absolute inset-[3px] bg-[#E4B402]"
                            style={{ clipPath: 'polygon(0.5% -4.0%, 97.5% 0.5%, 50% 97%)' }}
                        >
                            <div className="absolute inset-0 flex flex-col items-center justify-between lg:py-32 py-40 px-6 rotate-180">
                                <div className='w-full text-center'>
                                    <motion.h2
                                        className="text-lg font-normal text-black"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        Ready To
                                    </motion.h2>
                                    <motion.h3
                                        className="text-lg font-normal text-black mt-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        Revolutionise <br />Your Workforce?
                                    </motion.h3>
                                    <motion.p
                                        className="text-sm text-black mt-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        Let&apos;s craft your dream team<br /> with the perfect talent!
                                    </motion.p>

                                    <motion.a
                                        href="mailto:contact@example.com"
                                        className="bg-white text-black px-6 py-2 rounded-full text-sm sm:text-base mt-2 hover:bg-black hover:text-white transition-colors duration-300 mb-8 inline-block"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        Contact us Today
                                    </motion.a>
                                </div>

                                {/* <div className='w-full text-center'>
                                    <motion.div
                                        className="text-sm sm:text-base text-black"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        info@alpinetalent.ai
                                    </motion.div>

                                    <motion.div
										className="flex justify-center space-x-6 mt-2"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 0.5 }}
									>
										{socialLinks.map((link, index) => (
											<Link
												key={index}
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												className="text-black hover:text-white transition-colors duration-300"
											>
												<i className={`fab fa-${link.icon} text-xl sm:text-2xl`} aria-label={link.label}></i>
											</Link>
										))}
									</motion.div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block relative w-full h-[100vh] bg-white overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[100%] aspect-[2/1] rotate-180 mt-[5vw]">
                        <div
                            className="absolute inset-0 bg-black"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                        />
                        <div
                            className="absolute inset-[5px] bg-[#E4B402]"
                            style={{ clipPath: 'polygon(0.5% -4.0%, 97.5% 0.5%, 50% 97%)' }}
                        >
                            <div className="absolute inset-0 flex flex-col items-center justify-between py-[46vh] px-[4vw] rotate-180">
                                <div className='w-full text-center'>
                                    <motion.h2
                                        className="text-[3vw] font-normal text-black"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        Ready To
                                    </motion.h2>
                                    <motion.h3
                                        className="text-[3vw] font-normal text-black mt-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        Revolutionise Your Workforce?
                                    </motion.h3>
                                    <motion.p
                                        className="text-[1.5vw] text-black mt-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        Let&apos;s craft your dream team with the perfect talent!
                                    </motion.p>

                                    <motion.a
                                        href="/contact"
                                        className="bg-white text-black px-8 py-3 rounded-full text-[1.2vw] mt-6 hover:bg-black hover:text-white transition-colors duration-300 mb-[5vh] inline-block"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        Contact us Today
                                    </motion.a>
                                </div>

                                {/* <div className='w-full text-center'>
									<motion.div
										className="text-[1.2vw] text-black"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 0.4 }}
									>
										info@alpinetalent.ai
									</motion.div>

									<motion.div
										className="flex justify-center space-x-6 mt-4"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 0.5 }}
									>
										{socialLinks.map((link, index) => (
											<Link
												key={index}
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												className="text-black hover:text-white transition-colors duration-300"
											>
												<i className={`fab fa-${link.icon} text-[1.5vw]`} aria-label={link.label}></i>
											</Link>
										))}
									</motion.div>
								</div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
