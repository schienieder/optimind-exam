import React from 'react'

const Activities = () => {
    return (
        <div className="w-full h-auto py-10 md:py-20 px-5 md:px-0 flex flex-col items-center gap-y-10 font-mont">
            <h4 className="text-2xl md:text-4xl uppercase text-orange">activities</h4>
            <div className="flex flex-col items-center gap-y-1">
                <p className="text-dark-brown text-xs md:text-sm hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus faucibus volutpat. Vestibulum nibh augue, convallis facilisis</p>
                <p className="text-dark-brown text-xs md:text-sm hidden md:block">libero eu, vestibulum sollicitudin nulla.</p>
                <p className="text-dark-brown text-xs md:text-sm block md:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus faucibus volutpat. Vestibulum </p>
                <p className="text-dark-brown text-xs md:text-sm block md:hidden">nibh augue, convallis facilisis libero eu, vestibulum sollicitudin nulla.</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-4">
                {/* CAR */}
                <div className="flex flex-col items-center gap-y-1 md:gap-y-5">
                    <img 
                        src="/images/car.png"
                        alt="car"
                        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                    />
                    <h4 className="text-army-green text-xl md:text-3xl font-bold">250</h4>
                    <p className="text-ash-gray text-base md:text-2xl">4x4 Cars</p>
                </div>
                {/* TENT */}
                <div className="flex flex-col items-center gap-y-1 md:gap-y-5">
                    <img 
                        src="/images/tent.png"
                        alt="tent"
                        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                    />
                    <h4 className="text-army-green text-xl md:text-3xl font-bold">78</h4>
                    <p className="text-ash-gray text-base md:text-2xl">Tents pitched</p>
                </div>
                {/* WOOD */}
                <div className="flex flex-col items-center gap-y-1 md:gap-y-5">
                    <img 
                        src="/images/wood.png"
                        alt="wood"
                        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                    />
                    <h4 className="text-army-green text-xl md:text-3xl font-bold">54</h4>
                    <p className="text-ash-gray text-base md:text-2xl">Camp fires lit</p>
                </div>
                {/* BAG */}
                <div className="flex flex-col items-center gap-y-1 md:gap-y-5">
                    <img 
                        src="/images/bag.png"
                        alt="bag"
                        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                    />
                    <h4 className="text-army-green text-xl md:text-3xl font-bold">100</h4>
                    <p className="text-ash-gray text-base md:text-2xl">People camped</p>
                </div>
            </div>
        </div>
    )
}

export default Activities