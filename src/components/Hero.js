import React from 'react'

const Hero = () => {
    return (
        <div className="relative w-full h-screen bg-gray-100 text-white font-mont grid grid-rows-hero-layout-sm md:grid-rows-hero-layout heroLayer">
            <div className="flex justify-between items-center md:hidden w-full p-5">
                <img 
                    src="/images/logo.png"
                    alt="logo"
                    className="w-[50px] h-[50px]"
                />
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <nav className="hidden w-full md:flex justify-center items-center gap-x-5 md:gap-x-10">
                <a 
                    href="#"
                    className="text-base uppercase font-medium text-light-brown"
                >Home</a>
                <a 
                    href="#"
                    className="text-base uppercase font-medium"
                >About</a>
                <a 
                    href="#"
                    className="text-base uppercase font-medium"
                >Blog</a>
                <img 
                    src="/images/logo.png"
                    alt="logo"
                />
                <a 
                    href="#"
                    className="text-base uppercase font-medium"
                >Shop</a>
                <a 
                    href="#"
                    className="text-base uppercase font-medium"
                >Contact</a>
            </nav>
            <div className="w-full flex flex-col justify-center items-center gap-y-3 -mt-16">
                <p className="text-base md:text-3xl font-medium">Balancing life with adventure, friends</p>
                <p className="text-base md:text-3xl font-medium">and conversations over campfires</p>
            </div>
            <div className="absolute top-[50%] -left-10 -mt-16 hidden md:flex flex-col items-center gap-y-2">
                <p className="uprightText uppercase font-medium text-dark-brown tracking-wider">Follow us on</p>
                <div className="border-x border-dark-brown h-14"></div>
                <img 
                    src="/images/social media.png"
                    className="-mt-9"
                    alt="social media"
                />
            </div>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="absolute bottom-8 left-[50%] h-14 w-14 text-light-brown" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
        </div>
    )
}

export default Hero