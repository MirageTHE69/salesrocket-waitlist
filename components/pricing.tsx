"use client";

import { PLANS } from "@/constants";
import { motion } from "framer-motion";
import { Badge } from "./badge";

export const Pricing = () => {
  return (
    <motion.main
      className="mt-10 flex flex-col items-center"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-2xl font-unbounded">Plans & Billing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 w-full">
        {PLANS.map((el, index) => (
          <div
            key={index}
            className="rounded-lg p-4 border border-gray-800 bg-gray-600/10 space-y-6"
          >
            <Badge type="default">{el.type}</Badge>
            <p className="font-unbounded font-semibold text-2xl">
              ${el.price}{" "}
              <span className="font-outfit font-light text-base">/month</span>
            </p>
            <ul className="font-outfit font-light space-y-4">
              {el.features.map((currElem, cIdx) => (
                <li key={cIdx}>
                  ✅ <span className="ml-1">{currElem}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.main>
  );
};
