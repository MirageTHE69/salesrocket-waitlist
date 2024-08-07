"use client";

import { Badge } from "./badge";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  title: string;
  subTitle: string;
}

export const Hero = ({ title, subTitle }: HeroProps) => {
  return (
    <motion.div
      className="w-full font-unbounded max-w-2xl flex flex-col items-center justify-center mx-auto mt-32"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Badge className="mb-6 font-outfit flex items-center" type="outline">
        <p className="mr-1">Exclusive 50% Discount for Early Adopters</p>
        <IoIosArrowForward size={14} />
      </Badge>
      <h1 className="text-center text-3xl mb-6 font-medium max-w-2xl">
        {title}
      </h1>
      <p className="font-outfit text-center font-light italic text-lg">
        {subTitle}
      </p>
    </motion.div>
  );
};
