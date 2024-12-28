"use client"
import { useEffect, useRef, useState } from 'react';

const BackgroundAudio = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [needsUserAction, setNeedsUserAction] = useState(true);

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      // Try multiple play attempts with different strategies
      const playAttempt = async () => {
        try {
          // Try to play immediately
          await audioRef.current.play();
          setNeedsUserAction(false);
        } catch (err) {
          // If immediate play fails, we'll need user interaction
          setNeedsUserAction(true);
        }
      };

      playAttempt();
      
      // Add event listeners for additional play attempts
      document.addEventListener('click', playAttempt, { once: true });
      document.addEventListener('touchstart', playAttempt, { once: true });
      document.addEventListener('keydown', playAttempt, { once: true });
    }
  };

  useEffect(() => {
    startAudio();
    
    // Cleanup event listeners
    return () => {
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
      document.removeEventListener('keydown', startAudio);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        preload="auto"
        className="hidden"
      />
      
      {needsUserAction && (
        <button
          onClick={startAudio}
          className="fixed top-4 right-4 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full text-sm transition-all duration-300 z-50 backdrop-blur-sm"
        >
          Click to Start music
        </button>
      )}
    </>
  );
};

export default BackgroundAudio;