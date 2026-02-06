'use client';
import { motion } from 'framer-motion';
// import ClientSuccess from './ClientSuccess';

const AlpineDifference = () => {
    return (
        <>
            <div className="bg-[#E4B503] min-h-[80vh] py-[8vh] lg:mt-[-8.5vw] mt-[-20vw]">
                <div className="w-[80vw] max-w-[1200px] mx-auto">
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-[6vh] flex flex-col md:flex-row gap-[4vw] justify-between items-start"
                >
                    <div className='flex flex-col max-w-[100vw] md:max-w-[35vw]'>
                        <h2 className="text-[7vw] md:text-[3vw] font-normal text-[#022866]">The Alpine Difference</h2>
                        <h2 className="text-[10vw] md:text-[4vw] font-normal text-white lg:mb-[3vh]">Our Approach</h2>
                    </div>
                    <p className="text-[#022866] text-[4.5vw] md:text-[1.35vw] max-w-[100vw] md:max-w-[30vw]">
                        We believe that great hiring is both an art and a science. While our technology handles the data-driven matching, our experienced recruiters add the human touch that turns good matches into perfect fits.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <h3 className="text-[10vw] md:text-[4vw] font-normal text-white text-center lg:mb-[1vh]">Our Values</h3>

                    <div className="relative w-[90vw] md:w-[60vw] mx-auto min-h-[60vh]">
                        {/* Triangle shapes */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-[70vw] md:w-[35vw] h-[45vh] hidden lg:block">
                                {/* Glow effect triangle */}
                                <motion.div
                                    className="absolute border-[2px] border-white w-[60vw] md:w-[35vw] lg:h-[35vh] h-[25vh]"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    style={{
                                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                        background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0) 60%)',
                                        filter: 'blur(25px)',
                                        border:'white'
                                    }}
                                />
                                <motion.div
                                    className="absolute border-[2px] border-white w-[60vw] md:w-[35vw] lg:h-[35vh] h-[25vh] lg:mt-[25vh] mt-[25vh]"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    style={{
                                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                        background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0) 60%)',
                                        filter: 'blur(25px)'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Values content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vh] md:gap-x-[10vw] md:gap-y-[12vh] relative z-10 px-[3vw] md:px-0 pt-[15vh]">
                            <motion.div
                                className="text-center md:text-right"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h4 className="text-[8vw] md:text-[2.5vw] font-normal text-white mb-[1vh]">Innovation:</h4>
                                <p className="text-[4vw] md:text-[1.25vw] text-[#022866]">Constantly evolving our methods to stay ahead of industry trends</p>
                            </motion.div>

                            <motion.div
                                className="text-center md:text-left"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <h4 className="text-[8vw] md:text-[2.5vw] font-normal text-white mb-[1vh]">Integrity:</h4>
                                <p className="text-[4vw] md:text-[1.25vw] text-[#022866]">Building trust through transparency and honest partnerships</p>
                            </motion.div>

                            <motion.div
                                className="text-center md:text-right"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <h4 className="text-[8vw] md:text-[2.5vw] font-normal text-white mb-[1vh]">Impact:</h4>
                                <p className="text-[4vw] md:text-[1.25vw] text-[#022866]">Measuring our success through the growth of our clients and candidates</p>
                            </motion.div>

                            <motion.div
                                className="text-center md:text-left"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <h4 className="text-[8vw] md:text-[2.5vw] font-normal text-white mb-[1vh]">Inclusion:</h4>
                                <p className="text-[4vw] md:text-[1.25vw] text-[#022866]">Championing diverse talent pools that bring fresh perspectives</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
                </div>
            </div>
            {/* <ClientSuccess /> */}
        </>
    );
};

export default AlpineDifference;
