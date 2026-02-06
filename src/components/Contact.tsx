'use client';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className="bg-white py-16 px-8">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-8">
                    <Image
                        src="/logo.webp"
                        alt="Alpine Talent Solutions LLC"
                        width={200}
                        height={100}
                        className="mx-auto"
                        priority
                    />
                </div>

                <h2 className="text-2xl font-semibold mb-6 text-black lg:text-center text-left">Contact Us</h2>

                <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                    <Link href="/blogs" className="text-gray-600 hover:text-yellow-500 transition-colors">Blogs</Link>
                    <Link href="/privacy" className="text-gray-600 hover:text-yellow-500 transition-colors">Privacy Policy</Link>
                    <Link href="/cookies" className="text-gray-600 hover:text-yellow-500 transition-colors">Cookies Policy</Link>
                    <Link href="/disclaimer" className="text-gray-600 hover:text-yellow-500 transition-colors">Disclaimer</Link>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between gap-4  mb-8">
                    

                    <Link href="mailto:contact@limefoglobal.com" className="flex items-center space-x-2 text-black hover:text-yellow-500 transition-colors">
                        <i className="fas fa-envelope"></i>
                        <span>info@alpinetalent.com</span>
                    </Link>

                    {/* <div className="flex items-center text-left space-x-2">
                        <i className="fas fa-map-marker-alt text-black"></i>
                        <p className="text-black">12777 Jones Road, Suite 445 Houston,
                        TX 77070</p>
                    </div> */}

                    <Link href="tel:+91-9810409943" className="flex items-center space-x-2 text-black hover:text-yellow-500 transition-colors">
                        <i className="fas fa-phone"></i>
                        <span>
                            +1-281-970-3000
                        </span>
                    </Link>
                </div>

                {/* <div className="flex lg:justify-center text-left space-x-6">
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-500 transition-colors">
                        <i className="fab fa-facebook text-2xl"></i>
                    </Link>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-500 transition-colors">
                        <i className="fab fa-instagram text-2xl"></i>
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-500 transition-colors">
                        <i className="fab fa-twitter text-2xl"></i>
                    </Link>
                    <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-500 transition-colors">
                        <i className="fab fa-youtube text-2xl"></i>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default Contact;