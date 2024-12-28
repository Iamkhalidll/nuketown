import React from "react";

const Stat = () => {
return (
    <div id="tokenomics" className="py-8 ">
        <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-red-700 text-4xl l">
                Tokenomics
            </h1>
        </div>
        <div className="mt-8 gap-3 flex justify-center">
            <div className="-mx-6 flex flex-col justify-center gap-6 px-6 pt-2 md:gap-2 lg:gap-4">
                <a
                    className="text-4xl lg:text-6xl inline-flex justify-center items-center gap-x-3 text-center bg-red-900 outline shadow-[5px_5px_0_1px_black] outline-2 outline-black hover:bg-red-500 text-white font-bold rounded-lg focus:outline-none focus:from-violet-600 focus:to-blue-600 py-2 px-4"
                    href="#"
                >
                    1B Supply
                </a>
                <a
                    className="text-4xl lg:text-6xl inline-flex justify-center items-center gap-x-3 text-center bg-red-900 shadow-[5px_5px_0_1px_black]  outline outline-2 outline-black hover:bg-red-500 text-white font-bold rounded-lg focus:outline-none focus:from-violet-600 focus:to-blue-600 py-2 px-4"
                    href="#"
                >
                    0% Tax
                </a>
                <a
                    className="text-4xl lg:text-6xl inline-flex justify-center items-center gap-x-3 text-center bg-red-900 outline outline-2 outline-black shadow-[5px_5px_0_1px_black] hover:bg-red-500 text-white font-bold rounded-lg focus:outline-none focus:from-violet-600 focus:to-blue-600 py-2 px-4"
                    href="#"
                >
                    Liquidity burnt🔥
                </a>
                <a
                    className="text-4xl lg:text-6xl inline-flex justify-center items-center gap-x-3 text-center bg-red-900 outline outline-2 outline-black shadow-[5px_5px_0_1px_black] hover:bg-red-500 text-white font-bold rounded-lg focus:outline-none focus:from-violet-600 focus:to-blue-600 py-2 px-4"
                    href="#"
                >
                   Fair launch on pumpfun
                </a>
                <a
                    className="text-4xl lg:text-6xl inline-flex justify-center items-center gap-x-3 text-center bg-red-900 outline outline-2 shadow-[5px_5px_0_1px_black] outline-black hover:bg-red-500 text-white font-bold rounded-lg focus:outline-none focus:from-violet-600 focus:to-blue-600 py-2 px-4"
                    href="#"
                >
                    No team supply
                </a>
            </div>
        </div>
    </div>
);
};

export default Stat;