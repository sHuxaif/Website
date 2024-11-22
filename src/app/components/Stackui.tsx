import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = [
  {text:" Build Application", className:'text-3xl sm:text-6xl'},
  {text:" Design And Develop", className:'text-3xl sm:text-6xl'},
  { text: "awesome",className:"text-5xl sm:text-7xl"},
  { text: "apps",className:"text-5xl sm:text-7xl" },
  { text: "with" },
  { text: "Alhacoders.", className: "text-blue-500 dark:text-blue-500 text-5xl sm:text-7xl" },
];

const QueueWords = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500); // 1.5 seconds for each word

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex justify-center items-center text-5xl sm:text-7xl">
      <motion.div
        key={currentWordIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} // Fade out
        transition={{ duration: 0.5 }} // Fade-in and fade-out duration
        className={`text-xl ${words[currentWordIndex].className || "text-3xl"}`}
      >
        {words[currentWordIndex].text}
      </motion.div>
    </div>
  );
};

export default QueueWords;
