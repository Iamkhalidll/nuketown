import React from 'react';

const Hero = () => {
    return (
    

    <div className="py-3 md:py-12 lg:py-16 rounded-b-md ">
      <div className="  overflow-hidden  before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
            <div className="flex justify-center">
             
            </div>

            <div className="mt-5 text-center mx-auto">
              <h1 className="block font-bold   text-4xl md:text-5xl lg:text-6xl">
                Join the Nuketown Revolution!
              </h1>
            </div>

          </div>
          <div className="flex justify-center py-1">
            <img
              className="flex justify-center w-72 lg:w-96 rounded-xl"
              src="/nuketown logo.png"
              alt="nuketown"
            />
          </div>
        </div>
        {/* Logo cloud */}
        <div className="flex justify-center">
          <div className="-mx-6 flex justify-center gap-6 px-6 py-3 mt-3 md:gap-2 rounded-lg lg:gap-4 bg-gradient-to-br from-black/20 to-white/20">
            <a
              className="rounded-lg overflow-hidden"
              href="https://t.me/LostPepeOnSol"
            >
              <img src="/images/telegram.png" className="w-10 lg:w-16" alt="" />
            </a>

            <a
              className="rounded-lg overflow-hidden"
              href="https://x.com/lostpepeOnSol"
            >
              <img src="/images/x.png" className="w-10 lg:w-16" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;