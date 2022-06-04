import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import "animate.css";

type LayoutComponentProps = {
  children: ReactNode;
};

const ANIM_DURATION = 0.3;

const AnimatedLayer = ({ className, delay = 0 }: any) => (
  <motion.div
    className={`h-screen absolute top-0 bottom-0 left-full right-0 ${className}`}
    initial={{ left: "100%", right: 0 }}
    animate={{ left: 0, right: "100%" }}
    transition={{
      delay,
      left: {
        type: "easeOut",
        mass: 0.35,
        stiffness: 75,
        duration: ANIM_DURATION,
      },
      right: {
        type: "easeOut",
        mass: 0.35,
        stiffness: 75,
        duration: ANIM_DURATION,
        delay: delay + 0.1,
      },
    }}
  />
);

export function LayoutComponent({ children }: LayoutComponentProps) {
  return (
    <div>
      <motion.div
        className="opacity-0 bg-background"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // exit={"hidden"}
        transition={{
          delay: ANIM_DURATION + ANIM_DURATION * 0.2 + ANIM_DURATION * 0.4,
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}>
        {children}
      </motion.div>
      <AnimatedLayer className="bg-primary" />
      <AnimatedLayer className="bg-secondary" delay={ANIM_DURATION * 0.2} />
      <AnimatedLayer className="bg-tetiary" delay={ANIM_DURATION * 0.4} />
    </div>
  );
}
