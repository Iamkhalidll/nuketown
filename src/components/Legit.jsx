import React from 'react';

const Legit = () => {
    const caption = 'The $Nuketown dev that rugged us';
    return (
        <div className="h-full w-full flex flex-col lg:items-center Lg:justify-center">
            <div className="max-w-4xl px-4 space-y-8">
                <h1 className="text-3xl font-bold text-red-700 sm:text-4xl lg:text-6xl lg:leading-tight text-center">
                    {caption}
                </h1>
                <div className="flex justify-center">
                    <img 
                        src="/rugged dev.jpeg" 
                        alt="Developer"
                        className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Legit;