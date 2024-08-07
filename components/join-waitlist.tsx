"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Dialog } from "./dialog";
import { DialogTitle } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import Confetti from "react-confetti";

export const JoinWaitlist = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confettiProps, setConfettiProps] = useState({});

  useEffect(() => {
    if (isConfirmed) {
      setConfettiProps({
        width: window.innerWidth,
        height: window.innerHeight,
        numberOfPieces: 400,
        gravity: 0.4,
        recycle: false,
        run: true,
        tweenDuration: 6000,
        className: "z-50",
      });
    }
  }, [isConfirmed]);

  return (
    <>
      {isConfirmed && <Confetti {...confettiProps} />}
      <Dialog isOpen={isConfirmed} handleClose={() => setIsConfirmed(false)}>
        <div className="flex items-center justify-end">
          <IoClose
            size={24}
            className="cursor-pointer"
            onClick={() => setIsConfirmed(false)}
          />
        </div>
        <div className="flex items-center justify-center text-6xl">🤩</div>

        <DialogTitle className="font-unbounded text-center mt-4 font-bold">
          YOU'RE ON OUR WAITLIST MY FRIEND!
        </DialogTitle>
        <p className="mt-2 text-sm/6 text-gray-600 text-center">
          We'll send you an email as soon as Our Product is ready. See you soon
        </p>
      </Dialog>

      <motion.div
        className="mt-10 w-full max-w-2xl mx-auto"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <form
          className="flex flex-col sm:flex-row items-center gap-4 w-full"
          method="POST"
        >
          <input
            type="text"
            className="h-10 bg-transparent border rounded-md px-3 font-unbounded text-xs font-light w-full sm:w-3/4"
            placeholder="Enter your email address"
          />
          <button
            type="submit"
            className="font-unbounded w-full text-sm bg-blue-600 hover:bg-blue-800 transition-all duration-200 rounded-md h-10 px-4 sm:w-1/4"
            onClick={(e) => {
              e.preventDefault();
              setIsConfirmed(true);
            }}
          >
            Join waitlist
          </button>
        </form>
      </motion.div>
    </>
  );
};
