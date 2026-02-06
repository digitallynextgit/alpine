'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Solutions = () => {
  const solutions = [
    {
      icon: '/Frame 1.webp',
      title: 'Admin & Clerical:',
      description: 'Efficient professionals to ensure smooth office operations.'
    },
    {
      icon: '/Frame 2.webp',
      title: 'Accounting & Finance:',
      description: 'Skilled experts managing your finances with precision.'
    },
    {
      icon: '/Frame 3.webp',
      title: 'Healthcare:',
      description: 'Qualified, compassionate healthcare professionals ensuring top-tier care.'
    },
    {
      icon: '/Frame 4.webp',
      title: 'Industrial & Professional:',
      description: 'Talented specialists to enhance your industrial operations and growth.'
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <motion.h2 
        className="text-4xl font-normal text-center mb-12 text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Solutions we Deliver
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-ease-in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-16 h-16  rounded-full mx-auto mb-10 flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={solution.icon}
                alt={solution.title}
                width={50}
                height={50}
                className=""
              />
            </motion.div>
            <h3 className="text-xl font-semibold mb-4 text-[#00205B]">{solution.title}</h3>
            <p className="text-gray-600">{solution.description}</p>
          </motion.div>
        ))}

      </div>
      <div className='lg:px-10 px-2 lg:py-20 py-10 max-w-7xl mx-auto'>
          {/* This is Stats section */}
        <Image
                src="/stats.webp"
                alt="image "
                width={1200}
                height={1000}
                className="lg:w-full w-[100vw]"
              />
        </div>
    </div>
  );
};

export default Solutions;