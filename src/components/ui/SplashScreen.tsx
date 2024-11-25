// components/SplashScreen.js
import React from "react";
import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 grid grid-rows-4">
      {/* Kotak 1 */}
      <motion.div
        className="h-full w-full bg-gray-700"
        initial={{ x: 0 }}
        animate={{ x: "-100vw" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      {/* Kotak 2 */}
      <motion.div
        className="h-full w-full bg-gray-700"
        initial={{ x: 0 }}
        animate={{ x: "100vw" }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
      />
      {/* Kotak 3 */}
      <motion.div
        className="h-full w-full bg-gray-700"
        initial={{ x: 0 }}
        animate={{ x: "-100vw" }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
      />
      {/* Kotak 4 */}
      <motion.div
        className="h-full w-full bg-gray-700"
        initial={{ x: 0 }}
        animate={{ x: "100vw" }}
        transition={{ duration: 0.3, delay: 0.7, ease: "easeInOut" }}
      />
    </div>
  );
};

export default SplashScreen;
