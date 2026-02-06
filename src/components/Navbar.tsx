'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<div className="w-full fix">
			{/* Main navbar */}
			<div className=" px-[3vw] py-[1vh] bg-white">
				<div className="flex items-center justify-between max-w-7xl mx-auto">
					{/* Logo */}
					<Link href="/" className="flex items-center" onClick={handleLinkClick}>
						<Image
							src="/logo.webp"
							alt="Alpine Talent Solutions LLC"
							width={1200}
							height={100}
							priority
							className='lg:w-[10vw] w-[30vw]'
						/>
					</Link>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-[10vw] p-[2vw] text-black"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? '×' : '☰'}
					</button>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex gap-[2vw] lg:gap-[4vw] text-black">
						<Link href="/" className="hover:text-yellow-500 transition-colors text-[1.5vw] lg:text-[1.2vw]">
							Home
						</Link>
						<Link href="/solutions" className="hover:text-yellow-500 transition-colors text-[1.5vw] lg:text-[1.2vw]">
							Solutions
						</Link>
						<Link href="/careers" className="hover:text-yellow-500 transition-colors text-[1.5vw] lg:text-[1.2vw]">
							Careers
						</Link>
						<Link href="/about" className="hover:text-yellow-500 transition-colors text-[1.5vw] lg:text-[1.2vw]">
							About us
						</Link>
						{/* <Link href="/blogs" className="hover:text-yellow-500 transition-colors text-[1.5vw] lg:text-[1.2vw]">
							Blogs
						</Link> */}
						<Link href="/contact" className="hover:text-yellow-500 transition-colors text-[1.5vw] lg:text-[1.2vw]">
							Contact Us
						</Link>
					</nav>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<nav className="md:hidden flex flex-col gap-[2vh] py-[2vh] bg-white absolute left-0 right-0 px-[10vw] shadow-lg z-50 text-black justify-center items-center">
						<Link href="/" className="hover:text-yellow-500 transition-colors text-[4vw]" onClick={handleLinkClick}>
							Home
						</Link>
						<Link href="/solutions" className="hover:text-yellow-500 transition-colors text-[4vw]" onClick={handleLinkClick}>
							Solutions
						</Link>
						<Link href="/careers" className="hover:text-yellow-500 transition-colors text-[4vw]" onClick={handleLinkClick}>
							Careers
						</Link>
						<Link href="/about" className="hover:text-yellow-500 transition-colors text-[4vw]" onClick={handleLinkClick}>
							About us
						</Link>
						{/* <Link href="/blogs" className="hover:text-yellow-500 transition-colors text-[4vw]">
							Blogs
						</Link> */}
						<Link href="/contact" className="hover:text-yellow-500 transition-colors text-[4vw]" onClick={handleLinkClick}>
							Contact Us
						</Link>
					</nav>
				)}
			</div>
		</div>
	);
};

export default Navbar;