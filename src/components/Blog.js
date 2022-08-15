import React from 'react'

const Blog = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center py-10 md:py-20 px-5 md:px-0 gap-y-10 font-mont">
            <h4 className="text-2xl md:text-4xl capitalize text-orange">latest blog</h4>
            <div className="flex flex-col md:flex-row gap-x-10 gap-y-10">
                <div className="flex flex-col gap-y-1 md:gap-y-3">
                    <img 
                        src="/images/blog 1.png"
                        alt="blog 1"
                        className="w-[450px] h-[249px]"
                    />
                    <h4 className="text-army-green font-bold text-base md:text-xl">Astro Photography Camp</h4>
                    <p className="text-[#7d7d7d] text-xs">January 15, 2019</p>
                    <div className="flex flex-col">
                        <p className="text-dark-brown text-xs md:text-sm font-medium">
                            Vivamus facilisis ex sed libero rhoncus porta. Quisque et 
                        </p>
                        <p className="text-dark-brown text-xs md:text-sm font-medium">
                            interdum erat. Pellentesque scelerisque pulvinar eros cursus ornare.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 md:gap-y-3">
                    <img 
                        src="/images/blog 2.png"
                        alt="blog 2"
                        className="w-[450px] h-[249px]"
                    />
                    <h4 className="text-army-green font-bold text-base md:text-xl">Camping 101</h4>
                    <p className="text-[#7d7d7d] text-xs">January 15, 2019</p>
                    <div className="flex flex-col">
                        <p className="text-dark-brown text-xs md:text-sm font-medium">
                            Vivamus facilisis ex sed libero rhoncus porta. Quisque et 
                        </p>
                        <p className="text-dark-brown text-xs md:text-sm font-medium">
                            interdum erat. Pellentesque scelerisque pulvinar eros cursus ornare.
                        </p>
                    </div>
                </div>
            </div>
            <button className="bg-transparent hover:bg-army-green border-2 border-army-green text-army-green hover:text-white font-bold text-xs md:text-base uppercase px-5 py-3">View More</button>
        </div>
    )
}

export default Blog