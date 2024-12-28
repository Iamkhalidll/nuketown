import React from "react";

const WalletCopy = ({ handleCopy, copied }) => {
  return (
    <div className="relative px-9 my-8" id="wallet"> 
      <div className="text-center rounded-lg">
        <div className="bg-darkGray rounded-xl">
          <div className="text-neutral-100 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
            <div className="text-center mx-auto">
              <h1 className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Contract Address
              </h1>
            </div>

            <p className="lg:text-2xl break-all text-lg ">
            Brq9svC25ZJHP21VvKtkG7qrkPyCjHubRPUhVwdYpump
            </p>

            <div className="text-center">
              <button
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-red-700 to-red-900 shadow-lg shadow-transparent hover:shadow-red-900/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-green-700/50 py-3 px-6"
                onClick={handleCopy} // Use the handleCopy function passed as a prop
              >
                {copied ? (
                  <span className="flex justify-center items-center bg-gray-800 rounded-md size-7">
                    {/* Checkmark SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 size-4 transition"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                ) : (
                  <span className="flex justify-center items-center bg-gray-800 rounded-md size-7">
                    {/* Copy Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 size-4 transition"
                    >
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    </svg>
                  </span>
                )}
                {copied ? <span>copied</span> : <span>copy</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCopy;