"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const ChatImage = () => {
  return (
    <motion.div
      className="mt-20 flex justify-center relative"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-30 h-[20rem] w-[18rem] sm:h-[25rem] sm:w-[25rem] md:h-[30rem] md:w-[30rem] lg:h-[35rem] lg:w-[35rem] xl:h-[40rem] xl:w-[40rem] rounded-full"></div>
        <Image
          src="./chat-frame.svg"
          height={420}
          width={420}
          alt="Chat Frame"
          className="relative z-10 select-none"
        />
      </div>
    </motion.div>
  );
};
