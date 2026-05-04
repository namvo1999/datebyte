"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SelectButtonProps {
  label: string;
  icon: ReactNode;
  isSelected: boolean;
  onClick: () => void;
  hasImage?: boolean;
}

export default function SelectButton({ label, icon, isSelected, onClick, hasImage = false }: SelectButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`p-3 rounded-xl font-semibold transition-all duration-300 flex flex-col items-center gap-3 overflow-hidden ${
        isSelected
          ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-300/50"
          : "bg-white text-pink-600 border-2 border-pink-100 hover:border-pink-300"
      }`}
    >
      <div className={hasImage ? "h-24 w-full overflow-hidden rounded-lg bg-pink-50" : "text-2xl"}>
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </motion.button>
  );
}
