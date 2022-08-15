import React from 'react'

const Upto = () => {
    return (
        <div className="w-full h-auto py-10 md:py-20 px-5 md:px-0 flex flex-col items-center gap-y-10 font-mont bg-army-green">
            <h4 className="text-2xl md:text-4xl text-light-brown">What we've been up to</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2">
                <img 
                    src="/images/travel 1.png"
                    alt="travel 1"
                />
                <img 
                    src="/images/travel 2.png"
                    alt="travel 2"
                />
                <img 
                    src="/images/travel 1.png"
                    alt="travel 1"
                />
                <img 
                    src="/images/travel 2.png"
                    alt="travel 2"
                />
                <img 
                    src="/images/travel 3.png"
                    alt="travel 3"
                />
                <img 
                    src="/images/travel 4.png"
                    alt="travel 4"
                />
                <img 
                    src="/images/travel 3.png"
                    alt="travel 3"
                />
                <img 
                    src="/images/travel 4.png"
                    alt="travel 4"
                />
            </div>
            <button className="bg-transparent hover:bg-light-brown border-2 border-light-brown text-light-brown hover:text-army-green font-bold text-xs md:text-base uppercase px-5 py-3">View More</button>
        </div>
    )
}

export default Upto