'use client'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import WhiteNoisePlayer from "./components/WhiteNoisePlayer";

const noiseTypes = [
  { id: "white", name: "White Noise" },
  { id: "pink", name: "Pink Noise" },
  { id: "brown", name: "Brown Noise" },
  { id: "rain", name: "Rain Sounds" },
];

export default function Home() {
  const [selectedNoise, setSelectedNoise] = useState(noiseTypes[0].id);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNoiseChange = (noiseId: string) => {
    setSelectedNoise(noiseId);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-purple-500 to-pink-500 text-white font-[family-name:var(--font-geist-sans)]"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-4xl sm:text-6xl font-bold text-center mb-8"
      >
        Tranquil Tones
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {noiseTypes.map((noise) => (
          <motion.button
            key={noise.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNoiseChange(noise.id)}
            className={`px-4 py-2 rounded-full ${selectedNoise === noise.id
                ? "bg-white text-purple-500"
                : "bg-purple-700 text-white"
              } transition-colors duration-300`}
          >
            {noise.name}
          </motion.button>
        ))}
      </div>

      <WhiteNoisePlayer noiseType={selectedNoise} isPlaying={isPlaying} onPlayPause={handlePlayPause} />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center text-lg max-w-2xl"
      >
        Immerse yourself in soothing ambient sounds. Choose your preferred noise type and let the calming waves wash over you.
      </motion.p>
    </motion.div>
  );
}
