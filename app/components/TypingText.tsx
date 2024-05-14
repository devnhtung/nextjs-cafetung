"use client"

import { motion } from "framer-motion";
import { textContainer, textVariant } from "@/app/utils/motion";
interface RunningTextProps {
  color?: string
  align?: string
}
export const RunningText = ({ color, align }: RunningTextProps) => {
  return (
    <motion.p
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      className={`${color && align
        ? `text-[${color}] text-[${align}]`
        : "text-center text-gray-500"
        } mt-10 font-semibold`}
    >
      {Array.from("| CafeTung").map((letter, index) => (
        <motion.span key={index} variants={textVariant}>
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
};
interface TitlePageProps {
  title?: string
  color?: string
  align?: string
}
export const TitlePage = ({ title, color, align }: TitlePageProps) => {
  return (
    <motion.h2
      variants={textVariant}
      initial="hidden"
      whileInView="show"
      className={`${color && align
        ? `text-[${color}] text-[${align}]`
        : "text-center text-gray-700"
        } text-4xl font-semibold mt-4`}
    >
      {title}
    </motion.h2>
  );
};
