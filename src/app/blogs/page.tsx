'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BlogsPage = () => {
    const blogs = [
        {
            title: 'The Future of Tech Recruitment',
            excerpt: 'Exploring emerging trends and technologies shaping the recruitment landscape in 2024 and beyond.',
            image: '/blog/blog1.webp',
            date: 'March 15, 2024'
        },
        {
            title: 'Building Inclusive Workplaces',
            excerpt: 'Strategies for creating diverse and inclusive work environments that drive innovation and growth.',
            image: '/blog/blog2.webp',
            date: 'March 10, 2024'
        },
        {
            title: 'AI in Talent Acquisition',
            excerpt: 'How artificial intelligence is revolutionizing the way companies find and hire top talent.',
            image: '/blog/blog3.webp',
            date: 'March 5, 2024'
        }
    ];

    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h1
                    className="text-4xl md:text-5xl font-normal text-[#022866] mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Latest Insights & Articles
                </motion.h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative h-48">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                                <h2 className="text-xl font-semibold text-[#022866] mb-3">{blog.title}</h2>
                                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                                <button className="text-[#022866] font-semibold hover:text-[#E4B503] transition-colors">
                                    Read More →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;