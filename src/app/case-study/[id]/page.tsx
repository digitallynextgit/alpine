

'use client';
// import { motion } from 'framer-motion';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';
import { useParams } from 'next/navigation';

const CaseStudy = () => {
    const params = useParams();
    const numericId = params.id as string;

    // Map numeric IDs to case study keys
    const idToKeyMap: Record<string, string> = {
        "1": "financial",
        "2": "Efficient",
        "3": "Logistics",
        "4": "Pharma"
    };

    const study = caseStudies[idToKeyMap[numericId] || numericId];

    if (!study) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-[#E4B402]">
                <h1 className="text-[4vw] font-semibold text-white">Case Study Not Found</h1>
            </main>
        );
    }
    return (
        <main className=''>
            <div className='bg-[#E4B402]'>
                <div className="bg-[#E4B402]  py-[4vh] px-[6vw] flex flex-col lg:flex-row items-center lg:justify-between justify-center">
                    <div
                        className=""
                    // initial={{ opacity: 0, y: 20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-[8vw] md:text-[5vw] font-semibold text-white ">
                            {study.title}
                        </h1>
                        <h2 className="text-[6vw] md:text-[4vw] font-semibold text-white lg:mb-[8vh]">
                            {study.subtitle}
                        </h2>

                    </div>
                    <div className='border-2 border-black lg:h-72 lg:mr-6 my-6 w-64 lg:w-0' />
                    {/* Results Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-[4vh] ">
                        <div className="text-center md:text-left">
                            {study.metrics.map((metric, index) => (
                                <div key={index}>
                                    <h3 className="text-[10vw] md:text-[6vw] font-bold text-white mb-[2vh]">
                                        {metric.value}
                                    </h3>
                                    <p className="text-[4vw] md:text-[3vw] text-[#022866]">
                                        {metric.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className="text-[2.5vw] md:text-[1.2vw] text-[#022866] space-y-[2vh]">
                        <p>
                            Through our strategic talent management solutions, we helped a leading financial institution
                            significantly reduce their employee turnover rate. Our comprehensive approach included:
                        </p>
                        <ul className="list-disc pl-[2vw] space-y-[1vh]">
                            <li>Implementation of targeted retention strategies</li>
                            <li>Development of career growth programs</li>
                            <li>Enhanced employee engagement initiatives</li>
                            <li>Improved recruitment and onboarding processes</li>
                        </ul>
                    </div> */}
                </div>
                <div className=''>
                    <div className="bg-white  p-[4vh] px-[6vw]  ">
                        {/* Overview Section */}
                        <div className="space-y-[4vh] lg:py-10 mb-20">
                            <h3 className="text-[8vw] md:text-[2.5vw] font-semibold text-[#022866] mb-[2vh]">
                                Overview
                            </h3>
                            <p className="text-[2.5vw] md:text-[1.2vw] text-[#022866]">
                                {study.overview}
                            </p>
                        </div>

                        {/* Challenges Section */}
                        <div className="lg:space-y-[4vh]">
                            <h3 className="text-[8vw] md:text-[2.5vw] font-semibold text-[#022866]">
                                Challenges
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[4vh]">
                                {study.challenges.map((challenge, index) => (
                                    <div key={index} className=" p-[3vh] rounded-lg flex flex-col gap-4">
                                        <div className='w-12 h-12 bg-[#022866] rounded-lg'></div>
                                        <p className="text-[3vw] md:text-[1.4vw] text-[#022866]">
                                            {challenge.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
                <div className="bg-white lg:py-[8vh] px-[6vw]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-[8vw] md:text-[2.5vw] font-semibold text-[#022866] mb-[6vh]">
                            Advent&apos;s Solutions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vh]">
                            <div className="space-y-[2vh]">
                                {study.solutions.slice(0, Math.ceil(study.solutions.length / 2)).map((solution, index) => (
                                    <h3 key={index} className="text-[3.5vw] md:text-[1.2vw] text-gray-600">{solution}</h3>
                                ))}
                            </div>
                            <div className="space-y-[2vh]">
                                {study.solutions.slice(Math.ceil(study.solutions.length / 2)).map((solution, index) => (
                                    <h3 key={index} className="text-[3.5vw] md:text-[1.2vw] text-gray-600">{solution}</h3>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-[8vh] px-[6vw] ">
                    <div className="">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[4vh]">
                            {study.results.map((result, index) => (
                                <div key={index} className="text-center">
                                    <h3 className="text-[8vw] md:text-[4vw] font-bold text-[#022866] mb-[2vh]">
                                        {result.value}
                                    </h3>
                                    <p className="text-[3vw] md:text-[1.5vw] text-[#022866]" dangerouslySetInnerHTML={{ __html: result.label.replace('\n', '<br />') }} />
                                </div>
                            ))}
                        </div>
                        <Image src="/mount.webp" alt='mout' width={1200} height={100} className='ml-[4vw]' />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CaseStudy;