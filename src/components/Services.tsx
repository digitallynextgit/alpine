'use client';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  return (
    <div className="bg-white">
      {/* Mobile and Tablet View */}
      <div className="md:hidden">
        <div className="bg-[#00205B] py-8">
          <div className="max-w-7xl mx-auto px-4 space-y-8">
            {/* First Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/2.webp" alt="icon1" width={25} height={25}/>
                <h2 className="text-3xl font-normal text-white">For Employers</h2>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">
                  Access top-tier talent solutions tailored to your business needs
                </h3>
                <ul className="space-y-3 text-gray-200">
                  <li>• Customized staffing solutions</li>
                  <li>• Rapid placement</li>
                  <li>• Quality assurance</li>
                  <li>• Industry expertise</li>
                </ul>
                <Link 
                  href="/about"
                  className="inline-block bg-yellow-500 text-[#00205B] px-8 py-3 rounded-3xl font-semibold hover:bg-yellow-600 transition-colors"
                >
                  Know More
                </Link>
              </div>
            </div>

            {/* Second Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/1.webp" alt="icon1" width={25} height={25}/>
                <h2 className="text-3xl font-normal text-white">For Job Seekers</h2>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">
                  Reform your career journey with opportunities that match your ambitions
                </h3>
                <ul className="space-y-3 text-gray-200">
                  <li>• Expert career guidance</li>
                  <li>• Diverse job opportunities</li>
                  <li>• Comprehensive benefits</li>
                  <li>• Professional growth</li>
                </ul>
                <Link 
                  href="/about"
                  className="inline-block bg-yellow-500 text-[#00205B] px-8 py-3 rounded-3xl font-semibold hover:bg-yellow-600 transition-colors"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="bg-[#00205B] py-8">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div className="flex items-center gap-3">
              <Image src="/2.webp" alt="icon1" width={25} height={25}/>
              <h2 className="text-3xl font-normal text-white">For Employers</h2>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/1.webp" alt="icon1" width={25} height={25}/>
              <h2 className="text-3xl font-normal text-white">For Job Seekers</h2>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#00205B]">
                Access top-tier talent solutions tailored to your business needs
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Customized staffing solutions</li>
                <li>• Rapid placement</li>
                <li>• Quality assurance</li>
                <li>• Industry expertise</li>
              </ul>
              <Link 
                href="/about"
                className="inline-block bg-yellow-500 text-[#00205B] px-8 py-3 rounded-3xl font-semibold hover:bg-yellow-600 transition-colors"
              >
                Know More
              </Link>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#00205B]">
                Reform your career journey with opportunities that match your ambitions
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Expert career guidance</li>
                <li>• Diverse job opportunities</li>
                <li>• Comprehensive benefits</li>
                <li>• Professional growth</li>
              </ul>
              <Link 
                href="/about"
                className="inline-block bg-yellow-500 text-[#00205B] px-8 py-3 rounded-3xl font-semibold hover:bg-yellow-600 transition-colors"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;