import React from 'react'

const Contact = () => {
    return (
        <div className="w-full h-auto py-10 px-5 md:px-0 flex flex-col items-center gap-y-5 bg-orange font-mont">
            <h4 className="text-2xl md:text-4xl text-light-brown">Join our mailing list</h4>
            <p className="text-xs md:text-sm text-white">Get notified only when something exciting happens!</p>
            <div className="border-2 border-light-brown">
                <input 
                    type="email"
                    placeholder="Email Address"
                    className="text-xs md:text-base font-medium bg-orange placeholder-white outline-none px-3"
                />
                <button className="px-5 py-3 bg-army-green text-white font-bold uppercase border-l-2 border-light-brown text-xs md:text-base">Sign up</button>
            </div>
        </div>
    )
}

export default Contact