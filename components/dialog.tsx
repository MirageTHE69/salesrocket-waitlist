"use client";

import { Dialog as HeadlessDialog, DialogPanel } from "@headlessui/react";
import React from "react";
import { motion } from "framer-motion";

interface DialogProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export const Dialog = ({ isOpen, handleClose, children }: DialogProps) => {
  return (
    <>
      <HeadlessDialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={handleClose}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto font-outfit bg-black/80">
          <motion.div
            className="flex min-h-full items-center justify-center p-4"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DialogPanel
              transition
              className="w-full max-w-lg rounded-xl p-4 bg-white text-black backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {children}
            </DialogPanel>
          </motion.div>
        </div>
      </HeadlessDialog>
    </>
  );
};
