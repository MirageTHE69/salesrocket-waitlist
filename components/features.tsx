"use client";

import { FEATURES } from "@/constants";
import { motion } from "framer-motion";

export const Features = () => {
  return (
    <motion.div
      className="flex flex-col items-center mt-20 "
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-2xl font-unbounded">Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-6">
        {FEATURES.map((el, index) => (
          <div
            key={index}
            className="flex items-start gap-6 p-4 bg-gray-400/10 rounded-lg border border-gray-800 cursor-pointer"
          >
            <el.icon size={20} />
            <div className="w-full">
              <h4 className="font-unbounded text-base">{el.title}</h4>
              <p className="font-outfit font-light mt-2 text-sm">
                {el.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
