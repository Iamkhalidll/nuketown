"use client";
import { useState } from 'react';
import Roadmap from "./Roadmap";

export default function About2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const slides = [
    <Roadmap key="slide1" />,
    // Slide 1
    <div key="slide2" className="grid gap-4 md:gap-8 xl:gap-20 md:items-center">
      <div className="md:col-span-2">
        <h1 className="block text-3xl font-bold text-red-700 sm:text-4xl lg:text-6xl lg:leading-tight">
          What is $Nuketown
        </h1>
        <p className="mt-3 text-lg">
          NUKETOWN 2025 ($NUKETOWN): A Community-Driven Revival
          <br />
          <br />
          $NUKETOWN pays homage to the legendary Nuketown 2025 map from
          Call of Duty: Black Ops 2, celebrating the unforgettable
          memories of 2012. From thrilling sniper duels to intense 1v1
          showdowns, it's a nostalgic tribute to the friendships,
          rivalries, and late-night gaming sessions that defined a
          generation. As we approach the real 2025, $NUKETOWN unites
          fans of the iconic map and the era it represents, preserving
          its legacy for gaming enthusiasts everywhere.
          <br />
          <br />
          However, the project's journey wasn't without challenges. Its
          original developer betrayed the trust of the community,
          rug pulling the $Nuketown token not once, but twice first by
          launching a fraudulent version, and then by creating a second
          contract under false pretenses, only to repeat the deceit on a
          live stream. This blatant disregard for the community's trust
          led to the developer abandoning the project entirely.
          <br />
          <br />
          Now, the $NUKETOWN community has risen to reclaim and revive
          the project with a renewed purpose: to honor the spirit of
          Nuketown while holding bad actors accountable. This revival
          stands as a testament to the resilience of its supporters and
          a reminder to all developers to uphold integrity in the crypto
          space. Join us in keeping the Nuketown legacy alive and
          proving that community driven projects can overcome adversity.
        </p>

      </div>
    </div>
    // Slide 2
  ];

  return (
    <div id="about" className="md:px-10 px-6 py-8">
      <h1 className="block text-3xl font-bold text-center sm:text-4xl py-3 lg:text-6xl lg:leading-tight">
        Learn about us
      </h1>
      <div className="max-w-[85rem] rounded-2xl mx-auto px-4 sm:px-6 lg:px-8 bg-darkGray text-white py-8">
        <div className="relative min-h-[600px]">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-r-lg"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          
          <button
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-l-lg"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slides */}
          <div className="overflow-hidden h-full">
            <div 
              className="transition-transform duration-500 ease-in-out flex h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {slide}
                </div>
              ))}
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
